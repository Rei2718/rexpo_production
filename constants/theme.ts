import { Platform } from 'react-native';

const tintColorLight = '#0088FF';
const tintColorDark = '#0091FF';

export const Colors = {
  light: {
    textPrimary: '#DEDEDE',
    textSecondary: '#8C8C8C',
    textTertiary: '#292929',
    backgroundPrimary: '#161616',
    backgroundSecondary: '#292929',
    backgroundTertiary: '#383838',
    tint: tintColorLight,
  },
  dark: {
    textPrimary: '#DEDEDE',
    textSecondary: '#8C8C8C',
    textTertiary: '#292929',
    backgroundPrimary: '#161616',
    backgroundSecondary: '#292929',
    backgroundTertiary: '#383838',
    tint: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

export const Spacing = {
  "none": 0,
  "xs": 4,
  "sm": 8,
  "md": 12,
  "lg": 16,
  "xl": 24,
  "2xl": 32,
  "3xl": 48,
  "4xl": 64,
};

export const Radii = {
  "none": 0,
  "xs": 4,
  "sm": 8,
  "md": 12,
  "full": 9999,
};

export const Typography = {
  "Display": { fontSize: 48, lineHeight: 64, fontWeight: '500' as const },
  "Heading": { fontSize: 32, lineHeight: 40, fontWeight: '500' as const },
  "Title": { fontSize: 24, lineHeight: 32, fontWeight: '500' as const },
  "Subtitle": { fontSize: 20, lineHeight: 28, fontWeight: '500' as const },
  "Body": { fontSize: 16, lineHeight: 24, fontWeight: '400' as const },
  "Caption": { fontSize: 12, lineHeight: 16, fontWeight: '400' as const },
};
