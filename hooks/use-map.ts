import { useAllVenues } from '@/supabase/api';
import { DisplayVenue } from '@/supabase/api/types';
import { useCallback, useRef, useState } from 'react';
import MapView, { Region } from 'react-native-maps';

export const INITIAL_REGION: Region = {
    latitude: 43.057149,
    longitude: 141.388626,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
};

const BOUNDARY_BUFFER = 0.00005;
const MAP_BOUNDARIES = {
    northEast: {
        latitude: INITIAL_REGION.latitude + INITIAL_REGION.latitudeDelta / 2 + BOUNDARY_BUFFER,
        longitude: INITIAL_REGION.longitude + INITIAL_REGION.longitudeDelta / 2 + BOUNDARY_BUFFER,
    },
    southWest: {
        latitude: INITIAL_REGION.latitude - INITIAL_REGION.latitudeDelta / 2 - BOUNDARY_BUFFER,
        longitude: INITIAL_REGION.longitude - INITIAL_REGION.longitudeDelta / 2 - BOUNDARY_BUFFER,
    },
};

export const MIN_ZOOM_LEVEL = 18;

export default function useMap() {
    const mapRef = useRef<MapView>(null);
    const [selectedVenue, setSelectedVenue] = useState<DisplayVenue | null>(null);

    const { data, isPending, isError } = useAllVenues();

    const onMapReady = useCallback(() => {
        if (mapRef.current) {
            mapRef.current.setMapBoundaries(MAP_BOUNDARIES.northEast, MAP_BOUNDARIES.southWest);
        }
    }, []);

    const onSelectVenue = useCallback((venue: DisplayVenue) => {
        setSelectedVenue(venue);
    }, []);

    const onCloseSheet = useCallback(() => {
        setSelectedVenue(null);
    }, []);

    const onMapPress = useCallback(() => {
        setSelectedVenue(null);
    }, []);

    return {
        mapRef,
        data,
        isPending,
        isError,
        selectedVenue,
        onMapReady,
        onSelectVenue,
        onCloseSheet,
        onMapPress,
    };
}
