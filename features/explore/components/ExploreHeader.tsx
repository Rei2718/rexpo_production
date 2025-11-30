import { Icon } from '@/components/ui/icon';
import { ThemedText } from '@/components/ui/themed-text';
import { spacing } from '@/constants/theme';
import { CategoryTabs } from '@/features/explore/components/category-tabs';
import { useThemeColor } from '@/hooks/use-theme-color';
import { msSearch } from '@material-symbols-react-native/rounded-400';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CarouselContents from './carousel';

export function ExploreHeader() {
    const iconColor = useThemeColor("textPrimary");

    return (
        <SafeAreaView edges={['top']} style={styles.headerComponent}>
            <View style={styles.headerTop}>
                <ThemedText type="largeTitle">Explore</ThemedText>
                <Icon icon={msSearch} size={28} color={iconColor} />
            </View>
            <CategoryTabs />
            <CarouselContents />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.xl,
        paddingBottom: spacing.xl,
    },
    headerComponent: {
        paddingBottom: spacing.xxl,
        gap: spacing.l,
    },
});
