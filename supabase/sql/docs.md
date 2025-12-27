# RexPo SQL Schema

## Directory Structure
sql/
├── function/
│   ├── update_at.sql
│   ├── refresh-all-mvs.sql
│   └── pg-cron-schedule.sql
├── table/
│   ├── venues.sql
│   ├── organizations.sql
│   ├── tags.sql
│   ├── slots.sql
│   ├── performers.sql
│   ├── categories.sql
│   ├── foods.sql
│   ├── events.sql
│   ├── features.sql
│   ├── banners.sql
│   └── news.sql
├── middle/
│   ├── events-performers.sql
│   ├── events-slots.sql
│   ├── events-tags.sql
│   ├── events-venues.sql
│   ├── tags-categories.sql
│   └── venues-organizations.sql
├── mv/
│   ├── mv-category-tree.sql
│   ├── mv-event-details.sql
│   └── mv-venue-timeline.sql
├── rpc/
│   ├── get-banners.sql
│   ├── get-display-venue.sql
│   ├── get-event-details.sql
│   ├── get-events-by-tag.sql
│   ├── get-events-by-venue.sql
│   ├── get-features.sql
│   ├── get-news.sql
│   ├── get-several-events-by-tag.sql
│   ├── get-tag-and-events-by-category.sql
│   └── get-venue-details.sql
├── docs.md
└── seed-test.sql

## Setup Commands
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
  supabase/sql/rpc/get-categories.sql `
  | Set-Content supabase/migrations/20251227043328_init_schema.sql

### 4. Prepare seed data
Copy-Item supabase/sql/seed-test.sql supabase/seed.sql

### 5. DB reset (migrate & seed)
npx supabase db reset

### 6. Refresh Materialized Views (手動)
SELECT refresh_all_mvs();

### 7. pg_cron定期更新（本番環境のみ）
-- function/pg-cron-schedule.sql を参照

## File Summary
| Category | Files | Description |
|----------|-------|-------------|
| **function** | 3 | MV更新関数、pg_cron設定、updated_atトリガー |
| **table** | 11 | メインテーブル |
| **middle** | 6 | 中間テーブル（多対多） |
| **mv** | 3 | Materialized Views（重い結合のみ） |
| **rpc** | 10 | クライアント向けAPI関数 |

## Materialized Views
| MV名 | 用途 |
|------|------|
| `mv_event_details` | イベント詳細（4中間テーブル結合） |
| `mv_category_tree` | カテゴリ→タグ→イベントの3階層ネスト |
| `mv_venue_timeline` | 会場別タイムライン |

## RPC Functions
| 関数名 | 戻り値 | 説明 |
|--------|--------|------|
| `get_banners()` | JSONB | バナー一覧 |
| `get_display_venue()` | JSONB | 表示対象会場一覧（is_primary=true） |
| `get_event_details(event_public_id)` | JSONB | イベント詳細 |
| `get_events_by_tag(tag_public_id)` | JSONB | タグ別イベント一覧 |
| `get_events_by_venue(venue_public_id)` | JSONB | 会場別タイムライン |
| `get_features()` | JSONB | 特集一覧 |
| `get_news()` | JSONB | ニュース一覧 |
| `get_several_events_by_tag()` | JSONB | 全タグ+イベント（各4件まで） |
| `get_tag_and_events_by_category(category_public_id)` | JSONB | カテゴリ別タグ+イベント |
| `get_venue_details(venue_public_id)` | JSONB | 会場詳細 |