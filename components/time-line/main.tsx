import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useDisplayVenue, useEventsByVenue } from "@/supabase/api";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Container } from "../ui/container";
import { StatusMessage } from "../ui/status-message";
import { SlotGroup } from "./slot-group";
import TitleBar from "./title-bar";
import VenueFilter from "./venue-filter";

export function TimelineSeparator() {
    const color = useThemeColor();
    return (
        <Container style={styles.separatorRoot}>
            <Container alignItems="center" marginLeft="s20" style={styles.separatorInner}>
                <Container backgroundColor={color.natural_400} style={styles.separatorLine} />
            </Container>
        </Container>
    );
}

const styles = StyleSheet.create({
    separatorRoot: {
        height: Spacing.s40,
    },
    separatorInner: {
        width: Spacing.s20,
    },
    separatorLine: {
        width: 1,
        height: '100%',
    }
});;

export default function TimelineMain() {
    const { data: venues, isPending: venuesPending, isError: venuesError } = useDisplayVenue();

    const [selectedVenueId, setSelectedVenueId] = useState<string | undefined>();

    useEffect(() => {
        if (venues && venues.length > 0 && !selectedVenueId) {
            setSelectedVenueId(venues[0].venue_public_id);
        }
    }, [venues, selectedVenueId]);

    const { data: events, isPending: eventsPending, isError: eventsError } = useEventsByVenue(selectedVenueId);

    if (venuesPending) return <StatusMessage status="loading" />;
    if (venuesError) return <StatusMessage status="error" />;
    if (!venues || venues.length === 0) return <StatusMessage status="empty" />;

    const renderContent = () => {
        if (eventsPending) return <StatusMessage status="loading" />;
        if (eventsError) return <StatusMessage status="error" />;
        if (!events || events.length === 0) return <StatusMessage status="empty" />;
        return null;
    };

    return (
        <FlatList
            data={events || []}
            ListHeaderComponent={
                <Container gap="s40" paddingBottom="s20">
                    <TitleBar />
                    <VenueFilter selectedVenueId={selectedVenueId} onVenueChange={setSelectedVenueId} />
                </Container>
            }
            ListEmptyComponent={renderContent()}
            renderItem={({ item, index }) => (
                <SlotGroup
                    item={item}
                    isFirst={index === 0}
                    isLast={index === (events?.length ?? 0) - 1}
                />
            )}
            ItemSeparatorComponent={TimelineSeparator}
            keyExtractor={(item) => item.starts}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={(!events || events.length === 0) ? { flex: 1 } : undefined}
        />
    );
}