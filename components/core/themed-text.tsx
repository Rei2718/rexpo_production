import { StyleSheet, Text, type TextProps } from 'react-native';

import { Colors, Typography } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  type?: keyof typeof Typography;
  color?: keyof typeof Colors.light;
};

export function ThemedText({
  style,
  type = 'body',
  color,
  ...rest
}: ThemedTextProps) {
  const themeColor = useThemeColor(color ?? 'textPrimary');

  return (
    <Text
      style={[
        { color: themeColor },
        type === 'h1' ? styles.h1 : undefined,
        type === 'h2' ? styles.h2 : undefined,
        type === 'h3' ? styles.h3 : undefined,
        type === 'h4' ? styles.h4 : undefined,
        type === 'body' ? styles.body : undefined,
        type === 'label' ? styles.label : undefined,
        type === 'caption' ? styles.caption : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  h1: Typography.h1,
  h2: Typography.h2,
  h3: Typography.h3,
  h4: Typography.h4,
  body: Typography.body,
  label: Typography.label,
  caption: Typography.caption,
});
