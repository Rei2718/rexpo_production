import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { TimelineEvent } from "@/supabase/api/types";
import { Link } from "expo-router";
import { Image, TouchableOpacity } from "react-native";
import { Container } from "../ui/container";
import { Icon } from "../ui/icon";
import { ThemedText } from "../ui/themed-text";

interface EventRowProps {
    event: TimelineEvent;
}

export function EventRow({ event }: EventRowProps) {
    const color = useThemeColor();

    return (
        <Link
            href={{
                pathname: "/",
                params: { id: event.event_public_id, name: event.name },
            }}
            asChild
        >
            <TouchableOpacity>
                <Container flexDirection="row" gap="s8" alignItems="center">
                    <Image
                        source={
                            event.icon
                                ? { uri: event.icon }
                                : require("@/assets/logo/icon.png")
                        }
                        style={{ width: Spacing.s56, height: Spacing.s56, borderRadius: Spacing.s12 }}
                    />
                    <Container flexDirection="column" flex={1} gap="s4">
                        <ThemedText type="footnote">{event.name}</ThemedText>
                        <ThemedText type="caption2" color="natural_200">{event.caption}</ThemedText>
                    </Container>
                    <Icon icon="right" color={color.natural_300} />
                </Container>
            </TouchableOpacity>
        </Link>
    );
}
