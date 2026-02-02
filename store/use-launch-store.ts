import { HAS_LAUNCHED_KEY } from '@/constants/storage-keys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

interface LaunchState {
    hasLaunched: boolean | null;
    checkHasLaunched: () => Promise<void>;
    completeOnboarding: () => Promise<void>;
    resetOnboarding: () => Promise<void>;
}

const CURRENT_ONBOARDING_VERSION = 1;

export const useLaunchStore = create<LaunchState>((set) => ({
    hasLaunched: null,
    checkHasLaunched: async () => {
        try {
            const storedValue = await AsyncStorage.getItem(HAS_LAUNCHED_KEY);

            if (storedValue === null) {
                set({ hasLaunched: false });
                return;
            }

            // Legacy check: if value is "true", treat as version 0 (force update)
            // or if it's a number, check if it matches current version
            const storedVersion = storedValue === 'true' ? 0 : parseInt(storedValue, 10);

            if (isNaN(storedVersion) || storedVersion < CURRENT_ONBOARDING_VERSION) {
                set({ hasLaunched: false });
            } else {
                set({ hasLaunched: true });
            }
        } catch (e) {
            console.error('Failed to check launch status', e);
            set({ hasLaunched: false });
        }
    },
    resetOnboarding: async () => {
        try {
            await AsyncStorage.removeItem(HAS_LAUNCHED_KEY);
            set({ hasLaunched: false });
        } catch (e) {
            console.error('Failed to reset launch status', e);
        }
    },
    completeOnboarding: async () => {
        try {
            await AsyncStorage.setItem(HAS_LAUNCHED_KEY, CURRENT_ONBOARDING_VERSION.toString());
            set({ hasLaunched: true });
        } catch (e) {
            console.error('Failed to save launch status', e);
            set({ hasLaunched: true }); // optimistic update
        }
    },
}));