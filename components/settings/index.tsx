import { ThemedText } from "@/components/ui/themed-text";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
// import { useSettingStore } from "@/hooks/use-setting-store"; // Removed
import { useThemeActionSheet } from "@/hooks/use-theme-action-sheet";
import { useUserLocation } from "@/hooks/use-user-location";
import { Stack } from "expo-router";
import { Linking, ScrollView } from "react-native";
import { Container } from "../ui/container";
import { SettingsActionItem } from "./settings-action-item";
import { SettingsLinkItem } from "./settings-link-item";
import { SettingsSection } from "./settings-section";


export default function SettingsScreen() {
    const { modal } = useBottomPadding();
    const { status } = useUserLocation();
    const { showThemeActionSheet, themeLabel } = useThemeActionSheet();

    const isLocationGranted = status === 'granted';

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "設定",
                }}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
                <Container paddingHorizontal="s20" gap="s32" style={{ paddingBottom: modal }}>

                    {/* Display */}
                    <SettingsSection title="表示">
                        <SettingsActionItem
                            label="テーマ"
                            icon="mode"
                            value={themeLabel}
                            onPress={showThemeActionSheet}
                            isLast={true}
                        />
                    </SettingsSection>

                    {/* Privacy */}
                    <SettingsSection title="プライバシー">
                        <SettingsActionItem
                            label="位置情報の許可"
                            icon="locationOnFill"
                            value={isLocationGranted ? "許可済み" : "許可しない"}
                            onPress={() => Linking.openSettings()}
                        />
                        <Container paddingHorizontal="s8" paddingVertical="s16">
                            <ThemedText type="subhead" color="natural_200">
                                アプリが位置情報を利用するにはOSの設定で許可が必要です。許可設定は端末の設定画面から変更できます。
                            </ThemedText>
                        </Container>
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

                </Container >
            </ScrollView >
        </>
    );
}