-- get_tag_and_events_by_category

CREATE OR REPLACE FUNCTION get_tag_and_events_by_category(
    category_public_id UUID DEFAULT NULL
)
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    IF category_public_id IS NULL THEN
        RETURN '[]'::jsonb;
    END IF;

    RETURN COALESCE(
        (
            SELECT mv.tags
            FROM public.mv_category_tree mv
            WHERE mv.category_public_id = get_tag_and_events_by_category.category_public_id
        ),
        '[]'::jsonb
    );
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_tag_and_events_by_category(UUID) TO anon;