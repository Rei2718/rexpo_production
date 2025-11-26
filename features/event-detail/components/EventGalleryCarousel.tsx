import { radii, spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Image } from 'expo-image';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { EventGalleryCarouselProps } from './types';

export default function EventGalleryCarousel({ imageUrls }: EventGalleryCarouselProps) {
    const { width: windowWidth } = useWindowDimensions();
    const carouselWidth = windowWidth * 0.9;
    const carouselHeight = carouselWidth * (9 / 16);
    const placeholderColor = useThemeColor('backgroundSecondary');

    const validImageUrls = imageUrls.filter((url): url is string => !!url);

    if (validImageUrls.length === 0) {
        return null;
    }

    const hasMultipleImages = validImageUrls.length > 1;

    return (
        <View>
            <Carousel
                loop={hasMultipleImages}
                width={carouselWidth}
                height={carouselHeight}
                snapEnabled={true}
                pagingEnabled={true}
                autoPlayInterval={5000}
                autoPlay={hasMultipleImages}
                data={validImageUrls}
                style={styles.carousel}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image
                            source={{ uri: item }}
                            style={[styles.image, { backgroundColor: placeholderColor }]}
                            transition={300}
                        />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    carousel: {
        width: '100%',
    },
    itemContainer: {
        flex: 1,
        borderRadius: radii.xl,
        marginLeft: spacing.xl,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
