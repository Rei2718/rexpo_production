import { SettingsLinkItem } from "@/components/settings/settings-link-item";
import { SettingsSection } from "@/components/settings/settings-section";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { PressableScale } from "@/components/ui/pressable-scale";
import { ThemedText } from "@/components/ui/themed-text";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Stack, useRouter } from "expo-router";
import { ScrollView, useColorScheme } from "react-native";

export default function MenuScreen() {
    const color = useThemeColor();
    const { modal } = useBottomPadding();
    const theme = useColorScheme() ?? 'light';
    const router = useRouter();

    return (
        <>
            <Stack.Screen
                options={{
                    headerLeft: () => null,
                    headerRight: () => (
                        <PressableScale onPress={() => router.back()}>
                            <Icon icon="close" color={color.natural_100} />
                        </PressableScale>
                    ),
                }}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
                <Container paddingHorizontal="s20" gap="s32" style={{ paddingBottom: modal }}>
                    {/* Features */}
                    <SettingsSection title="その他">
                        <SettingsLinkItem
                            label="フード"
                            icon="food"
                            href="/(detail)/food"
                        />
                        <SettingsLinkItem
                            label="アンケート"
                            icon="survey"
                            href="/(detail)/survey"
                        />
                        <SettingsLinkItem
                            label="ニュース"
                            icon="browse"
                            href="/(detail)/news"
                            isLast={true}
                        />
                    </SettingsSection>

                    {/* App Info */}
                    <SettingsSection title="アプリについて">
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
                        />
                        <SettingsLinkItem
                            label="クレジット"
                            icon="humanFill"
                            href="/(detail)/credits"
                        />
                        <SettingsLinkItem
                            label="コア・コンセプト"
                            icon="pentagon"
                            href="/(detail)/core-concept"
                            isLast={true}
                        />
                    </SettingsSection>


                    {/* Support */}
                    <SettingsSection title="サポート">
                        <SettingsLinkItem
                            label="バグ報告"
                            icon="link"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdPEU1ETnndLiPo4Wy1vszlxvkzTG9uObHesd-ZSlDMyYH8Cw/viewform?usp=dialog"
                        />
                        <SettingsLinkItem
                            label="立命館慶祥中学・高等学校"
                            icon="link"
                            href="https://www2.spc.ritsumei.ac.jp"
                            isLast={true}
                        />
                    </SettingsSection>

                    {/* Settings */}
                    <SettingsSection title="アプリ設定">
                        <SettingsLinkItem
                            label="設定"
                            icon="gear"
                            href="/(detail)/settings"
                            isLast={true}
                        />
                    </SettingsSection>

                    {/* Version Footer */}


                    <Container alignItems="center">
                        <ThemedText type="caption1">
                            v5.1.3
                        </ThemedText>
                    </Container>

                </Container >
            </ScrollView >
        </>
    );
}