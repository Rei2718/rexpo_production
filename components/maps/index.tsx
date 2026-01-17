import { StatusMessage } from "@/components/ui/status-message";
import { ThemedView } from "../ui/themed-view";
import Sheet from "./components/map-bottom-sheet";
import MapsView from "./components/map-view";
import { useMapsScreen } from "./hooks/use-maps-screen";

export default function MapsScreen() {
    const { venues, isPending, isError, selectedVenue, setSelectedVenue } = useMapsScreen();

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;

    return (
        <ThemedView style={{ flex: 1 }}>
            <MapsView
                venues={venues ?? []}
                selectedVenueId={selectedVenue?.venue_public_id}
                onMarkerPress={setSelectedVenue}
                onMapPress={() => setSelectedVenue(null)}
            />
            <Sheet
                data={selectedVenue}
                onClose={() => setSelectedVenue(null)}
            />
        </ThemedView>
    );
}