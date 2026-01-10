import { DisplayVenue, Verified } from '@/supabase/api/types';
import { useMemo } from 'react';
import { convertLatLngToXY } from '../utils';
import { useMapCoordinates } from './use-map-coordinates';

type Props = {
    venues: Verified<DisplayVenue>[];
    svgWidth: number;
    svgHeight: number;
    currentFloor: number;
};

export function calculateVenuePositions(
    venues: Verified<DisplayVenue>[],
    svgWidth: number,
    svgHeight: number,
    floor: number
) {
    return venues
        .filter(v => v.map_latitude && v.map_longitude && v.floor === floor)
        .map(venue => {
            const { x: xPct, y: yPct } = convertLatLngToXY(venue.map_latitude!, venue.map_longitude!);
            return {
                ...venue,
                x: (xPct / 100) * svgWidth,
                y: (yPct / 100) * svgHeight
            };
        });
}

export function useMapMarkers({ venues, svgWidth, svgHeight, currentFloor }: Props) {
    const { getPixelCoords } = useMapCoordinates({ svgWidth, svgHeight });

    const processedVenues = useMemo(() => {
        return calculateVenuePositions(venues, svgWidth, svgHeight, currentFloor);
    }, [venues, svgWidth, svgHeight, currentFloor]);

    return {
        processedVenues,
        getPixelCoords,
    };
}
