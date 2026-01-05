import { Container, ContainerAbsolute } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { StatusMessage } from '@/components/ui/status-message';
import { ThemedView } from '@/components/ui/themed-view';
import { Spacing } from '@/constants/theme';
import useMap, { INITIAL_REGION, MIN_ZOOM_LEVEL } from '@/hooks/use-map';
import { useThemeColor } from '@/hooks/use-theme-color';
import { PressableScale } from 'pressto';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LocationPermissionModal } from './location-permission-modal';
import MarkerList from './marker-list';
import Sheet from './sheet';

export default function MapMain() {
    const color = useThemeColor();
    const insets = useSafeAreaInsets();

    const {
        mapRef,
        data,
        isPending,
        isError,
        selectedVenue,
        // 追加: useMap経由で位置情報関連のデータを受け取る
        userLocation,
        onCurrentLocationPress,
        onMapReady,
        onSelectVenue,
        onCloseSheet,
        onMapPress,
        showPermissionModal,
        setShowPermissionModal,
    } = useMap();

    // 削除: useUserLocation は useMap 内部で呼ばれているため、ここでの直接呼び出しは不要です
    // const { location: userLocation } = useUserLocation();

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data || data.length === 0) return <StatusMessage status="empty" />;

    return (
        <ThemedView style={{ flex: 1 }}>
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
                <MarkerList
                    venues={data}
                    onSelect={onSelectVenue}
                    selectedVenueId={selectedVenue?.venue_public_id}
                />

                {/* 現在地マーカー */}
                {userLocation && (
                    <Marker
                        coordinate={{
                            latitude: userLocation.coords.latitude,
                            longitude: userLocation.coords.longitude,
                        }}
                        zIndex={999}
                        anchor={{ x: 0.5, y: 0.5 }}
                    >
                        <Container
                            justifyContent="center"
                            alignItems="center"
                            style={{
                                width: Spacing.s24,
                                height: Spacing.s24,
                            }}
                        >
                            <ThemedView
                                color="tint"
                                style={{
                                    position: 'absolute',
                                    width: Spacing.s24,
                                    height: Spacing.s24,
                                    borderRadius: Spacing.pill,
                                    opacity: 0.3,
                                }}
                            />
                            <ThemedView
                                color="tint"
                                style={{
                                    width: Spacing.s12,
                                    height: Spacing.s12,
                                    borderRadius: Spacing.pill,
                                    borderWidth: Spacing.s2,
                                    borderColor: color.natural_500,
                                }}
                            />
                        </Container>
                    </Marker>
                )}
            </MapView>

            {/* 現在地へ移動ボタン (FAB) */}
            <ContainerAbsolute
                top={Spacing.s16 + insets.top}
                right={Spacing.s16}
                zIndex={100}
            >
                <PressableScale
                    onPress={onCurrentLocationPress}
                >
                    <ThemedView
                        color="natural_500"
                        style={{
                            width: Spacing.s48,
                            height: Spacing.s48,
                            borderRadius: Spacing.pill,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Icon icon="locationOnFill" size={Spacing.s24} color={color.tint} />
                    </ThemedView>
                </PressableScale>
            </ContainerAbsolute>

            <Sheet
                data={selectedVenue}
                onClose={onCloseSheet}
            />

            <LocationPermissionModal
                visible={showPermissionModal}
                onClose={() => setShowPermissionModal(false)}
            />
        </ThemedView>
    );
}
