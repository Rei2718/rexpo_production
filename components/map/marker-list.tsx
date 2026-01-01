import { DisplayVenue, Verified } from '@/supabase/api/types';
import Marker from './marker';

interface MarkerListProps {
    venues: Verified<DisplayVenue>[];
    onSelect?: (venue: Verified<DisplayVenue>) => void;
    selectedVenueId?: string | null;
}

export default function MarkerList({ venues, onSelect, selectedVenueId }: MarkerListProps) {
    return (
        <>
            {venues.map((venue) => (
                <Marker
                    key={venue.venue_public_id}
                    venue={venue}
                    isSelected={selectedVenueId === venue.venue_public_id}
                    onSelect={onSelect}
                />
            ))}
        </>
    );
}