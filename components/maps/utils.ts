// Map boundaries derived from hooks/use-map.ts INITIAL_REGION
// Latitude: 43.057149, Longitude: 141.388626, Delta: 0.003, Buffer: 0.00005

const MAP_CONFIG = {
    minLat: 43.055599, // South
    maxLat: 43.058699, // North
    minLng: 141.387076, // West
    maxLng: 141.390176, // East
};

/**
 * Converts Latitude/Longitude to percentage coordinates (0-100) on the map.
 * Returns { x: 0..100, y: 0..100 }
 */
export function convertLatLngToXY(latitude: number, longitude: number) {
    // X: Longitude (West -> East maps to 0 -> 100)
    const xPct = ((longitude - MAP_CONFIG.minLng) / (MAP_CONFIG.maxLng - MAP_CONFIG.minLng)) * 100;

    // Y: Latitude (North -> South maps to 0 -> 100)
    // Note: Screen Y grows downwards, so MaxLat (North) is 0%, MinLat (South) is 100%
    const yPct = ((MAP_CONFIG.maxLat - latitude) / (MAP_CONFIG.maxLat - MAP_CONFIG.minLat)) * 100;

    return { x: xPct, y: yPct };
}
