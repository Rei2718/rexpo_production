import { SettingsLinkItem } from "@/components/settings/settings-link-item";
import { SettingsSection } from "@/components/settings/settings-section";
import { Container } from "@/components/ui/container";
import { ThemedText } from "@/components/ui/themed-text";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Image, ScrollView, TouchableOpacity, View, useColorScheme } from "react-native";

export default function MenuScreen() {
    const color = useThemeColor();
    const { modal } = useBottomPadding();
    const theme = useColorScheme() ?? 'light';
    const router = useRouter();

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "",
                    headerShown: true,
                    headerBackVisible: false,
                    headerLeft: () => null,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 8 }}>
                            <Ionicons name="close" size={24} color={color.natural_100} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
                <Container paddingHorizontal="s20" gap="s32" style={{ paddingBottom: modal }}>
                    {/* Features */}
                    <SettingsSection title="機能">
                        <SettingsLinkItem
                            label="ニュース"
                            icon="browse"
                            href="/(detail)/news"
                        />
                        <SettingsLinkItem
                            label="アンケート"
                            icon="contract"
                            href="/(detail)/survey"
                            isLast={true}
                        />
                    </SettingsSection>

                    {/* App Info */}
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
                            href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www2.spc.ritsumei.ac.jp/&ved=2ahUKEwjr45OB-4OSAxXVqFYBHURtIowQFnoECD8QAQ&usg=AOvVaw2k8UlHn8rEGPs9OMtTom1j"
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
                    <Container flexDirection="row" alignItems="center" justifyContent="center" gap="s16" paddingVertical="s24">
                        <Image
                            source={theme === 'dark' ? require('@/assets/logo/ios-light.png') : require('@/assets/logo/ios-dark.png')}
                            style={{ width: 60, height: 60, borderRadius: 12 }}
                        />
                        <View>
                            <ThemedText type="largeTitle" style={{ fontWeight: 'bold' }}>R-EXPO</ThemedText>
                            <ThemedText type="caption1" color="natural_300">Developed by 石川 壱朗</ThemedText>
                        </View>
                    </Container>

                    <Container alignItems="center">
                        <ThemedText type="caption1">
                            v5.0.0
                        </ThemedText>
                    </Container>

                </Container >
            </ScrollView >
        </>
    );
}
