import { Column, Row } from "@/components/ui/flex";
import { ThemedText } from "@/components/ui/themed-text";
import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { NewsPerformer, Verified } from "@/supabase/api/types";
import { Image, StyleSheet } from "react-native";

export function NewsPerformerCard(data: Verified<NewsPerformer>) {
    const color = useThemeColor();

    return (
        <Row gap="s12" alignItems="center" padding="s16" backgroundColor={color.natural_600} borderRadius="s16">
            <Image
                source={data.icon ? { uri: data.icon } : FALLBACK_IMAGE_URL}
                style={[
                    styles.icon,
                    {
                        borderWidth: Spacing.s1,
                        borderColor: color.border,
                        backgroundColor: color.border,
                    }
                ]}
            />
            <Column flex={1} gap="s2">
                <ThemedText type="subhead" style={styles.boldText}>
                    {data.name}
                </ThemedText>
                <ThemedText type="caption1" color="natural_200">
                    {data.affiliation}
                </ThemedText>
            </Column>
        </Row>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: Spacing.s40,
        height: Spacing.s40,
        borderRadius: Spacing.pill,
    },
    boldText: {
        fontWeight: "600",
    },
});
