import { Spacing } from "@/constants/theme";
import { useSeveralEventsByTag } from "@/supabase/api";
import { FlatList } from "react-native";
import { Container } from "../ui/container";
import { StatusMessage } from "../ui/status-message";
import { ContentHeader } from "./content-header";
import { TagSection } from "./tag-section";


export default function Content() {
    const { data, isPending, isError } = useSeveralEventsByTag();

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data || data.length === 0) return <StatusMessage status="empty" />;

    return (
        <FlatList
            data={data}
            ListHeaderComponent={<ContentHeader />}
            renderItem={({ item }) => <TagSection item={item} />}
            ItemSeparatorComponent={() => <Container style={{ height: Spacing.s48 }} />}
            keyExtractor={(item) => item.tag_public_id}
            showsVerticalScrollIndicator={false}
        />
    );
}