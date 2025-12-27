import { Text, type TextProps } from 'react-native';

import { Colors, Typography } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  color?: keyof typeof Colors.light;
  type?: keyof typeof Typography;
};

export function ThemedText({
  style,
  color,
  type = 'body',
  ...rest
}: ThemedTextProps) {
  const textColor = useThemeColor(color ?? 'natural_100');

  return (
    <Text
      style={[
        { color: textColor },
        Typography[type],
        style,
      ]}
      {...rest}
    />
  );
}