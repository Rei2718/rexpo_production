import { useUserLocation } from '@/hooks/use-user-location';
import { useState } from 'react';

export function useMapUserLocation() {
    const { location, requestLocation } = useUserLocation();
    const [showPermissionModal, setShowPermissionModal] = useState(false);

    const checkLocationPermission = async () => {
        const result = await requestLocation();
        if (result === 'denied') {
            setShowPermissionModal(true);
            return 'denied';
        }
        return 'granted';
    };

    return {
        userLocation: location,
        checkLocationPermission,
        showPermissionModal,
        setShowPermissionModal
    };
}
