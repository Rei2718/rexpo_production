import { ListItem } from "@/components/ui/list-item";
import { Section } from "@/components/ui/section";
import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { EventDetails, Verified } from "@/supabase/api/types";
import { StyleSheet } from "react-native";

export function EventOrganization(data: Verified<EventDetails>) {
    if (!data.organization) return null;

    const org = data.organization;

    return (
        <Section title="主催">
            <ListItem
                image={org.icon}
                title={org.name ?? NO_DATA}
                subtitle={org.caption ?? NO_DATA}
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