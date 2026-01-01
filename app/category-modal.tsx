import { TagGroup } from "@/components/explore/tag-group";
import { Container } from "@/components/ui/container";
import { StatusMessage } from "@/components/ui/status-message";
import { ThemedText } from "@/components/ui/themed-text";
import { Spacing } from "@/constants/theme";
import { useTagAndEventsByCategory } from "@/supabase/api";
import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList } from "react-native-gesture-handler";

export default function CategoryModal() {
    const { category_public_id, name } = useLocalSearchParams<{ category_public_id: string; name: string }>();
    const { data, isPending, isError } = useTagAndEventsByCategory(category_public_id);

    if (isPending) return <StatusMessage status="loading" />
    if (isError) return <StatusMessage status="error" />
    if (!data || data.length === 0) return <StatusMessage status="empty" />

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: () => <ThemedText type="headline">{name}</ThemedText>
                }}
            />
            <FlatList
                data={data}
                renderItem={({ item }) => <TagGroup {...item} />}
                keyExtractor={(item) => item.tag_public_id}
                ItemSeparatorComponent={() => <Container style={{ height: Spacing.s32 }} />}
                contentContainerStyle={{
                    paddingBottom: Spacing.s20,
                }}
            />
        </>
    );
}