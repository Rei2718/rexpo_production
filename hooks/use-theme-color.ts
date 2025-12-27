import { Colors } from '@/constants/theme';
import { useColorScheme } from 'react-native';

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
  const theme = useColorScheme() ?? 'light';

  if (colorName === undefined) {
    return Colors[theme];
  }

  return Colors[theme][colorName];
}