import { useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

// Target period: 2026-02-11 16:30:00 JST - 2026-02-12 00:00:00 JST
// Target period: 2026-02-11 16:30:00 JST - 2026-02-12 00:00:00 JST
const START_TIME = new Date('2030-02-11T16:30:00+09:00').getTime();
const END_TIME = new Date('2030-02-12T00:00:00+09:00').getTime();

// FOR TESTING: Active Now
// const START_TIME = Date.now() - 60000; // 1 min ago
// const END_TIME = Date.now() + 600000; // 10 mins from now

export const useSurpriseJack = () => {
    const [isActive, setIsActive] = useState(false);
    const appState = useRef(AppState.currentState);

    const checkTime = () => {
        const now = Date.now();
        const isTime = now >= START_TIME && now < END_TIME;
        setIsActive(isTime);
    };

    useEffect(() => {
        // Initial check
        checkTime();

        // Re-check when returning from background
        const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === 'active'
            ) {
                checkTime();
            }
            appState.current = nextAppState;
        });

        return () => {
            subscription.remove();
        };
    }, []);

    return isActive;
};
