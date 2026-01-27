import { Column } from "@/components/ui/flex";
import { StatusMessage } from "@/components/ui/status-message";
import { ThemedText } from "@/components/ui/themed-text";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useScreenView } from "@/hooks/use-screen-view";
import { useNews } from "@/supabase/api";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { ScrollView } from "react-native";
import { NewsDescription } from "./description";
import { NewsHeader } from "./header";

export default function NewsDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { data: allNews, isPending, isError } = useNews();
    const { modal } = useBottomPadding();

    // Find the specific news item
    const data = useMemo(() => {
        return allNews?.find((item) => item.news_public_id === id);
    }, [allNews, id]);

    useScreenView({
        screen: 'news-details',
        label: data?.name,
        isReady: !!data,
    });

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

                {/* Body & Author */}
                <Column paddingHorizontal="s20" gap="s8">
                    <NewsDescription {...data} />
                    <ThemedText type="caption1" color="natural_200" style={{ alignSelf: 'flex-end' }}>
                        著者: {data.performer?.name ?? "R-EXPO 運営"}
                    </ThemedText>
                </Column>
            </Column>
        </ScrollView>
    );
}