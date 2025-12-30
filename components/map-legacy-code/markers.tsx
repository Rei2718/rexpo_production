import { Venue } from '@/supabase/api/type';
import React from 'react';
import VenueMarker from './marker';

interface VenueMarkersProps {
    venues: Venue[];
    onSelect?: (venue: any) => void;
    selectedVenueId?: string | null;
}

const VenueMarkers = React.memo(({ venues, onSelect, selectedVenueId }: VenueMarkersProps) => {
    return (
        <>
            {venues.map((data) => (
                <VenueMarker
                    key={data.venue_public_id}
                    venue={data}
                    isSelected={selectedVenueId === data.venue_public_id}
                    onSelect={onSelect}
                />
            ))}
        </>
    );
});

export default VenueMarkers;
