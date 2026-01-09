import { ThemedView } from '@/components/ui/themed-view';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

type Props = {
    x: number;
    y: number;
    scale: SharedValue<number>;
    translateX: SharedValue<number>;
    translateY: SharedValue<number>;
};

export function MapUserLocation({ x, y, scale, translateX, translateY }: Props) {
    const color = useThemeColor();

    const animatedStyle = useAnimatedStyle(() => {
        const screenX = x * scale.value + translateX.value;
        const screenY = y * scale.value + translateY.value;

        return {
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [
                { translateX: screenX },
                { translateY: screenY },
                { translateX: -Spacing.s24 / 2 },
                { translateY: -Spacing.s24 / 2 },
            ],
            zIndex: 999,
        };
    });

    return (
        <Animated.View style={animatedStyle}>
            <ThemedView
                color="tint"
                style={{
                    position: 'absolute',
                    width: Spacing.s24,
                    height: Spacing.s24,
                    borderRadius: Spacing.pill,
                    opacity: 0.3,
                }}
            />
            <ThemedView
                color="tint"
                style={{
                    width: Spacing.s12,
                    height: Spacing.s12,
                    borderRadius: Spacing.pill,
                    borderWidth: Spacing.s1,
                    borderColor: color.natural_500,
                    margin: (Spacing.s24 - Spacing.s12) / 2,
                }}
            />
        </Animated.View>
    );
}
