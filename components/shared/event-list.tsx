import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { EventOverview, Verified } from "@/supabase/api/types";
import { FlatList, StyleSheet, View } from "react-native";
import { Container } from "../ui/container";
import { EventListItem } from "./event-list-item";

export function EventList({ data }: { data: Verified<EventOverview>[] }) {
    const color = useThemeColor();

    return (
        <Container style={[styles.container, { backgroundColor: color.natural_500 }]}>
            <FlatList
                data={data}
                keyExtractor={(event) => event.event_public_id}
                renderItem={({ item }) => <EventListItem data={item} />}
                ItemSeparatorComponent={() => (
                    <View
                        style={[
                            styles.separator,
                            { backgroundColor: color.natural_400 }
                        ]}
                    />
                )}
                scrollEnabled={false}
            />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: Spacing.s20,
        padding: Spacing.s8,
        overflow: 'hidden',
    },
    separator: {
        height: 1,
        marginVertical: Spacing.s8,
        marginLeft: Spacing.s64,
    },
});
