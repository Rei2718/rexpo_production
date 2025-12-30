import { mapDarkStyle } from '@/constants/map-style';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StatusMessage } from '../ui/status-message';
import MapBottomSheet from './bottom-sheet';
import VenueMarkers from './markers';
import { INITIAL_REGION, MIN_ZOOM_LEVEL, useMap } from './use-map';

export default function MapComponent() {
    const theme = useTheme();
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
        return (
            <StatusMessage status="loading" />
        );
    }

    if (isError) {
        return (
            <StatusMessage status="error" />
        );
    }

    if (!data || data.length === 0) {
        return (
            <StatusMessage status="empty" message="No venues found. Please refresh database." />
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                initialRegion={INITIAL_REGION}
                mapType={'standard'}
                customMapStyle={theme.dark ? mapDarkStyle : []}
                userInterfaceStyle={theme.dark ? 'dark' : 'light'}
                pitchEnabled={false}
                loadingEnabled={true}
                loadingIndicatorColor={color.tint}
                loadingBackgroundColor={color.natural_400}
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
                <VenueMarkers
                    venues={data}
                    onSelect={onSelectVenue}
                    selectedVenueId={selectedVenue?.venue_public_id}
                />
            </MapView>

            <MapBottomSheet venue={selectedVenue} onClose={onCloseSheet} />
        </View>
    );
}