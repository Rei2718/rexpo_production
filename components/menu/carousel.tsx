import { ThemedView } from "@/components/ui/themed-view";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useThemeStore } from "@/stores/theme-store";
import { Image } from "expo-image";
import { StyleSheet, useColorScheme, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

// Moved inside component


export function MenuCarousel() {
    const color = useThemeColor();
    const { width } = useWindowDimensions();

    const systemTheme = useColorScheme() ?? 'light';
    const { themeMode } = useThemeStore();
    const isDark = (themeMode === 'system' ? systemTheme : themeMode) === 'dark';

    const carouselImages = [
        require("@/assets/event-carousel/universe.png"),
        isDark
            ? require("@/assets/event-carousel/walk_dark.jpg")
            : require("@/assets/event-carousel/walk_light.jpg"),
    ];

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