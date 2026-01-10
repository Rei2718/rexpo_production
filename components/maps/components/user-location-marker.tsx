import { Spacing } from '@/constants/theme';
import { Circle, Group } from "@shopify/react-native-skia";
import { DerivedValue, useDerivedValue } from 'react-native-reanimated';

type UserLocationMarkerProps = {
    x: number;
    y: number;
    inverseScale: DerivedValue<number>;
    color: string;
    strokeColor: string;
};

export const UserLocationMarker = ({ x, y, inverseScale, color, strokeColor }: UserLocationMarkerProps) => {
    const transform = useDerivedValue(() => {
        return [
            { translateX: x },
            { translateY: y },
            { scale: inverseScale.value }
        ];
    }, [x, y, inverseScale]);

    return (
        <Group transform={transform}>
            <Circle cx={0} cy={0} r={Spacing.s24 / 2} color={color} opacity={0.3} />
            <Circle cx={0} cy={0} r={Spacing.s12 / 2} color={color} opacity={0.6} />
            <Circle
                cx={0}
                cy={0}
                r={Spacing.s12 / 2}
                color={strokeColor}
                style="stroke"
                strokeWidth={1}
                opacity={0.6}
            />
        </Group>
    );
};
