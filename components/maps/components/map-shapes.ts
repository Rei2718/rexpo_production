import { Spacing } from '@/constants/theme';

export const LOCATION_PIN_PATH = "M479.83-102.33q-11.83 0-23.5-4-11.66-4-20.66-12.67-49.67-45.33-99-97.33-49.34-52-88.5-107.84Q209-380 184.5-437.83 160-495.67 160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 56.33-24.5 114.17Q751-380 711.83-324.17q-39.16 55.84-88.5 107.84-49.33 52-99 97.33-9 8.67-20.83 12.67-11.83 4-23.67 4Zm.23-384.34q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5Z";

// Standard Material Design Icon (960x960 from ViewBox "0 -960 960 960")
export const PIN_VIEW_BOX_SIZE = 960;
export const PIN_OFFSET_Y = 960;

// Unified Constants for Rendering & Hit Testing
export const MARKER_SIZE = Spacing.icon;

// Anchor defines the "point" of the pin relative to its top-left corner (0,0) in the scaled viewbox.
// TIP is at approx (480, -102) in original. Translated to (480, 858).
// Scaled by 32/960. 480 -> 16. 858 -> 28.6.
export const MARKER_ANCHOR = { x: MARKER_SIZE / 2, y: 29 };

export const HIT_RADIUS = 44;