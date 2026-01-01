import { Column } from '@/components/ui/flex';
import { Section } from '@/components/ui/section';
import { VenueDetails, Verified } from '@/supabase/api/types';
import { useTimelinePreview } from '../../hooks/use-timeline-preview';
import { PreviewSlotGroup } from './preview-slot-group';

export function TimelinePreview(data: Verified<VenueDetails>) {
    const {
        activeSlot,
        nextSlot,
        getHeaderText,
        getTimeRangeText,
        showTimestep,
        isLoading,
        isError
    } = useTimelinePreview(data.venue_public_id);

    if (isLoading || isError) return null;
    if (!activeSlot && !nextSlot) return null;

    return (
        <Section title='この時間帯のイベント' paddingHorizontal='s20'>
            <Column gap="s20">
                {activeSlot && (
                    <PreviewSlotGroup
                        item={activeSlot}
                        headerText={getHeaderText(activeSlot, 'now')}
                        timeRangeText={getTimeRangeText(activeSlot, 'now')}
                        isActive={true}
                        isFirst={true}
                        isLast={!nextSlot}
                        showTimestep={showTimestep}
                    />
                )}
                {nextSlot && (
                    <PreviewSlotGroup
                        item={nextSlot}
                        headerText={getHeaderText(nextSlot, 'next')}
                        timeRangeText={getTimeRangeText(nextSlot, 'next')}
                        isActive={false}
                        isFirst={!activeSlot}
                        isLast={true}
                        showTimestep={showTimestep}
                    />
                )}
            </Column>
        </Section>
    );
}
