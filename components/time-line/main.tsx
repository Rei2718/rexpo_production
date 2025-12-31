import { useBottomTabPadding } from "@/hooks/use-bottom-tab-padding";
import { useTimeline } from "@/hooks/use-timeline";
import { FlatList } from "react-native";
import { Container } from "../ui/container";
import { StatusMessage } from "../ui/status-message";
import { SlotGroup } from "./slot-group";
import TimelineSeparator from "./timeline-separator";
import TitleBar from "./title-bar";
import VenueFilter from "./venue-filter";

export default function TimelineMain() {
    const height = useBottomTabPadding();
    const {
        venues,
        selectedVenueId,
        setSelectedVenueId,
        events,
        venuesPending,
        venuesError,
        eventsPending,
        eventsError
    } = useTimeline();

    if (venuesPending) return <StatusMessage status="loading" />;
    if (venuesError) return <StatusMessage status="error" />;
    if (!venues || venues.length === 0) return <StatusMessage status="empty" />;

    const renderContent = () => {
        if (eventsPending) return <StatusMessage status="loading" />;
        if (eventsError) return <StatusMessage status="error" />;
        if (events && events.length === 0) return <StatusMessage status="empty" />;
        return null;
    };

    return (
        <FlatList
            data={events}
            ListHeaderComponent={
                <Container gap="s40" paddingBottom="s20">
                    <TitleBar />
                    <VenueFilter
                        venues={venues}
                        selectedVenueId={selectedVenueId}
                        onVenueChange={setSelectedVenueId}
                    />
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
            keyExtractor={(item, index) => item.starts ?? `slot-${index}`}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: height }}
        />
    );
}