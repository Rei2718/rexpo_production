import * as Location from 'expo-location';
import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export function useUserLocation() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [status, setStatus] = useState<Location.PermissionStatus | null>(null);

    // Store subscription in ref to avoid dependency cycles and ensure stable reference usage
    const subscriptionRef = useRef<Location.LocationSubscription | null>(null);
    const appState = useRef(AppState.currentState);

    const startWatching = useCallback(async () => {
        if (subscriptionRef.current) return;

        try {
            const sub = await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    distanceInterval: 10,
                    timeInterval: 10000,
                },
                (newLocation) => {
                    setLocation(newLocation);
                }
            );
            subscriptionRef.current = sub;
        } catch (e) {
            console.warn("Failed to start watching position", e);
        }
    }, []);

    const stopWatching = useCallback(() => {
        if (subscriptionRef.current) {
            subscriptionRef.current.remove();
            subscriptionRef.current = null;
        }
    }, []);

    // 以前の useFocusEffect 内の自動開始ロジックは削除し、
    // useMapUserLocation 側で制御する方針に変更して、責務を分離する。
    // ただし、このフック自体が汎用的なので、マウント時のクリーンアップは必要。

    // クリーンアップのみ定義
    useFocusEffect(
        useCallback(() => {
            return () => {
                // 画面から離れる時は監視を停止する（バッテリー節約）
                stopWatching();
            };
        }, [stopWatching])
    );

    /**
     * Request or check location permission.
     * @param mode 'auto' (triggered by app logic/focus) or 'manual' (user interaction)
     */
    const requestLocation = useCallback(async (mode: 'auto' | 'manual' = 'manual') => {
        try {
            const { status: currentStatus, canAskAgain } = await Location.getForegroundPermissionsAsync();
            setStatus(currentStatus);

            if (currentStatus === 'granted') {
                startWatching();
                return 'granted';
            }

            // If denied, we need to be careful
            if (currentStatus === 'denied') {
                if (mode === 'auto') {
                    // In auto mode, if already denied, do NOT annoy the user.
                    return 'denied';
                }
                // In manual mode, we try to ask again if possible
                if (!canAskAgain) {
                    // Cannot ask again, user must go to settings
                    return 'denied';
                }
            }

            // At this point:
            // - status is 'undetermined' OR
            // - status is 'denied' BUT mode is 'manual' AND canAskAgain is true

            // For 'undetermined' (Ask Every Time case usually starts here on fresh launch?), 
            // we typically want to ask, even in 'auto' mode (e.g. app focus), 
            // UNLESS it's annoying. But "Ask Every Time" means we SHOULD ask.

            const { status: newStatus } = await Location.requestForegroundPermissionsAsync();
            setStatus(newStatus);

            if (newStatus === 'granted') {
                startWatching();
            }
            return newStatus;
        } catch (e) {
            console.error("Error asking for location permission", e);
            setErrorMsg("Error requesting permission");
            return null;
        }
    }, [startWatching]);

    // Handle AppState changes to re-check specific permission updates (e.g. returning from Settings)
    useEffect(() => {
        const handleAppStateChange = (nextAppState: AppStateStatus) => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === 'active'
            ) {
                // App came to foreground. Check permissions again silently.
                requestLocation('auto');
            }
            appState.current = nextAppState;
        };

        const subscription = AppState.addEventListener('change', handleAppStateChange);

        return () => {
            subscription.remove();
        };
    }, [requestLocation]);

    // Initial status check on mount (silent) to ensure UI is correct
    useEffect(() => {
        (async () => {
            try {
                const { status: currentStatus } = await Location.getForegroundPermissionsAsync();
                setStatus(currentStatus);
                // If granted, we can start watching immediately if appropriate, 
                // but usually the specific component (Map) triggers 'requestLocation' which handles startWatching.
                // However, if we just want to know status, this is enough.
                if (currentStatus === 'granted') {
                    // It's safe to start watching if granted, but maybe wait for explicit request?
                    // Actually, if it's granted, we probably want location.
                    startWatching();
                }
            } catch (e) {
                console.warn("Failed to get permissions on mount", e);
            }
        })();
    }, [startWatching]);

    return {
        location,
        errorMsg,
        status,
        requestLocation,
    };
}
