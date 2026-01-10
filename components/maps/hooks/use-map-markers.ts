import { DisplayVenue, Verified } from '@/supabase/api/types';
import { useMemo } from 'react';
import { useMapCoordinates } from './use-map-coordinates';

type Props = {
    venues: Verified<DisplayVenue>[];
    svgWidth: number;
    svgHeight: number;
    currentFloor: number;
};

export function useMapMarkers({ venues, svgWidth, svgHeight, currentFloor }: Props) {
    const { getPixelCoords } = useMapCoordinates({ svgWidth, svgHeight });

    const processedVenues = useMemo(() => {
        return venues
            .filter(v => v.map_latitude && v.map_longitude && v.floor === currentFloor)
            .map(venue => {
                const { x, y } = getPixelCoords(venue.map_latitude!, venue.map_longitude!);
                return { ...venue, x, y };
            });
    }, [venues, getPixelCoords, currentFloor]);

    return {
        processedVenues,
        getPixelCoords,
    };
}
