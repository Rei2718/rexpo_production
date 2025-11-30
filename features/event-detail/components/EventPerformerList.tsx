import { Box } from '@/components/ui/layout/Box';
import { Column, Row } from '@/components/ui/layout/Flex';
import { ThemedText } from '@/components/ui/themed-text';
import { FALLBACK_IMAGE_URL } from '@/constants/fallback-image';
import { spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Image } from 'expo-image';
import { EventPerformerListProps, Performer } from '../types';
import { EventSection } from './EventSection';

export function EventPerformerList({ performers }: EventPerformerListProps) {
    if (!Array.isArray(performers) || performers.length === 0) {
        return null;
    }

    return (
        <EventSection title="出演者">
            <Column gap="m" paddingHorizontal="xl">
                {performers.map((performer) => (
                    <PerformerRow key={performer.id} performer={performer} />
                ))}
            </Column>
        </EventSection>
    );
}

function PerformerRow({ performer }: { performer: Performer }) {
    const colors = useThemeColor();

    return (
        <Row
            backgroundColor="backgroundSecondary"
            padding="xs"
            borderRadius="pill"
            justifyContent="space-between"
            width="100%"
        >
            <Row>
                <Image
                    source={
                        performer.avatar_url
                            ? { uri: performer.avatar_url }
                            : FALLBACK_IMAGE_URL
                    }
                    style={{
                        width: spacing.xxl,
                        height: spacing.xxl,
                        borderRadius: 9999, // radii.pill
                        marginRight: spacing.m,
                        backgroundColor: colors.backgroundSecondary,
                    }}
                    transition={300}
                />
                <Column>
                    <ThemedText type="body">{performer.name}</ThemedText>
                    {performer.position && (
                        <ThemedText type="caption1" color="textSecondary">
                            {performer.position}
                        </ThemedText>
                    )}
                </Column>
            </Row>
            <Box
                backgroundColor="backgroundTertiary"
                borderRadius="pill"
                paddingVertical="s"
                paddingHorizontal="xl"
                margin="xs"
                alignItems="center"
                justifyContent="center"
            >
                <ThemedText type="footnote" color="tint">
                    詳細
                </ThemedText>
            </Box>
        </Row>
    );
}
