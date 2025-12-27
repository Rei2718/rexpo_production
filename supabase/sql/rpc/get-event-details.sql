-- get_event_details

CREATE OR REPLACE FUNCTION get_event_details(event_public_id UUID DEFAULT NULL)
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
    result JSONB;
BEGIN
    IF event_public_id IS NULL THEN
        RETURN NULL;
    END IF;

    SELECT row_to_json(mv)
    INTO result
    FROM public.mv_event_details mv
    WHERE mv.event_public_id = get_event_details.event_public_id;

    RETURN result;
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_event_details(UUID) TO anon;