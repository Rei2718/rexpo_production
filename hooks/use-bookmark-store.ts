import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface BookmarkState {
    bookmarks: Record<string, number>;
    toggleBookmark: (eventId: string) => void;
    isBookmarked: (eventId: string) => boolean;
}

export const useBookmarkStore = create<BookmarkState>()(
    persist(
        (set, get) => ({
            bookmarks: {},
            toggleBookmark: (eventId: string) => {
                set((state) => {
                    const newBookmarks = { ...state.bookmarks };
                    if (newBookmarks[eventId]) {
                        delete newBookmarks[eventId];
                    } else {
                        newBookmarks[eventId] = Date.now();
                    }
                    return { bookmarks: newBookmarks };
                });
            },
            isBookmarked: (eventId: string) => {
                return !!get().bookmarks[eventId];
            },
        }),
        {
            name: 'bookmark-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
