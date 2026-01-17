import { useDebugTimeStore } from "@/store/use-debug-time-store";

export function useEventActiveStatus(starts: string | null, ends: string | null) {
    const debugTime = useDebugTimeStore((state) => state.debugTime);
    const now = debugTime ?? new Date();

    const parseEventTime = (timeStr: string | null, baseDate: Date) => {
        if (!timeStr) return null;
        // Try to handle HH:mm or HH:mm:ss
        const timeParts = timeStr.split(':');
        if (timeParts.length >= 2) {
            const hours = parseInt(timeParts[0], 10);
            const minutes = parseInt(timeParts[1], 10);
            // Basic validation
            if (!isNaN(hours) && !isNaN(minutes)) {
                const d = new Date(baseDate);
                d.setHours(hours, minutes, 0, 0);
                return d;
            }
        }
        // Fallback to standard Date parse if it's a full string
        const d = new Date(timeStr);
        return isNaN(d.getTime()) ? null : d;
    };

    const start = parseEventTime(starts, now);
    let end = parseEventTime(ends, now);

    // Handle midnight crossing
    if (start && end && end < start) {
        end.setDate(end.getDate() + 1);
    }

    return !!(start && end && now >= start && now <= end);
}