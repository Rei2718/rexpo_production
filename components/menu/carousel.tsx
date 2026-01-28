
import { ThemedView } from "@/components/ui/themed-view";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Image } from "expo-image";
import { StyleSheet, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const carouselImages = [
    require("@/assets/event-carousel/1.png"),
    require("@/assets/event-carousel/2.png"),
    require("@/assets/event-carousel/3.png"),
    require("@/assets/event-carousel/4.png"),
    require("@/assets/event-carousel/5.png"),
];

export function MenuCarousel() {
    const color = useThemeColor();
    const { width } = useWindowDimensions();

    const carouselWidth = width;
    const carouselHeight = (width - Spacing.s20 * 2) / 3;

    return (
        <ThemedView>
            <Carousel
                loop={true}
                width={carouselWidth}
                height={carouselHeight}
                autoPlay={true}
                autoPlayInterval={1500}
                snapEnabled={true}
                pagingEnabled={true}
                data={carouselImages}
                style={styles.carousel}
                renderItem={({ item }) => (
                    <ThemedView style={styles.itemContainer}>
                        <Image
                            source={item}
                            contentFit="cover"
                            style={[
                                styles.imageBackground,
                                {
                                    borderRadius: Spacing.s20,
                                    borderWidth: Spacing.s1,
                                    borderColor: color.border,
                                    backgroundColor: color.natural_500,
                                }
                            ]}
                        />
                    </ThemedView>
                )}
                onConfigurePanGesture={gesture => {
                    'worklet';
                    gesture.activeOffsetX([-10, 10]);
                    gesture.failOffsetY([-5, 5]);
                }}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    carousel: {
        width: "100%",
    },
    itemContainer: {
        flex: 1,
        paddingHorizontal: Spacing.s20,
    },
    imageBackground: {
        width: "100%",
        height: "100%",
    },
});