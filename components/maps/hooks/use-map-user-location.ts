import { useUserLocation } from '@/hooks/use-user-location';
import { useFocusEffect } from 'expo-router';
import { useCallback, useMemo } from 'react';
import { getDistanceFromCenter } from '../utils';

const MAX_RANGE_METERS = 300;

export function useMapUserLocation() {
    const { location, requestLocation, status } = useUserLocation();

    const checkLocationPermission = async () => {
        return requestLocation('manual');
    };

    useFocusEffect(
        useCallback(() => {
            requestLocation('auto');
        }, [requestLocation])
    );

    const isOutOfRange = useMemo(() => {
        if (!location) return false;
        const distance = getDistanceFromCenter(location.coords.latitude, location.coords.longitude);
        return distance > MAX_RANGE_METERS;
    }, [location]);

    return {
        userLocation: location,
        status,
        checkLocationPermission,
        isOutOfRange,
    };
}