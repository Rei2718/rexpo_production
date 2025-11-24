import { GetEventsListByTag } from '@/supabase/data/types';

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
