export const formatTime = (timeString: string): string => {
  if (!timeString) return '';
  const parts = timeString.split(':');
  if (parts.length >= 2) {
    return parts[0] + ':' + parts[1];
  }
  return timeString;
};