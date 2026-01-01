import { useDisplayVenue, useEventsByVenue } from "@/supabase/api";
import { useState } from "react";

export function useTimeline() {
    const { data: venues, isPending: venuesPending, isError: venuesError } = useDisplayVenue();
    const [manualSelectedVenueId, setManualSelectedVenueId] = useState<string | undefined>();

    const selectedVenueId = manualSelectedVenueId ?? venues?.[0]?.venue_public_id;

    const { data: events, isPending: eventsPending, isError: eventsError } = useEventsByVenue(selectedVenueId);

    return {
        venues,
        selectedVenueId,
        setSelectedVenueId: setManualSelectedVenueId,
        events,
        venuesPending,
        venuesError,
        eventsPending,
        eventsError,
    };
}