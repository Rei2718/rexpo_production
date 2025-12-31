CREATE OR REPLACE FUNCTION get_tag_and_events_by_category(
    category_public_id UUID DEFAULT NULL
)
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
    _result JSONB;
BEGIN
    IF category_public_id IS NULL THEN
        RETURN '[]'::jsonb;
    END IF;

    SELECT jsonb_agg(tag_data) INTO _result
    FROM (
        SELECT
            t.tag_public_id,
            t.name,
            t.caption,
            tc.display_order AS display_order,
            COALESCE(
                (
                    SELECT jsonb_agg(event_item)
                    FROM (
                        SELECT jsonb_build_object(
                            'event_public_id', e.event_public_id,
                            'name', e.name,
                            'caption', e.caption,
                            'icon', e.icon,
                            'display_order', e.display_order
                        ) AS event_item
                        FROM public.events_tags et
                        JOIN public.events e ON et.event_id = e.event_id
                        WHERE et.tag_id = t.tag_id
                          AND et.deleted_at IS NULL
                          AND e.deleted_at IS NULL
                          AND e.event_public_id IS NOT NULL
                        ORDER BY e.display_order DESC, e.event_id
                        LIMIT 4
                    ) sub
                ),
                '[]'::jsonb
            ) AS events
        FROM public.categories c
        JOIN public.tags_categories tc ON c.category_id = tc.category_id
        JOIN public.tags t ON tc.tag_id = t.tag_id
        WHERE c.category_public_id = get_tag_and_events_by_category.category_public_id
          AND c.deleted_at IS NULL
          AND tc.deleted_at IS NULL
          AND t.deleted_at IS NULL
          AND t.tag_public_id IS NOT NULL
        ORDER BY tc.display_order DESC
    ) tag_data;

    RETURN COALESCE(_result, '[]'::jsonb);
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_tag_and_events_by_category(UUID) TO anon;