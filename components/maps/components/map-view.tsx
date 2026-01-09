import { Container } from '@/components/ui/container';
import { StatusMessage } from '@/components/ui/status-message';
import { useThemeColor } from '@/hooks/use-theme-color';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import { Canvas, Group, ImageSVG, Skia, useSVG } from "@shopify/react-native-skia";
import { useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS, useDerivedValue, withTiming } from 'react-native-reanimated';
import { useMapCoordinates } from "../hooks/use-map-coordinates";
import { useMapGestures } from "../hooks/use-map-gestures";
import { useMapUserLocation } from '../hooks/use-map-user-location';
import { LocationPermissionModal } from './location-permission-modal';
import { MapControls } from './map-controls';
import { MapMarker } from './map-marker';
import { HIT_RADIUS, LOCATION_PIN_PATH, MARKER_ANCHOR, MARKER_SIZE } from './map-shapes';
import { UserLocationMarker } from './user-location-marker';

type Props = {
    venues?: Verified<DisplayVenue>[];
    onMarkerPress?: (venue: Verified<DisplayVenue>) => void;
};

export default function MapsView({ venues = [], onMarkerPress }: Props) {
    const themeColor = useThemeColor();
    const { width, height } = useWindowDimensions();
    const svg = useSVG(require('@/assets/map/maps.dark.svg'));

    const markerPath = useMemo(() => {
        const path = Skia.Path.MakeFromSVGString(LOCATION_PIN_PATH);
        if (path) return path;
        // Fallback
        return Skia.Path.MakeFromSVGString("M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z")!;
    }, []);

    const svgWidth = svg ? svg.width() : width;
    const svgHeight = svg ? svg.height() : height;

    const { gesture: mapGestures, transform, scale, translateX, translateY } = useMapGestures({
        containerDimensions: { width, height },
        contentDimensions: { width: svgWidth, height: svgHeight }
    });

    const { getPixelCoords } = useMapCoordinates({ svgWidth, svgHeight });

    const {
        userLocation,
        checkLocationPermission,
        showPermissionModal,
        setShowPermissionModal
    } = useMapUserLocation();

    const inverseScale = useDerivedValue(() => 1 / scale.value);

    const handleCurrentLocationPress = async () => {
        const status = await checkLocationPermission();
        if (status === 'granted' && userLocation) {
            const { x, y } = getPixelCoords(userLocation.coords.latitude, userLocation.coords.longitude);

            const targetX = (width / 2) - (x * scale.value);
            const targetY = (height / 2) - (y * scale.value);

            translateX.value = withTiming(targetX);
            translateY.value = withTiming(targetY);
        }
    };

    const handleTap = (x: number, y: number) => {
        const currentScale = scale.value;
        const tx = translateX.value;
        const ty = translateY.value;

        let closestVenue: Verified<DisplayVenue> | null = null;
        let minDist = Infinity;

        for (const venue of venues) {
            if (!venue.map_latitude || !venue.map_longitude) continue;

            const { x: vx, y: vy } = getPixelCoords(venue.map_latitude, venue.map_longitude);

            const screenX = vx * currentScale + tx;
            const screenY = vy * currentScale + ty;

            // Calculate the visual center of the marker for hit testing
            // Using unified constants from map-shapes
            const centerX = screenX - MARKER_ANCHOR.x * currentScale + (MARKER_SIZE / 2) * currentScale;
            // screenX/Y above are the Map Point coordinates on screen.
            const visualCenterX = screenX - MARKER_ANCHOR.x + (MARKER_SIZE / 2);
            const visualCenterY = screenY - MARKER_ANCHOR.y + (MARKER_SIZE / 2);

            const dist = Math.hypot(x - visualCenterX, y - visualCenterY);

            if (dist < HIT_RADIUS && dist < minDist) {
                minDist = dist;
                closestVenue = venue;
            }
        }

        if (closestVenue) {
            onMarkerPress?.(closestVenue);
        }
    };

    const tapGesture = Gesture.Tap()
        .maxDistance(10)
        .onEnd((e) => {
            runOnJS(handleTap)(e.x, e.y);
        });

    const composedGesture = Gesture.Simultaneous(mapGestures, tapGesture);

    if (!svg || !markerPath) {
        return <StatusMessage status="loading" />;
    }

    const userLocationCoords = userLocation ? getPixelCoords(userLocation.coords.latitude, userLocation.coords.longitude) : null;

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
                            {venues.map((venue) => {
                                if (!venue.map_latitude || !venue.map_longitude) return null;
                                const { x, y } = getPixelCoords(venue.map_latitude, venue.map_longitude);

                                return (
                                    <MapMarker
                                        key={venue.venue_public_id}
                                        x={x}
                                        y={y}
                                        inverseScale={inverseScale}
                                        path={markerPath}
                                        color={themeColor.tint}
                                    />
                                );
                            })}

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

            <LocationPermissionModal
                visible={showPermissionModal}
                onClose={() => setShowPermissionModal(false)}
            />
        </Container>
    );
}