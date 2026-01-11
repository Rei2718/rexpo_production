import { Column } from "@/components/ui/flex";
import { StatusMessage } from "@/components/ui/status-message";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useNews } from "@/supabase/api";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { ScrollView } from "react-native";
import { NewsDescription } from "./description";
import { NewsHeader } from "./header";
import { NewsInfoCard } from "./info-card";

export default function NewsDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { data: allNews, isPending, isError } = useNews();
    const { modal } = useBottomPadding();

    // Find the specific news item
    const data = useMemo(() => {
        return allNews?.find((item) => item.news_public_id === id);
    }, [allNews, id]);

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data) return <StatusMessage status="empty" />;

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{ paddingBottom: modal }}
        >
            <Column gap="s32">
                {/* Header */}
                <NewsHeader {...data} />

                {/* Info */}
                <Column paddingHorizontal="s20">
                    <NewsInfoCard {...data} />
                </Column>

                {/* Overview */}
                <Column paddingHorizontal="s20">
                    <NewsDescription {...data} />
                </Column>
            </Column>
        </ScrollView>
    );
}