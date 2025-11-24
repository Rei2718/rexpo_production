import { StyleSheet, Text, type TextProps } from 'react-native';

import { Colors, Typography } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  type?: keyof typeof Typography;
  color?: keyof typeof Colors.light;
};

export function ThemedText({
  style,
  type = 'Body',
  color,
  ...rest
}: ThemedTextProps) {
  const themeColor = useThemeColor(color ?? 'textPrimary');

  return (
    <Text
      style={[
        { color: themeColor },
        type === 'Display' ? styles.display : undefined,
        type === 'Heading' ? styles.heading : undefined,
        type === 'Title' ? styles.title : undefined,
        type === 'Subtitle' ? styles.subtitle : undefined,
        type === 'Body' ? styles.body : undefined,
        type === 'Caption' ? styles.caption : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  display: Typography.Display,
  heading: Typography.Heading,
  title: Typography.Title,
  subtitle: Typography.Subtitle,
  body: Typography.Body,
  caption: Typography.Caption,
});
