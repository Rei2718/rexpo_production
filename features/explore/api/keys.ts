export const keys = {
    event_list_by_tag: ['event_list_by_tag'] as const,
    getEventsListByTag: (id: string) => [...keys.event_list_by_tag, id] as const,
} as const;
