import { useDisplayVenue, useEventsByVenue } from "@/supabase/api";
import { useEffect, useState } from "react";

export function useTimeline() {
    const { data: venues, isPending: venuesPending, isError: venuesError } = useDisplayVenue();
    const [selectedVenueId, setSelectedVenueId] = useState<string | undefined>();

    useEffect(() => {
        if (venues && venues.length > 0 && !selectedVenueId) {
            setSelectedVenueId(venues[0].venue_public_id);
        }
    }, [venues, selectedVenueId]);

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
