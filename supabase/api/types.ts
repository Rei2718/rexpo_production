// transfer nullable
export type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

// transfer public_id to string
export type Verified<T> = {
    [P in keyof T]: P extends `${string}_public_id`
    ? string
    : NonNullable<T[P]> extends (infer U)[]
    ? Verified<U>[]
    : T[P] extends object | null
    ? Verified<NonNullable<T[P]>> | null
    : T[P];
};


export type Banner = Nullable<{
    banner_public_id: string;
    image: string;
    link: string;
    event_public_id: string;
    display_order: number;
}>;

export type Feature = Nullable<{
    feature_public_id: string;
    name: string;
    caption: string;
    note: string;
    image: string;
    event_public_id: string;
    display_order: number;
}>;

export type NewsPerformer = Nullable<{
    performer_public_id: string;
    name: string;
    affiliation: string;
    icon: string;
}>;

export type News = Nullable<{
    news_public_id: string;
    name: string;
    caption: string;
    description: string;
    header_image: string;
    thumbnail: string;
    website: string;
    performer: NewsPerformer;
    display_order: number;
}>;

export type DisplayVenue = Nullable<{
    venue_public_id: string;
    name: string;
    icon: string;
    capacity: number;
    floor: number;
    map_latitude: number;
    map_longitude: number;
    display_order: number;
}>;

export type EventOverview = Nullable<{
    event_public_id: string;
    name: string;
    caption: string;
    icon: string;
    display_order: number;
}>;

export type TagEvents = Nullable<{
    tag_public_id: string;
    name: string;
    caption: string;
    events: EventOverview[];
    display_order: number;
}>;

export type EventVenue = Nullable<{
    venue_public_id: string;
    name: string;
    display_order: number;
}>;

export type EventTag = Nullable<{
    tag_public_id: string;
    name: string;
    display_order: number;
}>;

export type EventSlot = Nullable<{
    slot_public_id: string;
    starts: string;
    ends: string;
    display_order: number;
}>;

export type EventPerformer = Nullable<{
    performer_public_id: string;
    name: string;
    affiliation: string;
    icon: string;
    display_order: number;
}>;

export type EventOrganization = Nullable<{
    organization_public_id: string;
    name: string;
    caption: string;
    icon: string;
    sponsor: boolean;
}>;

export type EventDetails = Nullable<{
    event_public_id: string;
    header_image: string;
    icon: string;
    name: string;
    caption: string;
    description: string;
    images: string[];
    organization: EventOrganization;
    venues: EventVenue[];
    tags: EventTag[];
    slots: EventSlot[];
    performers: EventPerformer[];
    display_order: number;
}>;

export type TimelineEvent = Nullable<{
    event_public_id: string;
    name: string;
    caption: string;
    icon: string;
    venue_name: string;
    starts: string;
    ends: string;
    display_order: number;
}>;

export type TimelineSlot = Nullable<{
    starts: string;
    events: TimelineEvent[];
}>;

export type VenueOrganization = Nullable<{
    organization_public_id: string;
    name: string;
    caption: string;
    icon: string;
    display_order: number;
}>;

export type VenueDetails = Nullable<{
    venue_public_id: string;
    name: string;
    icon: string;
    map_latitude: number;
    map_longitude: number;
    is_primary: boolean;

    operational_status: string;
    congestion_status: string;
    entry_type: string;

    organizations: VenueOrganization[];
}>;

export type Category = Nullable<{
    category_public_id: string;
    name: string;
    icon: string;
    display_order: number;
}>;