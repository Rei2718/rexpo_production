import { Database } from "@/supabase/database.types";

export type GetEventsListByTag = Database['public']['Functions']["get_events_list_by_tag"]['Returns'][number];
