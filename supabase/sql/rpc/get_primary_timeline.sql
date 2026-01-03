-- get_primary_timeline

CREATE OR REPLACE FUNCTION get_primary_timeline()
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
            FROM public.mv_primary_timeline mv
        ),
        '[]'::jsonb
    );
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_primary_timeline() TO anon;