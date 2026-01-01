import { Container } from '@/components/ui/container';
import { VenueDetails, Verified } from '@/supabase/api/types';
import { Header } from './header';
import { InfoCard } from './info-card';
import { Organization } from './organization';
import { TimelinePreview } from './timeline-preview';


export default function Details(data: Verified<VenueDetails>) {
    return (
        <Container flex={1} gap="s32">
            <Header {...data} />

            <Container paddingHorizontal="s20">
                <InfoCard {...data} />
            </Container>

            <TimelinePreview {...data} />

            <Organization {...data} />
        </Container>
    );
}