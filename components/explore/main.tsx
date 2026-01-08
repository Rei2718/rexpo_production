import { Spacing } from "@/constants/theme";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useSeveralEventsByTag } from "@/supabase/api";
import { FlatList, Platform } from "react-native";
import { Container } from "../ui/container";
import { StatusMessage } from "../ui/status-message";
import { StickyHeader } from "./sticky-header";
import { TagGroup } from "./tag-group";


export default function ExploreMain() {
    const { tab } = useBottomPadding();
    const { data, isPending, isError } = useSeveralEventsByTag();

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data || data.length === 0) return <StatusMessage status="empty" />;

    return (
        <FlatList
            data={data}
            ListHeaderComponent={<StickyHeader />}
            renderItem={({ item }) => <TagGroup {...item} />}
            ItemSeparatorComponent={() => <Container style={{ height: Spacing.s32 }} />}
            keyExtractor={(item) => item.tag_public_id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: tab }}

            initialNumToRender={5}
            windowSize={10}
            maxToRenderPerBatch={5}
            removeClippedSubviews={Platform.OS !== 'ios'}
        />
    );
}