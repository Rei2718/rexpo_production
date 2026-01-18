import { Container } from '@/components/ui/container';
import { ThemedText } from '@/components/ui/themed-text';
import { FALLBACK_IMAGE_URL } from '@/constants/fallback-image';
import { NO_DATA } from '@/constants/no-data';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useOperationalStatusColor } from '@/hooks/use-venue-status';
import { VenueDetails, Verified } from '@/supabase/api/types';
import { Image, StyleSheet, View } from 'react-native';

export function Header(data: Verified<VenueDetails>) {
    const statusBadgeColor = useOperationalStatusColor(data.operational_status);
    const color = useThemeColor();

    return (
        <Container paddingHorizontal="s20">
            <Container flexDirection="row" alignItems="center" gap="s12">
                <Image
                    source={data.icon ? { uri: data.icon } : FALLBACK_IMAGE_URL}

                    style={[
                        styles.venueIcon,
                        {
                            borderWidth: Spacing.s1,
                            borderColor: color.border,
                            backgroundColor: color.border,
                        }
                    ]}
                />
                <Container flex={1} gap="s4" justifyContent="center">
                    <Container alignItems="flex-start" gap="s4">
                        {/* Status Badge */}
                        <View style={[styles.statusBadge, { backgroundColor: statusBadgeColor }]}>
                            <ThemedText type="caption1" style={styles.badgeText}>
                                {data.operational_status ?? NO_DATA}
                            </ThemedText>
                        </View>

                        <ThemedText type="subhead" numberOfLines={1} style={styles.nameText}>
                            {data.name ?? NO_DATA}
                        </ThemedText>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}

const styles = StyleSheet.create({
    venueIcon: {
        width: Spacing.s56,
        height: Spacing.s56,
        borderRadius: Spacing.s16,
    },
    nameText: {
        flexShrink: 1,
    },
    statusBadge: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
});