import { ThemedView } from "@/components/ui/themed-view";
import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { Spacing } from "@/constants/theme";
import { EventDetails, Verified } from "@/supabase/api/types";
import {
    ImageBackground,
    StyleSheet,
    useWindowDimensions
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

export function EventGallery(data: Verified<EventDetails>) {

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
                    <ThemedView style={styles.itemContainer}>
                        <ImageBackground
                            source={item ? { uri: item } : FALLBACK_IMAGE_URL}
                            resizeMode="cover"
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
        borderRadius: Spacing.s16,
        marginLeft: Spacing.s20,
        overflow: "hidden",
    },
    imageBackground: {
        width: "100%",
        height: "100%",
    },
});