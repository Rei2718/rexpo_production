import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useFeatures } from "@/supabase/api";
import { Feature } from "@/supabase/api/types";
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


export default function Header() {
    const color = useThemeColor();
    const width = useWindowDimensions().width;
    const height = width * (8 / 5);

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
                data={data as Feature[]}
                renderItem={({ item }) => <Item item={item} />}
            />

            {/* Pagination */}
            <ContainerAbsolute bottom={Spacing.l} left={0} right={0} alignItems="center" zIndex={10}>
                <Pagination.Custom
                    progress={progress}
                    data={data}
                    size={Spacing.s}
                    horizontal
                    dotStyle={{
                        width: Spacing.s,
                        height: Spacing.s,
                        borderRadius: Spacing.pill,
                        backgroundColor: color.natural_300,
                    }}
                    activeDotStyle={{
                        width: Spacing.xl,
                        height: Spacing.s,
                        borderRadius: Spacing.pill,
                        backgroundColor: color.natural_100,
                        overflow: "hidden",
                    }}
                    containerStyle={{
                        gap: Spacing.s,
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
            <ContainerAbsolute top={0} left={0} right={0} paddingVertical="m" paddingHorizontal="xl">
                <SafeAreaView edges={['top']}>
                    <Container flexDirection="row" justifyContent="space-between" alignItems="center">
                        <ThemedText type="largeTitle" color="natural_100">探索</ThemedText>
                        <TouchableOpacity onPress={() => router.push('/')}>
                            <Icon size={Spacing.icon} icon="bookmark" color={color.natural_100} />
                        </TouchableOpacity>
                    </Container>
                </SafeAreaView>
            </ContainerAbsolute>
        </View>
    );
}

export function Item({ item }: { item: Feature }) {
    const color = useThemeColor();

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
            <ContainerAbsolute bottom={0} left={0} right={0} style={{ height: '25%' }}>
                <LinearGradient
                    colors={['transparent', color.natural_600]}
                    style={{ flex: 1 }}
                />
            </ContainerAbsolute>

            {/* Text */}
            <ContainerAbsolute bottom={0} flex={1} justifyContent="center" padding="xl" paddingBottom="xxl">
                <Container flexDirection="column" justifyContent="center" alignItems="center" gap="xs">
                    <ThemedText type="footnote" color="natural_100">TODAY'S PICK</ThemedText>
                    <ThemedText type="title2" color="natural_100">{item.caption}</ThemedText>
                    <ThemedText type="subhead" color="natural_200">{item.caption}</ThemedText>
                </Container>
            </ContainerAbsolute>
        </ImageBackground>
    )
}
