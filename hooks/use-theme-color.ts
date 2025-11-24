/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
**/

import { Colors } from '@/constants/theme';
import { useColorScheme } from 'react-native';


export function useThemeColor(): typeof Colors.light;
export function useThemeColor(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
): string;

export function useThemeColor(
  colorName?: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';

  if (colorName === undefined) {
    return Colors[theme];
  }

  return Colors[theme][colorName];
}