import { spacing } from '@/constants/theme';
import { ViewStyle } from 'react-native';
import { Box, BoxProps } from './box';

type FlexProps = BoxProps & {
    gap?: keyof typeof spacing;
    wrap?: ViewStyle['flexWrap'];
};

export function Row({ style, gap, wrap, alignItems = 'center', ...rest }: FlexProps) {
    return (
        <Box
            style={[{ flexDirection: 'row', gap: gap ? spacing[gap] : undefined, flexWrap: wrap }, style]}
            alignItems={alignItems}
            {...rest}
        />
    );
}

export function Column({ style, gap, wrap, ...rest }: FlexProps) {
    return (
        <Box
            style={[{ flexDirection: 'column', gap: gap ? spacing[gap] : undefined, flexWrap: wrap }, style]}
            {...rest}
        />
    );
}
