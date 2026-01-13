-- get_foods

CREATE OR REPLACE FUNCTION get_foods()
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'food_public_id', f.food_public_id,
                    'name',           f.name,
                    'description',    f.description,
                    'min_price',      f.min_price,   -- 追加
                    'max_price',      f.max_price,   -- 追加
                    'icon',           f.icon,
                    'minutes',        f.minutes,
                    'distance',       f.distance,
                    'address',        f.address,
                    'website',        f.website,
                    'display_order',  f.display_order
                ) ORDER BY f.display_order DESC, f.created_at DESC
            )
            FROM public.foods f
            WHERE f.deleted_at IS NULL
            AND f.food_public_id IS NOT NULL
        ),
        '[]'::jsonb
    );
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_foods() TO anon;