import { useLaunchStore } from '@/store/use-launch-store';
import { useEffect, useState } from 'react';

export const useIsFirstLaunch = () => {
    const { hasLaunched, checkHasLaunched } = useLaunchStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkHasLaunched();
    }, []);

    useEffect(() => {
        if (hasLaunched !== null) {
            setIsLoading(false);
        }
    }, [hasLaunched]);

    return {
        isFirstLaunch: hasLaunched === false,
        isLoading: isLoading || hasLaunched === null,
    };
};
