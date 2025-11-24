import { Spacing } from '@/constants/theme';
import { FlatList, StyleSheet, View } from 'react-native';
import CarouselContents from './carousel';
import { CategoryTabs } from './category-tabs';
import { List } from './list';

export function HeaderComponent() {
    return (
        <View style={styles.headerComponent}>
            <View style={styles.tabs}>
                <CategoryTabs />
            </View>
            <CarouselContents />
        </View>
    );
}

export default function Index() {
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
                contentContainerStyle={styles.contentContainer}
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
        paddingVertical: Spacing.xl,
    },
    tabs: {
        paddingBottom: Spacing.lg,
    },
    headerComponent: {
        paddingBottom: Spacing['3xl'],
    },
    separator: {
        height: Spacing['3xl'],
    },
});