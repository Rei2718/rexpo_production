import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { radii, spacing } from '@/constants/theme';
import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { EventTagSectionProps } from '../types';

export default function EventTagSection({ tags }: EventTagSectionProps) {
    if (!tags) {
        return null;
    }

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
            contentContainerStyle={styles.scrollContainer}
        >
            {tags.map((tag) => (
                <Link
                    key={tag}
                    href={{
                        pathname: '/',
                        params: { tagName: tag },
                    }}
                    asChild
                >
                    <Pressable>
                        <ThemedView
                            color="backgroundTertiary"
                            style={styles.tabContainer}
                        >
                            <ThemedText type="footnote">{tag}</ThemedText>
                        </ThemedView>
                    </Pressable>
                </Link>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        gap: spacing.s,
        paddingHorizontal: spacing.xl,
    },
    tabContainer: {
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.s,
        borderRadius: radii.pill,
    },
});
