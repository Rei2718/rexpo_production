
import { Error } from '@/components/ui/error';
import { Loading } from '@/components/ui/loading';
import { ThemedText } from '@/components/ui/themed-text';
import { spacing } from '@/constants/theme';
import { useEventList } from '@/features/explore/hooks/useEventList';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ListProps } from '../types';
import { Column } from './column';

export function List({ targetTag, title, subtitle }: ListProps) {
    const { chunkedData, isPending, isError, hasData, itemWidth, snapInterval } = useEventList(targetTag);

    if (isPending) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }

    return (
        <View>
            <View style={styles.headerContainer}>
                <ThemedText type="title3">{title}</ThemedText>
                <ThemedText type="footnote" color="textSecondary">{subtitle}</ThemedText>
            </View>
            {hasData ? (
                <FlatList
                    data={chunkedData}
                    renderItem={({ item }) => <Column items={item} width={itemWidth} />}
                    keyExtractor={(item) => item[0].id}
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContent}
                    snapToInterval={snapInterval}
                    snapToAlignment="start"
                    decelerationRate="normal"
                    disableIntervalMomentum={true}
                    nestedScrollEnabled={true}
                />
            ) : (
                <ThemedText style={styles.emptyText}>関連するイベントはありません。</ThemedText>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingBottom: spacing.l,
        paddingHorizontal: spacing.xl,
        gap: spacing.xxs,
    },
    emptyText: {
        paddingHorizontal: spacing.xl,
    },
    separator: {
        width: spacing.xl,
    },
    flatListContent: {
        paddingHorizontal: spacing.xl,
    },
});
