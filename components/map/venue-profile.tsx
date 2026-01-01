import { OrganizationList } from '@/components/map/organization-list';
import { VenueHeader } from '@/components/map/venue-header';
import { VenueInfoCard } from '@/components/map/venue-info-card';
import { Container } from '@/components/ui/container';
import { useBottomTabPadding } from '@/hooks/use-bottom-tab-padding';
import { VenueDetails, Verified } from '@/supabase/api/types';


export default function VenueProfile(data: Verified<VenueDetails>) {
    const tabHeight = useBottomTabPadding();

    return (
        <Container flex={1} gap="s32" style={{ paddingBottom: tabHeight }}>
            <VenueHeader {...data} />

            <Container paddingHorizontal="s20">
                <VenueInfoCard {...data} />
            </Container>

            <OrganizationList {...data} />
        </Container>
    );
}