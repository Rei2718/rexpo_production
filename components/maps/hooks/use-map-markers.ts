import { DisplayVenue, Verified } from '@/supabase/api/types';
import { useMemo } from 'react';
import { useMapCoordinates } from './use-map-coordinates';

type Props = {
    venues: Verified<DisplayVenue>[];
    svgWidth: number;
    svgHeight: number;
};

export function useMapMarkers({ venues, svgWidth, svgHeight }: Props) {
    const { getPixelCoords } = useMapCoordinates({ svgWidth, svgHeight });

    const processedVenues = useMemo(() => {
        return venues
            .filter(v => v.map_latitude && v.map_longitude)
            .map(venue => {
                const { x, y } = getPixelCoords(venue.map_latitude!, venue.map_longitude!);
                return { ...venue, x, y };
            });
    }, [venues, getPixelCoords]);

    return {
        processedVenues,
        getPixelCoords,
    };
}
