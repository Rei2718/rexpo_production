import { ThemedText } from '@/components/ui/themed-text';
import { spacing } from '@/constants/theme';
import { formatTime } from '@/utils/date';
import { StyleSheet } from 'react-native';
import { EventTimeListProps } from '../types';
import EventSection from './section';

export default function EventTimeList({ times }: EventTimeListProps) {
    if (!times || times.length === 0) {
        return null;
    }

    return (
        <EventSection title="開催時間">
            {times.map((slot) => (
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
