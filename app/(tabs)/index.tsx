import { Container } from "@/components/ui/container";
import { ThemedText } from "@/components/ui/themed-text";
import { Spacing } from "@/constants/theme";
import { ScrollView } from 'react-native';

export default function IndexScreen() {
  return (
    <Container flex={1}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: Spacing.s20,
          paddingBottom: Spacing.s80
        }}
      >
        <ThemedText type="title2" style={{ marginBottom: Spacing.s24, textAlign: 'center' }}>
          現在の進捗状況
        </ThemedText>

        <Container gap="s24" alignItems="center">
          <ProgressItem
            title="データ"
            description="現在表示されているデータは全てダミーデータです。"
          />
          <ProgressItem
            title="ブックマーク機能"
            description="ブックマーク機能自体は実装されていますが、ブックマーク済みコンテンツを確認する画面は未実装です。"
          />
          <ProgressItem
            title="モーダル"
            description="CategoryおよびTagのモーダルスクリーンは実装されていません。"
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