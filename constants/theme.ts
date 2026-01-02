import { Theme } from '@react-navigation/native';

const tintColorLight = '#0088FF';
const tintColorDark = '#0091FF';

export const Colors = {
  light: {
    natural_100: '#000000FF', // Filles Primary
    natural_200: '#3C3C4399', // Filles Secondary
    natural_300: '#3C3C434D', // Filles Tertiary
    natural_400: '#F2F2F7FF', // Grouped Background Quaternary
    natural_500: '#FFFFFFFF', // Grouped Background Secondary
    natural_600: '#F2F2F7FF', // Grouped Background Primary
    tint: tintColorLight,
  },
  dark: {
    natural_100: '#EEEEEEFF', // FillesPrimary
    natural_200: '#EBEBF599', // Filles Secondary
    natural_300: '#EBEBF54D', // Filles Tertiary
    natural_400: '#222222FF', // Grouped Background Quaternary
    natural_500: '#191919FF', // Grouped Background Secondary
    natural_600: '#090909FF', // Grouped Background Primary
    tint: tintColorDark,
  },
};

export const Spacing = {
  none: 0,
  s2: 2,
  s4: 4,
  s8: 8,
  s12: 12,
  s16: 16,
  s20: 20,
  s24: 24,
  s32: 32,
  s36: 36,
  s40: 40,
  s48: 48,
  s56: 56,
  s64: 64,
  s80: 80,
  s96: 96,
  icon: 32,
  pill: 999,
} as const;

export const Fonts = {
  light: 'NotoSansJP_300Light',
  regular: 'NotoSansJP_400Regular',
  medium: 'NotoSansJP_500Medium',
  semiBold: 'NotoSansJP_600SemiBold',
  bold: 'NotoSansJP_700Bold',
} as const;

export const Typography = {
  largeTitle: { fontSize: 30, lineHeight: 36, fontFamily: Fonts.bold },
  title1: { fontSize: 28, lineHeight: 34, fontFamily: Fonts.semiBold },
  title2: { fontSize: 22, lineHeight: 28, fontFamily: Fonts.semiBold },
  title3: { fontSize: 20, lineHeight: 25, fontFamily: Fonts.semiBold },
  headline: { fontSize: 17, lineHeight: 22, fontFamily: Fonts.semiBold },
  body: { fontSize: 17, lineHeight: 22, fontFamily: Fonts.regular },
  callout: { fontSize: 16, lineHeight: 21, fontFamily: Fonts.medium },
  subhead: { fontSize: 15, lineHeight: 20, fontFamily: Fonts.regular },
  footnote: { fontSize: 13, lineHeight: 18, fontFamily: Fonts.medium },
  caption1: { fontSize: 12, lineHeight: 16, fontFamily: Fonts.medium },
  caption2: { fontSize: 11, lineHeight: 13, fontFamily: Fonts.medium },
} as const;

export const LightNavigationTheme: Theme = {
  dark: false,
  colors: {
    primary: Colors.light.tint,
    background: Colors.light.natural_600,
    card: Colors.light.natural_600,
    text: Colors.light.natural_100,
    border: Colors.light.natural_500,
    notification: Colors.light.tint,
  },
  fonts: {
    regular: { fontFamily: Fonts.regular, fontWeight: '400' },
    medium: { fontFamily: Fonts.medium, fontWeight: '500' },
    bold: { fontFamily: Fonts.semiBold, fontWeight: '600' },
    heavy: { fontFamily: Fonts.semiBold, fontWeight: '600' },
  },
};

export const DarkNavigationTheme: Theme = {
  dark: true,
  colors: {
    primary: Colors.dark.tint,
    background: Colors.dark.natural_600,
    card: Colors.dark.natural_600,
    text: Colors.dark.natural_100,
    border: Colors.dark.natural_300,
    notification: Colors.dark.tint,
  },
  fonts: {
    regular: { fontFamily: Fonts.regular, fontWeight: '400' },
    medium: { fontFamily: Fonts.medium, fontWeight: '500' },
    bold: { fontFamily: Fonts.semiBold, fontWeight: '600' },
    heavy: { fontFamily: Fonts.semiBold, fontWeight: '600' },
  },
};