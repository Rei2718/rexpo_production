export interface Banner {
    banner_public_id: string;
    image: string;
    link: string | null;
    event_public_id: string | null;
    display_order: number;
}

export interface Feature {
    feature_public_id: string;
    name: string;
    caption: string;
    note: string | null;
    image: string;
    event_public_id: string | null;
    display_order: number;
}

export interface NewsPerformer {
    performer_public_id: string;
    name: string;
    affiliation: string | null;
    icon: string | null;
}

export interface News {
    news_public_id: string;
    name: string;
    caption: string;
    description: string | null;
    header_image: string | null;
    thumbnail: string | null;
    website: string | null;
    performer: NewsPerformer | null;
    display_order: number;
}

export interface DisplayVenue {
    venue_public_id: string;
    name: string;
    icon: string | null;
    capacity: number | null;
    floor: number | null;
    map_latitude: number;
    map_longitude: number;
    display_order: number;
}

export interface EventOverview {
    event_public_id: string;
    name: string;
    caption: string;
    icon: string | null;
    display_order: number;
}

export interface TagEvents {
    tag_public_id: string;
    name: string;
    caption: string;
    events: EventOverview[];
    display_order: number;
}

export interface EventVenue {
    venue_public_id: string;
    name: string;
    display_order: number;
}

export interface EventTag {
    tag_public_id: string;
    name: string;
    display_order: number;
}

export interface EventSlot {
    slot_public_id: string;
    starts: string;
    ends: string;
    display_order: number;
}

export interface EventPerformer {
    performer_public_id: string;
    name: string;
    affiliation: string | null;
    icon: string | null;
    display_order: number;
}

export interface EventOrganization {
    organization_public_id: string;
    name: string;
    caption: string;
    icon: string | null;
    sponsor: boolean | null;
}

export interface EventDetails {
    event_public_id: string;
    header_image: string | null;
    icon: string | null;
    name: string;
    caption: string;
    description: string | null;
    images: string[] | null;
    organization: EventOrganization;
    venues: EventVenue[];
    tags: EventTag[];
    slots: EventSlot[];
    performers: EventPerformer[];
    display_order: number;
}

export interface TimelineEvent {
    event_public_id: string;
    name: string;
    caption: string;
    icon: string | null;
    venue_name: string;
    starts: string;
    ends: string;
    display_order: number;
}

export interface TimelineSlot {
    starts: string;
    events: TimelineEvent[];
}

// New Types based on recent RPCs
export interface VenueOrganization {
    organization_public_id: string;
    name: string;
    icon: string | null;
    display_order: number;
}

export interface VenueDetails {
    venue_public_id: string;
    name: string;
    icon: string | null;
    map_latitude: number;
    map_longitude: number;
    is_primary: boolean;
    organizations: VenueOrganization[];
}

export interface Category {
    category_public_id: string;
    name: string;
    icon: string | null;
    display_order: number;
}
