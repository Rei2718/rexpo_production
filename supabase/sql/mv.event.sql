--------------------------------------------------------------------------------
-- MV Event Detailes
--------------------------------------------------------------------------------
DROP MATERIALIZED VIEW IF EXISTS public.mv_event_details CASCADE;
CREATE MATERIALIZED VIEW public.mv_event_details AS

WITH event_tags AS (
  SELECT
    etm.event_id,
    array_agg(et.name ORDER BY et.name) AS tags
  FROM public.event_tag_mapping AS etm
  JOIN public.event_tag AS et ON etm.event_tag_id = et.event_tag_id
  GROUP BY etm.event_id
),

event_performers AS (
  SELECT
    ep.event_id,
    jsonb_agg(
      jsonb_build_object(
        'id', p.id,
        'name', p.name,
        'avatar_url', p.avatar_url,
        'position', p.position
      ) ORDER BY ep.display_order ASC
    ) AS performers
  FROM public.event_performer AS ep
  JOIN public.performer AS p ON ep.performer_id = p.performer_id
  GROUP BY ep.event_id
),

event_times AS (
  SELECT
    et.event_id,
    MIN(et.start_time) AS main_start_time,
    jsonb_agg(
      jsonb_build_object(
        'id', et.id,
        'start', et.start_time,
        'end', et.end_time
      ) ORDER BY et.start_time ASC
    ) AS times
  FROM public.event_time AS et
  GROUP BY et.event_id
)

SELECT
  -- Event (e)
  e.event_id,
  e.id AS event_public_id,
  e.title,
  e.overview_description,
  e.description,
  e.logo_url,
  e.cover_image_url,
  e.gallery_image_url_1,
  e.gallery_image_url_2,
  e.gallery_image_url_3,
  e.display_order AS event_display_order,

  -- Organization (o)
  o.id AS organization_public_id,
  o.name AS organization_name,
  
  -- Venue (v)
  v.id AS venue_public_id,
  v.name AS venue_name,
  v.map_latitude,
  v.map_longitude,
  v.google_place_id,

  -- Event Times (et)
  et.main_start_time,
  COALESCE(et.times, '[]'::jsonb) AS times,

  -- Event Performers (ep)
  COALESCE(ep.performers, '[]'::jsonb) AS performers,

  -- Event Tags (eg)
  COALESCE(eg.tags, '{}'::text[]) AS tags

FROM
  public.event AS e
LEFT JOIN public.organization AS o ON e.organization_id = o.organization_id
LEFT JOIN public.venue AS v ON e.venue_id = v.venue_id
LEFT JOIN event_times AS et ON e.event_id = et.event_id
LEFT JOIN event_performers AS ep ON e.event_id = ep.event_id
LEFT JOIN event_tags AS eg ON e.event_id = eg.event_id;

REVOKE ALL ON public.mv_event_details FROM public, anon, authenticated;

--------------------------------------------------------------------------------
-- Index
--------------------------------------------------------------------------------
CREATE UNIQUE INDEX mv_event_details_pkey
ON public.mv_event_details (event_id);

CREATE INDEX mv_event_details_tags_gin_idx
ON public.mv_event_details USING GIN (tags);

CREATE INDEX mv_event_details_performers_gin_idx
ON public.mv_event_details USING GIN (performers jsonb_path_ops);

CREATE INDEX mv_event_details_main_start_time_idx
ON public.mv_event_details (main_start_time);

CREATE INDEX mv_event_details_event_display_order_idx
ON public.mv_event_details (event_display_order);

CREATE INDEX mv_event_details_org_id_idx
ON public.mv_event_details (organization_public_id);

CREATE INDEX mv_event_details_venue_id_idx
ON public.mv_event_details (venue_public_id);

--------------------------------------------------------------------------------
-- REFRESH
--------------------------------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS pg_cron;
SELECT cron.schedule(
  'refresh-mv-event-details',
  '0 3 * * *',
  $$
  REFRESH MATERIALIZED VIEW CONCURRENTLY public.mv_event_details;
  $$
);