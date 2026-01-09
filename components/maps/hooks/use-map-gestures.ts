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
    const containerWidth = useSharedValue(containerDimensions.width);
    const containerHeight = useSharedValue(containerDimensions.height);
    const contentWidth = useSharedValue(contentDimensions.width);
    const contentHeight = useSharedValue(contentDimensions.height);

    const calculateMinScale = (cW: number, cH: number, imgW: number, imgH: number) => {
        "worklet";
        if (imgW === 0 || imgH === 0) return 1;
        return Math.max(cW / imgW, cH / imgH);
    };

    const initialMinScale = calculateMinScale(
        containerDimensions.width,
        containerDimensions.height,
        contentDimensions.width,
        contentDimensions.height
    );

    const minScale = useSharedValue(initialMinScale);

    const scale = useSharedValue(initialMinScale);
    const savedScale = useSharedValue(initialMinScale);

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const savedTranslateX = useSharedValue(0);
    const savedTranslateY = useSharedValue(0);

    const initialFocalX = useSharedValue(0);
    const initialFocalY = useSharedValue(0);

    useEffect(() => {
        containerWidth.value = containerDimensions.width;
        containerHeight.value = containerDimensions.height;
        contentWidth.value = contentDimensions.width;
        contentHeight.value = contentDimensions.height;

        const newMinScale = calculateMinScale(
            containerDimensions.width,
            containerDimensions.height,
            contentDimensions.width,
            contentDimensions.height
        );
        minScale.value = newMinScale;

        if (scale.value === 0 || scale.value === 1 || scale.value < newMinScale) {
            scale.value = newMinScale;
            savedScale.value = newMinScale;
        }

        const centeredX = (containerDimensions.width - contentDimensions.width * newMinScale) / 2;
        const centeredY = (containerDimensions.height - contentDimensions.height * newMinScale) / 2;

        translateX.value = centeredX;
        translateY.value = centeredY;
        savedTranslateX.value = centeredX;
        savedTranslateY.value = centeredY;
    }, [containerDimensions.width, containerDimensions.height, contentDimensions.width, contentDimensions.height]);

    const clamp = (value: number, min: number, max: number) => {
        "worklet";
        return Math.min(Math.max(value, min), max);
    };

    const panGesture = Gesture.Pan()
        .averageTouches(true)
        .onUpdate((e) => {
            const newX = savedTranslateX.value + e.translationX;
            const newY = savedTranslateY.value + e.translationY;

            const scaledWidth = contentWidth.value * scale.value;
            const scaledHeight = contentHeight.value * scale.value;

            const minX = containerWidth.value - scaledWidth;
            const maxX = 0;
            const minY = containerHeight.value - scaledHeight;
            const maxY = 0;

            if (scaledWidth < containerWidth.value) {
                translateX.value = (containerWidth.value - scaledWidth) / 2;
            } else {
                translateX.value = clamp(newX, minX, maxX);
            }

            if (scaledHeight < containerHeight.value) {
                translateY.value = (containerHeight.value - scaledHeight) / 2;
            } else {
                translateY.value = clamp(newY, minY, maxY);
            }
        })
        .onEnd(() => {
            savedTranslateX.value = translateX.value;
            savedTranslateY.value = translateY.value;
        });

    const pinchGesture = Gesture.Pinch()
        .onStart((e) => {
            savedScale.value = scale.value;
            savedTranslateX.value = translateX.value;
            savedTranslateY.value = translateY.value;

            initialFocalX.value = e.focalX;
            initialFocalY.value = e.focalY;
        })
        .onUpdate((e) => {
            let newScale = savedScale.value * e.scale;
            newScale = Math.max(newScale, minScale.value);

            const currentFocalX = e.focalX;
            const currentFocalY = e.focalY;

            const scaleRatio = newScale / savedScale.value;

            const targetX = savedTranslateX.value * scaleRatio + initialFocalX.value * (1 - scaleRatio);
            const targetY = savedTranslateY.value * scaleRatio + initialFocalY.value * (1 - scaleRatio);

            const dragX = currentFocalX - initialFocalX.value;
            const dragY = currentFocalY - initialFocalY.value;

            const proposedX = targetX + dragX;
            const proposedY = targetY + dragY;

            scale.value = newScale;

            const scaledWidth = contentWidth.value * newScale;
            const scaledHeight = contentHeight.value * newScale;

            const minX = containerWidth.value - scaledWidth;
            const maxX = 0;
            const minY = containerHeight.value - scaledHeight;
            const maxY = 0;

            if (scaledWidth < containerWidth.value) {
                translateX.value = (containerWidth.value - scaledWidth) / 2;
            } else {
                translateX.value = clamp(proposedX, minX, maxX);
            }

            if (scaledHeight < containerHeight.value) {
                translateY.value = (containerHeight.value - scaledHeight) / 2;
            } else {
                translateY.value = clamp(proposedY, minY, maxY);
            }
        })
        .onEnd(() => {
            savedScale.value = scale.value;
            savedTranslateX.value = translateX.value;
            savedTranslateY.value = translateY.value;
        });

    const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

    const transform = useDerivedValue(() => {
        return [
            { translateX: translateX.value },
            { translateY: translateY.value },
            { scale: scale.value },
        ];
    });

    return {
        gesture: composedGesture,
        transform,
        scale,
        translateX,
        translateY
    };
};