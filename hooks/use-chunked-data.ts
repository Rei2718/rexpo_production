import { useMemo } from 'react';

export function useChunkedData<T>(
    data: T[] | undefined,
    chunkSize: number
): T[][] {
    return useMemo(() => {
        if (!data) {
            return [];
        }

        const chunks: T[][] = [];
        for (let i = 0; i < data.length; i += chunkSize) {
            chunks.push(data.slice(i, i + chunkSize));
        }
        return chunks;
    }, [data, chunkSize]);
}