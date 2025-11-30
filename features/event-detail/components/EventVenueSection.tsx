import { ThemedText } from '@/components/ui/themed-text';
import { EventVenueSectionProps } from '../types';
import { EventSection } from './EventSection';

export function EventVenueSection({ venueName }: EventVenueSectionProps) {
    if (!venueName) {
        return null;
    }

    return (
        <EventSection title="会場">
            <ThemedText type="body">{venueName}</ThemedText>
        </EventSection>
    );
}
