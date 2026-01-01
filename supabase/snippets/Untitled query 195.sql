-- 新しい運用系カラムを追加（既存データには自動でデフォルト値が入ります）
ALTER TABLE public.venues 
    ADD COLUMN IF NOT EXISTS operational_status TEXT DEFAULT '準備中',
    ADD COLUMN IF NOT EXISTS congestion_status TEXT DEFAULT '余裕あり',
    ADD COLUMN IF NOT EXISTS entry_type TEXT DEFAULT '自由入場';

-- 既存のデータに対してもデフォルト値を強制適用する場合（念のため）
UPDATE public.venues SET operational_status = '準備中' WHERE operational_status IS NULL;
UPDATE public.venues SET congestion_status = '余裕あり' WHERE congestion_status IS NULL;
UPDATE public.venues SET entry_type = '自由入場' WHERE entry_type IS NULL;

-- 制約の追加
ALTER TABLE public.venues ADD CONSTRAINT check_operational_status 
    CHECK (operational_status IN ('公開中', '準備中', '終了'));

ALTER TABLE public.venues ADD CONSTRAINT check_congestion_status 
    CHECK (congestion_status IN ('余裕あり', 'やや混雑', '混雑', '制限中'));

ALTER TABLE public.venues ADD CONSTRAINT check_entry_type 
    CHECK (entry_type IN ('自由入場', '整理券配布', '予約制'));

-- セキュリティ有効化
ALTER TABLE public.venues ENABLE ROW LEVEL SECURITY;

-- 既存の古いポリシーがあれば削除（名前が違う場合は適宜変更してください）
DROP POLICY IF EXISTS "No direct access" ON public.venues;

-- 新しい「RPC経由のみ」のポリシーを適用
CREATE POLICY "No direct access" ON public.venues FOR ALL USING (false);

-- 権限の剥奪
REVOKE ALL ON public.venues FROM public;