import RankingMain from "@/components/ranking/main";
import { ThemedView } from "@/components/ui/themed-view";
import { useScreenView } from "@/hooks/use-screen-view";

export default function RankingScreen() {
    useScreenView({
        screen: 'ranking',
        label: 'ランキング',
    });

    return (
        <ThemedView style={{ flex: 1 }}>
            <RankingMain />
        </ThemedView>
    );
}