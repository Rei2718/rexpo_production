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
    // Use SharedValues to store dimensions so they are accessible in worklets properly
    // and can be updated without recreating the entire gesture chain if possible,
    // though gesture recreation is likely anyway on safe rendering.
    const containerWidth = useSharedValue(containerDimensions.width);
    const containerHeight = useSharedValue(containerDimensions.height);
    const contentWidth = useSharedValue(contentDimensions.width);
    const contentHeight = useSharedValue(contentDimensions.height);

    // Calculate initial minScale
    const calculateMinScale = (cW: number, cH: number, imgW: number, imgH: number) => {
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

    // Sync SharedValues when props change
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

        // Reset scale if it's the first load (roughly) or if dimensions change drastically?
        // Let's assume on initial mount/data load we want to reset.
        // We can just set it. If user was zoomed in, this might reset their zoom on rotation.
        // For now, enforcing minScale is the important part. 
        // If current scale is less than new minScale, we must bump it up.
        // We'll set it to newMinScale to be safe and ensure "fit" behavior.
        // But only if we are "close" to previous default or it's a fresh load.
        // Simple heuristic: set it.
        // Actually, if we just set it, it might snap.
        // Let's trust the logic: if props changed, view likely resized, we should probably re-fit.
        scale.value = newMinScale;

        // Center the image initially
        const centeredX = (containerDimensions.width - contentDimensions.width * newMinScale) / 2;
        const centeredY = (containerDimensions.height - contentDimensions.height * newMinScale) / 2;

        translateX.value = centeredX;
        translateY.value = centeredY;

        // Sync saved values too to prevent gesture jumps
        savedScale.value = newMinScale;
        savedTranslateX.value = centeredX;
        savedTranslateY.value = centeredY;

    }, [containerDimensions.width, containerDimensions.height, contentDimensions.width, contentDimensions.height]);


    // Initial positioning to center the map roughly or align top-left? 
    // Usually fit-height for portrait means x starts centered or 0.
    // If we want it to start centered:
    // translateX.value = (containerDimensions.width - contentDimensions.width * minScale) / 2;
    // translateY.value = (containerDimensions.height - contentDimensions.height * minScale) / 2;
    // But let's start with 0,0 aligned if that's the standard, or better yet, center it.
    // Given the requirement "fit height", if it fits height exactly, Y is 0.
    // X would need to be centered.
    // Let's modify the initial value inside a useEffect or just init here if clear.
    // Since this is a hook called on render, we can just init.
    // However, we need to respect the constraints immediately.

    // Changing initial logic slightly to ensure we start constrained.
    // But `useSharedValue` init only runs once.
    // We'll apply constraints in the gesture callbacks.

    const clamp = (value: number, min: number, max: number) => {
        "worklet";
        return Math.min(Math.max(value, min), max);
    };

    const panGesture = Gesture.Pan()
        .averageTouches(true)
        .onUpdate((e) => {
            const newX = savedTranslateX.value + e.translationX;
            const newY = savedTranslateY.value + e.translationY;

            // Calculate boundaries based on current scale
            const scaledWidth = contentWidth.value * scale.value;
            const scaledHeight = contentHeight.value * scale.value;

            const minX = containerWidth.value - scaledWidth;
            const maxX = 0;
            const minY = containerHeight.value - scaledHeight;
            const maxY = 0;

            translateX.value = clamp(newX, minX, maxX);
            translateY.value = clamp(newY, minY, maxY);
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

            // Recalculate zoom offset based on the focal point
            // This logic is tricky with limits. 
            // Simple approach: Calculate proposed transform, then clamp.

            const zoomOffsetX = (currentFocalX - savedTranslateX.value) * (1 - newScale / savedScale.value);
            const zoomOffsetY = (currentFocalY - savedTranslateY.value) * (1 - newScale / savedScale.value);

            // Note: The original logic was:
            // zoomOffsetX = (currentFocalX - savedTranslateX) * (1 - e.scale)
            // But that assumes e.scale is relative to 1 at start of gesture. 
            // Here e.scale is cumulative for the gesture.
            // Correct math for focal point zoom:
            // T_new = F - (F - T_old) * (S_new / S_old)
            //       = F - (F * S_new/S_old) + (T_old * S_new/S_old)
            //       = T_old * (ratio) + F * (1 - ratio)

            const scaleRatio = newScale / savedScale.value;

            const targetX = savedTranslateX.value * scaleRatio + initialFocalX.value * (1 - scaleRatio);
            const targetY = savedTranslateY.value * scaleRatio + initialFocalY.value * (1 - scaleRatio);

            // Add drag component (focal point movement)
            const dragX = currentFocalX - initialFocalX.value;
            const dragY = currentFocalY - initialFocalY.value;

            const proposedX = targetX + dragX;
            const proposedY = targetY + dragY;

            scale.value = newScale;

            // Clamp translation
            const scaledWidth = contentWidth.value * newScale;
            const scaledHeight = contentHeight.value * newScale;

            const minX = containerWidth.value - scaledWidth;
            const maxX = 0;
            const minY = containerHeight.value - scaledHeight;
            const maxY = 0;

            translateX.value = clamp(proposedX, minX, maxX);
            translateY.value = clamp(proposedY, minY, maxY);
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