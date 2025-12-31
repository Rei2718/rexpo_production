-- get_all_venues

CREATE OR REPLACE FUNCTION get_all_venues()
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'venue_public_id', v.venue_public_id,
                    'name',            v.name,
                    'icon',            v.icon,
                    'capacity',        v.capacity,
                    'floor',           v.floor,
                    'map_latitude',    v.map_latitude,
                    'map_longitude',   v.map_longitude,
                    'display_order',   v.display_order
                ) ORDER BY v.display_order DESC, v.venue_id
            )
            FROM public.venues v
            WHERE v.deleted_at IS NULL
            AND v.venue_public_id IS NOT NULL
        ),
        '[]'::jsonb
    );
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_all_venues() TO anon;