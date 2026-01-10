import { StatusMessage } from "@/components/ui/status-message";
import { View } from "react-native";
import Sheet from "./components/map-bottom-sheet";
import MapsView from "./components/map-view";
import { useMapsScreen } from "./hooks/use-maps-screen";

export default function MapsScreen() {
    const { venues, isPending, isError, selectedVenue, setSelectedVenue } = useMapsScreen();

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;

    return (
        <View style={{ flex: 1 }}>
            <MapsView
                venues={venues ?? []}
                selectedVenueId={selectedVenue?.venue_public_id ?? null}
                onMarkerPress={setSelectedVenue}
            />
            <Sheet
                data={selectedVenue}
                onClose={() => setSelectedVenue(null)}
            />
        </View>
    );
}