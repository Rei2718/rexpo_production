import { useCallback, useState } from 'react';

export function useMapFloor() {
    const [currentFloor, setCurrentFloor] = useState<number>(1);

    const handleFloorToggle = useCallback(() => {
        setCurrentFloor(prev => (prev === 1 ? 2 : 1));
    }, []);

    return {
        currentFloor,
        handleFloorToggle,
    };
}
