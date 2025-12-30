import { Spacing } from "@/constants/theme";
import { Platform } from "react-native";

export function useBottomTabPadding() {
    const TAB_BAR_HEIGHT = Platform.select({
        ios: 80,
        android: 80,
        default: 0,
    });

    return TAB_BAR_HEIGHT + Spacing.s20;
}