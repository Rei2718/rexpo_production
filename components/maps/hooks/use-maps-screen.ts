import { useAllVenues } from "@/supabase/api";
import { DisplayVenue, Verified } from "@/supabase/api/types";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

export function useMapsScreen() {
    const { data: venues, isPending, isError } = useAllVenues();
    const [selectedVenue, setSelectedVenue] = useState<Verified<DisplayVenue> | null>(null);

    useFocusEffect(
        useCallback(() => {
            return () => {
                setSelectedVenue(null);
            };
        }, [])
    );

    return {
        venues,
        isPending,
        isError,
        selectedVenue,
        setSelectedVenue,
    };
}