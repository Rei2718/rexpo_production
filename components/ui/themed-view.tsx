import { View, type ViewProps } from 'react-native';

import { Colors } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedViewProps = ViewProps & {
  color?: keyof typeof Colors.light;
};

export function ThemedView({ style, color, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor(color ?? "natural_600");

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}