import { NO_DATA } from "@/constants/no-data";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Feature, Verified } from "@/supabase/api/types";
import { hexToRgba } from "@/utils/color";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { Container, ContainerAbsolute } from "../ui/container";
import { ThemedText } from "../ui/themed-text";


export function FeatureItem(data: Verified<Feature>) {
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
                        hexToRgba(color.natural_600, 0.0),  // 0%
                        hexToRgba(color.natural_600, 0.08), // 8%
                        hexToRgba(color.natural_600, 0.15), // 15%
                        hexToRgba(color.natural_600, 0.25), // 25%
                        hexToRgba(color.natural_600, 0.35), // 35%
                        hexToRgba(color.natural_600, 0.45), // 45%
                        hexToRgba(color.natural_600, 0.55), // 55%
                        hexToRgba(color.natural_600, 0.65), // 65%
                        hexToRgba(color.natural_600, 0.75), // 75%
                        hexToRgba(color.natural_600, 0.85), // 85%
                        hexToRgba(color.natural_600, 1.0),  // 100%
                    ]}
                    style={{ flex: 1 }}
                />
            </ContainerAbsolute>

            {/* Text */}
            <ContainerAbsolute bottom={0} left={0} right={0} justifyContent="center" paddingHorizontal="s40" paddingTop="s24" paddingBottom="s48">
                <Container flexDirection="column" justifyContent="center" alignItems="center" gap="s8">
                    <ThemedText type="footnote" style={styles.textCenter} color="tint">TODAY'S PICK</ThemedText>
                    <ThemedText type="title2" style={styles.textCenter}>{data.name ?? NO_DATA}</ThemedText>
                    <ThemedText type="subhead" color="natural_200" style={styles.textCenter}>{data.caption ?? NO_DATA}</ThemedText>
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
