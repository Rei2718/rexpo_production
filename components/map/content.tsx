import { StatusMessage } from '@/components/ui/status-message';
import { useVenueDetails } from '@/supabase/api';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import Details from './details';

export function Content(data: Verified<DisplayVenue>) {
    const { data: venueDetailsData, isPending, isError } = useVenueDetails(data.venue_public_id);

    if (isPending) return <StatusMessage status="loading" />;
    if (isError || !venueDetailsData) return <StatusMessage status="error" />;

    return <Details {...venueDetailsData} />;
}