
import { PressableScale } from "@/components/ui/pressable-scale";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { router } from "expo-router";
import { useRef } from "react";
import { useWindowDimensions, View } from "react-native";
import { Extrapolation, interpolate, useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, ContainerAbsolute } from "../ui/container";
import { Icon } from "../ui/icon";
import { ThemedText } from "../ui/themed-text";
import { FeatureItem } from "./feature-item";

import { STATIC_FEATURES } from "@/constants/features";


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
    const data = STATIC_FEATURES;

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
                renderItem={({ item }) => <FeatureItem {...item} />}
                onConfigurePanGesture={gesture => {
                    'worklet';
                    gesture.activeOffsetX([-10, 10]);
                    gesture.failOffsetY([-5, 5]);
                }}
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
                />
            </ContainerAbsolute>

            {/* Header */}
            <ContainerAbsolute top={0} left={0} right={0} paddingVertical="s12" paddingHorizontal="s20">
                <SafeAreaView edges={['top']}>
                    <Container flexDirection="row" justifyContent="space-between" alignItems="center">
                        <ThemedText type="largeTitle">ホーム</ThemedText>
                        <PressableScale onPress={() => router.push('/(detail)/menu')}>
                            <Icon size={Spacing.icon} icon="menu" color={color.natural_100} />
                        </PressableScale>
                    </Container>
                </SafeAreaView>
            </ContainerAbsolute>
        </View>
    );
}