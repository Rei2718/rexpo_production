-- get_events_by_ids

CREATE OR REPLACE FUNCTION get_events_by_ids(
    event_public_ids TEXT[]
)
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
    result JSONB;
BEGIN
    SELECT COALESCE(
        jsonb_agg(
            jsonb_build_object(
                'event_public_id', e.event_public_id,
                'name',            e.name,
                'caption',         e.caption,
                'icon',            e.icon,
                'venue_name',      v.name,
                'starts',          to_char(s.starts, 'HH24:MI'),
                'ends',            to_char(s.ends, 'HH24:MI'),
                'display_order',   e.display_order
            ) ORDER BY s.starts ASC
        ),
        '[]'::jsonb
    )
    INTO result
    FROM public.events e
    JOIN public.events_venues ev ON e.event_id = ev.event_id AND ev.deleted_at IS NULL
    JOIN public.venues v ON ev.venue_id = v.venue_id AND v.deleted_at IS NULL
    JOIN public.events_slots es ON e.event_id = es.event_id AND es.deleted_at IS NULL
    JOIN public.slots s ON es.slot_id = s.slot_id AND s.deleted_at IS NULL
    WHERE e.event_public_id = ANY(event_public_ids::uuid[])
    AND e.deleted_at IS NULL
    AND e.event_public_id IS NOT NULL;

    RETURN result;
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_events_by_ids(TEXT[]) TO anon;