export function formatTime(timeString: string): string {
    if (!timeString) return "";
    // timeString is expected to be "HH:MM:SS" or "HH:MM"
    // We want "HH:MM"
    const parts = timeString.split(':');
    if (parts.length >= 2) {
        return `${parts[0]}:${parts[1]}`;
    }
    return timeString;
}
