import { SettingsActionItem } from "@/components/settings/settings-action-item";
import { SettingsSection } from "@/components/settings/settings-section";
import { Container } from "@/components/ui/container";
import { PressableScale } from "@/components/ui/pressable-scale";
import { ThemedText } from "@/components/ui/themed-text";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useScreenView } from "@/hooks/use-screen-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useDebugTimeStore } from "@/store/use-debug-time-store";
import { useLaunchStore } from "@/store/use-launch-store";
import { Stack, useRouter } from "expo-router";
import { Alert, ScrollView } from "react-native";

export default function DeveloperScreen() {
    const { modal } = useBottomPadding();
    const resetOnboarding = useLaunchStore((state) => state.resetOnboarding);
    const { debugTime, setDebugTime } = useDebugTimeStore();
    const router = useRouter();
    const color = useThemeColor();

    useScreenView({
        screen: 'developer',
        label: 'Developer Menu',
    });

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

    const adjustTime = (hours: number) => {
        const base = debugTime ?? new Date();
        const newTime = new Date(base.getTime() + hours * 60 * 60 * 1000);
        setDebugTime(newTime);
    };

    const formatTime = (date: Date) => {
        return new Intl.DateTimeFormat("ja-JP", {
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }).format(date);
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

                    <SettingsSection title="デバッグ時間設定">
                        <Container gap="s12" paddingVertical="s16">
                            <Container flexDirection="row" justifyContent="space-between" alignItems="center">
                                <ThemedText type="subhead">状態</ThemedText>
                                <ThemedText type="body" color={debugTime ? "red_500" : "natural_200"}>
                                    {debugTime ? "固定モード" : "現在時刻 (Real Time)"}
                                </ThemedText>
                            </Container>

                            <Container flexDirection="row" justifyContent="space-between" alignItems="center">
                                <ThemedText type="subhead">設定時刻</ThemedText>
                                <ThemedText type="headline">
                                    {formatTime(debugTime ?? new Date())}
                                </ThemedText>
                            </Container>

                            <Container flexDirection="row" gap="s12" justifyContent="flex-end" marginTop="s8">
                                <PressableScale onPress={() => adjustTime(-1)}>
                                    <Container padding="s8" backgroundColor={color.natural_400} borderRadius="s8">
                                        <ThemedText>-1h</ThemedText>
                                    </Container>
                                </PressableScale>
                                <PressableScale onPress={() => adjustTime(1)}>
                                    <Container padding="s8" backgroundColor={color.natural_400} borderRadius="s8">
                                        <ThemedText>+1h</ThemedText>
                                    </Container>
                                </PressableScale>
                                <PressableScale onPress={() => setDebugTime(null)}>
                                    <Container padding="s8" backgroundColor={color.red_500} borderRadius="s8">
                                        <ThemedText color="natural_500">リセット</ThemedText>
                                    </Container>
                                </PressableScale>
                            </Container>
                        </Container>
                    </SettingsSection>

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