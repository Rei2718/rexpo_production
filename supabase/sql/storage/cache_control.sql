UPDATE storage.objects
SET metadata = jsonb_set(COALESCE(metadata, '{}'::jsonb), '{cacheControl}', '"public, max-age=31536000"')
WHERE bucket_id IN ('banners', 'features', 'categories', 'organizations', 'venues', 'foods', 'performers', 'events', 'news');
