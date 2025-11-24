CREATE OR REPLACE FUNCTION get_events_by_venue_id(p_venue_id UUID)
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
    mv.event_public_id AS id,
    mv.title,
    mv.overview_description,
    mv.logo_url
  FROM
    public.mv_event_details AS mv
  WHERE
    mv.venue_public_id = p_venue_id
  ORDER BY
    mv.event_display_order ASC,
    mv.main_start_time ASC;
$$;

GRANT EXECUTE ON FUNCTION public.get_events_by_venue_id(UUID) TO anon;
