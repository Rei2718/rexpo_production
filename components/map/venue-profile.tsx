import { Container } from '@/components/ui/container';
import { StatusMessage } from '@/components/ui/status-message';
import { ThemedText } from '@/components/ui/themed-text';
import { Spacing } from '@/constants/theme';
import { useBottomTabPadding } from '@/hooks/use-bottom-tab-padding';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useVenueDetails } from '@/supabase/api';
import { VenueOrganization } from '@/supabase/api/types';
import { Image, StyleSheet } from 'react-native';


interface VenueProfileProps {
    venuePublicId: string;
}

export default function VenueProfile({ venuePublicId }: VenueProfileProps) {
    const color = useThemeColor();
    const { data, isPending, isError } = useVenueDetails(venuePublicId);
    const tabHeight = useBottomTabPadding();


    if (isPending) {
        return <StatusMessage status="loading" />;
    }

    if (isError || !data) {
        return <StatusMessage status="error" />;
    }

    return (
        <Container flex={1} gap="s48" style={{ paddingBottom: tabHeight }}>
            <Container gap="s16" paddingHorizontal="s24">
                {/* Top Section: Venue Info */}
                <Container flexDirection="row" alignItems="center" gap="s12">
                    {data.icon && (
                        <Image
                            source={{ uri: data.icon }}
                            style={styles.venueIcon}
                        />
                    )}
                    <Container flex={1} gap="s4" justifyContent="center">
                        <ThemedText type="subhead" numberOfLines={1}>
                            {data.name}
                        </ThemedText>
                        <ThemedText type="footnote" color="natural_200" numberOfLines={1}>
                            {data.is_primary ? 'Primary Venue' : 'Sub Venue'}
                        </ThemedText>
                    </Container>
                </Container>
            </Container>

            {/* Bottom Section: Organizations */}
            {data.organizations && data.organizations.length > 0 && (
                <Container paddingHorizontal="s24" gap="s12">
                    <ThemedText type="headline" color="natural_200">
                        関連団体
                    </ThemedText>
                    <Container gap="s8">
                        {data.organizations.map((org: VenueOrganization) => (
                            <Container
                                key={org.organization_public_id}
                                flexDirection="row"
                                alignItems="center"
                                gap="s12"
                                padding="s12"
                                backgroundColor={color.natural_500}
                                style={styles.orgCard}
                            >
                                {org.icon && (
                                    <Image
                                        source={{ uri: org.icon }}
                                        style={styles.orgIcon}
                                    />
                                )}
                                <ThemedText type="callout" numberOfLines={1}>
                                    {org.name}
                                </ThemedText>
                            </Container>
                        ))}
                    </Container>
                </Container>
            )}
        </Container>
    );
}

const styles = StyleSheet.create({
    venueIcon: {
        width: Spacing.s56,
        height: Spacing.s56,
        borderRadius: Spacing.s16,
    },
    orgCard: {
        borderRadius: Spacing.s16,
    },
    orgIcon: {
        width: Spacing.s24,
        height: Spacing.s24,
        borderRadius: Spacing.s8,
    },
});
