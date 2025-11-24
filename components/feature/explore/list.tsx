import { Error } from '@/components/core/error';
import { Loading } from '@/components/core/loading';
import { ThemedText } from '@/components/core/themed-text';
import { Spacing } from '@/constants/theme';
import { useChunkedData } from '@/hooks/use-chunked-data';
import { useGetEventsListByTag } from '@/supabase/data';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Column } from './column';
import { ListProps } from './types';

const CHUNK_SIZE = 3;

export function List({ targetTag, title, subtitle }: ListProps) {
    const { data: originalData, isPending, isError } = useGetEventsListByTag(targetTag);
    const chunkedData = useChunkedData(originalData, CHUNK_SIZE);
    const { width } = useWindowDimensions();

    if (isPending) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }

    const hasData = chunkedData && chunkedData.length > 0;
    const itemWidth = width * 0.85;
    const separatorWidth = Spacing.xl;
    const snapInterval = itemWidth + separatorWidth;

    return (
        <View>
            <View style={styles.headerContainer}>
                <ThemedText type="h2">{title}</ThemedText>
                <ThemedText type="caption" color="textSecondary">{subtitle}</ThemedText>
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
                    snapToAlignment="center"
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
        paddingBottom: Spacing.sm,
        paddingHorizontal: Spacing.xl,
        gap: Spacing.none,
    },
    emptyText: {
        paddingHorizontal: Spacing.xl,
    },
    separator: {
        width: Spacing.xl,
    },
    flatListContent: {
        paddingHorizontal: Spacing.xl,
    },
});
