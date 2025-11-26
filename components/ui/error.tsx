import { spacing } from '@/constants/theme';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './themed-text';

export function Error() {
    return (
        <View style={styles.container}>
            <ThemedText type="body" color="textSecondary">
                データの取得に失敗しました。
            </ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.xl,
    },
});
