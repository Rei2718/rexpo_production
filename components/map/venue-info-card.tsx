import { Column, Row } from '@/components/ui/flex';
import { Icon } from '@/components/ui/icon';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { NO_DATA } from '@/constants/no-data';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useCongestionStatusColor } from '@/hooks/use-venue-status';
import { VenueDetails, Verified } from '@/supabase/api/types';
import { StyleSheet, View } from 'react-native';


export function VenueInfoCard(data: Verified<VenueDetails>) {
    const color = useThemeColor();
    const congestionColor = useCongestionStatusColor(data.congestion_status);

    return (
        <ThemedView style={styles.container} color="natural_500">
            <Column gap="s8" paddingVertical="s20">

                <Row>
                    <View style={styles.labelContainer}>
                        <Row alignItems="center" gap="s4">
                            <Icon icon="humanFill" color={color.natural_200} size={Spacing.s12} />
                            <ThemedText type="footnote" color="natural_200" style={styles.centerText}>
                                混雑状況
                            </ThemedText>
                        </Row>
                    </View>
                    <View style={styles.labelContainer}>
                        <Row alignItems="center" gap="s4">
                            <Icon icon="browse" color={color.natural_200} size={Spacing.s12} />
                            <ThemedText type="footnote" color="natural_200" style={styles.centerText}>
                                入場方法
                            </ThemedText>
                        </Row>
                    </View>
                </Row>

                <Row alignItems="center">
                    <Column flex={1} alignItems="center" gap="s4" paddingHorizontal="s20">
                        <ThemedText
                            type="callout"
                            style={[
                                styles.centerText,
                                { color: congestionColor }
                            ]}
                        >
                            {data.congestion_status ?? NO_DATA}
                        </ThemedText>
                    </Column>

                    <ThemedView color="natural_300" style={styles.separator} />

                    <Column flex={1} alignItems="center" paddingHorizontal="s20">
                        <ThemedText type="callout" style={styles.centerText}>
                            {data.entry_type ?? NO_DATA}
                        </ThemedText>
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
});