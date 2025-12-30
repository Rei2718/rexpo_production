import { DisplayVenue } from '@/supabase/api/types';
import React from 'react';
import VenueMarker from './venue-marker';

interface VenueMarkerListProps {
    venues: DisplayVenue[];
    onSelect?: (venue: DisplayVenue) => void;
    selectedVenueId?: string | null;
}

export default function VenueMarkerList({ venues, onSelect, selectedVenueId }: VenueMarkerListProps) {
    return (
        <>
            {venues.map((venue) => (
                <VenueMarker
                    key={venue.venue_public_id}
                    venue={venue}
                    isSelected={selectedVenueId === venue.venue_public_id}
                    onSelect={onSelect}
                />
            ))}
        </>
    );
}