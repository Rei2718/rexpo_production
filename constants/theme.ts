const tintColorLight = '#6155F5';
const tintColorDark = '#6D7CFF';

export const Colors = {
  light: {
    textPrimary: '#121212',
    textSecondary: '#6C6C6C',
    textTertiary: '#949494',
    backgroundPrimary: '#FFFFFF',
    backgroundSecondary: '#F5F5F5',
    backgroundTertiary: '#E5E5E5',
    tint: tintColorLight,
  },
  dark: {
    textPrimary: '#F5F5F5',
    textSecondary: '#949494',
    textTertiary: '#404040',
    backgroundPrimary: '#050505',
    backgroundSecondary: '#121212',
    backgroundTertiary: '#1F1F1F',
    tint: tintColorDark,
  },
} as const;

export const Fonts = {
  ios: {
    sans: 'NotoSansJP_400Regular',
    serif: 'NotoSansJP_400Regular',
    rounded: 'NotoSansJP_400Regular',
    mono: 'NotoSansJP_400Regular',
  },
  default: {
    sans: 'NotoSansJP_400Regular',
    serif: 'NotoSansJP_400Regular',
    rounded: 'NotoSansJP_400Regular',
    mono: 'NotoSansJP_400Regular',
  },
  web: {
    sans: 'NotoSansJP_400Regular',
    serif: 'NotoSansJP_400Regular',
    rounded: 'NotoSansJP_400Regular',
    mono: 'NotoSansJP_400Regular',
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
  xxxl: 54,
  xxxxl: 84,
} as const;

export const radii = {
  xs: 2,
  s: 4,
  m: 8,
  l: 18,
  xl: 24,
  pill: 9999,
} as const;

export const typography = {
  largeTitle: { fontSize: 34, lineHeight: 41, fontWeight: '500', fontFamily: 'NotoSansJP_500Medium' },
  title1: { fontSize: 28, lineHeight: 34, fontWeight: '500', fontFamily: 'NotoSansJP_500Medium' },
  title2: { fontSize: 23, lineHeight: 28, fontWeight: '400', fontFamily: 'NotoSansJP_400Regular' },
  title3: { fontSize: 18, lineHeight: 23, fontWeight: '500', fontFamily: 'NotoSansJP_500Medium' },
  headline: { fontSize: 17, lineHeight: 22, fontWeight: '500', fontFamily: 'NotoSansJP_500Medium' },
  callout: { fontSize: 16, lineHeight: 21, fontWeight: '400', fontFamily: 'NotoSansJP_400Regular' },
  subhead: { fontSize: 15, lineHeight: 20, fontWeight: '400', fontFamily: 'NotoSansJP_400Regular' },
  body: { fontSize: 14, lineHeight: 20, fontWeight: '400', fontFamily: 'NotoSansJP_400Regular' },
  footnote: { fontSize: 13, lineHeight: 18, fontWeight: '500', fontFamily: 'NotoSansJP_500Medium' },
  caption1: { fontSize: 12, lineHeight: 16, fontWeight: '300', fontFamily: 'NotoSansJP_300Light' },
  caption2: { fontSize: 12, lineHeight: 16, fontWeight: '500', fontFamily: 'NotoSansJP_500Medium' },
} as const;