import { ListItem } from "@/components/ui/list-item";
import { Section } from "@/components/ui/section";
import { Spacing } from "@/constants/theme";
import { EventOrganization as EventOrganizationType, Verified } from "@/supabase/api/types";
import { StyleSheet } from "react-native";

import { NO_DATA } from "@/constants/no-data";

export function EventOrganization({ data }: { data: Verified<EventOrganizationType> }) {
    return (
        <Section title="主催">
            <ListItem
                image={data.icon}
                title={data.name ?? NO_DATA}
                subtitle={data.caption ?? NO_DATA}
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