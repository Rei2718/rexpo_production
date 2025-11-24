--------------------------------------------------------------------------------
-- RPC
--------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION get_event_details_by_id(
  p_event_public_id UUID
)
RETURNS SETOF public.mv_event_details
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT *
  FROM public.mv_event_details
  WHERE
    event_public_id = p_event_public_id
  LIMIT 1;
$$;

GRANT EXECUTE ON FUNCTION public.get_event_details_by_id(UUID) TO anon;