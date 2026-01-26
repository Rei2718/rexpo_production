import { Column, Row } from "@/components/ui/flex";
import { Icon } from "@/components/ui/icon";
import { PressableScale } from "@/components/ui/pressable-scale";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { useInAppBrowser } from "@/hooks/use-in-app-browser";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Food, Verified } from "@/supabase/api/types";
import { StyleSheet, View } from "react-native";

export function FoodCard(data: Verified<Food>) {
    const color = useThemeColor();
    const openInAppBrowser = useInAppBrowser();

    const handlePressWebsite = async () => {
        if (data.website) {
            await openInAppBrowser(data.website);
        }
    };

    const priceText = [
        data.min_price ? `¥${data.min_price.toLocaleString()}` : null,
        data.max_price ? `¥${data.max_price.toLocaleString()}` : null,
    ]
        .filter(Boolean)
        .join(" 〜 ");

    return (
        <ThemedView color="natural_500" style={styles.container}>
            <Column padding="s20" gap="s16">
                {/* Header: Name & Price Badge */}
                <Column gap="s12" alignItems="flex-start">
                    <ThemedText type="title3" style={{ fontWeight: "bold" }}>
                        {data.name ?? NO_DATA}
                    </ThemedText>

                    {!!priceText && (
                        <ThemedText type="body" style={{ fontWeight: "600" }}>
                            {priceText}
                        </ThemedText>
                    )}
                </Column>

                <View style={{ height: 1, backgroundColor: color.border }} />

                {/* Information Section */}
                <Column gap="s12">
                    {/* Access Info */}
                    <Column gap="s8">
                        {(data.minutes !== null || data.distance !== null) && (
                            <Row gap="s8" alignItems="center">
                                <Icon icon="myLocation" size={16} color={color.natural_100} />
                                <ThemedText type="caption1" color="natural_100">
                                    {data.minutes ? `${data.minutes}分` : ""} {data.distance ? `(${data.distance}m)` : ""}
                                </ThemedText>
                            </Row>
                        )}
                        {data.address && (
                            <Row gap="s8" alignItems="flex-start" style={{ paddingRight: Spacing.s16 }}>
                                <Icon icon="locationOn" size={16} color={color.natural_100} />
                                <ThemedText type="caption1" color="natural_100" style={{ flex: 1, lineHeight: 18 }}>
                                    {data.address}
                                </ThemedText>
                            </Row>
                        )}
                    </Column>

                    {/* Description 
                    <ThemedText type="caption1" color="natural_200" style={{ lineHeight: 18 }}>
                        {data.description ?? NO_DATA}
                    </ThemedText>
                    */}
                </Column>

                {/* Footer Action Button */}
                {data.website && (
                    <PressableScale
                        onPress={handlePressWebsite}
                        style={[styles.button, { borderColor: color.natural_300 }]}
                    >
                        <Row gap="s8" alignItems="center" justifyContent="center">
                            <Icon icon="link" size={16} color={color.tint} />
                            <ThemedText type="callout" color="tint" style={{ fontWeight: "600" }}>
                                Webサイト
                            </ThemedText>
                        </Row>
                    </PressableScale>
                )}
            </Column>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: Spacing.s16,
        overflow: "hidden",
    },
    button: {
        width: '100%',
        paddingVertical: Spacing.s12,
        borderRadius: Spacing.s8,
        borderWidth: 1,
        alignItems: 'center',
        marginTop: Spacing.s4,
    }
});