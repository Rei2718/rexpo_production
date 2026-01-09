import { StatusMessage } from "@/components/ui/status-message";
import { useAllVenues } from "@/supabase/api";
import { View } from "react-native";
import MapsView from "./maps-view";

export default function MapsScreen() {
    const { data: venues, isPending, isError } = useAllVenues();

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;

    return (
        <View style={{ flex: 1 }}>
            <MapsView venues={venues ?? []} />
        </View>
    );
}