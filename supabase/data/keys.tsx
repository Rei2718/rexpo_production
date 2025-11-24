export const keys = {
    event_list_by_tag: ['event_list_by_tag'] as const,
    getEventsListByTag: (id: string) => [...keys.event_list_by_tag, id] as const,

    event_details: ['event_details'] as const,
    getEventDetailsById: (id: string) => [...keys.event_details, id] as const,

    get_events_by_venue_id: ["get_events_by_venue_id"] as const,
    getEventsByVenueId: (id: string) => [...keys.get_events_by_venue_id, id] as const,

    venues: ['venues'] as const,
    getVenues: () => [...keys.venues] as const,
} as const