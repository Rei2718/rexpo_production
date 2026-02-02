import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode, useEffect } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
    Easing,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withSequence,
    withTiming,
} from 'react-native-reanimated';
import { ThemedView } from './themed-view';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

type ShineBorderProps = {
    children: ReactNode;
    borderRadius?: number;
    borderWidth?: number;
    style?: StyleProp<ViewStyle>;
};

export function ShineBorder({
    children,
    borderRadius = Spacing.s12,
    borderWidth = Spacing.s1,
    style,
}: ShineBorderProps) {
    const color = useThemeColor();
    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withRepeat(
            withSequence(
                // 1. Sweep across (0 -> 1)
                withTiming(1, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
                // 2. Wait at the end (Offscreen) for 2.5s
                withDelay(2500, withTiming(0, { duration: 0 }))
            ),
            -1, // Infinite
            false // No reverse
        );
    }, [progress]);

    const animatedGradientStyle = useAnimatedStyle(() => {
        return {
            // Gradient Width is 200%.
            // Start Position (left) is -150% (Shine at Left Edge).
            // We want to translate 100% of the Gradient's Width (200%).
            // Use percentage string for relative translation to the View's size.
            transform: [{ translateX: `${progress.value * 100}%` }],
            // "Fluffy out" - Soft fade in/out at extremes to prevent sharp cuts
            opacity: interpolate(progress.value, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
        };
    });

    return (
        <ThemedView
            style={[
                styles.container,
                {
                    backgroundColor: color.border,
                    borderRadius,
                    padding: borderWidth,
                },
                style,
            ]}
        >
            {/* Shine Overlay - Moves across the static border */}
            <AnimatedLinearGradient
                colors={[
                    'transparent',
                    'transparent',
                    color.tint, // Shine
                    'transparent',
                    'transparent',
                ]}
                locations={[0, 0.35, 0.5, 0.65, 1]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={[
                    StyleSheet.absoluteFill,
                    { width: '200%', left: '-150%' },
                    animatedGradientStyle,
                ]}
            />

            {/* Inner Content Mask */}
            <ThemedView
                style={[
                    styles.innerContainer,
                    {
                        // Inner radius should be outer radius - border width (approx)
                        borderRadius: borderRadius - borderWidth,
                    },
                ]}
                color="natural_500"
            >
                {children}
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
    },
    innerContainer: {
        width: '100%',
        overflow: 'hidden',
    },
});