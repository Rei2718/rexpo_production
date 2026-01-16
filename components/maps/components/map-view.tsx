import { Container } from '@/components/ui/container';
import { FlashMessage } from '@/components/ui/flash-message';
import { StatusMessage } from '@/components/ui/status-message';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import { Canvas, Circle, Group, ImageSVG } from "@shopify/react-native-skia";
import { StyleSheet } from 'react-native';
import { GestureDetector } from "react-native-gesture-handler";
import { useMapsView } from "../hooks/use-maps-view";
import { MapControls } from './map-controls';
import { MapMarker } from './map-marker';
import { UserLocationMarker } from './user-location-marker';

type Props = {
    venues?: Verified<DisplayVenue>[];
    selectedVenueId?: string | null;
    onMarkerPress?: (venue: Verified<DisplayVenue>) => void;
    onMapPress?: () => void;
};

export default function MapsView({ venues = [], selectedVenueId, onMarkerPress, onMapPress }: Props) {
    const {
        themeColor,
        svg,
        fadeProgress,
        svgWidth,
        svgHeight,
        transform,
        markerPath,
        processedVenues,
        userLocationCoords,
        inverseScale,
        composedGesture,
        handleCurrentLocationPress,
        flashMessage,
        setFlashMessage,
        currentLocationIcon,
        currentFloor,
        handleFloorToggle,
    } = useMapsView({ venues, onMarkerPress, onMapPress });

    if (!svg || !markerPath) {
        return <StatusMessage status="loading" />;
    }

    return (
        <Container flex={1} backgroundColor="tint">
            <GestureDetector gesture={composedGesture}>
                <Container flex={1} style={{ overflow: 'hidden' }}>
                    <Canvas style={StyleSheet.absoluteFill}>
                        <Group opacity={fadeProgress} transform={transform}>
                            {svg && (
                                <ImageSVG
                                    svg={svg}
                                    x={0}
                                    y={0}
                                    width={svgWidth}
                                    height={svgHeight}
                                />
                            )}
                            {processedVenues.map((venue) => (
                                <MapMarker
                                    key={venue.venue_public_id}
                                    x={venue.x}
                                    y={venue.y}
                                    inverseScale={inverseScale}
                                    path={markerPath}
                                    color={themeColor.tint}
                                    isSelected={venue.venue_public_id === selectedVenueId}
                                />
                            ))}

                            {userLocationCoords && (
                                <UserLocationMarker
                                    x={userLocationCoords.x}
                                    y={userLocationCoords.y}
                                    inverseScale={inverseScale}
                                    color={themeColor.red_500}
                                    strokeColor={themeColor.red_500}
                                />
                            )}
                            {/* DEBUG: Center Marker for Calibration */}
                            <Circle cx={svgWidth / 2} cy={svgHeight / 2} r={10} color="red" />
                        </Group>
                    </Canvas>
                </Container>
            </GestureDetector>

            <MapControls
                onPress={handleCurrentLocationPress}
                icon={currentLocationIcon}
                currentFloor={currentFloor}
                onFloorToggle={handleFloorToggle}
            />

            <FlashMessage
                message={flashMessage}
                onDismiss={() => setFlashMessage(null)}
            />
        </Container>
    );
}