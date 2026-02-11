import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { TimelineEvent, TimelineSlot, Verified } from "@/supabase/api/types";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Container } from "../ui/container";
import { TimelineEventListItem } from "./timeline-event-list-item";


export const TimelineEventList = memo((data: Verified<TimelineSlot>) => {
    const color = useThemeColor();

    return (
        <Container style={[styles.container, { backgroundColor: color.natural_500 }]}>
            <Container flexDirection="column">
                {data.events.map((event, index) => (
                    <MemoizedTimelineEventRow
                        key={`${event.event_public_id}-${event.venue_name}-${index}`}
                        event={event}
                        isLast={index === data.events.length - 1}
                    />
                ))}
            </Container>
        </Container>
    );
});

const MemoizedTimelineEventRow = memo(({ event, isLast }: { event: Verified<TimelineEvent>; isLast: boolean }) => {
    const color = useThemeColor();
    return (
        <View>
            <TimelineEventListItem {...event} />
            {!isLast && (
                <View style={[styles.separator, { backgroundColor: color.natural_400 }]} />
            )}
        </View>
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