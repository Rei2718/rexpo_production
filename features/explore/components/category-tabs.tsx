import { ThemedText } from '@/components/ui/themed-text';
import { CATEGORIES } from '@/constants/category-map';
import { FALLBACK_IMAGE_URL } from '@/constants/fallback-image';
import { spacing } from '@/constants/theme';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export function CategoryTabs() {
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
                contentContainerStyle={styles.scrollContainer}
            >
                {CATEGORIES.map((category) => (
                    <Link
                        key={category.id}
                        href={{
                            pathname: '/',
                            params: { categoryName: category.id },
                        }}
                        asChild
                    >
                        <Pressable>
                            <View style={styles.tabContainer}>
                                <Image
                                    source={category.icon ? category.icon : FALLBACK_IMAGE_URL}
                                    style={styles.image}
                                />
                                <ThemedText
                                    type="label"
                                    color="textPrimary"
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    {category.label}
                                </ThemedText>
                            </View>
                        </Pressable>
                    </Link>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: spacing.xl,
        gap: spacing.l,
    },
    tabContainer: {
        alignItems: 'center',
        gap: spacing.xxs,
        width: "auto",
    },
    image: {
        width: spacing.xxxl,
        height: spacing.xxxl,
    },
});
