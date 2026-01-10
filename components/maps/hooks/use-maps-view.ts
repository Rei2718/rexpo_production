import { useThemeColor } from '@/hooks/use-theme-color';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import { Skia, useSVG } from "@shopify/react-native-skia";
import { useMemo, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { Gesture } from "react-native-gesture-handler";
import { runOnJS, useDerivedValue, withTiming } from 'react-native-reanimated';
import { HIT_RADIUS, LOCATION_PIN_PATH, MARKER_ANCHOR, MARKER_SIZE, PIN_OFFSET_Y, PIN_VIEW_BOX_SIZE } from '../components/map-shapes';
import { useMapCoordinates } from "./use-map-coordinates";
import { useMapGestures } from "./use-map-gestures";
import { useMapUserLocation } from './use-map-user-location';

type UseMapsViewProps = {
    venues: Verified<DisplayVenue>[];
    onMarkerPress?: (venue: Verified<DisplayVenue>) => void;
};

export function useMapsView({ venues, onMarkerPress }: UseMapsViewProps) {
    const themeColor = useThemeColor();
    const { width, height } = useWindowDimensions();
    const svg = useSVG(require('@/assets/map/maps.dark.svg'));

    const markerPath = useMemo(() => {
        const path = Skia.Path.MakeFromSVGString(LOCATION_PIN_PATH);

        if (path) {
            const matrix = Skia.Matrix();
            const scale = MARKER_SIZE / PIN_VIEW_BOX_SIZE;
            matrix.scale(scale, scale);
            matrix.translate(0, PIN_OFFSET_Y);
            path.transform(matrix);
            return path;
        }

        const fallback = Skia.Path.MakeFromSVGString("M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z")!;
        const matrix = Skia.Matrix();
        const scale = MARKER_SIZE / 24;
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
        status,
        checkLocationPermission,
    } = useMapUserLocation();

    const userLocationCoords = useMemo(() => {
        if (!userLocation || isOutOfRange) return null;
        return getPixelCoords(userLocation.coords.latitude, userLocation.coords.longitude);
    }, [userLocation, isOutOfRange, getPixelCoords]);

    const inverseScale = useDerivedValue(() => 1 / scale.value);

    const [flashMessage, setFlashMessage] = useState<string | null>(null);

    const handleCurrentLocationPress = async () => {
        if (status !== 'granted') {
            const newStatus = await checkLocationPermission();
            if (newStatus !== 'granted') {
                setFlashMessage("位置情報の取得が許可されていません。設定アプリから許可してください。");
                return;
            }
        }

        if (!userLocation) {
            setFlashMessage("現在地を取得中です...");
            return;
        }

        if (isOutOfRange) {
            setFlashMessage("現在地がマップの表示範囲外(400m以上)にあるため、移動できません。");
            return;
        }

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

        for (const processedVenue of processedVenues) {
            const screenX = processedVenue.x * currentScale + tx;
            const screenY = processedVenue.y * currentScale + ty;

            const visualCenterX = screenX - MARKER_ANCHOR.x + (MARKER_SIZE / 2);
            const visualCenterY = screenY - MARKER_ANCHOR.y + (MARKER_SIZE / 2);

            const dist = Math.hypot(x - visualCenterX, y - visualCenterY);

            if (dist < HIT_RADIUS && dist < minDist) {
                minDist = dist;
                closestVenue = processedVenue;
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

    return {
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
    };
}
