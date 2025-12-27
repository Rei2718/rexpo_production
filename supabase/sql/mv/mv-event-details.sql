-- mv_event_details
DROP MATERIALIZED VIEW IF EXISTS public.mv_event_details;

CREATE MATERIALIZED VIEW public.mv_event_details AS
WITH 
cte_venues AS (
    SELECT 
        ev.event_id,
        jsonb_agg(
            jsonb_build_object(
                'venue_public_id', v.venue_public_id,
                'name',            v.name,
                'display_order',   ev.display_order
            ) ORDER BY ev.display_order DESC, v.venue_id
        ) AS data
    FROM public.events_venues ev
    JOIN public.venues v ON ev.venue_id = v.venue_id
    WHERE ev.deleted_at IS NULL AND v.deleted_at IS NULL
    GROUP BY ev.event_id
),
cte_tags AS (
    SELECT 
        et.event_id,
        jsonb_agg(
            jsonb_build_object(
                'tag_public_id', t.tag_public_id,
                'name',          t.name,
                'display_order', et.display_order
            ) ORDER BY et.display_order DESC, t.tag_id
        ) AS data
    FROM public.events_tags et
    JOIN public.tags t ON et.tag_id = t.tag_id
    WHERE et.deleted_at IS NULL AND t.deleted_at IS NULL
    GROUP BY et.event_id
),
cte_slots AS (
    SELECT 
        es.event_id,
        jsonb_agg(
            jsonb_build_object(
                'slot_public_id', s.slot_public_id,
                'starts',         to_char(s.starts, 'HH24:MI'),
                'ends',           to_char(s.ends, 'HH24:MI'),
                'display_order',  es.display_order
            ) ORDER BY es.display_order DESC, s.slot_id
        ) AS data
    FROM public.events_slots es
    JOIN public.slots s ON es.slot_id = s.slot_id
    WHERE es.deleted_at IS NULL AND s.deleted_at IS NULL
    GROUP BY es.event_id
),
cte_performers AS (
    SELECT 
        ep.event_id,
        jsonb_agg(
            jsonb_build_object(
                'performer_public_id', p.performer_public_id,
                'name',                p.name,
                'affiliation',         p.affiliation,
                'icon',                p.icon,
                'display_order',       ep.display_order
            ) ORDER BY ep.display_order DESC, p.performer_id
        ) AS data
    FROM public.events_performers ep
    JOIN public.performers p ON ep.performer_id = p.performer_id
    WHERE ep.deleted_at IS NULL AND p.deleted_at IS NULL
    GROUP BY ep.event_id
)

SELECT
    e.event_public_id,
    e.header_image,
    e.icon,
    e.name,
    e.caption,
    e.description,
    e.images,
    
    jsonb_build_object(
        'organization_public_id', o.organization_public_id,
        'name',                   o.name,
        'caption',                o.caption,
        'icon',                   o.icon,
        'sponsor',                o.sponsor
    ) AS organization,

    COALESCE(v.data, '[]'::jsonb) AS venues,
    COALESCE(t.data, '[]'::jsonb) AS tags,
    COALESCE(s.data, '[]'::jsonb) AS slots,
    COALESCE(p.data, '[]'::jsonb) AS performers,

    e.display_order

FROM public.events e
LEFT JOIN public.organizations o ON e.organization_id = o.organization_id
LEFT JOIN cte_venues v ON e.event_id = v.event_id
LEFT JOIN cte_tags t ON e.event_id = t.event_id
LEFT JOIN cte_slots s ON e.event_id = s.event_id
LEFT JOIN cte_performers p ON e.event_id = p.event_id

WHERE e.deleted_at IS NULL;

-- indexes
CREATE UNIQUE INDEX idx_mv_event_details_public_id ON public.mv_event_details(event_public_id);
CREATE INDEX idx_mv_event_details_display_order ON public.mv_event_details(display_order DESC);
CREATE INDEX idx_mv_event_details_tags ON public.mv_event_details USING GIN (tags);

-- security
REVOKE ALL ON public.mv_event_details FROM public, anon, authenticated;