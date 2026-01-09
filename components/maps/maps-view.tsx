import { Canvas, ImageSVG, useSVG } from "@shopify/react-native-skia";
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { GestureDetector } from "react-native-gesture-handler";

import { Container } from '@/components/ui/container';
import { StatusMessage } from '@/components/ui/status-message';
import { MapMarker } from "./maps-marker";
import { useMapGestures } from "./use-map-gestures";
import { convertLatLngToXY } from "./utils";

import { DisplayVenue, Verified } from '@/supabase/api/types';

type Props = {
    venues?: Verified<DisplayVenue>[];
    onMarkerPress?: (venue: Verified<DisplayVenue>) => void;
};

export default function MapsView({ venues = [], onMarkerPress }: Props) {
    const { width, height } = useWindowDimensions();
    const svg = useSVG(require('@/assets/map/maps.dark.svg'));

    const svgWidth = svg ? svg.width() : width;
    const svgHeight = svg ? svg.height() : height;

    const { gesture, transform, scale, translateX, translateY } = useMapGestures({
        containerDimensions: { width, height },
        contentDimensions: { width: svgWidth, height: svgHeight }
    });

    if (!svg) {
        return <StatusMessage status="loading" />;
    }

    return (
        <Container flex={1} backgroundColor="tint">
            <GestureDetector gesture={gesture}>
                <View style={styles.container}>

                    {/* Layer 1: Skia Canvas (GPU rendering) */}
                    <Canvas style={StyleSheet.absoluteFill}>
                        <ImageSVG
                            svg={svg}
                            x={0}
                            y={0}
                            width={svgWidth}
                            height={svgHeight}
                            transform={transform}
                        />
                    </Canvas>

                    {/* Layer 2: Markers (Absolute positioning) */}
                    {venues.map((venue) => {
                        if (!venue.map_latitude || !venue.map_longitude) return null;

                        // 1. Lat/Lng -> % coordinates ({ x: 50, y: 50 } etc.)
                        const { x: xPct, y: yPct } = convertLatLngToXY(venue.map_latitude, venue.map_longitude);

                        // 2. % coordinates -> Pixel absolute coordinates ({ x: 1000, y: 1000 } etc.)
                        const pixelX = (xPct / 100) * svgWidth;
                        const pixelY = (yPct / 100) * svgHeight;

                        return (
                            <MapMarker
                                key={venue.venue_public_id}
                                x={pixelX}
                                y={pixelY}
                                scale={scale}
                                translateX={translateX}
                                translateY={translateY}
                                onPress={() => onMarkerPress?.(venue)}
                            />
                        );
                    })}
                </View>
            </GestureDetector>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
    }
});