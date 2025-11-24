import { ThemedText } from '@/components/core/themed-text';
import { ThemedView } from '@/components/core/themed-view';
import { FALLBACK_IMAGE_URL } from '@/constants/fallback-image';
import { Radii, Spacing } from '@/constants/theme';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { CardProps } from './types';

export function Card({ item }: CardProps) {
    return (
        <View>
            <Link
                href={{
                    pathname: "/",
                    params: { id: item.id },
                }}
                asChild
            >
                <Pressable style={styles.container}>
                    <Image
                        source={item.logo_url ? item.logo_url : FALLBACK_IMAGE_URL}
                        style={styles.image}
                        transition={300}
                    />

                    <View style={styles.textContainer}>
                        <ThemedText type="h3" numberOfLines={2}>
                            {item.title}
                        </ThemedText>
                        <ThemedText type="caption" color="textSecondary" numberOfLines={1}>
                            {item.overview_description}
                        </ThemedText>
                    </View>
                    <ThemedView
                        color="backgroundSecondary"
                        style={styles.detailButton}
                    >
                        <ThemedText type="label" color="textPrimary">
                            詳細
                        </ThemedText>
                    </ThemedView>
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: Spacing['3xl'],
        height: Spacing['3xl'],
        borderRadius: Radii.md,
    },
    textContainer: {
        flex: 1,
        marginHorizontal: Spacing.md,
    },
    detailButton: {
        borderRadius: Radii.full,
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.xl,
        justifyContent: "center",
        alignItems: "center",
    },
});
