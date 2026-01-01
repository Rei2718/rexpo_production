import { Container } from '@/components/ui/container';
import { useBottomTabPadding } from '@/hooks/use-bottom-tab-padding';
import { VenueDetails, Verified } from '@/supabase/api/types';
import { Header } from './header';
import { InfoCard } from './info-card';
import { Organization } from './organization';


export default function Details(data: Verified<VenueDetails>) {
    const tabHeight = useBottomTabPadding();

    return (
        <Container flex={1} gap="s32" style={{ paddingBottom: tabHeight }}>
            <Header {...data} />

            <Container paddingHorizontal="s20">
                <InfoCard {...data} />
            </Container>

            <Organization {...data} />
        </Container>
    );
}