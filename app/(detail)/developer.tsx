import { SettingsActionItem } from "@/components/settings/settings-action-item";
import { SettingsSection } from "@/components/settings/settings-section";
import { Container } from "@/components/ui/container";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useLaunchStore } from "@/store/use-launch-store";
import { Stack, useRouter } from "expo-router";
import { Alert, ScrollView } from "react-native";

export default function DeveloperScreen() {
    const { modal } = useBottomPadding();
    const resetOnboarding = useLaunchStore((state) => state.resetOnboarding);
    const router = useRouter();

    const handleResetOnboarding = () => {
        Alert.alert(
            "確認",
            "オンボーディングのステータスをリセットしますか？\nアプリは再起動されませんが、次回の起動時にオンボーディングが表示されます。",
            [
                {
                    text: "キャンセル",
                    style: "cancel",
                },
                {
                    text: "リセット",
                    style: "destructive",
                    onPress: async () => {
                        await resetOnboarding();
                        Alert.alert("完了", "オンボーディングのステータスをリセットしました。", [
                            {
                                text: "OK",
                                onPress: () => router.back(),
                            }
                        ]);
                    },
                },
            ]
        );
    };

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "開発者メニュー",
                }}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Container paddingHorizontal="s20" gap="s32" style={{ paddingBottom: modal }}>

                    <SettingsSection title="キャッシュ">
                        <SettingsActionItem
                            label="オンボーディングのリセット"
                            onPress={handleResetOnboarding}
                            isLast={true}
                            isDestructive={true}
                        />
                    </SettingsSection>

                </Container>
            </ScrollView>
        </>
    );
}