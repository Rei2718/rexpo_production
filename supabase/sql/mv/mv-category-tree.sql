-- mv_category_tree
DROP MATERIALIZED VIEW IF EXISTS public.mv_category_tree CASCADE;

CREATE MATERIALIZED VIEW public.mv_category_tree AS
WITH cte_tag_events AS (
    SELECT
        t.tag_id,
        t.tag_public_id,
        t.name,
        t.caption,
        COALESCE(
            jsonb_agg(
                jsonb_build_object(
                    'event_public_id', e.event_public_id,
                    'name',            e.name,
                    'caption',         e.caption,
                    'icon',            e.icon,
                    'display_order',   e.display_order
                ) ORDER BY e.display_order DESC, e.event_id
            ) FILTER (WHERE e.event_id IS NOT NULL),
            '[]'::jsonb
        ) AS events
    FROM public.tags t
    LEFT JOIN public.events_tags et ON t.tag_id = et.tag_id AND et.deleted_at IS NULL
    LEFT JOIN public.events e ON et.event_id = e.event_id AND e.deleted_at IS NULL
    WHERE t.deleted_at IS NULL
    GROUP BY t.tag_id, t.tag_public_id, t.name, t.caption
)

SELECT
    c.category_public_id,
    c.name,
    c.caption,
    c.icon,
    c.display_order AS category_display_order,
    COALESCE(
        jsonb_agg(
            jsonb_build_object(
                'tag_public_id', te.tag_public_id,
                'name',          te.name,
                'caption',       te.caption,
                'events',        te.events,
                'display_order', tc.display_order
            ) ORDER BY tc.display_order DESC, te.tag_id
        ) FILTER (WHERE te.tag_id IS NOT NULL),
        '[]'::jsonb
    ) AS tags

FROM public.categories c
LEFT JOIN public.tags_categories tc ON c.category_id = tc.category_id AND tc.deleted_at IS NULL
LEFT JOIN cte_tag_events te ON tc.tag_id = te.tag_id
WHERE c.deleted_at IS NULL
GROUP BY c.category_id, c.category_public_id, c.name, c.caption, c.icon, c.display_order;

-- indexes
CREATE UNIQUE INDEX idx_mv_category_tree_public_id ON public.mv_category_tree(category_public_id);
CREATE INDEX idx_mv_category_tree_display_order ON public.mv_category_tree(category_display_order DESC);

-- security
REVOKE ALL ON public.mv_category_tree FROM public, anon, authenticated;
