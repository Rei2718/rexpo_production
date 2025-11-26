export type BookmarkType = 'event' | 'food';

export interface BookmarkProps {
    id: string;
    type: BookmarkType;
}

export interface BookmarkState {
    bookmarks: {
        event: string[];
        food: string[];
    };
    toggleBookmark: (id: string, type: BookmarkType) => void;
    isBookmarked: (id: string, type: BookmarkType) => boolean;
}
