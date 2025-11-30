import { spacing } from '@/constants/theme';
import { useChunkedData } from '@/hooks/use-chunked-data';
import { useWindowDimensions } from 'react-native';
import { useGetEventsListByTag } from '../api';

const CHUNK_SIZE = 3;

export function useEventList(targetTag: string) {
    const { data: originalData, isPending, isError } = useGetEventsListByTag(targetTag);
    const chunkedData = useChunkedData(originalData, CHUNK_SIZE);
    const { width } = useWindowDimensions();

    const hasData = chunkedData && chunkedData.length > 0;
    const itemWidth = width * 0.85;
    const separatorWidth = spacing.xl;
    const snapInterval = itemWidth + separatorWidth;

    return {
        chunkedData,
        isPending,
        isError,
        hasData,
        itemWidth,
        snapInterval,
    };
}
