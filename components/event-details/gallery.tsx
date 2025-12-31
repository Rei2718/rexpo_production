import { ThemedView } from "@/components/ui/themed-view";
import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { Spacing } from "@/constants/theme";
import { EventDetails, Verified } from "@/supabase/api/types";
import {
    ImageBackground,
    StyleSheet,
    View,
    useWindowDimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

export function EventGallery({ data }: { data: Verified<EventDetails> }) {
    const { width: windowWidth } = useWindowDimensions();
    const carouselWidth = windowWidth * 0.8;
    const carouselHeight = carouselWidth * (9 / 16);

    const validImages = (data.images ?? []).filter((url): url is string => !!url);

    if (validImages.length === 0) {
        return null;
    }

    return (
        <View id="gallery-component">
            <Carousel
                loop={true}
                width={carouselWidth}
                height={carouselHeight}
                snapEnabled={true}
                pagingEnabled={true}
                data={validImages}
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
        </View>
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
