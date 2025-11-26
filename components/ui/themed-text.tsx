import { StyleSheet, Text, type TextProps } from 'react-native';

import { Colors, typography } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  type?: keyof typeof typography;
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
        type === 'h1' && styles.h1,
        type === 'h2' && styles.h2,
        type === 'h3' && styles.h3,
        type === 'h4' && styles.h4,
        type === 'body' && styles.body,
        type === 'label' && styles.label,
        type === 'caption' && styles.caption,
        style,
      ] as any}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  h1: typography.h1,
  h2: typography.h2,
  h3: typography.h3,
  h4: typography.h4,
  body: typography.body,
  label: typography.label,
  caption: typography.caption,
});
