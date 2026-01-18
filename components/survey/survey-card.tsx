import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { PressableScale } from "@/components/ui/pressable-scale";
import { ThemedText } from "@/components/ui/themed-text";
import { SurveyItem } from "@/constants/form";
import { Spacing } from "@/constants/theme";
import { useInAppBrowser } from "@/hooks/use-in-app-browser";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Image, StyleSheet } from "react-native";

export function SurveyCard({ index, ...item }: SurveyItem & { index: number }) {
    const color = useThemeColor();
    const openInAppBrowser = useInAppBrowser();

    const handlePress = () => {
        openInAppBrowser(item.url);
    };

    return (
        <PressableScale onPress={handlePress}>
            <Container flexDirection="row" alignItems="center" gap="s16">
                <ThemedText type="headline" color="natural_200" numberOfLines={1}>
                    {index}
                </ThemedText>
                <Image
                    source={item.image}
                    style={[
                        styles.image,
                        {
                            borderWidth: Spacing.s1,
                            borderColor: color.border,
                            backgroundColor: color.border,
                        }
                    ]}
                />
                <Container flexDirection="column" flex={1} gap="s4">
                    <ThemedText type="subhead" numberOfLines={1}>
                        {item.title}
                    </ThemedText>

                    <Container gap="s4">
                        <ThemedText type="caption2" color="natural_200" numberOfLines={1}>
                            {item.provider}
                        </ThemedText>
                        <Container flexDirection="row" alignItems="center" gap="s4">
                            <Icon icon="clock" size={12} color={color.natural_200} />
                            <ThemedText type="caption2" color="natural_200" numberOfLines={1}>
                                {item.duration}
                            </ThemedText>
                        </Container>
                    </Container>
                </Container>

                <Icon icon="right" color={color.natural_300} />
            </Container>
        </PressableScale>
    );
}

const styles = StyleSheet.create({
    image: {
        width: Spacing.s56,
        height: Spacing.s56,
        borderRadius: Spacing.s12,
    },
});