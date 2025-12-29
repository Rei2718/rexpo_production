import { Spacing } from "@/constants/theme";
import { useSeveralEventsByTag } from "@/supabase/api";
import { FlatList } from "react-native";
import { Container } from "../ui/container";
import { StatusMessage } from "../ui/status-message";
import { StickyHeader } from "./sticky-header";
import { TagGroup } from "./tag-group";


export default function ExploreMain() {
    const { data, isPending, isError } = useSeveralEventsByTag();

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data || data.length === 0) return <StatusMessage status="empty" />;

    return (
        <FlatList
            data={data}
            ListHeaderComponent={<StickyHeader />}
            renderItem={({ item }) => <TagGroup item={item} />}
            ItemSeparatorComponent={() => <Container style={{ height: Spacing.s40 }} />}
            keyExtractor={(item) => item.tag_public_id}
            showsVerticalScrollIndicator={false}
        />
    );
}