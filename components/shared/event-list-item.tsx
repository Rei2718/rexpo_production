import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Link } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Container } from "../ui/container";
import { Icon } from "../ui/icon";
import { ThemedText } from "../ui/themed-text";

// Define a minimal interface for what EventListItem needs
export interface SharedEventListItemProps {
    event: {
        event_public_id: string;
        name: string;
        caption: string;
        icon: string | null;
    };
}

export function EventListItem({ event }: SharedEventListItemProps) {
    const color = useThemeColor();

    return (
        <Link
            href={{
                pathname: "/event-details",
                params: { id: event.event_public_id, name: event.name },
            }}
            asChild
        >
            <TouchableOpacity>
                <Container flexDirection="row" alignItems="center" style={styles.container}>
                    <Image
                        source={
                            event.icon
                                ? { uri: event.icon }
                                : require("@/assets/logo/icon.png")
                        }
                        style={styles.image}
                    />
                    <Container flexDirection="column" flex={1} style={styles.textContainer}>
                        <ThemedText type="footnote">{event.name}</ThemedText>
                        <ThemedText type="caption2" color="natural_200">{event.caption}</ThemedText>
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
