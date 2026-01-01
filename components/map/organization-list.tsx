import { Container } from '@/components/ui/container';
import { Column, Row } from '@/components/ui/flex';
import { Section } from '@/components/ui/section';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { FALLBACK_IMAGE_URL } from '@/constants/fallback-image';
import { NO_DATA } from '@/constants/no-data';
import { Spacing } from '@/constants/theme';
import { VenueDetails, Verified } from '@/supabase/api/types';
import { Image, StyleSheet } from 'react-native';

export function OrganizationList(data: Verified<VenueDetails>) {
    if (!data.organizations || data.organizations.length === 0) return null;

    return (
        <Container paddingHorizontal="s20">
            <Section title="スポンサー">
                <Container gap="s8">
                    {data.organizations.map((org) => (
                        <ThemedView key={org.organization_public_id} color="natural_500" style={styles.card}>
                            <Row alignItems="center" gap="s16" padding="s4">
                                <Image
                                    source={org.icon ? { uri: org.icon } : FALLBACK_IMAGE_URL}
                                    style={styles.icon}
                                />
                                <Column flex={1} gap="s2">
                                    <ThemedText type="footnote" numberOfLines={1}>
                                        {org.name ?? NO_DATA}
                                    </ThemedText>
                                </Column>
                            </Row>
                        </ThemedView>
                    ))}
                </Container>
            </Section>
        </Container>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: Spacing.pill,
        overflow: 'hidden',
    },
    icon: {
        width: Spacing.s56,
        height: Spacing.s56,
        borderRadius: Spacing.pill,
    },
});
