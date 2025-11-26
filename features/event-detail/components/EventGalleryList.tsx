import { radii, spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import { EventSection } from './EventSection';

type EventGalleryListProps = {
    imageUrls: (string | null | undefined)[];
};

export function EventGalleryList({ imageUrls }: EventGalleryListProps) {
    const validUrls = imageUrls.filter(Boolean) as string[];
    const placeholderColor = useThemeColor('backgroundSecondary');

    if (validUrls.length === 0) {
        return null;
    }

    return (
        <EventSection title="ギャラリー">
            <View style={styles.container}>
                {validUrls.map((url, index) => (
                    <Image
                        key={index}
                        source={{ uri: url }}
                        style={[styles.image, { backgroundColor: placeholderColor }]}
                        transition={300}
                    />
                ))}
            </View>
        </EventSection>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: spacing.m,
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        borderRadius: radii.m,
    },
});
