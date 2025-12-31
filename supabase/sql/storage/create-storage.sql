-- storage buckets
INSERT INTO storage.buckets (id, name, public)
VALUES 
    ('categories', 'categories', true),
    ('features', 'features', true)
ON CONFLICT (id) DO NOTHING;

-- storage policies
DROP POLICY IF EXISTS "Public Access Multi" ON storage.objects;

CREATE POLICY "Public Access Multi"
ON storage.objects FOR SELECT
USING ( bucket_id IN ('categories', 'features') );