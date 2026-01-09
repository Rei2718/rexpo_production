import { Icon } from "@/components/ui/icon";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { TouchableOpacity } from "react-native";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";

interface MapMarkerProps {
    x: number;
    y: number;
    scale: SharedValue<number>;
    translateX: SharedValue<number>;
    translateY: SharedValue<number>;
    onPress?: () => void;
    color?: string;
}

export function MapMarker({ x, y, scale, translateX, translateY, onPress, color: customColor }: MapMarkerProps) {
    const themeColor = useThemeColor();
    const markerColor = customColor ?? themeColor.tint;
    const iconSize = Spacing.icon;

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
                { translateX: -iconSize / 2 },
                { translateY: -iconSize },
            ],
        };
    });

    return (
        <Animated.View style={[animatedStyle, { zIndex: 10 }]}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                <Icon
                    icon="locationOnFill"
                    size={iconSize}
                    color={markerColor}
                />
            </TouchableOpacity>
        </Animated.View>
    );
}