export const VENUE_STATUS_COLORS = {
    open: '#34C759',      // Green
    closed: '#FF3B30',    // Red
    default: '#8E8E93',   // Gray
    congestion: {
        low: '#34C759',     // Green
        medium: '#FFCC00',  // Yellow
        high: '#FF9500',    // Orange
        restricted: '#FF3B30', // Red
    },
    operational: {
        open: '#34C759',    // Green
        closed: '#FF3B30',  // Red
        default: '#8E8E93', // Gray
    }
} as const;

export const ALL_VENUE_ID = "all";