CREATE OR REPLACE FUNCTION get_venues()
RETURNS TABLE (
  id uuid,
  name text,
  description text,
  floor text,
  map_latitude float8,
  map_longitude float8
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT
    id,
    name,
    description,
    floor,
    map_latitude,
    map_longitude
  FROM public.venue
  ORDER BY name ASC;
$$;

GRANT EXECUTE ON FUNCTION public.get_venues() TO anon;
