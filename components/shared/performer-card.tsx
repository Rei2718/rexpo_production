import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { EventPerformer, Verified } from "@/supabase/api/types";
import { supabaseStorageUrl } from "@/supabase/supabase";
import { Image } from "expo-image";
import { memo } from "react";
import { StyleSheet } from "react-native";
import { Column, Row } from "../ui/flex";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export const PerformerCard = memo((data: Verified<EventPerformer>) => {
    const color = useThemeColor();

    return (
        <ThemedView
            color="natural_500"
            style={[
                styles.container,
                {
                    borderWidth: Spacing.s1,
                    borderColor: color.border,
                },
            ]}
        >
            <Row alignItems="center" gap="s16" padding="s4">
                <Image
                    source={data.icon ? { uri: `${supabaseStorageUrl}/${data.icon}` } : FALLBACK_IMAGE_URL}
                    style={styles.image}
                />
                <Column flex={1} gap="s2">
                    <ThemedText type="footnote" numberOfLines={1}>
                        {data.name ?? NO_DATA}
                    </ThemedText>
                    <ThemedText type="caption2" color="natural_200" numberOfLines={1}>
                        {data.affiliation ?? NO_DATA}
                    </ThemedText>
                </Column>
            </Row>
        </ThemedView>
    );
});

const styles = StyleSheet.create({
    container: {
        borderRadius: Spacing.pill,
        overflow: 'hidden',
    },
    image: {
        width: Spacing.s56,
        height: Spacing.s56,
        borderRadius: Spacing.pill,
    },
});