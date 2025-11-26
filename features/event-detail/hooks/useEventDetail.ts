import { useGetEventDetailsById } from '@/supabase/data';
import { useLocalSearchParams } from 'expo-router';

export function useEventDetail() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { data, isPending, isError } = useGetEventDetailsById(id);

    return {
        id,
        data,
        isPending,
        isError,
    };
}
