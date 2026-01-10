import { Container } from '@/components/ui/container';
import { StatusMessage } from '@/components/ui/status-message';
import { useThemeColor } from '@/hooks/use-theme-color';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import { Canvas, Group, ImageSVG, Skia, useSVG } from "@shopify/react-native-skia";
import { useMemo } from 'react';
import { Alert, StyleSheet, useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS, useDerivedValue, withTiming } from 'react-native-reanimated';
import { useMapCoordinates } from "../hooks/use-map-coordinates";
import { useMapGestures } from "../hooks/use-map-gestures";
import { useMapUserLocation } from '../hooks/use-map-user-location';
import { MapControls } from './map-controls';
import { MapMarker } from './map-marker';
import { HIT_RADIUS, LOCATION_PIN_PATH, MARKER_ANCHOR, MARKER_SIZE, PIN_OFFSET_Y, PIN_VIEW_BOX_SIZE } from './map-shapes';
import { UserLocationMarker } from './user-location-marker';

type Props = {
    venues?: Verified<DisplayVenue>[];
    selectedVenueId: string | null;
    onMarkerPress?: (venue: Verified<DisplayVenue>) => void;
};

export default function MapsView({ venues = [], selectedVenueId, onMarkerPress }: Props) {
    const themeColor = useThemeColor();
    const { width, height } = useWindowDimensions();
    const svg = useSVG(require('@/assets/map/maps.dark.svg'));

    const markerPath = useMemo(() => {
        const path = Skia.Path.MakeFromSVGString(LOCATION_PIN_PATH);

        if (path) {
            // Transform path to fit MARKER_SIZE (32px)
            // We need to shift the negative Y (0 to -960) to positive (0 to 960) then scale.
            // Matrix M = Scale * Translate. In Skia JS (post-concat), this is achieved by scale() then translate().
            const matrix = Skia.Matrix();
            const scale = MARKER_SIZE / PIN_VIEW_BOX_SIZE;
            matrix.scale(scale, scale);
            matrix.translate(0, PIN_OFFSET_Y);
            path.transform(matrix);
            return path;
        }

        // Fallback
        const fallback = Skia.Path.MakeFromSVGString("M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z")!;
        const matrix = Skia.Matrix();
        const scale = MARKER_SIZE / 24; // Standard Material Icon 24x24
        matrix.scale(scale, scale);
        fallback.transform(matrix);
        return fallback;
    }, []);

    const svgWidth = svg ? svg.width() : width;
    const svgHeight = svg ? svg.height() : height;

    const { gesture: mapGestures, transform, scale, translateX, translateY } = useMapGestures({
        containerDimensions: { width, height },
        contentDimensions: { width: svgWidth, height: svgHeight }
    });

    const { getPixelCoords } = useMapCoordinates({ svgWidth, svgHeight });

    // Pre-calculate coordinates for all venues
    // This memoization ensures conversion only happens when venues or map dimensions change
    const processedVenues = useMemo(() => {
        return venues
            .filter(v => v.map_latitude && v.map_longitude)
            .map(venue => {
                const { x, y } = getPixelCoords(venue.map_latitude!, venue.map_longitude!);
                return { ...venue, x, y };
            });
    }, [venues, getPixelCoords]);

    const {
        userLocation,
        isOutOfRange,
    } = useMapUserLocation();

    const userLocationCoords = useMemo(() => {
        // Only calculate if user is within valid range to avoid drawing it in weird places
        // or leading user to believe they are on the map when they are far away.
        if (!userLocation || isOutOfRange) return null;
        return getPixelCoords(userLocation.coords.latitude, userLocation.coords.longitude);
    }, [userLocation, isOutOfRange, getPixelCoords]);

    const inverseScale = useDerivedValue(() => 1 / scale.value);

    const handleCurrentLocationPress = async () => {
        // If user location is not yet available (permission denied or loading)
        if (!userLocation) {
            Alert.alert("位置を確認できません", "位置情報の取得が許可されていないか、現在地を取得中です。");
            return;
        }

        // If out of range, show alert and do not move map
        if (isOutOfRange) {
            Alert.alert("範囲外です", "現在地がマップの表示範囲外(400m以上)にあるため、移動できません。");
            return;
        }

        // In range, move map to user location
        const { x, y } = getPixelCoords(userLocation.coords.latitude, userLocation.coords.longitude);

        const targetX = (width / 2) - (x * scale.value);
        const targetY = (height / 2) - (y * scale.value);

        translateX.value = withTiming(targetX);
        translateY.value = withTiming(targetY);
    };

    const handleTap = (x: number, y: number) => {
        const currentScale = scale.value;
        const tx = translateX.value;
        const ty = translateY.value;

        let closestVenue: Verified<DisplayVenue> | null = null;
        let minDist = Infinity;

        // Use pre-calculated coordinates for hit testing O(1) per item
        for (const venue of processedVenues) {
            const screenX = venue.x * currentScale + tx;
            const screenY = venue.y * currentScale + ty;

            // Calculate the visual center of the marker for hit testing
            // Using unified constants from map-shapes
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
        </Container>
    );
}