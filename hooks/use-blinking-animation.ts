import { useEffect } from 'react';
import {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withTiming,
} from 'react-native-reanimated';

export function useBlinkingAnimation(isActive: boolean) {
    const opacity = useSharedValue(0);

    useEffect(() => {
        if (isActive) {
            opacity.value = withRepeat(
                withSequence(
                    withTiming(1, { duration: 1000 }),
                    withTiming(0, { duration: 1000 })
                ),
                -1,
                true
            );
        } else {
            opacity.value = withTiming(0);
        }
    }, [isActive, opacity]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        };
    });

    return animatedStyle;
}