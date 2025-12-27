import { Spacing } from "@/constants/theme";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useBottomTabPadding() {
    const insets = useSafeAreaInsets();
    const TAB_BAR_HEIGHT = Platform.select({
        ios: 80,
        android: 80,
        default: 0,
    });

    return TAB_BAR_HEIGHT + insets.bottom + Spacing.xl;
}