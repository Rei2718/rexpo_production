import { Database } from "@/supabase/database.types";

export type GetEventDetailsById = Database['public']['Functions']["get_event_details_by_id"]['Returns'][number];
