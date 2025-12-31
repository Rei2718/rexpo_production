import { Column, Row } from '@/components/ui/flex';
import { Icon } from '@/components/ui/icon';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { EventDetails, Verified } from '@/supabase/api/types';
import { StyleSheet, View } from 'react-native';

import { NO_DATA } from "@/constants/no-data";

export function EventInfoCard({ data }: { data: Verified<EventDetails> }) {
    const color = useThemeColor();

    return (
        <ThemedView style={styles.container} color="natural_400">
            <Column gap="s8" paddingVertical="s20">
                {/* Labels Row */}
                <Row>
                    <View style={styles.labelContainer}>
                        <Row alignItems="center" gap="s4">
                            <Icon icon="clock" color={color.natural_200} size={Spacing.s12} />
                            <ThemedText type="footnote" color="natural_200" style={styles.centerText}>
                                時間
                            </ThemedText>
                        </Row>
                    </View>
                    <View style={styles.labelContainer}>
                        <Row alignItems="center" gap="s4">
                            <Icon icon="explore" color={color.natural_200} size={Spacing.s12} />
                            <ThemedText type="footnote" color="natural_200" style={styles.centerText}>
                                会場
                            </ThemedText>
                        </Row>
                    </View>
                </Row>

                {/* Content Row */}
                <Row alignItems="center">
                    {/* Time Content */}
                    <Column flex={1} alignItems="center" gap="s4" paddingHorizontal="s20">
                        {(data.slots ?? []).map((slot) => (
                            <ThemedText key={slot.slot_public_id} type="callout" style={styles.tabularNums}>
                                {slot.starts ?? NO_DATA} ~ {slot.ends ?? NO_DATA}
                            </ThemedText>
                        ))}
                    </Column>

                    {/* Separator */}
                    <ThemedView color="natural_300" style={styles.separator} />

                    {/* Venue Content */}
                    <Column flex={1} alignItems="center" paddingHorizontal="s20">
                        {(data.venues ?? []).map((venue) => (
                            <ThemedText key={venue.venue_public_id} type="callout" style={styles.centerText}>
                                {venue.name ?? NO_DATA}
                            </ThemedText>
                        ))}
                    </Column>
                </Row>
            </Column>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: Spacing.s12,
    },
    labelContainer: {
        flex: 1,
        alignItems: 'center',
    },
    separator: {
        width: Spacing.s2,
        height: '100%',
        alignSelf: 'center',
    },
    centerText: {
        textAlign: 'center',
    },
    tabularNums: {
        textAlign: 'center',
        fontVariant: ['tabular-nums'],
    },
});
