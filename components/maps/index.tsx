import { StatusMessage } from "@/components/ui/status-message";
import { useAllVenues } from "@/supabase/api";
import { DisplayVenue, Verified } from "@/supabase/api/types";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";
import Sheet from "./components/map-bottom-sheet";
import MapsView from "./components/map-view";

export default function MapsScreen() {
    const { data: venues, isPending, isError } = useAllVenues();
    const [selectedVenue, setSelectedVenue] = useState<Verified<DisplayVenue> | null>(null);

    useFocusEffect(
        useCallback(() => {
            return () => {
                setSelectedVenue(null);
            };
        }, [])
    );

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