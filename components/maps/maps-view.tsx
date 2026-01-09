import { Canvas, ImageSVG, useSVG } from "@shopify/react-native-skia";
import { useWindowDimensions } from 'react-native';
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import { Container } from '../ui/container';
import { StatusMessage } from '../ui/status-message';
import { useMapGestures } from "./use-map-gestures";


export default function MapsView() {
    const { width, height } = useWindowDimensions();
    const svg = useSVG(require('@/assets/map/maps.dark.svg'));

    // Default to strict 1:1 if not loaded to prevent division by zero in hook, 
    // though hook handles 0 safely.
    // The hook will update when svg loads.
    const contentDimensions = svg
        ? { width: svg.width(), height: svg.height() }
        : { width: 1, height: 1 };

    const { gesture, transform } = useMapGestures({
        containerDimensions: { width, height },
        contentDimensions
    });

    if (!svg) {
        return <StatusMessage status="loading" />;
    }

    return (
        <Container flex={1} backgroundColor="tint">
            <GestureDetector gesture={gesture}>
                <Animated.View style={{ flex: 1 }}>
                    <Canvas style={{ flex: 1 }}>
                        <ImageSVG
                            svg={svg}
                            x={0}
                            y={0}
                            width={svg.width()}
                            height={svg.height()}
                            transform={transform}
                        />
                    </Canvas>
                </Animated.View>
            </GestureDetector>
        </Container>
    );
}