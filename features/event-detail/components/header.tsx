import { ThemedText } from '@/components/ui/themed-text';
import { spacing } from '@/constants/theme';
import { StyleSheet, View } from 'react-native';
import { EventHeaderProps } from '../types';

export default function EventHeader({
    title,
    overview_description,
}: EventHeaderProps) {
    return (
        <View style={styles.headerContainer}>
            <ThemedText type="caption2" color="tint" style={styles.sponcorText}>
                プラチナブーススポンサー
            </ThemedText>
            <ThemedText type="title2" style={styles.headerText}>
                {title}
            </ThemedText>
            <ThemedText type="subhead" color="textSecondary">
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
        paddingVertical: spacing.s
    },
    headerText: {
        paddingBottom: spacing.xs
    },
});
