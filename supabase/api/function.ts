import { supabase } from "../supabase";
import {
    Banner,
    Category,
    DisplayVenue,
    EventDetails,
    EventOverview,
    Feature,
    News,
    TagEvents,
    TimelineEvent,
    TimelineSlot,
    VenueDetails,
    Verified,
} from "./types";


export async function get_banners() {
    const { data, error } = await supabase.rpc("get_banners");
    if (error) throw error;
    return data as unknown as Verified<Banner>[];
}

export async function get_features() {
    const { data, error } = await supabase.rpc("get_features");
    if (error) throw error;
    return data as unknown as Verified<Feature>[];
}

export async function get_news() {
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
    const { data, error } = await supabase.rpc("get_event_details", {
        event_public_id,
    });
    if (error) throw error;
    return data as unknown as Verified<EventDetails>;
}

export async function get_events_by_tag(tag_public_id?: string) {
    const { data, error } = await supabase.rpc("get_events_by_tag", {
        tag_public_id,
    });
    if (error) throw error;
    return data as unknown as Verified<EventOverview>[];
}

export async function get_events_by_venue(venue_public_id?: string) {
    const { data, error } = await supabase.rpc("get_events_by_venue", {
        venue_public_id,
    });
    if (error) throw error;
    return data as unknown as Verified<TimelineSlot>[];
}

export async function get_several_events_by_tag() {
    const { data, error } = await supabase.rpc("get_several_events_by_tag");
    if (error) throw error;
    return data as unknown as Verified<TagEvents>[];
}

export async function get_tag_and_events_by_category(category_public_id?: string) {
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

export async function get_categories() {
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
    const { data, error } = await supabase.rpc("get_events_by_ids", {
        event_public_ids,
    });
    if (error) throw error;
    return data as unknown as Verified<TimelineEvent>[];
}
