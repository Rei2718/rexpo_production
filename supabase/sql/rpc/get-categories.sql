-- get_categories

CREATE OR REPLACE FUNCTION get_categories()
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'category_public_id', b.category_public_id,
                    'name',            b.name,
                    'icon',             b.icon,
                    'display_order',    b.display_order
                ) ORDER BY b.display_order DESC, b.category_id
            )
            FROM public.categories b
            WHERE b.deleted_at IS NULL
        ),
        '[]'::jsonb
    );
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_categories() TO anon;