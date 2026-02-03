import { Haptic } from '@/components/ui/haptic';
import { Icon } from '@/components/ui/icon';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Spacing } from '@/constants/theme';
import { useBookmarkStore } from '@/hooks/use-bookmark-store';
import { useThemeColor } from '@/hooks/use-theme-color';
import { EventOverview, Verified } from '@/supabase/api/types';
import { StyleSheet } from 'react-native';


import { usePostHog } from 'posthog-react-native';

export default function BookmarkButton(data: Verified<EventOverview>) {
    const color = useThemeColor();
    const posthog = usePostHog();

    const isBookmarked = useBookmarkStore(
        (state) => !!state.bookmarks[data.event_public_id]
    );
    const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);

    const handlePress = () => {
        const properties = {
            screen: data.event_public_id,
            label: isBookmarked ? 'unbookmarked' : 'bookmarked',
        };
        console.log('[PostHog] bookmark:', properties);
        posthog.capture('bookmark', properties);
        toggleBookmark(data.event_public_id);
    };

    return (
        <Haptic type="Heavy">
            <PressableScale
                onPress={handlePress}
                style={styles.button}
            >
                <Icon
                    icon={isBookmarked ? "bookmarkFill" : "bookmark"}
                    size={Spacing.icon}
                    color={color.natural_100}
                />
            </PressableScale>
        </Haptic>
    );
}

const styles = StyleSheet.create({
    button: {
        width: Spacing.icon,
        height: Spacing.icon,
        justifyContent: 'center',
        alignItems: 'center',
    },
});