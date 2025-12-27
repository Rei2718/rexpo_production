import { Theme } from '@react-navigation/native';

const tintColorLight = '#0088FF';
const tintColorDark = '#0091FF';

export const Colors = {
  light: {
    natural_100: '#050505', // text
    natural_200: '#8E8D92', // sub
    natural_300: '#8E8D92', // sub
    natural_400: '#FFFFFF', // tag・card
    natural_500: '#D1D1D6', // separator
    natural_600: '#F2F1F6', // background
    tint: tintColorLight,
  },
  dark: {
    natural_100: '#F3F3F3',
    natural_200: '#949494',
    natural_300: '#404040',
    natural_400: '#1C1C1E',
    natural_500: '#121212',
    natural_600: '#050505',
    tint: tintColorDark,
  },
};

export const Spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 24,
  xxl: 48,
  xxxl: 54,
  xxxxl: 84,
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
  caption2: { fontSize: 11, lineHeight: 13, fontFamily: Fonts.bold },
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