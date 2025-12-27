-- get_venue_details

CREATE OR REPLACE FUNCTION get_venue_details(venue_public_id UUID DEFAULT NULL)
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
    result JSONB;
BEGIN
    IF venue_public_id IS NULL THEN
        RETURN NULL;
    END IF;

    WITH cte_organizations AS (
        SELECT 
            vo.venue_id,
            jsonb_agg(
                jsonb_build_object(
                    'organization_public_id', o.organization_public_id,
                    'name',                   o.name,
                    'icon',                   o.icon,
                    'display_order',          vo.display_order
                ) ORDER BY vo.display_order DESC, o.organization_id
            ) AS data
        FROM public.venues_organizations vo
        JOIN public.organizations o ON vo.organization_id = o.organization_id
        WHERE vo.deleted_at IS NULL AND o.deleted_at IS NULL
        GROUP BY vo.venue_id
    )
    SELECT jsonb_build_object(
        'venue_public_id', v.venue_public_id,
        'name',            v.name,
        'icon',            v.icon,
        'map_latitude',    v.map_latitude,
        'map_longitude',   v.map_longitude,
        'is_primary',      v.is_primary,
        'organizations',   COALESCE(o.data, '[]'::jsonb)
    )
    INTO result
    FROM public.venues v
    LEFT JOIN cte_organizations o ON v.venue_id = o.venue_id
    WHERE v.venue_public_id = get_venue_details.venue_public_id
    AND v.deleted_at IS NULL;

    RETURN result;
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_venue_details(UUID) TO anon;
