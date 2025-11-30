import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { FALLBACK_IMAGE_URL } from '@/constants/fallback-image';
import { radii, spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import { EventSection } from './EventSection';
import { EventPerformerListProps, Performer } from './types';

export function EventPerformerList({ performers }: EventPerformerListProps) {
    if (!Array.isArray(performers) || performers.length === 0) {
        return null;
    }

    return (
        <EventSection title="出演者">
            <View style={styles.listContainer}>
                {performers.map((performer) => (
                    <PerformerRow key={performer.id} performer={performer} />
                ))}
            </View>
        </EventSection>
    );
}

function PerformerRow({ performer }: { performer: Performer }) {
    const colors = useThemeColor();

    return (
        <ThemedView
            color="backgroundSecondary"
            style={styles.performerRow}
        >
            <View style={styles.leftContainer}>
                <Image
                    source={
                        performer.avatar_url
                            ? { uri: performer.avatar_url }
                            : FALLBACK_IMAGE_URL
                    }
                    style={[styles.avatar, { backgroundColor: colors.backgroundSecondary }]}
                    transition={300}
                />
                <View>
                    <ThemedText type="body">{performer.name}</ThemedText>
                    {performer.position && (
                        <ThemedText type="caption1" color="textSecondary">
                            {performer.position}
                        </ThemedText>
                    )}
                </View>
            </View>
            <ThemedView
                color="backgroundTertiary"
                style={styles.detailButton}
            >
                <ThemedText type="footnote" color="tint">
                    詳細
                </ThemedText>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        gap: spacing.m,
        paddingHorizontal: spacing.xl,
    },
    performerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: spacing.xs,
        borderRadius: radii.pill,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: spacing.xxl,
        height: spacing.xxl,
        borderRadius: radii.pill,
        marginRight: spacing.m,
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: spacing.l,
    },
    detailButton: {
        borderRadius: radii.pill,
        paddingVertical: spacing.s,
        paddingHorizontal: spacing.xl,
        margin: spacing.xs,
        justifyContent: "center",
        alignItems: "center",
    },
});
