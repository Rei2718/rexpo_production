import { Container } from '@/components/ui/container';
import { StatusMessage } from '@/components/ui/status-message';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import { Canvas, ImageSVG, useSVG } from "@shopify/react-native-skia";
import { StyleSheet, useWindowDimensions } from 'react-native';
import { GestureDetector } from "react-native-gesture-handler";
import { withTiming } from 'react-native-reanimated';
import { useMapGestures } from "../hooks/use-map-gestures";
import { useMapUserLocation } from '../hooks/use-map-user-location';
import { convertLatLngToXY } from "../utils";
import { LocationPermissionModal } from './location-permission-modal';
import { MapControls } from './map-controls';
import { MapMarker } from "./map-marker";
import { MapUserLocation } from './map-user-location';

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

    const {
        userLocation,
        checkLocationPermission,
        showPermissionModal,
        setShowPermissionModal
    } = useMapUserLocation();

    const handleCurrentLocationPress = async () => {
        const status = await checkLocationPermission();
        if (status === 'granted' && userLocation) {
            const { x: xPct, y: yPct } = convertLatLngToXY(userLocation.coords.latitude, userLocation.coords.longitude);
            const pixelX = (xPct / 100) * svgWidth;
            const pixelY = (yPct / 100) * svgHeight;

            const targetX = (width / 2) - (pixelX * scale.value);
            const targetY = (height / 2) - (pixelY * scale.value);

            translateX.value = withTiming(targetX);
            translateY.value = withTiming(targetY);
        }
    };

    if (!svg) {
        return <StatusMessage status="loading" />;
    }

    // Helper to calculate pixel coordinates
    const getPixelCoords = (lat: number, lng: number) => {
        const { x: xPct, y: yPct } = convertLatLngToXY(lat, lng);
        return {
            x: (xPct / 100) * svgWidth,
            y: (yPct / 100) * svgHeight
        };
    };

    const userLocationCoords = userLocation ? getPixelCoords(userLocation.coords.latitude, userLocation.coords.longitude) : null;

    return (
        <Container flex={1} backgroundColor="tint">
            <GestureDetector gesture={gesture}>
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
                    </Canvas>

                    {venues.map((venue) => {
                        if (!venue.map_latitude || !venue.map_longitude) return null;
                        const { x, y } = getPixelCoords(venue.map_latitude, venue.map_longitude);

                        return (
                            <MapMarker
                                key={venue.venue_public_id}
                                x={x}
                                y={y}
                                scale={scale}
                                translateX={translateX}
                                translateY={translateY}
                                onPress={() => onMarkerPress?.(venue)}
                            />
                        );
                    })}

                    {/* User Location Marker */}
                    {userLocationCoords && (
                        <MapUserLocation
                            x={userLocationCoords.x}
                            y={userLocationCoords.y}
                            scale={scale}
                            translateX={translateX}
                            translateY={translateY}
                        />
                    )}
                </Container>
            </GestureDetector>

            <MapControls onPress={handleCurrentLocationPress} />

            <LocationPermissionModal
                visible={showPermissionModal}
                onClose={() => setShowPermissionModal(false)}
            />
        </Container>
    );
}