import { Group, Path, SkPath } from "@shopify/react-native-skia";
import { memo } from "react";
import { DerivedValue, useDerivedValue } from 'react-native-reanimated';
import { MARKER_ANCHOR } from "./map-shapes";

type MapMarkerProps = {
    x: number;
    y: number;
    inverseScale: DerivedValue<number>;
    path: SkPath;
    color: string;
    isSelected: boolean;
};

export const MapMarker = memo(({ x, y, inverseScale, path, color, isSelected }: MapMarkerProps) => {
    const transform = useDerivedValue(() => {
        return [
            { translateX: x },
            { translateY: y },
            { scale: inverseScale.value },
            { translateX: -MARKER_ANCHOR.x },
            { translateY: -MARKER_ANCHOR.y }
        ];
    }, [x, y, inverseScale]);

    return (
        <Group transform={transform}>
            <Path
                path={path}
                color={color}
                style={isSelected ? "fill" : "stroke"}
                strokeWidth={isSelected ? 0 : 2}
            />
        </Group>
    );
});
