import { Column } from "@/components/ui/flex";
import { ListItem } from "@/components/ui/list-item";
import { Section } from "@/components/ui/section";
import { Spacing } from "@/constants/theme";
import { EventPerformer, Verified } from "@/supabase/api/types";
import { StyleSheet } from "react-native";

export function EventPerformers({ data }: { data: Verified<EventPerformer>[] }) {
    if (data.length === 0) return null;

    return (
        <Section title="出演">
            <Column gap="s12">
                {data.map((performer, index) => (
                    <ListItem
                        key={performer.performer_public_id}
                        image={performer.icon}
                        title={performer.name}
                        subtitle={performer.affiliation}
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
