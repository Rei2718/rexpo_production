import { ThemedText } from '@/components/ui/themed-text';
import { spacing } from '@/constants/theme';
import { StyleSheet } from 'react-native';
import { EventDescriptionProps } from '../types';
import EventSection from './section';

export default function EventDescription({ description, overview }: EventDescriptionProps) {
    const content = description ?? overview ?? '情報がありません。';

    return (
        <EventSection title="概要">
            <ThemedText type="body" style={styles.container} color="textSecondary">
                {content}
            </ThemedText>
        </EventSection>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: spacing.xl,
    },
});
