import { ThemedView } from "@/components/ui/themed-view";
import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { Spacing } from "@/constants/theme";
import { EventDetails, Verified } from "@/supabase/api/types";
import { Image } from "expo-image";
import {
    StyleSheet,
    useWindowDimensions
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { useThemeColor } from "@/hooks/use-theme-color";

export function EventGallery(data: Verified<EventDetails>) {
    const color = useThemeColor();

    if (!data.images || data.images.length === 0) return null;

    const { width } = useWindowDimensions();
    const carouselWidth = width * 0.8;
    const carouselHeight = carouselWidth * (9 / 16);

    return (
        <ThemedView>
            <Carousel
                loop={true}
                width={carouselWidth}
                height={carouselHeight}
                snapEnabled={true}
                pagingEnabled={true}
                data={data.images}
                style={styles.carousel}
                renderItem={({ item }) => (
                    <ThemedView style={[
                        styles.itemContainer,
                        {
                            borderWidth: Spacing.s2,
                            borderColor: color.border,
                        }
                    ]}>
                        <Image
                            source={item ? { uri: item } : FALLBACK_IMAGE_URL}
                            contentFit="cover"
                            style={styles.imageBackground}
                        />
                    </ThemedView>
                )}
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
        borderRadius: Spacing.s20,
        marginLeft: Spacing.s20,
        overflow: "hidden",
    },
    imageBackground: {
        width: "100%",
        height: "100%",
    },
});