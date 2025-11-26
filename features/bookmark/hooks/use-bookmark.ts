import { useCallback } from 'react';
import { BookmarkProps } from '../types';
import { useBookmarkStore } from './use-bookmark-store';

type UseBookmarkProps = {
  id?: string;
  type: BookmarkProps['type'];
};

export function useBookmark({ id, type }: UseBookmarkProps) {
  const { bookmarks, toggleBookmark: toggleStoreBookmark } = useBookmarkStore();

  const isBookmarked = bookmarks[type].includes(id || '');
  const bookmarkedIds = bookmarks[type];

  const toggleBookmark = useCallback(() => {
    if (!id) return;
    toggleStoreBookmark(id, type);
  }, [id, type, toggleStoreBookmark]);

  return { isBookmarked, toggleBookmark, bookmarkedIds };
}
