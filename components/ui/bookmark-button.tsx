import { Haptic } from '@/components/ui/haptic';
import { Icon } from '@/components/ui/icon';
import { Spacing } from '@/constants/theme';
import { useBookmarkStore } from '@/hooks/use-bookmark-store';
import { useThemeColor } from '@/hooks/use-theme-color';
import { EventOverview, Verified } from '@/supabase/api/types';
import { TouchableOpacity } from 'react-native';


export default function BookmarkButton(data: Verified<EventOverview>) {
    const color = useThemeColor();

    const isBookmarked = useBookmarkStore(
        (state) => !!state.bookmarks[data.event_public_id]
    );
    const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);

    const handlePress = () => {
        toggleBookmark(data.event_public_id);
    };

    return (
        <Haptic type="Heavy">
            <TouchableOpacity onPressIn={handlePress}>
                <Icon
                    icon={isBookmarked ? "bookmarkFill" : "bookmark"}
                    size={Spacing.icon}
                    color={color.natural_100}
                />
            </TouchableOpacity>
        </Haptic>
    );
}