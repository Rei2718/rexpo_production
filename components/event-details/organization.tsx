import { ListItem } from "@/components/ui/list-item";
import { Section } from "@/components/ui/section";
import { Spacing } from "@/constants/theme";
import { EventOrganization as EventOrganizationType, Verified } from "@/supabase/api/types";
import { StyleSheet } from "react-native";

export function EventOrganization({ data }: { data: Verified<EventOrganizationType> }) {
    if (!data.name) return null;

    return (
        <Section title="主催">
            <ListItem
                image={data.icon}
                title={data.name}
                subtitle={data.caption}
                color="natural_400"
                style={styles.card}
            />
        </Section>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: Spacing.s20,
    },
});


