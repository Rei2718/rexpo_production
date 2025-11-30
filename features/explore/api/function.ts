import { supabase } from "@/supabase/supabase";

export async function getEventsListByTag(id: string) {
    const { data, error } = await supabase
        .rpc("get_events_list_by_tag", {
            p_tag_name: id
        })
    if (error) throw error;
    return data;
}
