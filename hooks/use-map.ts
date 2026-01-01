import { useAllVenues } from '@/supabase/api';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import { useCallback, useRef, useState } from 'react';
import MapView, { Region } from 'react-native-maps';
import { useUserLocation } from './use-user-location';

export const INITIAL_REGION: Region = {
    latitude: 43.057149,
    longitude: 141.388626,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
};

// 0.00005;
const BOUNDARY_BUFFER = 0.01;
const MAP_BOUNDARIES = {
    northEast: {
        latitude: INITIAL_REGION.latitude + INITIAL_REGION.latitudeDelta / 2 + BOUNDARY_BUFFER,
        longitude: INITIAL_REGION.longitude + INITIAL_REGION.longitudeDelta / 2 + BOUNDARY_BUFFER,
    },
    southWest: {
        latitude: INITIAL_REGION.latitude - INITIAL_REGION.latitudeDelta / 2 - BOUNDARY_BUFFER,
        longitude: INITIAL_REGION.longitude - INITIAL_REGION.longitudeDelta / 2 - BOUNDARY_BUFFER,
    },
};


// 18
export const MIN_ZOOM_LEVEL = 10;

export default function useMap() {
    const mapRef = useRef<MapView>(null);
    const [selectedVenue, setSelectedVenue] = useState<Verified<DisplayVenue> | null>(null);
    const [showPermissionModal, setShowPermissionModal] = useState(false);

    const { data, isPending, isError } = useAllVenues();

    // 位置情報フックを統合
    const {
        location: userLocation,
        requestLocation,
    } = useUserLocation();

    const onMapReady = useCallback(() => {
        if (mapRef.current) {
            mapRef.current.setMapBoundaries(MAP_BOUNDARIES.northEast, MAP_BOUNDARIES.southWest);
        }
    }, []);

    const onSelectVenue = useCallback((venue: Verified<DisplayVenue>) => {
        setSelectedVenue(venue);
    }, []);

    const onCloseSheet = useCallback(() => {
        setSelectedVenue(null);
    }, []);

    const onMapPress = useCallback(() => {
        setSelectedVenue(null);
    }, []);

    // 現在地ボタンが押された時の処理
    const onCurrentLocationPress = useCallback(async () => {
        const result = await requestLocation();

        if (result === 'denied') {
            setShowPermissionModal(true);
            return;
        }

        // 許可されたが位置情報がまだ取得できていない場合、または取得済みの場合
        // requestLocation は startWatching を呼ぶので、位置情報は非同期で入ってくる。
        // すでに location がある場合は移動する
        if (userLocation && mapRef.current) {
            mapRef.current.animateToRegion({
                latitude: userLocation.coords.latitude,
                longitude: userLocation.coords.longitude,
                latitudeDelta: INITIAL_REGION.latitudeDelta,
                longitudeDelta: INITIAL_REGION.longitudeDelta,
            }, 500);
        }

        // メモ: 初回許可時は userLocation が null の可能性がある。
        // その場合は何もしないか、あるいはトーストを出すなどが考えられるが、
        // 今回の要件では「許可しますか？」ダイアログが出ることがアクションとなるため、
        // ここでは即座に移動できなくても許容範囲とする（標準マップの挙動に近い）。
        // ユーザーがもう一度押せば移動する。
    }, [requestLocation, userLocation]);

    return {
        mapRef,
        data,
        isPending,
        isError,
        selectedVenue,

        userLocation,
        onCurrentLocationPress,

        // マップ操作関連
        onMapReady,
        onSelectVenue,
        onCloseSheet,
        onMapPress,

        // パーミッションモーダル
        showPermissionModal,
        setShowPermissionModal,
    };
}
