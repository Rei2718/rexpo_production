import { supabase } from "@/supabase/supabase";

export async function getEventsListByTag(id: string) {
    const { data, error } = await supabase
        .rpc("get_events_list_by_tag", {
            p_tag_name: id
        })
    if (error) throw error;
    return data;
}

export async function getEventDetailsById(id: string) {
    const { data, error } = await supabase
        .rpc("get_event_details_by_id", {
            p_event_public_id: id
        })
    if (error) throw error;
    return data;
}

export async function getEventsByVenueId(id: string) {
    const { data, error } = await supabase
        .rpc("get_events_by_venue_id", {
            p_venue_id: id
        });
    if (error) throw error;
    return data;
}

export async function getVenues() {
    const { data, error } = await supabase
        .rpc("get_venues");
    if (error) throw error;
    return data;
}