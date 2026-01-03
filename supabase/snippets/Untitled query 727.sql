-- mv_primary_timeline
DROP MATERIALIZED VIEW IF EXISTS public.mv_primary_timeline CASCADE;

CREATE MATERIALIZED VIEW public.mv_primary_timeline AS
SELECT
    s.starts,
    s.ends,
    count(e.event_id) as event_count,
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
        ) ORDER BY v.display_order DESC, e.display_order DESC
    ) AS events
FROM public.events e
JOIN public.events_venues ev ON e.event_id = ev.event_id AND ev.deleted_at IS NULL
JOIN public.venues v ON ev.venue_id = v.venue_id AND v.deleted_at IS NULL
JOIN public.events_slots es ON e.event_id = es.event_id AND es.deleted_at IS NULL
JOIN public.slots s ON es.slot_id = s.slot_id AND s.deleted_at IS NULL
WHERE e.deleted_at IS NULL
AND v.is_primary = TRUE
GROUP BY s.starts, s.ends
ORDER BY s.starts ASC;

-- indexes
CREATE UNIQUE INDEX idx_mv_primary_timeline_starts ON public.mv_primary_timeline(starts);

-- security
REVOKE ALL ON public.mv_primary_timeline FROM public, anon, authenticated;