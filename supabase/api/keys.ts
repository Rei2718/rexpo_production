export const keys = {
    get_banners: () => ['get_banners'] as const,
    get_features: () => ['get_features'] as const,
    get_news: () => ['get_news'] as const,
    get_display_venue: () => ['get_display_venue'] as const,
    get_event_details: (event_public_id: string) => ['get_event_details', event_public_id] as const,
    get_events_by_tag: (tag_public_id?: string) => ['get_events_by_tag', tag_public_id] as const,
    get_events_by_venue: (venue_public_id?: string) => ['get_events_by_venue', venue_public_id] as const,
    get_several_events_by_tag: () => ['get_several_events_by_tag'] as const,
    get_tag_and_events_by_category: (category_public_id?: string) => ['get_tag_and_events_by_category', category_public_id] as const,
    get_venue_details: (venue_public_id: string) => ['get_venue_details', venue_public_id] as const,
    get_categories: () => ['get_categories'] as const,
} as const;
