import { ThemedText } from '@/components/ui/themed-text';
import { spacing } from '@/constants/theme';
import { StyleSheet } from 'react-native';
import { EventSection } from './EventSection';
import { EventDescriptionProps } from './types';

export function EventDescription({ description, overview }: EventDescriptionProps) {
    const content = description ?? overview ?? '情報がありません。';

    return (
        <EventSection title="概要">
            <ThemedText type="body" style={styles.container} color="textSecondary">
                {content}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure pariatur quod laboriosam expedita, iste alias inventore, tempore debitis accusamus mollitia voluptatibus eum, ea laudantium. Corrupti sed culpa commodi eaque rerum?
            </ThemedText>
        </EventSection>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: spacing.xl,
    },
});
