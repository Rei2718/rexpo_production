import { ThemedText } from '@/components/ui/themed-text';
import { EventSection } from './EventSection';
import { EventVenueSectionProps } from './types';

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
