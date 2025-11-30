import { Colors, radii, spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { View, ViewStyle, type ViewProps } from 'react-native';

export type BoxProps = ViewProps & {
    padding?: keyof typeof spacing;
    paddingHorizontal?: keyof typeof spacing;
    paddingVertical?: keyof typeof spacing;
    paddingTop?: keyof typeof spacing;
    paddingBottom?: keyof typeof spacing;
    paddingLeft?: keyof typeof spacing;
    paddingRight?: keyof typeof spacing;
    margin?: keyof typeof spacing;
    marginHorizontal?: keyof typeof spacing;
    marginVertical?: keyof typeof spacing;
    marginTop?: keyof typeof spacing;
    marginBottom?: keyof typeof spacing;
    marginLeft?: keyof typeof spacing;
    marginRight?: keyof typeof spacing;
    borderRadius?: keyof typeof radii;
    backgroundColor?: keyof typeof Colors.light;
    flex?: number;
    width?: ViewStyle['width'];
    height?: ViewStyle['height'];
    alignItems?: ViewStyle['alignItems'];
    justifyContent?: ViewStyle['justifyContent'];
};

export function Box({
    style,
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    marginHorizontal,
    marginVertical,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    borderRadius,
    backgroundColor,
    flex,
    width,
    height,
    alignItems,
    justifyContent,
    ...rest
}: BoxProps) {
    const theme = useThemeColor();
    const themeBackgroundColor = backgroundColor ? theme[backgroundColor] : undefined;

    const computedStyle: ViewStyle = {
        padding: padding ? spacing[padding] : undefined,
        paddingHorizontal: paddingHorizontal ? spacing[paddingHorizontal] : undefined,
        paddingVertical: paddingVertical ? spacing[paddingVertical] : undefined,
        paddingTop: paddingTop ? spacing[paddingTop] : undefined,
        paddingBottom: paddingBottom ? spacing[paddingBottom] : undefined,
        paddingLeft: paddingLeft ? spacing[paddingLeft] : undefined,
        paddingRight: paddingRight ? spacing[paddingRight] : undefined,
        margin: margin ? spacing[margin] : undefined,
        marginHorizontal: marginHorizontal ? spacing[marginHorizontal] : undefined,
        marginVertical: marginVertical ? spacing[marginVertical] : undefined,
        marginTop: marginTop ? spacing[marginTop] : undefined,
        marginBottom: marginBottom ? spacing[marginBottom] : undefined,
        marginLeft: marginLeft ? spacing[marginLeft] : undefined,
        marginRight: marginRight ? spacing[marginRight] : undefined,
        borderRadius: borderRadius ? radii[borderRadius] : undefined,
        backgroundColor: backgroundColor ? themeBackgroundColor : undefined,
        flex,
        width,
        height,
        alignItems,
        justifyContent,
    };

    return <View style={[computedStyle, style]} {...rest} />;
}
