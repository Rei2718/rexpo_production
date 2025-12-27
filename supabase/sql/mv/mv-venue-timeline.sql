-- mv_venue_timeline
DROP MATERIALIZED VIEW IF EXISTS public.mv_venue_timeline CASCADE;

CREATE MATERIALIZED VIEW public.mv_venue_timeline AS
WITH cte_timeline AS (
    SELECT
        ev.venue_id,
        s.starts,
        jsonb_agg(
            jsonb_build_object(
                'event_public_id', e.event_public_id,
                'name',            e.name,
                'caption',         e.caption,
                'icon',            e.icon,
                'venue_name',      v.name,
                'starts',          to_char(s.starts, 'HH24:MI'),
                'ends',            to_char(s.ends, 'HH24:MI'),
                'display_order',   e.display_order
            ) ORDER BY e.display_order DESC, e.event_id
        ) AS events
    FROM public.events e
    JOIN public.events_venues ev ON e.event_id = ev.event_id AND ev.deleted_at IS NULL
    JOIN public.venues v ON ev.venue_id = v.venue_id AND v.deleted_at IS NULL
    JOIN public.events_slots es ON e.event_id = es.event_id AND es.deleted_at IS NULL
    JOIN public.slots s ON es.slot_id = s.slot_id AND s.deleted_at IS NULL
    WHERE e.deleted_at IS NULL
    GROUP BY ev.venue_id, s.starts, v.name
)

SELECT
    v.venue_public_id,
    v.name,
    v.icon,
    COALESCE(
        jsonb_agg(
            jsonb_build_object(
                'starts', to_char(t.starts, 'HH24:MI'),
                'events', t.events
            ) ORDER BY t.starts ASC
        ) FILTER (WHERE t.starts IS NOT NULL),
        '[]'::jsonb
    ) AS timeline

FROM public.venues v
LEFT JOIN cte_timeline t ON v.venue_id = t.venue_id
WHERE v.deleted_at IS NULL
GROUP BY v.venue_id, v.venue_public_id, v.name, v.icon;

-- indexes
CREATE UNIQUE INDEX idx_mv_venue_timeline_public_id ON public.mv_venue_timeline(venue_public_id);

-- security
REVOKE ALL ON public.mv_venue_timeline FROM public, anon, authenticated;