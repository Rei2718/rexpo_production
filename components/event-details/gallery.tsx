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
import { supabaseStorageUrl } from "@/supabase/supabase";

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
                    <ThemedView style={styles.itemContainer}>
                        <Image
                            source={item ? { uri: supabaseStorageUrl + item } : FALLBACK_IMAGE_URL}
                            contentFit="cover"
                            style={[
                                styles.imageBackground,
                                {
                                    borderRadius: Spacing.s20,
                                    borderWidth: Spacing.s1,
                                    borderColor: color.border,
                                    backgroundColor: color.border,
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
        marginLeft: Spacing.s20,
    },
    imageBackground: {
        width: "100%",
        height: "100%",
    },
});