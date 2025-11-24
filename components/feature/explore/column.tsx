import { ThemedView } from '@/components/core/themed-view';
import { Radii, Spacing } from '@/constants/theme';
import { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from './card';
import { ColumnProps } from './types';

export function Column({ items, width }: ColumnProps) {
    return (
        <View style={[{ width }, styles.container]}>
            {items.map((item, index) => (
                <Fragment key={item.id}>
                    <Card item={item} />
                    {index < items.length - 1 && (
                        <ThemedView color="backgroundSecondary" style={styles.separator} />
                    )}
                </Fragment>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: Spacing.sm,
    },
    separator: {
        height: 1,
        borderRadius: Radii.full,
    },
});
