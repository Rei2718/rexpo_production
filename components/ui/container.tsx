import { Spacing } from '@/constants/theme';
import { View, ViewProps, ViewStyle } from 'react-native';

type SpacingKey = keyof typeof Spacing;

interface ContainerProps extends ViewProps {
    gap?: SpacingKey;
    padding?: SpacingKey;
    paddingHorizontal?: SpacingKey;
    paddingVertical?: SpacingKey;
    paddingTop?: SpacingKey;
    paddingBottom?: SpacingKey;
    paddingLeft?: SpacingKey;
    paddingRight?: SpacingKey;
    margin?: SpacingKey;
    marginHorizontal?: SpacingKey;
    marginVertical?: SpacingKey;
    marginTop?: SpacingKey;
    marginBottom?: SpacingKey;
    marginLeft?: SpacingKey;
    marginRight?: SpacingKey;
    flex?: number;
    justifyContent?: ViewStyle['justifyContent'];
    alignItems?: ViewStyle['alignItems'];
    backgroundColor?: string;
    flexDirection?: ViewStyle['flexDirection'];
}

function getSpacing(key?: SpacingKey) {
    return key ? Spacing[key] : undefined;
}

export function Container({
    style,
    gap,
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
    flex,
    justifyContent,
    alignItems,
    backgroundColor,
    flexDirection = 'column',
    ...props
}: ContainerProps) {
    return (
        <View
            style={[
                {
                    flexDirection,
                    gap: getSpacing(gap),
                    padding: getSpacing(padding),
                    paddingHorizontal: getSpacing(paddingHorizontal),
                    paddingVertical: getSpacing(paddingVertical),
                    paddingTop: getSpacing(paddingTop),
                    paddingBottom: getSpacing(paddingBottom),
                    paddingLeft: getSpacing(paddingLeft),
                    paddingRight: getSpacing(paddingRight),
                    margin: getSpacing(margin),
                    marginHorizontal: getSpacing(marginHorizontal),
                    marginVertical: getSpacing(marginVertical),
                    marginTop: getSpacing(marginTop),
                    marginBottom: getSpacing(marginBottom),
                    marginLeft: getSpacing(marginLeft),
                    marginRight: getSpacing(marginRight),
                    flex,
                    justifyContent,
                    alignItems,
                    backgroundColor,
                },
                style,
            ]}
            {...props}
        />
    );
}

interface ContainerAbsoluteProps extends ContainerProps {
    top?: ViewStyle['top'];
    bottom?: ViewStyle['bottom'];
    left?: ViewStyle['left'];
    right?: ViewStyle['right'];
    zIndex?: ViewStyle['zIndex'];
}

export function ContainerAbsolute({
    style,
    top,
    bottom,
    left,
    right,
    zIndex,
    ...props
}: ContainerAbsoluteProps) {
    return (
        <Container
            style={[
                {
                    position: 'absolute',
                    top,
                    bottom,
                    left,
                    right,
                    zIndex,
                },
                style,
            ]}
            {...props}
        />
    );
}
