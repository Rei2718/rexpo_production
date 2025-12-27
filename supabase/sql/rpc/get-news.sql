-- get_news

CREATE OR REPLACE FUNCTION get_news()
RETURNS JSONB
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'news_public_id', n.news_public_id,
                    'name',           n.name,
                    'caption',        n.caption,
                    'description',    n.description,
                    'header_image',   n.header_image,
                    'thumbnail',      n.thumbnail,
                    'website',        n.website,
                    'performer',      CASE 
                        WHEN p.performer_id IS NOT NULL THEN
                            jsonb_build_object(
                                'performer_public_id', p.performer_public_id,
                                'name',                p.name,
                                'affiliation',         p.affiliation,
                                'icon',                p.icon
                            )
                        ELSE NULL
                    END,
                    'display_order',  n.display_order
                ) ORDER BY n.display_order DESC, n.created_at DESC
            )
            FROM public.news n
            LEFT JOIN public.performers p ON n.performer_id = p.performer_id AND p.deleted_at IS NULL
            WHERE n.deleted_at IS NULL
        ),
        '[]'::jsonb
    );
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION public.get_news() TO anon;