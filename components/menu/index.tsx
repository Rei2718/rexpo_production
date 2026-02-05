import { MenuCarousel } from "@/components/menu/carousel";
import { SettingsLinkItem } from "@/components/settings/settings-link-item";
import { SettingsSection } from "@/components/settings/settings-section";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { PressableScale } from "@/components/ui/pressable-scale";
import { ThemedText } from "@/components/ui/themed-text";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useScreenView } from "@/hooks/use-screen-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Stack, useRouter } from "expo-router";
import { ScrollView, useColorScheme } from "react-native";

export default function MenuScreen() {
    const color = useThemeColor();
    const { modal } = useBottomPadding();
    const theme = useColorScheme() ?? 'light';
    const router = useRouter();

    useScreenView({
        screen: 'menu',
        label: 'Menu',
    });

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
                <Container gap="s32" style={{ paddingBottom: modal }}>
                    <Container gap="s8" paddingTop="s20">
                        <Container paddingHorizontal="s36">
                            <ThemedText type="footnote" color="natural_200">
                                お知らせ
                            </ThemedText>
                        </Container>
                        <MenuCarousel />
                    </Container>

                    <Container paddingHorizontal="s20" gap="s32">
                        {/* Features */}
                        <SettingsSection title="その他">
                            <SettingsLinkItem
                                label="フード"
                                icon="food"
                                href="/(detail)/food"
                            />
                            <SettingsLinkItem
                                label="マップ"
                                icon="mapFill"
                                href="/map"
                            />
                            <SettingsLinkItem
                                label="アンケート"
                                icon="survey"
                                href="/(detail)/survey"
                            />
                            <SettingsLinkItem
                                label="パートナー"
                                icon="favoriteFill"
                                href="/(detail)/partners"
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
                                v5.7.2
                            </ThemedText>
                        </Container>

                    </Container >
                </Container >
            </ScrollView >
        </>
    );
}