-- update_at function
CREATE OR REPLACE FUNCTION update_at()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

REVOKE EXECUTE ON FUNCTION public.update_at FROM public;
GRANT EXECUTE ON FUNCTION public.update_at TO authenticated, service_role;