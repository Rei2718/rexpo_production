import { useEffect } from "react";
import { Gesture } from "react-native-gesture-handler";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";

interface Dimensions {
    width: number;
    height: number;
}

interface UseMapGesturesProps {
    containerDimensions: Dimensions;
    contentDimensions: Dimensions;
}

export const useMapGestures = ({ containerDimensions, contentDimensions }: UseMapGesturesProps) => {
    const translationX = useSharedValue(0);
    const translationY = useSharedValue(0);
    const scale = useSharedValue(1);

    const originX = useSharedValue(0);
    const originY = useSharedValue(0);
    const startScale = useSharedValue(1);
    const startTranslationX = useSharedValue(0);
    const startTranslationY = useSharedValue(0);

    const containerWidth = useSharedValue(containerDimensions.width);
    const containerHeight = useSharedValue(containerDimensions.height);
    const contentWidth = useSharedValue(contentDimensions.width);
    const contentHeight = useSharedValue(contentDimensions.height);

    const calculateMinScale = (cW: number, cH: number, imgW: number, imgH: number) => {
        "worklet";
        if (imgW === 0 || imgH === 0) return 1;
        return Math.max(cW / imgW, cH / imgH);
    };

    const clamp = (value: number, min: number, max: number) => {
        "worklet";
        return Math.min(Math.max(value, min), max);
    };

    useEffect(() => {
        containerWidth.value = containerDimensions.width;
        containerHeight.value = containerDimensions.height;
        contentWidth.value = contentDimensions.width;
        contentHeight.value = contentDimensions.height;

        const minScale = calculateMinScale(
            containerDimensions.width,
            containerDimensions.height,
            contentDimensions.width,
            contentDimensions.height
        );

        if (scale.value === 0 || scale.value === 1 || scale.value < minScale) {
            scale.value = minScale;

            const centeredX = (containerDimensions.width - contentDimensions.width * minScale) / 2;
            const centeredY = (containerDimensions.height - contentDimensions.height * minScale) / 2;

            translationX.value = centeredX;
            translationY.value = centeredY;
        }
    }, [containerDimensions, contentDimensions]);

    const panGesture = Gesture.Pan()
        .averageTouches(true)
        .maxPointers(1)
        .onStart(() => {
            startTranslationX.value = translationX.value;
            startTranslationY.value = translationY.value;
        })
        .onUpdate((e) => {
            let nextTx = startTranslationX.value + e.translationX;
            let nextTy = startTranslationY.value + e.translationY;

            const currentScale = scale.value;
            const scaledWidth = contentWidth.value * currentScale;
            const scaledHeight = contentHeight.value * currentScale;
            if (scaledWidth < containerWidth.value) {
                nextTx = (containerWidth.value - scaledWidth) / 2;
            } else {
                const minX = containerWidth.value - scaledWidth;
                const maxX = 0;
                nextTx = clamp(nextTx, minX, maxX);
            }

            if (scaledHeight < containerHeight.value) {
                nextTy = (containerHeight.value - scaledHeight) / 2;
            } else {
                const minY = containerHeight.value - scaledHeight;
                const maxY = 0;
                nextTy = clamp(nextTy, minY, maxY);
            }

            translationX.value = nextTx;
            translationY.value = nextTy;
        });

    const pinchGesture = Gesture.Pinch()
        .onStart((e) => {
            startScale.value = scale.value;
            originX.value = e.focalX;
            originY.value = e.focalY;
            startTranslationX.value = translationX.value;
            startTranslationY.value = translationY.value;
        })
        .onUpdate((e) => {
            const nextScale = startScale.value * e.scale;
            const clampedScale = Math.max(0.1, Math.min(nextScale, 10));

            scale.value = clampedScale;

            const scaleRatio = clampedScale / startScale.value;
            const focusX = originX.value - startTranslationX.value;
            const focusY = originY.value - startTranslationY.value;

            let nextTx = startTranslationX.value + (1 - scaleRatio) * focusX;
            let nextTy = startTranslationY.value + (1 - scaleRatio) * focusY;

            const scaledWidth = contentWidth.value * clampedScale;
            const scaledHeight = contentHeight.value * clampedScale;

            if (scaledWidth < containerWidth.value) {
                nextTx = (containerWidth.value - scaledWidth) / 2;
            } else {
                const minX = containerWidth.value - scaledWidth;
                const maxX = 0;
                nextTx = clamp(nextTx, minX, maxX);
            }

            if (scaledHeight < containerHeight.value) {
                nextTy = (containerHeight.value - scaledHeight) / 2;
            } else {
                const minY = containerHeight.value - scaledHeight;
                const maxY = 0;
                nextTy = clamp(nextTy, minY, maxY);
            }

            translationX.value = nextTx;
            translationY.value = nextTy;
        });

    const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

    const transform = useDerivedValue(() => {
        return [
            { translateX: translationX.value },
            { translateY: translationY.value },
            { scale: scale.value },
        ];
    });

    return {
        gesture: composedGesture,
        transform,
        scale,
        translateX: translationX,
        translateY: translationY,
    };
};