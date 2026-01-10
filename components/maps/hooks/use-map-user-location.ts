import { useUserLocation } from '@/hooks/use-user-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useMemo } from 'react';
import { getDistanceFromCenter } from '../utils';

const PERMISSION_KEY = 'hasRequestedMapLocationPermission';
const MAX_RANGE_METERS = 400;

export function useMapUserLocation() {
    const { location, requestLocation } = useUserLocation();
    // const [showPermissionModal, setShowPermissionModal] = useState(false); // Removed manual modal control

    useEffect(() => {
        const checkInitialPermission = async () => {
            try {
                const hasRequested = await AsyncStorage.getItem(PERMISSION_KEY);
                if (!hasRequested) {
                    await requestLocation();
                    await AsyncStorage.setItem(PERMISSION_KEY, 'true');
                }
            } catch (error) {
                console.error('Failed to check location permission status', error);
            }
        };

        checkInitialPermission();
    }, [requestLocation]);

    const isOutOfRange = useMemo(() => {
        if (!location) return false;
        const distance = getDistanceFromCenter(location.coords.latitude, location.coords.longitude);
        return distance > MAX_RANGE_METERS;
    }, [location]);

    // Re-expose requestLocation for manual trigger if needed, but primary flow is automatic once
    const checkLocationPermission = async () => {
        // This might be redundant if we rely solely on system settings, 
        // but keeping it if we want to support "try again" from UI
        return requestLocation();
    };

    return {
        userLocation: location,
        checkLocationPermission,
        isOutOfRange,
        // showPermissionModal, // Removed
        // setShowPermissionModal // Removed
    };
}
