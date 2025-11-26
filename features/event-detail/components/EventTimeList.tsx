import { ThemedText } from '@/components/ui/themed-text';
import { spacing } from '@/constants/theme';
import { formatTime } from '@/utils/date';
import { StyleSheet } from 'react-native';
import { EventSection } from './EventSection';
import { EventTimeListProps, TimeSlot } from './types';

export function EventTimeList({ times }: EventTimeListProps) {
    const timeList = times as TimeSlot[] | null;

    if (!timeList || timeList.length === 0) {
        return null;
    }

    return (
        <EventSection title="開催時間">
            {timeList.map((slot) => (
                <ThemedText key={slot.id} type="body" style={styles.timeText}>
                    {formatTime(slot.start)} - {formatTime(slot.end)}
                </ThemedText>
            ))}
        </EventSection>
    );
}

const styles = StyleSheet.create({
    timeText: {
        marginTop: spacing.xs,
    },
});
