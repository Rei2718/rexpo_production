-- get_all_timeline

CREATE OR REPLACE FUNCTION get_all_timeline()
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT
                jsonb_agg(
                    jsonb_build_object(
                        'starts', to_char(mv.starts, 'HH24:MI'),
                        'events', mv.events
                    ) ORDER BY mv.starts ASC
                )
            FROM public.mv_all_timeline mv
        ),
        '[]'::jsonb
    );
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_all_timeline() TO anon;