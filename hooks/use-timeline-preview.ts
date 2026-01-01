import { useEventsByVenue } from '@/supabase/api';
import { TimelineSlot, Verified } from '@/supabase/api/types';
import { useEffect, useState } from 'react';

export function useTimelinePreview(venue_public_id: string) {
    const { data: slots, isPending, isError } = useEventsByVenue(venue_public_id);
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNow(new Date());
        }, 60000); // Update every minute

        return () => clearInterval(intervalId);
    }, []);

    const parseTime = (timeStr: string | null): Date | null => {
        if (!timeStr) return null;
        const [hours, minutes, seconds] = timeStr.split(':').map(Number);
        const date = new Date();
        date.setHours(hours, minutes, seconds || 0, 0);
        return date;
    };

    const getPreviewData = () => {
        if (isPending || isError || !slots || slots.length === 0) {
            return { activeSlot: null, nextSlot: null };
        }

        const nowTime = now.getTime();
        let activeSlot: Verified<TimelineSlot> | null = null;
        let nextSlot: Verified<TimelineSlot> | null = null;

        for (const slot of slots) {
            if (!slot) continue;
            const slotStart = parseTime(slot.starts);
            if (!slotStart) continue;

            // Check if this slot is "next" (first one in future)
            if (!nextSlot && slotStart.getTime() > nowTime) {
                nextSlot = slot;
            }

            // Check if any event in this slot is "active"
            if (!activeSlot) {
                for (const event of slot.events) {
                    if (!event) continue;
                    const eventStart = parseTime(event.starts);
                    const eventEnd = parseTime(event.ends);

                    if (eventStart && eventEnd && eventStart.getTime() <= nowTime && eventEnd.getTime() >= nowTime) {
                        activeSlot = slot;
                        break;
                    }
                }
            }
        }

        return { activeSlot, nextSlot };
    };

    const getHeaderText = (slot: Verified<TimelineSlot>, type: 'now' | 'next') => {
        const nowTime = now.getTime();
        const slotStart = parseTime(slot.starts);

        if (type === 'now') {
            const activeEvent = slot.events.find(e => {
                const s = parseTime(e.starts);
                const end = parseTime(e.ends);
                return s && end && s.getTime() <= nowTime && end.getTime() >= nowTime;
            });

            if (activeEvent) {
                const endTime = parseTime(activeEvent.ends);
                if (endTime) {
                    const diffMins = Math.ceil((endTime.getTime() - nowTime) / 60000);
                    return `あと ${Math.max(0, diffMins)}分 で終了`;
                }
            }
            return '進行中';
        } else {
            if (slotStart) {
                const diffMins = Math.ceil((slotStart.getTime() - nowTime) / 60000);
                if (diffMins < 60) {
                    return `あと ${Math.max(0, diffMins)}分 で開始`;
                } else {
                    const hours = slotStart.getHours().toString().padStart(2, '0');
                    const minutes = slotStart.getMinutes().toString().padStart(2, '0');
                    return `${hours}:${minutes} 開始予定`;
                }
            }
        }
        return '';
    };

    const getTimeRangeText = (slot: Verified<TimelineSlot>, type: 'now' | 'next') => {
        const nowTime = now.getTime();

        let targetEvent;
        if (type === 'now') {
            targetEvent = slot.events.find(e => {
                const s = parseTime(e.starts);
                const end = parseTime(e.ends);
                return s && end && s.getTime() <= nowTime && end.getTime() >= nowTime;
            });
        }

        // Fallback to first event if no active event (or for 'next')
        if (!targetEvent) {
            targetEvent = slot.events[0];
        }

        if (targetEvent) {
            const start = parseTime(targetEvent.starts);
            const end = parseTime(targetEvent.ends);

            if (start && end) {
                const startStr = start.getHours().toString().padStart(2, '0') + ':' + start.getMinutes().toString().padStart(2, '0');
                const endStr = end.getHours().toString().padStart(2, '0') + ':' + end.getMinutes().toString().padStart(2, '0');
                return `${startStr} - ${endStr}`;
            }
        }

        // Fallback to slot start only if event times unavailable
        return slot.starts ?? '';
    };

    const previewData = getPreviewData();
    const showTimestep = !!(previewData.activeSlot && previewData.nextSlot);

    return {
        ...previewData,
        getHeaderText,
        getTimeRangeText,
        showTimestep,
        isLoading: isPending,
        isError
    };
}
