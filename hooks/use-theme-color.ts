import { Colors } from '@/constants/theme';
import { useColorScheme } from 'react-native';

/* New imports */
import { useThemeStore } from '@/stores/theme-store';

type ThemeColors = {
  [key in keyof typeof Colors.light]: string;
};

export function useThemeColor(): ThemeColors;
export function useThemeColor(
  colorName: keyof ThemeColors
): string;

export function useThemeColor(
  colorName?: keyof ThemeColors
): ThemeColors | string {
  const systemTheme = useColorScheme() ?? 'light';
  const { themeMode } = useThemeStore();

  const theme = themeMode === 'system' ? systemTheme : themeMode;

  if (colorName === undefined) {
    return Colors[theme];
  }

  return Colors[theme][colorName];
}