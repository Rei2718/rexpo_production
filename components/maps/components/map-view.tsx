import { Container } from '@/components/ui/container';
import { FlashMessage } from '@/components/ui/flash-message';
import { StatusMessage } from '@/components/ui/status-message';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import { Canvas, Group, ImageSVG } from "@shopify/react-native-skia";
import { StyleSheet } from 'react-native';
import { GestureDetector } from "react-native-gesture-handler";
import { useMapsView } from "../hooks/use-maps-view";
import { MapControls } from './map-controls';
import { MapMarker } from './map-marker';
import { UserLocationMarker } from './user-location-marker';

type Props = {
    venues?: Verified<DisplayVenue>[];
    selectedVenueId: string | null;
    onMarkerPress?: (venue: Verified<DisplayVenue>) => void;
};

export default function MapsView({ venues = [], selectedVenueId, onMarkerPress }: Props) {
    const {
        themeColor,
        svg,
        svgWidth,
        svgHeight,
        transform,
        markerPath,
        processedVenues,
        userLocationCoords,
        inverseScale,
        composedGesture,
        handleCurrentLocationPress,
        flashMessage,
        setFlashMessage,
    } = useMapsView({ venues, onMarkerPress });

    if (!svg || !markerPath) {
        return <StatusMessage status="loading" />;
    }

    return (
        <Container flex={1} backgroundColor="tint">
            <GestureDetector gesture={composedGesture}>
                <Container flex={1} style={{ overflow: 'hidden' }}>
                    <Canvas style={StyleSheet.absoluteFill}>

                        <ImageSVG
                            svg={svg}
                            x={0}
                            y={0}
                            width={svgWidth}
                            height={svgHeight}
                            transform={transform}
                        />

                        <Group transform={transform}>
                            {processedVenues.map((venue) => (
                                <MapMarker
                                    key={venue.venue_public_id}
                                    x={venue.x}
                                    y={venue.y}
                                    inverseScale={inverseScale}
                                    path={markerPath}
                                    color={themeColor.tint}
                                    isSelected={venue.venue_public_id === selectedVenueId}
                                />
                            ))}

                            {userLocationCoords && (
                                <UserLocationMarker
                                    x={userLocationCoords.x}
                                    y={userLocationCoords.y}
                                    inverseScale={inverseScale}
                                    color={themeColor.tint}
                                    strokeColor={themeColor.natural_500}
                                />
                            )}
                        </Group>
                    </Canvas>
                </Container>
            </GestureDetector>

            <MapControls onPress={handleCurrentLocationPress} />

            <FlashMessage
                message={flashMessage}
                onDismiss={() => setFlashMessage(null)}
            />
        </Container>
    );
}