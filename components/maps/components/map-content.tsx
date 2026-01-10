import { StatusMessage } from '@/components/ui/status-message';
import { useVenueDetails } from '@/supabase/api';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import Details from './map-details';

export function Content(data: Verified<DisplayVenue>) {
    const { data: venueDetails, isPending, isError } = useVenueDetails(data.venue_public_id);

    if (isPending) return <StatusMessage status="loading" />;
    if (isError || !venueDetails) return <StatusMessage status="error" />;

    return <Details {...venueDetails} />;
}