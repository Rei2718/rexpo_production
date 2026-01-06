import { OrganizerCard } from "@/components/shared/organizer-card";
import { Section } from "@/components/ui/section";
import { EventDetails, Verified } from "@/supabase/api/types";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Container } from "../ui/container";

export function EventOrganization(data: Verified<EventDetails>) {
    if (!data.organization) return null;

    return (
        <Section title="主催">
            <Container flexDirection="column" gap="s8">
                <Link
                    href={{
                        pathname: "/(detail)/organization-details",
                        params: { organization_public_id: data.organization.organization_public_id },
                    }}
                    asChild
                >
                    <TouchableOpacity>
                        <OrganizerCard {...data.organization} />
                    </TouchableOpacity>
                </Link>
            </Container>
        </Section>
    );
}