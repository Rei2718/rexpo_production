import { ThemedText } from '@/components/ui/themed-text';
import { spacing } from '@/constants/theme';
import { StyleSheet, View } from 'react-native';
import { EventHeaderProps } from '../types';

export function EventHeader({
    title,
    overview_description,
}: EventHeaderProps) {
    return (
        <View style={styles.headerContainer}>
            <ThemedText type="caption1" color="tint" style={styles.sponcorText}>
                プラチナブーススポンサー
            </ThemedText>
            <ThemedText type="title1">{title}</ThemedText>
            <ThemedText type="title3" color="textSecondary">
                {overview_description}
            </ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: spacing.xl,
        paddingTop: spacing.l,
        alignItems: 'center',
    },
    sponcorText: {
        marginTop: spacing.xxs,
    },
});
