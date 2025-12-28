import { Spacing } from "@/constants/theme";
import { useDisplayVenue, useEventsByVenue } from "@/supabase/api";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Container } from "../ui/container";
import { StatusMessage } from "../ui/status-message";
import Header from "./header";
import { TagSection } from "./tag-section";
import VenueTab from "./venue-tab";

export default function TimelineContent() {
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
                <Container gap="s24" paddingBottom="s24">
                    <Header />
                    <VenueTab selectedVenueId={selectedVenueId} onVenueChange={setSelectedVenueId} />
                </Container>
            }
            ListEmptyComponent={renderContent()}
            renderItem={({ item }) => <TagSection item={item} />}
            ItemSeparatorComponent={() => <Container style={{ height: Spacing.s48 }} />}
            keyExtractor={(item) => item.starts}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={(!events || events.length === 0) ? { flex: 1 } : undefined}
        />
    );
}