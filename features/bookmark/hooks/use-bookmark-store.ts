import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { BookmarkState } from '../types';

const store = create<BookmarkState>()(
    persist(
        (set, get) => ({
            bookmarks: {
                event: [],
                food: [],
            },
            toggleBookmark: (id, type) => {
                set((state) => {
                    const currentBookmarks = state.bookmarks[type];
                    const isBookmarked = currentBookmarks.includes(id);
                    const newBookmarks = isBookmarked
                        ? currentBookmarks.filter((bookmarkId) => bookmarkId !== id)
                        : [...currentBookmarks, id];

                    return {
                        bookmarks: {
                            ...state.bookmarks,
                            [type]: newBookmarks,
                        },
                    };
                });
            },
            isBookmarked: (id, type) => {
                const state = get();
                return state.bookmarks[type].includes(id);
            },
        }),
        {
            name: 'bookmark-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);

export function useBookmarkStore() {
    return store();
}
