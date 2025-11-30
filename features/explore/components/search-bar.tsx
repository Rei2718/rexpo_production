import { Icon } from '@/components/ui/icon';
import { ThemedView } from '@/components/ui/themed-view';
import { radii, spacing, typography } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { msSearch } from '@material-symbols-react-native/rounded-400';
import { StyleSheet, TextInput } from 'react-native';

export function SearchBar() {
    const textColor = useThemeColor("textSecondary");

    return (
        <ThemedView style={styles.container} color="backgroundTertiary">
            <Icon icon={msSearch} size={24} color={textColor} />
            <TextInput
                style={[styles.input, { color: textColor }]}
                placeholder="検索"
                placeholderTextColor={textColor}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.m,
        borderRadius: radii.pill,
        marginHorizontal: spacing.xl,
    },
    input: {
        flex: 1,
        ...typography.subhead,
        padding: 0, // Remove default padding on Android
        marginLeft: spacing.s,
        textAlignVertical: 'center',
        includeFontPadding: false,
    },
});