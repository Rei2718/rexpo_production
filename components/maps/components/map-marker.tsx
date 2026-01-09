import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";

interface MapMarkerProps {
    x: number; // Absolute coordinate on image (px)
    y: number; // Absolute coordinate on image (px)
    scale: SharedValue<number>;
    translateX: SharedValue<number>;
    translateY: SharedValue<number>;
    onPress?: () => void;
    color?: string;
}

export function MapMarker({ x, y, scale, translateX, translateY, onPress, color: customColor }: MapMarkerProps) {
    const themeColor = useThemeColor();
    const markerColor = customColor ?? themeColor.tint;

    const animatedStyle = useAnimatedStyle(() => {
        // [Calculation]
        // Screen Position = (Original Position * Scale) + Translation
        const screenX = x * scale.value + translateX.value;
        const screenY = y * scale.value + translateY.value;

        return {
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [
                { translateX: screenX },
                { translateY: screenY },
                // Correction to align the tip of the pin to the coordinate
                // Icon Size 24px:
                // Center alignment: -12, -12
                // Pin tip alignment: -12, -24
            ],
        };
    });

    return (
        <Animated.View style={[animatedStyle, { zIndex: 10 }]}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                <Ionicons
                    name="location-sharp"
                    size={24}
                    color={markerColor}
                    // Fine-tune icon position if necessary
                    style={{ marginLeft: -12, marginTop: -24 }}
                />
            </TouchableOpacity>
        </Animated.View>
    );
}