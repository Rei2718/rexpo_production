import { Icon } from '@/components/ui/icon';
import { Box } from '@/components/ui/layout/box';
import { Column, Row } from '@/components/ui/layout/flex';
import { ThemedText } from '@/components/ui/themed-text';
import { FALLBACK_IMAGE_URL } from '@/constants/fallback-image';
import { spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { msChevronRight } from '@material-symbols-react-native/rounded-400';
import { Image } from 'expo-image';
import { EventPerformerListProps, Performer } from '../types';
import EventSection from './section';



export default function EventPerformerList({ performers }: EventPerformerListProps) {
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
                    <ThemedText type="body">
                        {performer.name}
                    </ThemedText>
                    {performer.position && (
                        <ThemedText type="caption1" color="textSecondary">
                            {performer.position}
                        </ThemedText>
                    )}
                </Column>
            </Row>
            <Box
                paddingHorizontal="s"
                justifyContent="center"
                alignItems="center"
            >
                <Icon icon={msChevronRight} size={28} color={colors.textTertiary} />
            </Box>
        </Row>
    );
}
