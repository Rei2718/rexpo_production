import { Icon } from '@/components/ui/icon';
import { ThemedText } from '@/components/ui/themed-text';
import { spacing } from '@/constants/theme';
import { useContentInsets } from '@/hooks/use-content-insets';
import { useThemeColor } from '@/hooks/use-theme-color';
import { msSearch } from '@material-symbols-react-native/rounded-400';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CarouselContents from './carousel';
import { CategoryTabs } from './category-tabs';
import { List } from './list';

export function HeaderComponent() {
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

export default function Index() {
    const { paddingBottom } = useContentInsets();

    const sections = [
        {
            tag: 'テクノロジー_TEST',
            title: '注目のテクノロジー',
            subtitle: 'AI・ロボティクス・未来の技術',
        },
        {
            tag: 'クリエイティブ_TEST',
            title: 'クリエイティブ展示',
            subtitle: 'デザイン・アート・映像作品',
        },
        {
            tag: 'コミュニティ_TEST',
            title: 'みんなで楽しむ',
            subtitle: 'フード・ゲーム・交流イベント',
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={sections}
                renderItem={({ item }) => (
                    <List
                        targetTag={item.tag}
                        title={item.title}
                        subtitle={item.subtitle}
                    />
                )}
                keyExtractor={(item) => item.tag}
                ListHeaderComponent={HeaderComponent}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={[
                    styles.contentContainer,
                    { paddingBottom }
                ]}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.xl,
        paddingBottom: spacing.xl,
    },
    contentContainer: {
        paddingTop: spacing.xl,
    },
    headerComponent: {
        paddingBottom: spacing.xxl,
        gap: spacing.l,
    },
    separator: {
        height: spacing.xxl,
    },
});