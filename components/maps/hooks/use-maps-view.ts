import { IconName } from '@/assets/msIcon';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useThemeStore } from '@/stores/theme-store';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import { Skia, useSVG } from "@shopify/react-native-skia";
import { Asset } from 'expo-asset';
import { useEffect, useMemo, useState } from 'react';
import { useColorScheme, useWindowDimensions } from 'react-native';
import { runOnJS, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { LOCATION_PIN_PATH, MARKER_SIZE, PIN_OFFSET_Y, PIN_VIEW_BOX_SIZE } from '../components/map-shapes';
import { useMapFloor } from './use-map-floor';
import { useMapGestures } from "./use-map-gestures";
import { useMapInteraction } from './use-map-interaction';
import { calculateVenuePositions, useMapMarkers } from './use-map-markers';
import { useMapUserLocation } from './use-map-user-location';



type UseMapsViewProps = {
    venues: Verified<DisplayVenue>[];
    onMarkerPress?: (venue: Verified<DisplayVenue>) => void;
    onMapPress?: () => void;
};

export function useMapsView({ venues, onMarkerPress, onMapPress }: UseMapsViewProps) {
    const themeColor = useThemeColor();
    const { width, height } = useWindowDimensions();
    const systemColorScheme = useColorScheme() ?? 'light';
    const { themeMode } = useThemeStore();
    const colorScheme = themeMode === 'system' ? systemColorScheme : themeMode;

    const { currentFloor, handleFloorToggle } = useMapFloor();

    const [renderFloor, setRenderFloor] = useState(currentFloor);
    const fadeProgress = useSharedValue(1);

    useEffect(() => {
        if (renderFloor !== currentFloor) {
            // 1. Fade Out
            fadeProgress.value = withTiming(0, { duration: 400 }, (finished) => {
                if (finished) {
                    // 2. Wait (Blank) & Switch Floor
                    runOnJS(setRenderFloor)(currentFloor);
                }
            });
        }
    }, [currentFloor]);

    // When renderFloor updates (at opacity 0), wait then Fade In
    useEffect(() => {
        if (fadeProgress.value === 0) {
            // 3. Wait (Blank) then Fade In
            const timeout = setTimeout(() => {
                fadeProgress.value = withTiming(1, { duration: 400 });
            }, 400);
            return () => clearTimeout(timeout);
        }
    }, [renderFloor]);

    const [svgUri, setSvgUri] = useState<string | null>(null);

    useEffect(() => {
        const loadAsset = async () => {
            let module;
            if (colorScheme === 'dark') {
                module = renderFloor === 1
                    ? require('@/assets/map/maps.dark.floor1.svg')
                    : require('@/assets/map/maps.dark.floor2.svg');
            } else {
                module = renderFloor === 1
                    ? require('@/assets/map/maps.light.floor1.svg')
                    : require('@/assets/map/maps.light.floor2.svg');
            }

            const asset = Asset.fromModule(module);
            await asset.downloadAsync();
            setSvgUri(asset.localUri || asset.uri);
        };

        loadAsset();
    }, [colorScheme, renderFloor]);

    const svg = useSVG(svgUri);

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


    const processedVenues = useMemo(() => {
        if (!svg) return [];
        return calculateVenuePositions(venues, svg.width(), svg.height(), renderFloor);
    }, [venues, svg, renderFloor]);

    // Keep useMapMarkers for getPixelCoords if needed, or instantiate useMapCoordinates directly if needed for UserLocation
    // But UserLocation uses getPixelCoords which depends on avgWidth/Height.
    // Let's use the helper hook but with current dimensions
    const { getPixelCoords } = useMapMarkers({
        venues: [], // We don't need venues here
        svgWidth,
        svgHeight,
        currentFloor
    });

    const { composedGesture } = useMapInteraction({
        scale,
        translateX,
        translateY,
        processedVenues,
        onMarkerPress,
        onMapPress,
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
        fadeProgress,
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
        currentLocationIcon: (status === 'granted' ? 'myLocation' : 'locationDisabled') as IconName,
        currentFloor,
        handleFloorToggle,
    };
}