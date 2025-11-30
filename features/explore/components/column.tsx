import { ThemedView } from '@/components/ui/themed-view';
import { radii, spacing } from '@/constants/theme';
import { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { ColumnProps } from '../types';
import { Card } from './card';

export function Column({ items, width }: ColumnProps) {
    return (
        <View style={[{ width }, styles.container]}>
            {items.map((item, index) => (
                <Fragment key={item.id}>
                    <Card item={item} />
                    {index < items.length - 1 && (
                        <ThemedView color="backgroundTertiary" style={styles.separator} />
                    )}
                </Fragment>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: spacing.s,
    },
    separator: {
        height: 1,
        borderRadius: radii.pill,
    },
});
