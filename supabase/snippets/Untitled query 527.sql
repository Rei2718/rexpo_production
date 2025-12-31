-- fix storage policies
DROP POLICY IF EXISTS "Public Access Multi" ON storage.objects;

-- categories
DROP POLICY IF EXISTS "Public Access Categories" ON storage.objects;
CREATE POLICY "Public Access Categories" ON storage.objects FOR SELECT USING ( bucket_id = 'categories' );

-- features
DROP POLICY IF EXISTS "Public Access Features" ON storage.objects;
CREATE POLICY "Public Access Features" ON storage.objects FOR SELECT USING ( bucket_id = 'features' );

-- venues
DROP POLICY IF EXISTS "Public Access Venues" ON storage.objects;
CREATE POLICY "Public Access Venues" ON storage.objects FOR SELECT USING ( bucket_id = 'venues' );

-- organizations
DROP POLICY IF EXISTS "Public Access Organizations" ON storage.objects;
CREATE POLICY "Public Access Organizations" ON storage.objects FOR SELECT USING ( bucket_id = 'organizations' );

-- foods
DROP POLICY IF EXISTS "Public Access Foods" ON storage.objects;
CREATE POLICY "Public Access Foods" ON storage.objects FOR SELECT USING ( bucket_id = 'foods' );

-- performers
DROP POLICY IF EXISTS "Public Access Performers" ON storage.objects;
CREATE POLICY "Public Access Performers" ON storage.objects FOR SELECT USING ( bucket_id = 'performers' );

-- events
DROP POLICY IF EXISTS "Public Access Events" ON storage.objects;
CREATE POLICY "Public Access Events" ON storage.objects FOR SELECT USING ( bucket_id = 'events' );

-- news
DROP POLICY IF EXISTS "Public Access News" ON storage.objects;
CREATE POLICY "Public Access News" ON storage.objects FOR SELECT USING ( bucket_id = 'news' );

-- banners
DROP POLICY IF EXISTS "Public Access Banners" ON storage.objects;
CREATE POLICY "Public Access Banners" ON storage.objects FOR SELECT USING ( bucket_id = 'banners' );