import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "../ui/container";
import { Icon } from "../ui/icon";
import { ThemedText } from "../ui/themed-text";


export default function Header() {
    const color = useThemeColor();

    return (
        <SafeAreaView edges={['top']}>
            <Container flexDirection="row" justifyContent="space-between" alignItems="center" paddingVertical="s12" paddingHorizontal="s20">
                <ThemedText type="largeTitle">タイムライン</ThemedText>
                <TouchableOpacity onPress={() => router.push('/')}>
                    <Icon size={Spacing.icon} icon="bookmark" color={color.natural_100} />
                </TouchableOpacity>
            </Container>
        </SafeAreaView>
    );
}