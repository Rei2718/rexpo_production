import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { EventOverview, Verified } from "@/supabase/api/types";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Container } from "../ui/container";
import { EventListItem } from "./event-list-item";


// 参照元が複数あるため、ここは"data: {}"の形式で書く
export const EventList = memo((data: { events: Verified<EventOverview>[] }) => {
    const color = useThemeColor();

    if (!data.events || data.events.length === 0) return null;

    return (
        <Container style={[styles.container, { backgroundColor: color.natural_500 }]}>
            <Container flexDirection="column">
                {data.events.map((event, index) => (
                    <View key={event.event_public_id}>
                        <EventListItem {...event} />
                        {index < data.events.length - 1 && (
                            <View style={[styles.separator, { backgroundColor: color.natural_400 }]} />
                        )}
                    </View>
                ))}
            </Container>
        </Container>
    );
});

const styles = StyleSheet.create({
    container: {
        borderRadius: Spacing.s20,
        padding: Spacing.s8,
        overflow: 'hidden',
    },
    separator: {
        height: 1,
        marginVertical: Spacing.s8,
        marginLeft: Spacing.s64,
    },
});