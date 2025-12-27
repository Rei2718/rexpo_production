-- get_events_by_tag

CREATE OR REPLACE FUNCTION get_events_by_tag(
    tag_public_id UUID DEFAULT NULL
)
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    IF tag_public_id IS NULL THEN
        RETURN '[]'::jsonb;
    END IF;

    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'event_public_id', e.event_public_id,
                    'name',            e.name,
                    'caption',         e.caption,
                    'icon',            e.icon,
                    'display_order',   e.display_order
                ) ORDER BY e.display_order DESC, e.event_id
            )
            FROM public.tags t
            JOIN public.events_tags et ON t.tag_id = et.tag_id AND et.deleted_at IS NULL
            JOIN public.events e ON et.event_id = e.event_id AND e.deleted_at IS NULL
            WHERE t.tag_public_id = get_events_by_tag.tag_public_id
            AND t.deleted_at IS NULL
        ),
        '[]'::jsonb
    );
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_events_by_tag(UUID) TO anon;