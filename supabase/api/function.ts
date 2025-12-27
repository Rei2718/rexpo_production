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
    TimelineSlot,
    VenueDetails,
} from "./types";

export async function get_banners() {
    const { data, error } = await supabase.rpc("get_banners");
    if (error) throw error;
    return data as unknown as Banner[];
}

export async function get_features() {
    const { data, error } = await supabase.rpc("get_features");
    if (error) throw error;
    return data as unknown as Feature[];
}

export async function get_news() {
    const { data, error } = await supabase.rpc("get_news");
    if (error) throw error;
    return data as unknown as News[];
}

export async function get_display_venue() {
    const { data, error } = await supabase.rpc("get_display_venue");
    if (error) throw error;
    return data as unknown as DisplayVenue[];
}

export async function get_event_details(event_public_id: string) {
    const { data, error } = await supabase.rpc("get_event_details", {
        event_public_id,
    });
    if (error) throw error;
    return data as unknown as EventDetails;
}

export async function get_events_by_tag(tag_public_id?: string) {
    const { data, error } = await supabase.rpc("get_events_by_tag", {
        tag_public_id,
    });
    if (error) throw error;
    return data as unknown as EventOverview[];
}

export async function get_events_by_venue(venue_public_id?: string) {
    const { data, error } = await supabase.rpc("get_events_by_venue", {
        venue_public_id,
    });
    if (error) throw error;
    return data as unknown as TimelineSlot[];
}

export async function get_several_events_by_tag() {
    const { data, error } = await supabase.rpc("get_several_events_by_tag");
    if (error) throw error;
    return data as unknown as TagEvents[];
}

export async function get_tag_and_events_by_category(category_public_id?: string) {
    const { data, error } = await supabase.rpc("get_tag_and_events_by_category", {
        category_public_id,
    });
    if (error) throw error;
    return data as unknown as TagEvents[];
}

export async function get_venue_details(venue_public_id: string) {
    const { data, error } = await supabase.rpc("get_venue_details", {
        venue_public_id,
    });
    if (error) throw error;
    return data as unknown as VenueDetails;
}

export async function get_categories() {
    const { data, error } = await supabase.rpc("get_categories");
    if (error) throw error;
    return data as unknown as Category[];
}
