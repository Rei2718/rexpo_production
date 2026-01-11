import { useThemeColor } from '@/hooks/use-theme-color';
import { useThemeStore } from '@/stores/theme-store';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useColorScheme } from 'react-native';

export const useThemeActionSheet = () => {
    const { themeMode, setThemeMode } = useThemeStore();
    const { showActionSheetWithOptions } = useActionSheet();
    const colors = useThemeColor();
    const colorScheme = useColorScheme();

    const effectiveTheme = themeMode === 'system' ? (colorScheme ?? 'light') : themeMode;

    const showThemeActionSheet = () => {
        showActionSheetWithOptions(
            {
                options: ['システム', 'ライト', 'ダーク', 'キャンセル'],
                cancelButtonIndex: 3,
                destructiveButtonIndex: 3,
                userInterfaceStyle: effectiveTheme,
                containerStyle: {
                    backgroundColor: colors.natural_500,
                    borderRadius: 20,
                    margin: 20,
                },
                textStyle: {
                    color: colors.natural_100,
                },
                tintColor: colors.tint,
                titleTextStyle: {
                    color: colors.natural_200,
                },
                messageTextStyle: {
                    color: colors.natural_200,
                },
            },
            (buttonIndex) => {
                if (buttonIndex === 0) setThemeMode('system');
                if (buttonIndex === 1) setThemeMode('light');
                if (buttonIndex === 2) setThemeMode('dark');
            }
        );
    };

    const getThemeLabel = () => {
        switch (themeMode) {
            case 'light': return 'ライト';
            case 'dark': return 'ダーク';
            default: return 'システム';
        }
    };

    return {
        themeMode,
        showThemeActionSheet,
        themeLabel: getThemeLabel(),
    };
};