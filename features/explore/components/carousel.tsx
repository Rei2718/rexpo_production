import { ThemedView } from "@/components/ui/themed-view";
import { CAROUSEL_DATA, CarouselItem } from "@/constants/carousel-data";
import { radii, spacing } from "@/constants/theme";
import {
    ImageBackground,
    StyleSheet,
    View,
    useWindowDimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";


export default function CarouselContents() {
    const { width: windowWidth } = useWindowDimensions();
    const carouselWidth = windowWidth * 0.9;
    const carouselHeight = carouselWidth * (1 / 3);

    return (
        <View id="carousel-component">
            <Carousel
                loop={true}
                width={carouselWidth}
                height={carouselHeight}
                snapEnabled={true}
                pagingEnabled={true}
                autoPlay={true}
                autoPlayInterval={2000}
                data={CAROUSEL_DATA}
                style={styles.carousel}
                renderItem={({ item }: { item: CarouselItem }) => (
                    <ThemedView
                        style={styles.itemContainer}
                    >
                        <ImageBackground
                            source={item.image}
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
        borderRadius: radii.l,
        marginLeft: spacing.xl,
        overflow: "hidden",
    },
    imageBackground: {
        width: "100%",
        height: "100%",
    },
});