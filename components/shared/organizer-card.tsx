import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { EventOrganization, Verified } from "@/supabase/api/types";
import { Image } from "expo-image";
import { memo } from "react";
import { StyleSheet } from "react-native";
import { Column, Row } from "../ui/flex";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export const OrganizerCard = memo((data: Verified<EventOrganization>) => {
    return (
        <ThemedView color="natural_500" style={styles.container}>
            <Row alignItems="center" gap="s16" padding="s8">
                <Image
                    source={data.icon ? { uri: data.icon } : FALLBACK_IMAGE_URL}
                    style={styles.image}
                />
                <Column flex={1} gap="s2">
                    <ThemedText type="footnote" numberOfLines={1}>
                        {data.name ?? NO_DATA}
                    </ThemedText>
                    <ThemedText type="caption2" color="natural_200" numberOfLines={1}>
                        {data.caption ?? NO_DATA}
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