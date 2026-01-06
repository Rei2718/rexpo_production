import { Container } from "@/components/ui/container";
import { ThemedText } from "@/components/ui/themed-text";
import { Spacing } from "@/constants/theme";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { ScrollView } from 'react-native';

export default function HomeScreen() {
    const { tab } = useBottomPadding();
    return (
        <Container flex={1}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: Spacing.s20,
                    paddingBottom: tab
                }}
                contentInsetAdjustmentBehavior="automatic"
            >
                <ThemedText type="title2" style={{ marginBottom: Spacing.s24, textAlign: 'center' }}>
                    現在の進捗状況
                </ThemedText>

                <Container gap="s24" alignItems="center">
                    <ProgressItem
                        title="Githubリポジトリ - バグや修正などはこちらから"
                        description="https://github.com/Rei2718/rexpo_production/issues"
                    />
                    <ProgressItem
                        title="データ"
                        description="現在表示されているデータは全てダミーデータです。"
                    />
                    <ProgressItem
                        title="マップ機能"
                        description={`カスタムマップオーバーレイは未実装です。\nマーカー処理にバグがあります。\nボトムシートの開閉動作にバグがあります。`}
                    />
                    <ProgressItem
                        title="未実装画面"
                        description="ホームスクリーンおよびオンボーディングは未実装です。"
                    />
                </Container>
            </ScrollView>
        </Container>
    );
}

function ProgressItem({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <Container gap="s4" alignItems="center">
            <ThemedText type="callout" style={{ textAlign: 'center' }}>{title}</ThemedText>
            <ThemedText type="footnote" style={{ opacity: 0.8, textAlign: 'center' }}>
                {description}
            </ThemedText>
        </Container>
    );
}