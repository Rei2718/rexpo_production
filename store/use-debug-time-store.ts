import { create } from 'zustand';

interface DebugTimeState {
    debugTime: Date | null;
    setDebugTime: (time: Date | null) => void;
    // Helper to get effective time
    getEffectiveTime: () => Date;
}

export const useDebugTimeStore = create<DebugTimeState>((set, get) => ({
    debugTime: null,
    setDebugTime: (time) => set({ debugTime: time }),
    getEffectiveTime: () => get().debugTime ?? new Date(),
}));