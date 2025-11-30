CREATE OR REPLACE FUNCTION get_bookmarked_events(p_event_ids UUID[])
RETURNS TABLE (
  id UUID,
  title TEXT,
  overview_description TEXT,
  logo_url TEXT
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT
    id,
    title,
    overview_description,
    logo_url
  FROM public.event
  WHERE
    id = ANY(p_event_ids);
$$;

GRANT EXECUTE ON FUNCTION public.get_bookmarked_events(UUID[]) TO anon;