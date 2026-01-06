import { PressableScale } from "@/components/ui/pressable-scale";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "../ui/container";
import { Icon } from "../ui/icon";
import { ThemedText } from "../ui/themed-text";


export default function TitleBar() {
    const color = useThemeColor();

    return (
        <SafeAreaView edges={['top']}>
            <Container flexDirection="row" justifyContent="space-between" alignItems="center" paddingTop="s12" paddingHorizontal="s20">
                <ThemedText type="largeTitle">タイムライン</ThemedText>
                <PressableScale onPress={() => router.push('/(detail)/bookmark')}>
                    <Icon size={Spacing.icon} icon="bookmarks" color={color.natural_100} />
                </PressableScale>
            </Container>
        </SafeAreaView>
    );
}