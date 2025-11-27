import { useGetEventDetailsById } from '@/supabase/data';
import { useLocalSearchParams } from 'expo-router';
import { Performer, TimeSlot } from '../components/types';

export function useEventDetail() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { data, isPending, isError } = useGetEventDetailsById(id);
    const eventData = data?.[0];

    const formattedData = eventData ? {
        ...eventData,
        performers: eventData.performers as unknown as Performer[] | null,
        times: eventData.times as unknown as TimeSlot[] | null,
    } : null;

    return {
        id,
        data: formattedData,
        isPending,
        isError,
    };
}