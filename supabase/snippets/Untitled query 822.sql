-- get_organization_details

CREATE OR REPLACE FUNCTION get_organization_details(organization_public_id UUID DEFAULT NULL)
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    IF organization_public_id IS NULL THEN
        RETURN NULL;
    END IF;

    RETURN (
        SELECT to_jsonb(o)
        FROM public.organizations o
        WHERE o.organization_public_id = get_organization_details.organization_public_id
        AND o.deleted_at IS NULL
    );
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_organization_details(UUID) TO anon;