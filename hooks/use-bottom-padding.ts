import { Spacing } from "@/constants/theme";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useBottomPadding() {
    const insets = useSafeAreaInsets();

    const tab = Platform.select({
        ios: 80,
        android: 80 + insets.bottom,
        default: 0,
    }) + Spacing.s20;

    const modal = insets.bottom + Spacing.s20;

    return { tab, modal };
}