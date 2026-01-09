// 全体的にピンが「右」にズレている → centerLng を少し「増やす」
// 全体的にピンが「上」にズレている → centerLat を少し「増やす」
// ピンの間隔が広すぎて画面外にはみ出る → 値を「大きく」する (0.0040など)
// ピンが中央に集まりすぎている → 値を「小さく」する (0.0025など)

const MAP_CONFIG = {
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