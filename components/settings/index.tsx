import { ThemedText } from "@/components/ui/themed-text";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Container } from "../ui/container";
import { SettingsLinkItem } from "./settings-link-item";
import { SettingsSection } from "./settings-section";


export default function SettingsScreen() {
    const color = useThemeColor();
    const { modal } = useBottomPadding();

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "設定",
                }}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Container paddingHorizontal="s20" gap="s32" style={{ paddingBottom: modal }}>

                    {/* Support */}
                    <SettingsSection title="サポート">
                        <SettingsLinkItem
                            label="お問い合わせ / 不具合報告"
                            icon="link"
                            href="https://google.com"
                        />
                        <SettingsLinkItem
                            label="公式サイト"
                            icon="link"
                            href="https://google.com"
                            isLast={true}
                        />
                    </SettingsSection>

                    {/* About App */}
                    <SettingsSection title="アプリについて">
                        <SettingsLinkItem
                            label="コア・コンセプト"
                            icon="pentagon"
                            href="/(detail)/core-concept"
                        />
                        <SettingsLinkItem
                            label="利用規約"
                            icon="contract"
                            href="/(detail)/terms"
                        />
                        <SettingsLinkItem
                            label="プライバシーポリシー"
                            icon="contract"
                            href="/(detail)/privacy"
                        />
                        <SettingsLinkItem
                            label="ライセンス"
                            icon="verified"
                            href="/(detail)/licenses"
                            isLast={true}
                        />
                    </SettingsSection>

                    {/* Footer */}
                    <Container alignItems="center">
                        <ThemedText type="caption1" style={{ color: color.natural_300 }}>
                            v4.0.0
                        </ThemedText>
                    </Container>

                </Container>
            </ScrollView>
        </>
    );
}