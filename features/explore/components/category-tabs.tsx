import { ThemedText } from '@/components/ui/themed-text';
import { CATEGORIES } from '@/constants/category-map';
import { FALLBACK_IMAGE_URL } from '@/constants/fallback-image';
import { Colors, radii, spacing } from '@/constants/theme';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, View, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export function CategoryTabs() {
    const colorScheme = useColorScheme() ?? 'light';
    const themeColors = Colors[colorScheme];

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
                            <View style={[styles.tabContainer, { backgroundColor: themeColors.backgroundTertiary }]}>
                                <Image
                                    source={category.icon ? category.icon : FALLBACK_IMAGE_URL}
                                    style={styles.image}
                                />
                                <ThemedText
                                    type="footnote"
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
        gap: spacing.m,
    },
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.m,
        borderRadius: radii.pill,
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.s,
    },
    image: {
        width: spacing.xl,
        height: spacing.xl,
    },
});
