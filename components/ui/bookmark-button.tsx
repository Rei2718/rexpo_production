import { Icon } from '@/components/ui/icon';
import { Spacing } from '@/constants/theme';
import { useBookmarkStore } from '@/hooks/use-bookmark-store';
import { useThemeColor } from '@/hooks/use-theme-color';
import * as Haptics from 'expo-haptics';
import { TouchableOpacity } from 'react-native';

export default function BookmarkButton({ event_public_id }: { event_public_id: string }) {
    const color = useThemeColor();
    const id = Array.isArray(event_public_id) ? event_public_id[0] : event_public_id;

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