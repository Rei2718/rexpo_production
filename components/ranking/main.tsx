import { RankingSection } from "@/components/ranking/ranking-section";
import { Container } from "@/components/ui/container";
import { StatusMessage } from "@/components/ui/status-message";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useEventRankings } from "@/supabase/api";
import { RefreshControl, ScrollView } from "react-native";
import TitleBar from "./title-bar";

export default function RankingMain() {
    const { data, isPending, isError, refetch } = useEventRankings();
    const color = useThemeColor();
    const { tab } = useBottomPadding();

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data || (data.top.length === 0 && data.trending.length === 0)) return <StatusMessage status="empty" />;

    const topList = data.top;
    const trendingList = data.trending;

    return (
        <Container flex={1}>
            <ScrollView
                contentContainerStyle={{ paddingBottom: tab }}
                refreshControl={
                    <RefreshControl refreshing={isPending} onRefresh={refetch} tintColor={color.tint} />
                }
                showsVerticalScrollIndicator={false}
            >
                <TitleBar />
                <Container gap="s32">
                    <RankingSection title="🏆 トップ" data={topList} variant="top" />
                    <RankingSection title="🔥 急上昇" data={trendingList} variant="trending" />
                </Container>
            </ScrollView>
        </Container>
    );
}