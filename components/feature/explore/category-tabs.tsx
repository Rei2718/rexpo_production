import { ThemedText } from '@/components/core/themed-text';
import { ThemedView } from '@/components/core/themed-view';
import { CATEGORY_NAMES } from '@/constants/category-map';
import { Radii, Spacing } from '@/constants/theme';
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
                {CATEGORY_NAMES.map((categoryName) => (
                    <Link
                        key={categoryName}
                        href={{
                            pathname: '/',
                            params: { categoryName: categoryName },
                        }}
                        asChild
                    >
                        <Pressable>
                            <ThemedView
                                color="backgroundSecondary"
                                style={styles.tabContainer}
                            >
                                <ThemedText type="label">{categoryName}</ThemedText>
                            </ThemedView>
                        </Pressable>
                    </Link>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: Spacing.xl,
        gap: Spacing.md,
    },
    tabContainer: {
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.sm,
        borderRadius: Radii.full,
    },
});
