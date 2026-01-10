import { ThemedText } from "@/components/ui/themed-text";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
// import { useSettingStore } from "@/hooks/use-setting-store"; // Removed
import { useThemeColor } from "@/hooks/use-theme-color";
import { useUserLocation } from "@/hooks/use-user-location";
import { Stack } from "expo-router";
import { Linking, ScrollView } from "react-native";
import { Container } from "../ui/container";
import { SettingsActionItem } from "./settings-action-item";
import { SettingsLinkItem } from "./settings-link-item";
import { SettingsSection } from "./settings-section";


export default function SettingsScreen() {
    const color = useThemeColor();
    const { modal } = useBottomPadding();
    // const { isLocationVisible, setLocationVisible } = useSettingStore(); // Removed
    const { status } = useUserLocation();

    const isLocationGranted = status === 'granted';

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

                    {/* Data */}
                    <SettingsSection title="データ">
                        <SettingsLinkItem
                            label="開発者メニュー"
                            icon="gear"
                            href="/(detail)/developer"
                            isLast={true}
                        />
                    </SettingsSection>

                    {/* Privacy */}
                    <SettingsSection title="プライバシー">
                        <SettingsActionItem
                            label="位置情報の許可"
                            icon="locationOn"
                            value={isLocationGranted ? "許可済み" : "許可しない"}
                            onPress={() => Linking.openSettings()}
                        />
                        <Container paddingHorizontal="s16" paddingTop="s8">
                            <ThemedText type="caption2" style={{ color: color.natural_400 }}>
                                アプリが位置情報を利用するにはOSの設定で許可が必要です。許可設定は端末の設定画面から変更できます。
                            </ThemedText>
                        </Container>
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