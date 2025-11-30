import { Database } from "@/supabase/database.types";

export type GetEventsListByTag = Database['public']['Functions']["get_events_list_by_tag"]['Returns'][number];

export type ListProps = {
    targetTag: string;
    title: string;
    subtitle: string;
};

export type ListUIProps = {
    title: string;
    subtitle: string;
    chunkedData: GetEventsListByTag[][];
};

export type ColumnProps = {
    items: GetEventsListByTag[];
    width: number;
};

export type CardProps = {
    item: GetEventsListByTag;
};
