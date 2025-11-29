
const tintColorLight = '#6155F5';
const tintColorDark = '#6D7CFF';

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
    textPrimary: '#F5F5F5',
    textSecondary: '#949494',
    backgroundPrimary: '#050505',
    backgroundSecondary: '#121212',
    backgroundTertiary: '#1F1F1F',
    tint: tintColorDark,
  },
};

export const Fonts = {
  ios: {
    sans: 'NotoSans_400Regular',
    serif: 'NotoSans_400Regular',
    rounded: 'NotoSans_400Regular',
    mono: 'NotoSans_400Regular',
  },
  default: {
    sans: 'NotoSans_400Regular',
    serif: 'NotoSans_400Regular',
    rounded: 'NotoSans_400Regular',
    mono: 'NotoSans_400Regular',
  },
  web: {
    sans: 'NotoSans_400Regular',
    serif: 'NotoSans_400Regular',
    rounded: 'NotoSans_400Regular',
    mono: 'NotoSans_400Regular',
  },
};

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
  "h1": { fontSize: 32, fontWeight: "700", lineHeight: 40, fontFamily: 'NotoSans_700Bold' },
  "h2": { fontSize: 24, fontWeight: "700", lineHeight: 32, fontFamily: 'NotoSans_700Bold' },
  "h3": { fontSize: 20, fontWeight: "700", lineHeight: 26, fontFamily: 'NotoSans_700Bold' },
  "h4": { fontSize: 16, fontWeight: "700", lineHeight: 26, fontFamily: 'NotoSans_700Bold' },
  "body": { fontSize: 15, fontWeight: "400", lineHeight: 23, fontFamily: 'NotoSans_400Regular' },
  "caption": { fontSize: 14, fontWeight: "500", lineHeight: 22, fontFamily: 'NotoSans_500Medium' },
  "label": { fontSize: 12, fontWeight: "500", lineHeight: 20, fontFamily: 'NotoSans_500Medium' },
} as const;