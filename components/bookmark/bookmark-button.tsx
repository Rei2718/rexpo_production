import { Icon } from '@/components/ui/icon';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import * as Haptics from 'expo-haptics';
import { TouchableOpacity } from 'react-native';
import { useBookmarkStore } from './use-bookmark-store';

export default function BookmarkButton({ eventId }: { eventId: string }) {
    const color = useThemeColor();
    const id = Array.isArray(eventId) ? eventId[0] : eventId;

    const isBookmarked = useBookmarkStore(
        (state) => !!state.bookmarks[id]
    );

    const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);

    const handlePress = () => {
        if (!id) return;
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        toggleBookmark(id);
    };

    if (!id) return null;

    return (
        <TouchableOpacity onPressIn={handlePress}>
            <Icon
                icon={isBookmarked ? "bookmarkFill" : "bookmark"}
                size={Spacing.s24}
                color={color.natural_100}
            />
        </TouchableOpacity>
    );
}
