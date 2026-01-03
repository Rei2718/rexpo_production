import { ALL_VENUE_ID } from "@/constants/venue-constants";
import { useDisplayVenue, useEventsByVenue } from "@/supabase/api";
import { useState } from "react";


export function useTimeline() {
    const { data: venues, isPending: venuesPending, isError: venuesError } = useDisplayVenue();
    const [selectedVenueId, setSelectedVenueId] = useState<string>(ALL_VENUE_ID);

    const { data: events, isPending: eventsPending, isError: eventsError } = useEventsByVenue(selectedVenueId);

    return {
        venues,
        selectedVenueId,
        setSelectedVenueId,
        events,
        venuesPending,
        venuesError,
        eventsPending,
        eventsError,
    };
}