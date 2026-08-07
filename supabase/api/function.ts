import { ALL_VENUE_ID } from "@/constants/venue-constants";
import {
    archiveBanners,
    archiveCategories,
    archiveDisplayVenues,
    archiveEventDetails,
    archiveEventRankings,
    archiveFeatures,
    archiveFoods,
    archiveNews,
    archiveOrganizationDetails,
    archiveTagEvents,
    archiveTimelineSlots,
    archiveVenueDetails,
    archiveVenueDynamicStatus,
    archiveVenueStaticInfo
} from "@/supabase/archive";
import { IS_ARCHIVE, supabase } from "@/supabase/supabase";
import {
    Banner,
    Category,
    DisplayVenue,
    EventDetails,
    EventOverview,
    EventRankings,
    Feature,
    Food,
    News,
    OrganizationDetails,
    TagEvents,
    TimelineEvent,
    TimelineSlot,
    VenueDetails,
    VenueDynamicStatus,
    VenueStaticInfo,
    Verified
} from "./types";


export async function get_banners() {
    if (IS_ARCHIVE) return archiveBanners;
    const { data, error } = await supabase.rpc("get_banners");
    if (error) throw error;
    return data as unknown as Verified<Banner>[];
}

export async function get_features() {
    if (IS_ARCHIVE) return archiveFeatures;
    const { data, error } = await supabase.rpc("get_features");
    if (error) throw error;
    return data as unknown as Verified<Feature>[];
}

export async function get_news() {
    if (IS_ARCHIVE) return archiveNews;
    const { data, error } = await supabase.rpc("get_news");
    if (error) throw error;
    return data as unknown as Verified<News>[];
}

export async function get_display_venue() {
    const { data, error } = await supabase.rpc("get_display_venue");
    if (error) throw error;
    return data as unknown as Verified<DisplayVenue>[];
}

export async function get_event_details(event_public_id: string) {
    if (IS_ARCHIVE) {
        const details = archiveEventDetails[event_public_id] || Object.values(archiveEventDetails)[0];
        return details;
    }
    const { data, error } = await supabase.rpc("get_event_details", {
        event_public_id,
    });
    if (error) throw error;
    return data as unknown as Verified<EventDetails>;
}

export async function get_events_by_tag(tag_public_id?: string) {
    if (IS_ARCHIVE) return archiveTagEvents[0]?.events ?? [];
    const { data, error } = await supabase.rpc("get_events_by_tag", {
        tag_public_id,
    });
    if (error) throw error;
    return data as unknown as Verified<EventOverview>[];
}

export async function get_events_by_venue(venue_public_id?: string) {
    if (IS_ARCHIVE) return archiveTimelineSlots;
    if (venue_public_id === ALL_VENUE_ID) {
        const { data, error } = await supabase.rpc("get_all_timeline");
        if (error) throw error;
        return data as unknown as Verified<TimelineSlot>[];
    }
    const { data, error } = await supabase.rpc("get_events_by_venue", {
        venue_public_id,
    });
    if (error) throw error;
    return data as unknown as Verified<TimelineSlot>[];
}

export async function get_several_events_by_tag() {
    if (IS_ARCHIVE) return archiveTagEvents;
    const { data, error } = await supabase.rpc("get_several_events_by_tag");
    if (error) throw error;
    return data as unknown as Verified<TagEvents>[];
}

export async function get_tag_and_events_by_category(category_public_id?: string) {
    if (IS_ARCHIVE) return archiveTagEvents;
    const { data, error } = await supabase.rpc("get_tag_and_events_by_category", {
        category_public_id,
    });
    if (error) throw error;
    return data as unknown as Verified<TagEvents>[];
}

export async function get_venue_details(venue_public_id: string) {
    const { data, error } = await supabase.rpc("get_venue_details", {
        venue_public_id,
    });
    if (error) throw error;
    return data as unknown as Verified<VenueDetails>;
}

export async function get_venue_static_info(venue_public_id: string) {
    const { data, error } = await supabase.rpc("get_venue_static_info", {
        venue_public_id,
    });
    if (error) throw error;
    return data as unknown as Verified<VenueStaticInfo>;
}

export async function get_venue_dynamic_status(venue_public_id: string) {
    const { data, error } = await supabase.rpc("get_venue_dynamic_status", {
        venue_public_id,
    });
    if (error) throw error;
    return data as unknown as Verified<VenueDynamicStatus>;
}

export async function get_categories() {
    if (IS_ARCHIVE) return archiveCategories;
    const { data, error } = await supabase.rpc("get_categories");
    if (error) throw error;
    return data as unknown as Verified<Category>[];
}

export async function get_all_venues() {
    const { data, error } = await supabase.rpc("get_all_venues");
    if (error) throw error;
    return data as unknown as Verified<DisplayVenue>[];
}

export async function get_events_by_ids(event_public_ids: string[]) {
    if (IS_ARCHIVE) {
        return archiveTimelineSlots.flatMap(slot => slot.events).filter(event => event_public_ids.includes(event.event_public_id));
    }
    const { data, error } = await supabase.rpc("get_events_by_ids", {
        event_public_ids,
    });
    if (error) throw error;
    return data as unknown as Verified<TimelineEvent>[];
}

export async function get_organization_details(organization_public_id: string) {
    if (IS_ARCHIVE) return archiveOrganizationDetails;
    const { data, error } = await supabase.rpc("get_organization_details", {
        organization_public_id,
    });
    if (error) throw error;
    return data as unknown as Verified<OrganizationDetails>;
}

export async function get_foods() {
    if (IS_ARCHIVE) return archiveFoods;
    const { data, error } = await supabase.rpc("get_foods");
    if (error) throw error;
    return data as unknown as Verified<Food>[];
}

export async function get_event_rankings() {
    if (IS_ARCHIVE) return archiveEventRankings;
    const { data, error } = await supabase.rpc("get_event_rankings");
    if (error) throw error;
    return data as unknown as Verified<EventRankings>;
}