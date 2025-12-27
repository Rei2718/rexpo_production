-- get_banners

CREATE OR REPLACE FUNCTION get_banners()
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'banner_public_id', b.banner_public_id,
                    'image',            b.image,
                    'link',             b.link,
                    'event_public_id',  e.event_public_id,
                    'display_order',    b.display_order
                ) ORDER BY b.display_order DESC, b.banner_id
            )
            FROM public.banners b
            LEFT JOIN public.events e ON b.event_id = e.event_id AND e.deleted_at IS NULL
            WHERE b.deleted_at IS NULL
        ),
        '[]'::jsonb
    );
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_banners() TO anon;