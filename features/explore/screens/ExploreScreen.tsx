import { spacing } from '@/constants/theme';
import { ExploreHeader } from '@/features/explore/components/ExploreHeader';
import { List } from '@/features/explore/components/list';
import { useContentInsets } from '@/hooks/use-content-insets';
import { FlatList, StyleSheet, View } from 'react-native';

export default function ExploreScreen() {
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
                ListHeaderComponent={ExploreHeader}
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
        paddingTop: spacing.xl,
    },
    separator: {
        height: spacing.xxl,
    },
});
