import { supabase } from "@/supabase/supabase";

export async function getEventDetailsById(id: string) {
    const { data, error } = await supabase
        .rpc("get_event_details_by_id", {
            p_event_public_id: id
        })
    if (error) throw error;
    return data;
}
