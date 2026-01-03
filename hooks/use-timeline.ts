import { ALL_VENUE_ID } from "@/constants/venue-constants";
import { useDisplayVenue, useEventsByVenue } from "@/supabase/api";
import { useMemo, useState } from "react";


export function useTimeline() {
    const { data: venues, isPending: venuesPending, isError: venuesError } = useDisplayVenue();
    const [selectedVenueId, setSelectedVenueId] = useState<string>(ALL_VENUE_ID);

    const { data: rawEvents, isPending: eventsPending, isError: eventsError } = useEventsByVenue(selectedVenueId);

    const events = useMemo(() => {
        if (!rawEvents) return [];

        if (selectedVenueId === ALL_VENUE_ID) {
            return rawEvents;
        }

        return rawEvents.map((slot) => ({
            ...slot,
            events: slot.events.map((event) => ({
                ...event,
                venue_name: null,
            })),
        }));
    }, [rawEvents, selectedVenueId]);

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