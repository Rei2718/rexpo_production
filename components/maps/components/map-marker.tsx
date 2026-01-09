import { Group, Path, SkPath } from "@shopify/react-native-skia";
import { DerivedValue, useDerivedValue } from 'react-native-reanimated';
import { MARKER_ANCHOR } from "./map-shapes";

type MapMarkerProps = {
    x: number;
    y: number;
    inverseScale: DerivedValue<number>;
    path: SkPath;
    color: string;
};

export const MapMarker = ({ x, y, inverseScale, path, color }: MapMarkerProps) => {
    const transform = useDerivedValue(() => {
        return [
            { translateX: x },
            { translateY: y },
            { scale: inverseScale.value },
            // Unified Anchor Offset using the constant
            { translateX: -MARKER_ANCHOR.x },
            { translateY: -MARKER_ANCHOR.y }
        ];
    }, [x, y, inverseScale]);

    return (
        <Group transform={transform}>
            <Path path={path} color={color} />
        </Group>
    );
};
