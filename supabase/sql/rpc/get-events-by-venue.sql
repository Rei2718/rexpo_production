-- get_events_by_venue

CREATE OR REPLACE FUNCTION get_events_by_venue(venue_public_id UUID DEFAULT NULL)
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    IF venue_public_id IS NULL THEN
        RETURN '[]'::jsonb;
    END IF;

    RETURN COALESCE(
        (
            SELECT mv.timeline
            FROM public.mv_venue_timeline mv
            WHERE mv.venue_public_id = get_events_by_venue.venue_public_id
        ),
        '[]'::jsonb
    );
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_events_by_venue(UUID) TO anon;