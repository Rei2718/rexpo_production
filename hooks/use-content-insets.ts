import { spacing } from '@/constants/theme';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';

export function useContentInsets() {
    let headerHeight = 0;
    let tabBarHeight = 0;

    try {
        headerHeight = useHeaderHeight();
    } catch (e) {
        // Ignore error if not in stack navigator
    }

    try {
        tabBarHeight = useBottomTabBarHeight();
    } catch (e) {
        // Ignore error if not in tab navigator
    }

    return {
        paddingTop: headerHeight ? headerHeight : spacing.xl,
        paddingBottom: tabBarHeight ? tabBarHeight + spacing.xl : spacing.xl,
    };
}
