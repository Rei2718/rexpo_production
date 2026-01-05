import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { TimelineEvent, Verified } from "@/supabase/api/types";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { PressableScale } from "pressto";
import { memo } from "react";
import { StyleSheet } from "react-native";
import { Container } from "../ui/container";
import { Icon } from "../ui/icon";
import { ThemedText } from "../ui/themed-text";


export const TimelineEventListItem = memo((data: Verified<TimelineEvent>) => {
    const color = useThemeColor();

    return (
        <Link
            href={{
                pathname: "/event-details",
                params: { event_public_id: data.event_public_id },
            }}
            asChild
        >
            <PressableScale>

                <Container flexDirection="row" alignItems="center" style={styles.container}>
                    <Image
                        source={data.icon ? { uri: data.icon } : FALLBACK_IMAGE_URL}
                        style={styles.image}
                    />

                    <Container flexDirection="column" flex={1} gap="s4">
                        {data.venue_name && (
                            <ThemedText type="caption2" color="tint" numberOfLines={1}>
                                {data.venue_name}
                            </ThemedText>
                        )}
                        <ThemedText type="footnote" numberOfLines={1}>
                            {data.name ?? NO_DATA}
                        </ThemedText>
                        {!data.venue_name && (
                            <ThemedText type="caption2" color="natural_200" numberOfLines={1}>
                                {data.caption ?? NO_DATA}
                            </ThemedText>
                        )}
                    </Container>
                    <Icon icon="right" color={color.natural_300} />
                </Container>
            </PressableScale>
        </Link>
    );
});

const styles = StyleSheet.create({
    container: {
        gap: Spacing.s8,
    },
    image: {
        width: Spacing.s56,
        height: Spacing.s56,
        borderRadius: Spacing.s12,
    },
});
