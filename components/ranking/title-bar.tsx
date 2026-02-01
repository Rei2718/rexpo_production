import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { PressableScale } from "@/components/ui/pressable-scale";
import { ThemedText } from "@/components/ui/themed-text";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TitleBar() {
    const color = useThemeColor();
    const router = useRouter();

    return (
        <SafeAreaView edges={['top']}>
            <Container
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                paddingTop="s12"
                paddingHorizontal="s20"
                paddingBottom="s32"
            >
                <ThemedText type="largeTitle">ランキング</ThemedText>
                <PressableScale onPress={() => router.push('/(detail)/menu')}>
                    <Icon size={Spacing.icon} icon="menu" color={color.natural_100} />
                </PressableScale>
            </Container>
        </SafeAreaView>
    );
}