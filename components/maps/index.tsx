import Sheet from "@/components/map/sheet";
import { StatusMessage } from "@/components/ui/status-message";
import { useAllVenues } from "@/supabase/api";
import { DisplayVenue, Verified } from "@/supabase/api/types";
import { useState } from "react";
import { View } from "react-native";
import MapsView from "./maps-view";

export default function MapsScreen() {
    const { data: venues, isPending, isError } = useAllVenues();
    const [selectedVenue, setSelectedVenue] = useState<Verified<DisplayVenue> | null>(null);

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;

    return (
        <View style={{ flex: 1 }}>
            <MapsView
                venues={venues ?? []}
                onMarkerPress={setSelectedVenue}
            />
            <Sheet
                data={selectedVenue}
                onClose={() => setSelectedVenue(null)}
            />
        </View>
    );
}