import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Feature, Verified } from "@/supabase/api/types";
import { hexToRgba } from "@/utils/color";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Container, ContainerAbsolute } from "../ui/container";
import { PressableScale } from "../ui/pressable-scale";
import { ShineBorder } from "../ui/shine-border";
import { ThemedText } from "../ui/themed-text";


export function FeatureItem(data: Verified<Feature>) {
    const router = useRouter();
    const color = useThemeColor();

    return (
        <View style={styles.container}>
            <Image
                source={data.image}
                style={StyleSheet.absoluteFill}
                contentFit="cover"
            />

            {/* Gradient */}
            <ContainerAbsolute bottom={0} left={0} right={0} style={{ height: '50%' }}>
                <LinearGradient
                    colors={[
                        hexToRgba(color.natural_600, 0.0),
                        hexToRgba(color.natural_600, 0.15),
                        hexToRgba(color.natural_600, 0.35),
                        hexToRgba(color.natural_600, 0.55),
                        hexToRgba(color.natural_600, 0.72),
                        hexToRgba(color.natural_600, 0.84),
                        hexToRgba(color.natural_600, 0.92),
                        hexToRgba(color.natural_600, 0.96),
                        hexToRgba(color.natural_600, 0.98),
                        hexToRgba(color.natural_600, 0.99),
                        hexToRgba(color.natural_600, 1.0),
                    ]}
                    style={{ flex: 1 }}
                />
            </ContainerAbsolute>

            {/* Text */}
            <ContainerAbsolute bottom={0} left={0} right={0} justifyContent="center" paddingHorizontal="s40" paddingTop="s24" paddingBottom="s48">
                <Container flexDirection="column" justifyContent="center" alignItems="center" gap="s8">
                    <Container flexDirection="column" justifyContent="center" alignItems="center" gap="s4">
                        <ThemedText type="title2" style={styles.textCenter}>{data.name ?? NO_DATA}</ThemedText>
                        <ThemedText type="subhead" color="natural_200" style={styles.textCenter}>{data.caption ?? NO_DATA}</ThemedText>
                        {data.event_public_id && (
                            <PressableScale onPress={() => router.push(`/event/${data.event_public_id}`)}>
                                <ShineBorder borderRadius={Spacing.pill} style={{ marginTop: Spacing.s12 }}>
                                    <Container
                                        paddingHorizontal="s24"
                                        paddingVertical="s12"
                                    >
                                        <ThemedText type="footnote" color="natural_100">{data.note ?? "詳細をチェック"}</ThemedText>
                                    </Container>
                                </ShineBorder>
                            </PressableScale>
                        )}
                    </Container>
                </Container>
            </ContainerAbsolute>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textCenter: {
        textAlign: "center",
    },
});
