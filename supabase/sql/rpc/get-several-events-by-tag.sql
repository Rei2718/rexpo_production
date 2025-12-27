-- get_several_events_by_tag

CREATE OR REPLACE FUNCTION get_several_events_by_tag()
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    RETURN COALESCE(
        (
            WITH cte_tag_events AS (
                SELECT
                    t.tag_id,
                    t.tag_public_id,
                    t.name,
                    t.caption,
                    t.display_order AS tag_display_order,
                    COALESCE(
                        jsonb_agg(
                            jsonb_build_object(
                                'event_public_id', e.event_public_id,
                                'name',            e.name,
                                'caption',         e.caption,
                                'icon',            e.icon,
                                'display_order',   e.display_order
                            ) ORDER BY e.display_order DESC, e.event_id
                        ) FILTER (WHERE e.event_id IS NOT NULL),
                        '[]'::jsonb
                    ) AS events
                FROM public.tags t
                LEFT JOIN public.events_tags et ON t.tag_id = et.tag_id AND et.deleted_at IS NULL
                LEFT JOIN public.events e ON et.event_id = e.event_id AND e.deleted_at IS NULL
                WHERE t.deleted_at IS NULL
                GROUP BY t.tag_id, t.tag_public_id, t.name, t.caption, t.display_order
            )
            SELECT jsonb_agg(
                jsonb_build_object(
                    'tag_public_id', te.tag_public_id,
                    'name',          te.name,
                    'caption',       te.caption,
                    'events',        (
                        SELECT COALESCE(jsonb_agg(ev), '[]'::jsonb)
                        FROM (
                            SELECT ev
                            FROM jsonb_array_elements(te.events) AS ev
                            LIMIT 4
                        ) AS limited_events
                    ),
                    'display_order', te.tag_display_order
                ) ORDER BY te.tag_display_order DESC
            )
            FROM cte_tag_events te
        ),
        '[]'::jsonb
    );
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_several_events_by_tag() TO anon;