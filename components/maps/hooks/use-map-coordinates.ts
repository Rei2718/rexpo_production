import { useCallback } from 'react';
import { convertLatLngToXY } from "../utils";

interface UseMapCoordinatesProps {
    svgWidth: number;
    svgHeight: number;
}

export const useMapCoordinates = ({ svgWidth, svgHeight }: UseMapCoordinatesProps) => {
    const getPixelCoords = useCallback((lat: number, lng: number) => {
        const { x: xPct, y: yPct } = convertLatLngToXY(lat, lng);
        return {
            x: (xPct / 100) * svgWidth,
            y: (yPct / 100) * svgHeight
        };
    }, [svgWidth, svgHeight]);

    return {
        getPixelCoords
    };
};
