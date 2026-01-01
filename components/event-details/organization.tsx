import { OrganizerCard } from "@/components/shared/organizer-card";
import { Section } from "@/components/ui/section";
import { EventDetails, Verified } from "@/supabase/api/types";
import { Container } from "../ui/container";

export function EventOrganization(data: Verified<EventDetails>) {
    if (!data.organization) return null;

    return (
        <Section title="主催">
            <Container flexDirection="column" gap="s12">
                <OrganizerCard {...data.organization} />
            </Container>
        </Section>
    );
}