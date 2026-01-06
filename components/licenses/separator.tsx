import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet, View } from "react-native";

export const LicenseSeparator = () => {
    const color = useThemeColor();
    return (
        <View
            style={[
                styles.separator,
                {
                    backgroundColor: color.natural_400,
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    separator: {
        height: 1,
        marginLeft: Spacing.s40,
        marginVertical: Spacing.s16,
    },
});