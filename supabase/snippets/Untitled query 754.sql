-- 初回は CONCURRENTLY なしで全データを流し込む
REFRESH MATERIALIZED VIEW public.mv_event_details;
REFRESH MATERIALIZED VIEW public.mv_venue_timeline;
REFRESH MATERIALIZED VIEW public.mv_category_tree;
REFRESH MATERIALIZED VIEW public.mv_primary_timeline;