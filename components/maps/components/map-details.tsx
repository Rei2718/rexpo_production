import { Container } from '@/components/ui/container';
import { VenueDetails, Verified } from '@/supabase/api/types';
import { Header } from './map-header';
import { InfoCard } from './map-info-card';
import { Organization } from './map-organization';
import { TimelinePreview } from './map-timeline-preview';


export default function Details(data: Verified<VenueDetails>) {
    return (
        <Container gap="s32">
            <Header {...data} />

            <Container paddingHorizontal="s20">
                <InfoCard {...data} />
            </Container>

            <TimelinePreview {...data} />

            <Organization {...data} />
        </Container>
    );
}