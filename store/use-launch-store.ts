import { HAS_LAUNCHED_KEY } from '@/constants/storage-keys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

interface LaunchState {
    hasLaunched: boolean | null;
    checkHasLaunched: () => Promise<void>;
    completeOnboarding: () => Promise<void>;
}

export const useLaunchStore = create<LaunchState>((set) => ({
    hasLaunched: null,
    checkHasLaunched: async () => {
        try {
            const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED_KEY);
            set({ hasLaunched: hasLaunched !== null });
        } catch (e) {
            console.error('Failed to check launch status', e);
            set({ hasLaunched: false });
        }
    },
    completeOnboarding: async () => {
        try {
            await AsyncStorage.setItem(HAS_LAUNCHED_KEY, 'true');
            set({ hasLaunched: true });
        } catch (e) {
            console.error('Failed to save launch status', e);
            set({ hasLaunched: true }); // optimistic update
        }
    },
}));