## REXPO SQL Schema

### 1. Reset local DB
npx supabase stop --no-backup
npx supabase start

### 2. Create migration file
npx supabase migration new init_schema

### 3. Combine SQL files
Get-Content `
  supabase/sql/function/update_at.sql, `
  supabase/sql/table/venues.sql, `
  supabase/sql/table/organizations.sql, `
  supabase/sql/table/tags.sql, `
  supabase/sql/table/slots.sql, `
  supabase/sql/table/performers.sql, `
  supabase/sql/table/categories.sql, `
  supabase/sql/table/foods.sql, `
  supabase/sql/table/events.sql, `
  supabase/sql/table/features.sql, `
  supabase/sql/table/banners.sql, `
  supabase/sql/table/news.sql, `
  supabase/sql/middle/events-performers.sql, `
  supabase/sql/middle/events-slots.sql, `
  supabase/sql/middle/events-tags.sql, `
  supabase/sql/middle/events-venues.sql, `
  supabase/sql/middle/tags-categories.sql, `
  supabase/sql/middle/venues-organizations.sql, `
  supabase/sql/mv/mv-category-tree.sql, `
  supabase/sql/mv/mv-event-details.sql, `
  supabase/sql/mv/mv-venue-timeline.sql, `
  supabase/sql/function/refresh-all-mvs.sql, `
  supabase/sql/rpc/get-banners.sql, `
  supabase/sql/rpc/get-display-venue.sql, `
  supabase/sql/rpc/get-event-details.sql, `
  supabase/sql/rpc/get-events-by-tag.sql, `
  supabase/sql/rpc/get-events-by-venue.sql, `
  supabase/sql/rpc/get-features.sql, `
  supabase/sql/rpc/get-news.sql, `
  supabase/sql/rpc/get-several-events-by-tag.sql, `
  supabase/sql/rpc/get-tag-and-events-by-category.sql, `
  supabase/sql/rpc/get-venue-details.sql, `
  supabase/sql/rpc/get-all-venues.sql, `
  supabase/sql/rpc/get-categories.sql, `
  supabase/sql/storage/create-storage.sql `
  | Set-Content supabase/migrations/20251231042430_init_schema.sql

### 4. Prepare seed data
Copy-Item supabase/seed-test.sql supabase/seed.sql

### 5. DB reset (migrate & seed)
npx supabase db reset

### 6. Upload Storage Assets (New Step)
# Upload images from supabase/seed-assets/ to storage buckets
npx -y tsx supabase/sql/scripts/seed-storage.ts

### 7. Refresh Materialized Views
SELECT refresh_all_mvs();