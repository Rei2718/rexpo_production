import { Column } from "@/components/ui/flex";
import { ListItem } from "@/components/ui/list-item";
import { Section } from "@/components/ui/section";
import { Spacing } from "@/constants/theme";
import { EventPerformer, Verified } from "@/supabase/api/types";
import { StyleSheet } from "react-native";

import { NO_DATA } from "@/constants/no-data";

export function EventPerformers({ data }: { data: Verified<EventPerformer>[] }) {
    if (data.length === 0) return null;

    return (
        <Section title="出演">
            <Column gap="s12">
                {data.map((item) => (
                    <ListItem
                        key={item.performer_public_id}
                        image={item.icon ?? ""}
                        title={item.name ?? NO_DATA}
                        subtitle={item.affiliation ?? NO_DATA}
                        color="natural_400"
                        style={styles.card}
                    />
                ))}
            </Column>
        </Section>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: Spacing.s20,
    },
});