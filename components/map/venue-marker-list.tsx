import { DisplayVenue, Verified } from '@/supabase/api/types';
import VenueMarker from './venue-marker';

interface VenueMarkerListProps {
    venues: Verified<DisplayVenue>[];
    onSelect?: (venue: Verified<DisplayVenue>) => void;
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