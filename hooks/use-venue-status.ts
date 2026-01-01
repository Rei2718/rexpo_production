import { VENUE_STATUS_COLORS } from '@/constants/venue-constants';
import { useThemeColor } from '@/hooks/use-theme-color';

export function useOperationalStatusColor(status: string | null) {
    switch (status) {
        case '公開中': return VENUE_STATUS_COLORS.operational.open;
        case '終了': return VENUE_STATUS_COLORS.operational.closed;
        default: return VENUE_STATUS_COLORS.operational.default;
    }
}

export function useCongestionStatusColor(status: string | null) {
    const color = useThemeColor();
    switch (status) {
        case '余裕あり': return VENUE_STATUS_COLORS.congestion.low;
        case 'やや混雑': return VENUE_STATUS_COLORS.congestion.medium;
        case '混雑': return VENUE_STATUS_COLORS.congestion.high;
        case '制限中': return VENUE_STATUS_COLORS.congestion.restricted;
        default: return color.natural_200;
    }
}