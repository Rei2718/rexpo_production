// 全体的にピンが「右」にズレている → centerLng を少し「増やす」
// 全体的にピンが「上」にズレている → centerLat を少し「増やす」
// ピンの間隔が広すぎて画面外にはみ出る → 値を「大きく」する (0.0040など)
// ピンが中央に集まりすぎている → 値を「小さく」する (0.0025など)

export const MAP_CONFIG = {
    centerLat: 43.057055,
    centerLng: 141.388655,
    latRange: 0.0034,
};

const ASPECT_RATIO = Math.cos(MAP_CONFIG.centerLat * (Math.PI / 180));
const LNG_RANGE = MAP_CONFIG.latRange / ASPECT_RATIO;

export function convertLatLngToXY(latitude: number, longitude: number) {
    const latDiff = MAP_CONFIG.centerLat - latitude;
    const lngDiff = longitude - MAP_CONFIG.centerLng;

    const xPct = 50 + (lngDiff / LNG_RANGE) * 100;
    const yPct = 50 + (latDiff / MAP_CONFIG.latRange) * 100;

    return { x: xPct, y: yPct };
}

// Haversine formula to calculate distance in meters
export function getDistanceFromCenter(latitude: number, longitude: number): number {
    const R = 6371e3; // Earth radius in meters
    const lat1 = (latitude * Math.PI) / 180;
    const lat2 = (MAP_CONFIG.centerLat * Math.PI) / 180;
    const dLat = ((MAP_CONFIG.centerLat - latitude) * Math.PI) / 180;
    const dLng = ((MAP_CONFIG.centerLng - longitude) * Math.PI) / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}