import { EventList } from '@/components/shared/event-list';
import { Container } from '@/components/ui/container';
import { ThemedText } from '@/components/ui/themed-text';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { TimelineSlot, Verified } from '@/supabase/api/types';
import { StyleSheet, View } from 'react-native';

interface PreviewSlotGroupProps {
    item: Verified<TimelineSlot>;
    headerText: string;
    timeRangeText: string;
    isActive: boolean;
    isFirst: boolean;
    isLast: boolean;
    showTimestep: boolean;
}

export function PreviewSlotGroup({
    item,
    headerText,
    timeRangeText,
    isActive,
    isFirst,
    isLast,
    showTimestep,
}: PreviewSlotGroupProps) {
    const color = useThemeColor();

    return (
        <Container flexDirection="row">
            {/* Step UI Column - Stretches with content */}
            {showTimestep && (
                <Container alignItems="center" paddingTop='s8' paddingRight='s8'>
                    {/* Dot at the top */}
                    <View
                        style={[
                            styles.dot,
                            { backgroundColor: color.natural_100 },
                        ]}
                    />

                    {/* Line fills the remaining space (Content + Spacing) */}
                    {!isLast && (
                        <Container backgroundColor={color.natural_400} style={styles.verticalLine} />
                    )}
                </Container>
            )}

            {/* Content Column */}
            <Container flex={1} gap="s4">
                {/* Custom Header: Row Layout */}
                <Container
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    marginHorizontal="s8"
                >
                    <ThemedText type="caption2" color={isActive ? "natural_100" : "natural_200"}>
                        {headerText}
                    </ThemedText>
                    <ThemedText
                        type="footnote"
                        color="natural_200"
                        style={{ fontStyle: 'italic' }}
                    >
                        {timeRangeText}
                    </ThemedText>
                </Container>

                <EventList events={item.events} />
            </Container>
        </Container>
    );
}

const styles = StyleSheet.create({
    dot: {
        width: Spacing.s4,
        height: Spacing.s4,
        borderRadius: Spacing.pill,
    },
    verticalLine: {
        width: 1,
        flex: 1,
        marginBottom: -(Spacing.s8 + Spacing.s20),
    },
});