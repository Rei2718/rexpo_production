-- Revoke SELECT permissions on Materialized Views from anon and authenticated roles
REVOKE SELECT ON TABLE public.mv_all_timeline FROM anon, authenticated;
REVOKE SELECT ON TABLE public.mv_category_tree FROM anon, authenticated;
REVOKE SELECT ON TABLE public.mv_event_details FROM anon, authenticated;
REVOKE SELECT ON TABLE public.mv_primary_timeline FROM anon, authenticated;
REVOKE SELECT ON TABLE public.mv_venue_timeline FROM anon, authenticated;

-- Ensure service_role still has access (implicit superuser usually, but good to be explicit if grants were manipulated)
GRANT SELECT ON TABLE public.mv_all_timeline TO service_role;
GRANT SELECT ON TABLE public.mv_category_tree TO service_role;
GRANT SELECT ON TABLE public.mv_event_details TO service_role;
GRANT SELECT ON TABLE public.mv_primary_timeline TO service_role;
GRANT SELECT ON TABLE public.mv_venue_timeline TO service_role;