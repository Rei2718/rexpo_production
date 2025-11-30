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
        type === 'largeTitle' && styles.largeTitle,
        type === 'title1' && styles.title1,
        type === 'title2' && styles.title2,
        type === 'title3' && styles.title3,
        type === 'headline' && styles.headline,
        type === 'body' && styles.body,
        type === 'callout' && styles.callout,
        type === 'subhead' && styles.subhead,
        type === 'footnote' && styles.footnote,
        type === 'caption1' && styles.caption1,
        type === 'caption2' && styles.caption2,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  largeTitle: typography.largeTitle,
  title1: typography.title1,
  title2: typography.title2,
  title3: typography.title3,
  headline: typography.headline,
  body: typography.body,
  callout: typography.callout,
  subhead: typography.subhead,
  footnote: typography.footnote,
  caption1: typography.caption1,
  caption2: typography.caption2,
});
