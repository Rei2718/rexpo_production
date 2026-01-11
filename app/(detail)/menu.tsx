import { SettingsLinkItem } from "@/components/settings/settings-link-item";
import { SettingsSection } from "@/components/settings/settings-section";
import { Container } from "@/components/ui/container";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";

export default function MenuScreen() {
    const color = useThemeColor();
    const { modal } = useBottomPadding();

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "メニュー",
                }}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
                <Container paddingHorizontal="s20" gap="s32" style={{ paddingBottom: modal }}>

                    <SettingsSection title="アプリ設定">
                        <SettingsLinkItem
                            label="設定"
                            icon="gear"
                            href="/(detail)/settings"
                            isLast={true}
                        />
                    </SettingsSection>

                </Container >
            </ScrollView >
        </>
    );
}