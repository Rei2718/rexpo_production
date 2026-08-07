import { DisplayVenue, Verified } from '@/supabase/api/types';
import { useRef } from 'react';
import { Gesture } from "react-native-gesture-handler";
import { runOnJS, SharedValue } from 'react-native-reanimated';
import { HIT_RADIUS, MARKER_ANCHOR, MARKER_SIZE } from '../components/map-shapes';

type Props = {
    scale: SharedValue<number>;
    translateX: SharedValue<number>;
    translateY: SharedValue<number>;
    processedVenues: (Verified<DisplayVenue> & { x: number; y: number })[];
    onMarkerPress?: (venue: Verified<DisplayVenue>) => void;
    onMapPress?: () => void;
    mapGestures: any;
};

export function useMapInteraction({
    scale,
    translateX,
    translateY,
    processedVenues,
    onMarkerPress,
    onMapPress,
    mapGestures,
}: Props) {
    const lastTapTimeRef = useRef<number>(0);

    const handleTap = (x: number, y: number) => {
        const now = Date.now();
        if (now - lastTapTimeRef.current < 350) {
            return;
        }
        lastTapTimeRef.current = now;

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
        } else {
            onMapPress?.();
        }
    };

    const tapGesture = Gesture.Tap()
        .maxDistance(10)
        .onEnd((e) => {
            runOnJS(handleTap)(e.x, e.y);
        });

    const composedGesture = Gesture.Simultaneous(mapGestures, tapGesture);

    return {
        composedGesture,
    };
}
