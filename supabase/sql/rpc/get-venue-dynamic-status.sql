-- get_venue_dynamic_status

CREATE OR REPLACE FUNCTION get_venue_dynamic_status(venue_public_id UUID DEFAULT NULL)
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
    result JSONB;
BEGIN
    IF venue_public_id IS NULL THEN
        RETURN NULL;
    END IF;

    SELECT jsonb_build_object(
        'venue_public_id',    v.venue_public_id,
        'operational_status', v.operational_status,
        'congestion_status',  v.congestion_status,
        'entry_type',         v.entry_type
    )
    INTO result
    FROM public.venues v
    WHERE v.venue_public_id = get_venue_dynamic_status.venue_public_id
    AND v.deleted_at IS NULL
    AND v.venue_public_id IS NOT NULL;

    RETURN result;
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_venue_dynamic_status(UUID) TO anon;
