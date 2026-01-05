import { EventListItem } from "@/components/shared/event-list-item";
import { StatusMessage } from "@/components/ui/status-message";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { Spacing } from "@/constants/theme";
import { useEventsByTag } from "@/supabase/api";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";


export default function TagScreen() {
    const { tag_public_id, name } = useLocalSearchParams<{ tag_public_id: string; name: string }>();
    const { data, isPending, isError } = useEventsByTag(tag_public_id);

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data || data.length === 0) return <StatusMessage status="empty" />;

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: () => <ThemedText type="headline">{name}</ThemedText>
                }}
            />
            <FlatList
                data={data}
                renderItem={({ item }) => <EventListItem {...item} />}
                keyExtractor={(item) => item.event_public_id}
                ItemSeparatorComponent={() => (
                    <ThemedView color="natural_500" style={styles.separator} />
                )}
                contentContainerStyle={{
                    padding: Spacing.s20,
                }}
                contentInsetAdjustmentBehavior="automatic"
            />
        </>
    );
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        marginVertical: Spacing.s8,
        marginLeft: Spacing.s64,
    },
});