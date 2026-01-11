import { PressableScale } from "@/components/ui/pressable-scale";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Feature, Verified } from "@/supabase/api/types";
import { hexToRgba } from "@/utils/color";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, ContainerAbsolute } from "../ui/container";
import { Icon } from "../ui/icon";
import { ThemedText } from "../ui/themed-text";

type MainFeatureProps = {
    scrollOffset: SharedValue<number>;
};

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function MainFeature({ scrollOffset }: MainFeatureProps) {
    const width = useWindowDimensions().width;
    const height = width * (7 / 5);
    const color = useThemeColor();

    const mainFeatureData: Verified<Feature> = {
        feature_public_id: "main_visual_feature",
        name: "R-EXPO 2025",
        caption: "北嶺・光星・慶祥 3校合同イベント開催",
        note: "詳細をチェック。",
        image: require('@/assets/images/main-visual.png') as any,
        event_public_id: "event_id_placeholder", // Ensure this is a string
        display_order: 0,
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-height, 0, height],
                        [-height * 0.5, 0, height * 0.5],
                        Extrapolation.CLAMP
                    ),
                },
                {
                    scale: interpolate(
                        scrollOffset.value,
                        [-height, 0, height],
                        [2, 1, 1],
                        Extrapolation.CLAMP
                    ),
                },
            ],
        };
    });

    return (
        <View style={{ width, height, overflow: 'hidden' }}>
            <AnimatedImage
                source={mainFeatureData.image}
                style={[StyleSheet.absoluteFill, animatedStyle]}
                contentFit="cover"
            />

            {/* Gradient */}
            <ContainerAbsolute bottom={0} left={0} right={0} style={{ height: '60%' }}>
                <LinearGradient
                    colors={[
                        hexToRgba(color.natural_600, 0.0),
                        hexToRgba(color.natural_600, 0.1),
                        hexToRgba(color.natural_600, 0.25),
                        hexToRgba(color.natural_600, 0.4),
                        hexToRgba(color.natural_600, 0.55),
                        hexToRgba(color.natural_600, 0.7),
                        hexToRgba(color.natural_600, 0.8),
                        hexToRgba(color.natural_600, 0.88),
                        hexToRgba(color.natural_600, 0.94),
                        hexToRgba(color.natural_600, 0.98),
                        hexToRgba(color.natural_600, 1.0),
                    ]}
                    style={{ flex: 1 }}
                />
            </ContainerAbsolute>

            {/* Center Icon */}
            <View style={[StyleSheet.absoluteFill, { justifyContent: 'center', alignItems: 'center' }]}>
                <Image
                    source={require('@/assets/images/icon.png')}
                    style={{ width: 100, height: 100 }}
                    contentFit="contain"
                />
            </View>

            {/* Header Overlay */}
            <ContainerAbsolute top={0} left={0} right={0} paddingVertical="s12" paddingHorizontal="s20">
                <SafeAreaView edges={['top']}>
                    <Container flexDirection="row" justifyContent="space-between" alignItems="center">
                        <ThemedText type="largeTitle" style={{ color: 'white' }}>ホーム</ThemedText>
                        <PressableScale onPress={() => router.push('/(detail)/settings')}>
                            <Icon size={Spacing.icon} icon="menu" color="white" />
                        </PressableScale>
                    </Container>
                </SafeAreaView>
            </ContainerAbsolute>
        </View>
    );
}
