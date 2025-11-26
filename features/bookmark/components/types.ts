export type BookmarkType = 'event' | 'food';

export interface BookmarkProps {
    id: string;
    type: BookmarkType;
}

export interface BookmarkState {
    bookmarks: {
        [key in BookmarkType]: string[];
    };
    toggleBookmark: (id: string, type: BookmarkType) => void;
    isBookmarked: (id: string, type: BookmarkType) => boolean;
}