import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { EventOverview, Verified } from "@/supabase/api/types";
import { Link } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Container } from "../ui/container";
import { Icon } from "../ui/icon";
import { ThemedText } from "../ui/themed-text";


export function EventListItem(data: Verified<EventOverview>) {
    const color = useThemeColor();

    return (
        <Link
            href={{
                pathname: "/event-details",
                params: { event_public_id: data.event_public_id },
            }}
            asChild
        >
            <TouchableOpacity>
                <Container flexDirection="row" alignItems="center" style={styles.container}>
                    <Image
                        source={data.icon ? { uri: data.icon } : FALLBACK_IMAGE_URL}
                        style={styles.image}
                    />
                    <Container flexDirection="column" flex={1} style={styles.textContainer}>
                        <ThemedText type="footnote">{data.name ?? NO_DATA}</ThemedText>
                        <ThemedText type="caption2" color="natural_200">
                            {data.caption ?? NO_DATA}
                        </ThemedText>
                    </Container>
                    <Icon icon="right" color={color.natural_300} />
                </Container>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: Spacing.s8,
    },
    image: {
        width: Spacing.s56,
        height: Spacing.s56,
        borderRadius: Spacing.s12,
    },
    textContainer: {
        gap: Spacing.s4,
    },
});