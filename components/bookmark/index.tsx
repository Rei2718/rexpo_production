import { SlotGroup } from "@/components/time-line/slot-group";
import TimelineSeparator from "@/components/time-line/timeline-separator";
import { StatusMessage } from "@/components/ui/status-message";
import { Spacing } from "@/constants/theme";
import { useBookmarkStore } from "@/hooks/use-bookmark-store";
import { useEventsByIds } from "@/supabase/api";
import { TimelineEvent, TimelineSlot, Verified } from "@/supabase/api/types";
import { useMemo } from "react";
import { FlatList } from "react-native";


export default function BookmarkScreen() {

    const { bookmarks } = useBookmarkStore();
    const bookmarkIds = Object.keys(bookmarks);
    const { data, isPending, isError } = useEventsByIds(bookmarkIds);

    const slots = useMemo(() => {
        if (!data) return [];

        const grouped: Record<string, Verified<TimelineEvent>[]> = {};

        data.forEach(event => {
            const time = event.starts ?? "Undecided";
            if (!grouped[time]) {
                grouped[time] = [];
            }
            grouped[time].push(event);
        });

        // Convert to array and sort by time
        return Object.entries(grouped)
            .map(([time, events]) => ({
                starts: time === "Undecided" ? null : time,
                events: events
            } as Verified<TimelineSlot>))
            .sort((a, b) => {
                if (!a.starts) return 1;
                if (!b.starts) return -1;
                return a.starts.localeCompare(b.starts);
            });
    }, [data]);

    if (bookmarkIds.length === 0) return <StatusMessage status="empty" message="ブックマークがありません" />;
    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data || data.length === 0) return <StatusMessage status="empty" message="ブックマークがありません" />;

    return (
        <>
            <FlatList
                data={slots}
                renderItem={({ item, index }) => (
                    <SlotGroup
                        item={item}
                        isLast={index === slots.length - 1}
                    />
                )}
                keyExtractor={(item, index) => item.starts ?? `slot-${index}`}
                contentContainerStyle={{
                    paddingVertical: Spacing.s20,
                }}
                ItemSeparatorComponent={TimelineSeparator}
                contentInsetAdjustmentBehavior="automatic"
            />
        </>
    );
}