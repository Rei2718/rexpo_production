import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { FALLBACK_IMAGE_URL } from '@/constants/fallback-image';
import { radii, spacing } from '@/constants/theme';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { CardProps } from './types';

export function Card({ item }: CardProps) {
    return (
        <View>
            <Link
                href={{
                    pathname: "/event-detail",
                    params: { id: item.id },
                }}
                asChild
            >
                <Pressable style={styles.container}>
                    <Image
                        source={item.logo_url ? item.logo_url : FALLBACK_IMAGE_URL}
                        style={styles.image}
                    />

                    <View style={styles.textContainer}>
                        <ThemedText type="body" numberOfLines={1}>
                            {item.title}
                        </ThemedText>
                        <ThemedText type="caption1" color="textSecondary" numberOfLines={1}>
                            {item.overview_description}
                        </ThemedText>
                    </View>
                    <ThemedView
                        color="backgroundSecondary"
                        style={styles.detailButton}
                    >
                        <ThemedText type="caption1" color="tint">
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
        width: spacing.xxxl,
        height: spacing.xxxl,
        borderRadius: radii.l,
    },
    textContainer: {
        flex: 1,
        marginHorizontal: spacing.m,
        gap: spacing.xs,
    },
    detailButton: {
        borderRadius: radii.pill,
        paddingVertical: spacing.s,
        paddingHorizontal: spacing.xl,
        justifyContent: "center",
        alignItems: "center",
    },
});
