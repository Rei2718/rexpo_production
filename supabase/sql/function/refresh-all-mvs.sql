-- refresh_all_mvs

CREATE OR REPLACE FUNCTION refresh_all_mvs()
RETURNS void
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    -- 基礎MV（重い結合のみ維持）
    REFRESH MATERIALIZED VIEW CONCURRENTLY public.mv_event_details;

    -- 派生MV
    REFRESH MATERIALIZED VIEW CONCURRENTLY public.mv_venue_timeline;
    REFRESH MATERIALIZED VIEW CONCURRENTLY public.mv_category_tree;
END;
$$ LANGUAGE plpgsql;

REVOKE EXECUTE ON FUNCTION public.refresh_all_mvs FROM public;