import { spacing } from '@/constants/theme';
import { useContentInsets } from '@/hooks/use-content-insets';
import { FlatList, StyleSheet, View } from 'react-native';
import CarouselContents from './carousel';
import { CategoryTabs } from './category-tabs';
import { List } from './list';
import { SearchBar } from './search-bar';

export function HeaderComponent() {
    return (
        <View style={styles.headerComponent}>
            <SearchBar />
            <CategoryTabs />
            <CarouselContents />
        </View>
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
    contentContainer: {
        paddingVertical: spacing.xl,
    },
    headerComponent: {
        paddingBottom: spacing.xxl,
        gap: spacing.l,
    },
    separator: {
        height: spacing.xxl,
    },
});