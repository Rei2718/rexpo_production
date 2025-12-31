import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useFeatures } from "@/supabase/api";
import { Feature, Verified } from "@/supabase/api/types";
import { supabaseStorageUrl } from "@/supabase/supabase";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useRef } from "react";
import { ImageBackground, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { Extrapolation, interpolate, useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, ContainerAbsolute } from "../ui/container";
import { Icon } from "../ui/icon";
import { StatusMessage } from "../ui/status-message";
import { ThemedText } from "../ui/themed-text";


export default function FeatureCarousel() {
    const color = useThemeColor();
    const width = useWindowDimensions().width;
    const height = width * (7 / 5);

    const progress = useSharedValue<number>(0);
    const ref = useRef<ICarouselInstance>(null);
    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            index,
            animated: true,
        });
    };

    // Features
    const { data, isPending, isError } = useFeatures();
    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data) return <StatusMessage status="empty" />;

    return (
        <View id="carousel-component">

            {/* Carousel */}
            <Carousel
                ref={ref}
                onProgressChange={(_, absoluteProgress) => {
                    progress.value = absoluteProgress;
                }}
                loop={true}
                width={width}
                height={height}
                snapEnabled={true}
                pagingEnabled={true}
                autoPlay={true}
                autoPlayInterval={4000}
                data={data}
                renderItem={({ item }) => <FeatureItem data={item} />}
            />

            {/* Pagination */}
            <ContainerAbsolute bottom={Spacing.s16} left={0} right={0} alignItems="center" zIndex={10}>
                <Pagination.Custom
                    progress={progress}
                    data={data}
                    size={Spacing.s8}
                    horizontal
                    dotStyle={{
                        width: Spacing.s8,
                        height: Spacing.s8,
                        borderRadius: Spacing.pill,
                        backgroundColor: color.natural_300,
                    }}
                    activeDotStyle={{
                        width: Spacing.s24,
                        height: Spacing.s8,
                        borderRadius: Spacing.pill,
                        backgroundColor: color.natural_100,
                    }}
                    containerStyle={{
                        gap: Spacing.s8,
                        alignItems: "center",
                    }}
                    onPress={onPressPagination}
                    customReanimatedStyle={(progress, index, length) => {
                        let val = Math.abs(progress - index);
                        if (index === 0 && progress > length - 1) {
                            val = Math.abs(progress - length);
                        }

                        return {
                            transform: [
                                {
                                    translateY: interpolate(val, [0, 1], [0, 0], Extrapolation.CLAMP),
                                },
                            ],
                        };
                    }}
                    renderItem={() => (
                        <View
                            style={{
                                flex: 1,
                            }}
                        />
                    )}
                />
            </ContainerAbsolute>

            {/* Header */}
            <ContainerAbsolute top={0} left={0} right={0} paddingVertical="s12" paddingHorizontal="s20">
                <SafeAreaView edges={['top']}>
                    <Container flexDirection="row" justifyContent="space-between" alignItems="center">
                        <ThemedText type="largeTitle">探索</ThemedText>
                        <TouchableOpacity onPress={() => router.push('/')}>
                            <Icon size={Spacing.icon} icon="bookmark" color={color.natural_100} />
                        </TouchableOpacity>
                    </Container>
                </SafeAreaView>
            </ContainerAbsolute>
        </View>
    );
}

const hexToRgba = (hex: string, alpha: number) => {
    const cleanHex = hex.replace('#', '');

    const expandedHex = cleanHex.length === 3
        ? cleanHex.split('').map(char => char + char).join('')
        : cleanHex;

    const r = parseInt(expandedHex.substring(0, 2), 16);
    const g = parseInt(expandedHex.substring(2, 4), 16);
    const b = parseInt(expandedHex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export function FeatureItem(data: { data: Verified<Feature> }) {
    const color = useThemeColor();
    const item = data.data;

    return (
        <ImageBackground
            source={{ uri: supabaseStorageUrl + item.image }}
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* Gradient */}
            <ContainerAbsolute bottom={0} left={0} right={0} style={{ height: '48%' }}>
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
            <ContainerAbsolute bottom={0} flex={1} justifyContent="center" padding="s24" paddingBottom="s48">
                <Container flexDirection="column" justifyContent="center" alignItems="center" gap="s4">
                    <ThemedText type="footnote">TODAY'S PICK</ThemedText>
                    <ThemedText type="title2">{item.caption ?? NO_DATA}</ThemedText>
                    <ThemedText type="subhead" style={{ color: color.natural_200 }}>{item.caption ?? NO_DATA}</ThemedText>
                </Container>
            </ContainerAbsolute>
        </ImageBackground>
    )
}