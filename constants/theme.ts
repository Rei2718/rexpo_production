import { Platform } from 'react-native';

const tintColorLight = '#0088FF';
const tintColorDark = '#0091FF';

export const Colors = {
  light: {
    textPrimary: '#DEDEDE',
    textSecondary: '#6C6C6C',
    textTertiary: '#292929',
    backgroundPrimary: '#161616',
    backgroundSecondary: '#292929',
    backgroundTertiary: '#383838',
    tint: tintColorLight,
  },
  dark: {
    textPrimary: '#DEDEDE',
    textSecondary: '#6C6C6C',
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

export const spacing = {
  xxs: 2,
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 24,
  xxl: 48,
  xxxl: 60,
  xxxxl: 96,
} as const;


export const radii = {
  xs: 2,
  s: 4,
  m: 8,
  l: 16,
  xl: 24,
  pill: 9999,
} as const;

export const typography = {
  "h1": { fontSize: 32, fontWeight: "600", lineHeight: 40 },
  "h2": { fontSize: 24, fontWeight: "500", lineHeight: 32 },
  "h3": { fontSize: 20, fontWeight: "500", lineHeight: 26 },
  "h4": { fontSize: 16, fontWeight: "500", lineHeight: 24 },
  "body": { fontSize: 15, fontWeight: "400", lineHeight: 23 },
  "caption": { fontSize: 14, fontWeight: "400", lineHeight: 22 },
  "label": { fontSize: 12, fontWeight: "500", lineHeight: 22 },
} as const;