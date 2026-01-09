import { Container } from '@/components/ui/container';
import { StatusMessage } from '@/components/ui/status-message';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import { Canvas, Circle, Group, ImageSVG, Path, Skia, SkPath, useSVG } from "@shopify/react-native-skia";
import { useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { DerivedValue, runOnJS, useDerivedValue, withTiming } from 'react-native-reanimated';
import { useMapGestures } from "../hooks/use-map-gestures";
import { useMapUserLocation } from '../hooks/use-map-user-location';
import { convertLatLngToXY } from "../utils";
import { LocationPermissionModal } from './location-permission-modal';
import { MapControls } from './map-controls';
import { LOCATION_PIN_PATH } from './map-shapes';

type Props = {
    venues?: Verified<DisplayVenue>[];
    onMarkerPress?: (venue: Verified<DisplayVenue>) => void;
};

const HIT_RADIUS = 44;

type MarkerProps = {
    x: number;
    y: number;
    inverseScale: DerivedValue<number>;
    path: SkPath;
    color: string;
};

const Marker = ({ x, y, inverseScale, path, color }: MarkerProps) => {
    const transform = useDerivedValue(() => {
        return [
            { translateX: x },
            { translateY: y },
            { scale: inverseScale.value },
            { translateX: -12 },
            { translateY: -24 }
        ];
    }, [x, y, inverseScale]);

    return (
        <Group transform={transform}>
            <Path path={path} color={color} />
        </Group>
    );
};

type UserLocationProps = {
    x: number;
    y: number;
    inverseScale: DerivedValue<number>;
    color: string;
    strokeColor: string;
};

const UserLocationMarker = ({ x, y, inverseScale, color, strokeColor }: UserLocationProps) => {
    const transform = useDerivedValue(() => {
        return [
            { translateX: x },
            { translateY: y },
            { scale: inverseScale.value }
        ];
    }, [x, y, inverseScale]);

    return (
        <Group transform={transform}>
            <Circle cx={0} cy={0} r={Spacing.s24 / 2} color={color} opacity={0.3} />
            <Circle cx={0} cy={0} r={Spacing.s12 / 2} color={color} />
            <Circle
                cx={0}
                cy={0}
                r={Spacing.s12 / 2}
                color={strokeColor}
                style="stroke"
                strokeWidth={1}
            />
        </Group>
    );
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

    const {
        userLocation,
        checkLocationPermission,
        showPermissionModal,
        setShowPermissionModal
    } = useMapUserLocation();

    const inverseScale = useDerivedValue(() => 1 / scale.value);

    const getPixelCoords = (lat: number, lng: number) => {
        const { x: xPct, y: yPct } = convertLatLngToXY(lat, lng);
        return {
            x: (xPct / 100) * svgWidth,
            y: (yPct / 100) * svgHeight
        };
    };

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

            const centerX = screenX;
            const centerY = screenY - 12;

            const dist = Math.hypot(x - centerX, y - centerY);

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
                                    <Marker
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