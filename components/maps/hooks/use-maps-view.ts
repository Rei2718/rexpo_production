import { useThemeColor } from '@/hooks/use-theme-color';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import { Skia, useSVG } from "@shopify/react-native-skia";
import { useMemo, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { useDerivedValue, withTiming } from 'react-native-reanimated';
import { LOCATION_PIN_PATH, MARKER_SIZE, PIN_OFFSET_Y, PIN_VIEW_BOX_SIZE } from '../components/map-shapes';
import { useMapGestures } from "./use-map-gestures";
import { useMapInteraction } from './use-map-interaction';
import { useMapMarkers } from './use-map-markers';
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

    const { processedVenues, getPixelCoords } = useMapMarkers({
        venues,
        svgWidth,
        svgHeight
    });

    const { composedGesture } = useMapInteraction({
        scale,
        translateX,
        translateY,
        processedVenues,
        onMarkerPress,
        mapGestures
    });

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
