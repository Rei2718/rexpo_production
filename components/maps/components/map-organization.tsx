import { OrganizerCard } from '@/components/shared/organizer-card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { VenueDetails, Verified } from '@/supabase/api/types';

export function Organization(data: Verified<VenueDetails>) {
    if (!data.organizations || data.organizations.length === 0) return null;

    return (
        <Container paddingHorizontal="s20">
            <Section title="スポンサー">
                <Container gap="s8">
                    {data.organizations.map((org) => (
                        <OrganizerCard key={org.organization_public_id} {...org} />
                    ))}
                </Container>
            </Section>
        </Container>
    );
}