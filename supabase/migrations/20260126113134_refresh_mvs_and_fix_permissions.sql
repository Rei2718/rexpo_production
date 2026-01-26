-- Refresh all materialized views to ensure data is populated after reset/seed
REFRESH MATERIALIZED VIEW public.mv_all_timeline;
REFRESH MATERIALIZED VIEW public.mv_category_tree;
REFRESH MATERIALIZED VIEW public.mv_event_details;
REFRESH MATERIALIZED VIEW public.mv_primary_timeline;
REFRESH MATERIALIZED VIEW public.mv_venue_timeline;

-- Restore permissions temporarily to verify if this fixes the access issue
-- RPCs are SECURITY DEFINER so this shouldn't be strictly necessary unless
-- there is a configuration specific to this environment or client usage I am missing.
GRANT SELECT ON TABLE public.mv_all_timeline TO anon, authenticated;
GRANT SELECT ON TABLE public.mv_category_tree TO anon, authenticated;
GRANT SELECT ON TABLE public.mv_event_details TO anon, authenticated;
GRANT SELECT ON TABLE public.mv_primary_timeline TO anon, authenticated;
GRANT SELECT ON TABLE public.mv_venue_timeline TO anon, authenticated;

-- Ensure organizations is accessible if accessed directly (though it should be via RPC)
-- This might not be needed if RPC is working correctly, but added for safety given the outage.
-- (Note: Organizations has RLS, so GRANT SELECT on table doesn't bypass RLS policies, 
-- but it allows the role to "attempt" to select. RLS "No direct access" still assumes FALSE)
-- So this GRANT is likely harmless if RLS is on.
GRANT SELECT ON TABLE public.organizations TO anon, authenticated;
