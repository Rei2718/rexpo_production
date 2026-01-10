import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface SettingState {
    // isLocationVisible: boolean;
    // setLocationVisible: (visible: boolean) => void;
}

export const useSettingStore = create<SettingState>()(
    persist(
        (set) => ({
            // Default to false for privacy safety
            // isLocationVisible: false,
            // setLocationVisible: (visible: boolean) => {
            //    set({ isLocationVisible: visible });
            // },
            // Keeping the store structure for future settings, effectively empty for now regarding location
        }),
        {
            name: 'setting-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
