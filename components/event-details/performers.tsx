import { PerformerCard } from "@/components/shared/performer-card";
import { Section } from "@/components/ui/section";
import { EventDetails, Verified } from "@/supabase/api/types";
import { Container } from "../ui/container";


export function EventPerformers(data: Verified<EventDetails>) {
    if (!data.performers || data.performers.length === 0) return null;

    return (
        <Section title="出演">
            <Container flexDirection="column" gap="s8">
                {data.performers.map((item) => (
                    <PerformerCard {...item} key={item.performer_public_id} />
                ))}
            </Container>
        </Section>
    );
}