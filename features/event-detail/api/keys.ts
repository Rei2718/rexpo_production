export const keys = {
    event_details: ['event_details'] as const,
    getEventDetailsById: (id: string) => [...keys.event_details, id] as const,
} as const;
