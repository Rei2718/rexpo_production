import { Column, Row } from '@/components/ui/flex';
import { Icon } from '@/components/ui/icon';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { NO_DATA } from '@/constants/no-data';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { News, Verified } from '@/supabase/api/types';
import { StyleSheet } from 'react-native';

export function NewsInfoCard(data: Verified<News>) {
    const color = useThemeColor();

    return (
        <ThemedView
            style={[
                styles.container,
                {
                    borderWidth: Spacing.s1,
                    borderColor: color.border,
                },
            ]}
            color="natural_500"
        >
            <Column gap="s8" paddingVertical="s20">
                {/* Labels Row */}
                <Row>
                    <Column flex={1} alignItems="center">
                        <Row alignItems="center" gap="s4">
                            <Icon icon="contract" color={color.natural_200} size={Spacing.s12} />
                            <ThemedText type="footnote" color="natural_200" style={styles.centerText}>
                                著者
                            </ThemedText>
                        </Row>
                    </Column>
                    <Column flex={1} alignItems="center">
                        <Row alignItems="center" gap="s4">
                            <Icon icon="explore" color={color.natural_200} size={Spacing.s12} />
                            <ThemedText type="footnote" color="natural_200" style={styles.centerText}>
                                サイト
                            </ThemedText>
                        </Row>
                    </Column>
                </Row>

                {/* Content Row */}
                <Row alignItems="center">
                    {/* Performer Content */}
                    <Column flex={1} alignItems="center" gap="s4" paddingHorizontal="s20">
                        <ThemedText type="footnote" style={styles.centerText}>
                            {data.performer?.name ?? "R-EXPO 運営"}
                        </ThemedText>
                    </Column>

                    {/* Separator */}
                    <ThemedView color="natural_300" style={styles.separator} />

                    {/* Website Content */}
                    <Column flex={1} alignItems="center" paddingHorizontal="s20">
                        <ThemedText type="footnote" style={styles.centerText}>
                            {data.website ? "詳細を見る" : NO_DATA}
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
    separator: {
        width: Spacing.s2,
        height: '100%',
        alignSelf: 'center',
    },
    centerText: {
        textAlign: 'center',
    },
});
