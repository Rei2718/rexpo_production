-- get_features

CREATE OR REPLACE FUNCTION get_features()
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'feature_public_id', f.feature_public_id,
                    'name',              f.name,
                    'caption',           f.caption,
                    'note',              f.note,
                    'image',             f.image,
                    'event_public_id',   e.event_public_id,
                    'display_order',     f.display_order
                ) ORDER BY f.display_order DESC, f.feature_id
            )
            FROM public.features f
            LEFT JOIN public.events e ON f.event_id = e.event_id AND e.deleted_at IS NULL
            WHERE f.deleted_at IS NULL
        ),
        '[]'::jsonb
    );
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_features() TO anon;