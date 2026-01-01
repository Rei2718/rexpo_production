import { StatusMessage } from '@/components/ui/status-message';
import useMap, { INITIAL_REGION, MIN_ZOOM_LEVEL } from '@/hooks/use-map';
import { useThemeColor } from '@/hooks/use-theme-color';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapBottomSheet from './bottom-sheet';
import VenueMarkerList from './venue-marker-list';

export default function MapMain() {
    const color = useThemeColor();

    const {
        mapRef,
        data,
        isPending,
        isError,
        selectedVenue,
        onMapReady,
        onSelectVenue,
        onCloseSheet,
        onMapPress,
    } = useMap();

    if (isPending) {
        return <StatusMessage status="loading" />;
    }

    if (isError) {
        return <StatusMessage status="error" />;
    }

    if (!data || data.length === 0) {
        return <StatusMessage status="empty" message="会場情報がありません。" />;
    }

    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                initialRegion={INITIAL_REGION}
                mapType="standard"
                pitchEnabled={false}
                loadingEnabled={true}
                loadingIndicatorColor={color.tint}
                loadingBackgroundColor={color.natural_500}
                minZoomLevel={MIN_ZOOM_LEVEL}
                showsCompass={false}
                showsScale={false}
                showsMyLocationButton={false}
                showsPointsOfInterest={false}
                showsBuildings={false}
                showsTraffic={false}
                showsIndoors={false}
                toolbarEnabled={false}
                zoomControlEnabled={false}
                rotateEnabled={false}
                onMapReady={onMapReady}
                onPress={onMapPress}
            >
                <VenueMarkerList
                    venues={data}
                    onSelect={onSelectVenue}
                    selectedVenueId={selectedVenue?.venue_public_id}
                />
            </MapView>

            <MapBottomSheet
                venuePublicId={selectedVenue?.venue_public_id ?? null}
                onClose={onCloseSheet}
            />
        </View>
    );
}
