import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Venue } from '@/supabase/api/type';
import { Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar } from '../ui/avatar';
import { Card } from '../ui/card';
import { Column, Row } from '../ui/flex';
import { Icon } from '../ui/icon';
import { ListItem } from '../ui/list-item';
import { Section } from '../ui/section';
import { ThemedText } from '../ui/themed-text';
import { ThemedView } from '../ui/themed-view';

interface VenueProfileProps {
    data: Venue;
}

export default function VenueProfile({ data }: VenueProfileProps) {
    const color = useThemeColor();
    const insets = useSafeAreaInsets();

    const bottomPadding = Platform.OS === 'ios'
        ? insets.bottom + 70 + Spacing.xl
        : Spacing.xl;

    return (
        <Column flex={1} gap="xxl" style={{ paddingBottom: bottomPadding }}>
            <Column gap="l" paddingHorizontal="xl">
                {/* Top Section: Venue Info */}
                <Row alignItems="center" gap="m">
                    <Avatar source={data.logo_url} size="xxxl" radius={Spacing.l} />
                    <Column flex={1} gap="xs" justifyContent="center">
                        <ThemedText type="subhead" numberOfLines={1}>
                            {data.name}
                        </ThemedText>
                        <ThemedText type="footnote" color="natural_200" numberOfLines={1}>
                            {data.description || '詳細情報なし'}
                        </ThemedText>
                    </Column>
                </Row>

                {/* Middle Section: Capacity and Floor */}
                <Card padding="xl">
                    <Column gap="s">
                        {/* Labels Row */}
                        <Row>
                            <View style={styles.labelContainer}>
                                <Row alignItems="center" gap="xs">
                                    <Icon icon="humanFill" color={color.natural_200} size={14} />
                                    <ThemedText type="footnote" color="natural_200" style={styles.centerText}>
                                        キャパシティ
                                    </ThemedText>
                                </Row>
                            </View>
                            <View style={styles.labelContainer}>
                                <Row alignItems="center" gap="xs">
                                    <Icon icon="FloorFill" color={color.natural_200} size={14} />
                                    <ThemedText type="footnote" color="natural_200" style={styles.centerText}>
                                        階数
                                    </ThemedText>
                                </Row>
                            </View>
                        </Row>

                        {/* Content Row */}
                        <Row alignItems="center">
                            {/* Capacity Content */}
                            <Column flex={1} alignItems="center" paddingHorizontal="xl">
                                <ThemedText type="callout" style={styles.tabularNums}>
                                    {data.capacity}人
                                </ThemedText>
                            </Column>

                            {/* Separator */}
                            <ThemedView color="natural_300" style={styles.separator} />

                            {/* Floor Content */}
                            <Column flex={1} alignItems="center" paddingHorizontal="xl">
                                <ThemedText type="callout" style={styles.centerText}>
                                    {data.floor}F
                                </ThemedText>
                            </Column>
                        </Row>
                    </Column>
                </Card>
            </Column>

            {/* Bottom Section: Sponsors */}
            {data.organizations && data.organizations.length > 0 && (
                <Section title="会場スポンサー">
                    <Column gap="m">
                        {data.organizations.map((organization) => (
                            <ListItem
                                key={organization.organization_public_id}
                                image={organization.logo_url}
                                title={organization.name}
                                subtitle={organization.overview_description}
                                color="natural_400"
                                style={styles.sponsorCard}
                            />
                        ))}
                    </Column>
                </Section>
            )}
        </Column >
    );
}

const styles = StyleSheet.create({
    labelContainer: {
        flex: 1,
        alignItems: 'center',
    },
    centerText: {
        textAlign: 'center',
    },
    tabularNums: {
        textAlign: 'center',
        fontVariant: ['tabular-nums'],
    },
    separator: {
        width: 1,
        height: '100%',
        alignSelf: 'center',
    },
    sponsorCard: {
        borderRadius: Spacing.xxxl + Spacing.s,
    },
});
