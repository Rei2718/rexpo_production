import { spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export function Loading() {
    const color = useThemeColor();
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={color.tint} />
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
