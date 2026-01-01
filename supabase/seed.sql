-- seed-test.sql

TRUNCATE TABLE 
    public.events_tags,
    public.tags_categories,
    public.events_performers,
    public.events_venues,
    public.events_slots,
    public.venues_organizations,
    public.features,
    public.news,
    public.banners,
    public.events,
    public.foods,
    public.slots,
    public.performers,
    public.organizations,
    public.venues,
    public.tags,
    public.categories
RESTART IDENTITY CASCADE;

DO $$
DECLARE
    v_cat_ids BIGINT[];
    v_tag_ids BIGINT[];
    v_venue_ids BIGINT[];
    v_org_ids BIGINT[];
    v_perf_ids BIGINT[];
    v_slot_ids BIGINT[];
    v_event_id BIGINT;
    
    i INTEGER;
    j INTEGER;
    k INTEGER;
    
    temp_id BIGINT;
    temp_count INTEGER;
    random_idx INTEGER;
    
    -- Data Arrays
    arr_cat_names TEXT[] := ARRAY['テクノロジー', 'アート＆デザイン', '音楽', 'ビジネス', 'フード・食', 'ライフスタイル'];
    arr_tag_names TEXT[] := ARRAY[
        'AI/機械学習', 'Web開発', 'XR (VR/AR)', -- Tech
        '油絵', 'メディアアート', '彫刻', -- Art
        'ロック', 'ジャズセッション', 'クラシック', -- Music
        'スタートアップ', 'マーケティング', '投資/VC', -- Business
        'スイーツ', 'オーガニック', 'クラフトビール', -- Food
        'ヨガ', '旅行', 'ファッション' -- Lifestyle
    ];
    
    arr_event_titles_1 TEXT[] := ARRAY['未来の', '革新的な', '究極の', '公式', '春の', '素晴らしい', 'グローバル'];
    arr_event_titles_2 TEXT[] := ARRAY['テック', 'アート', 'サウンド', 'グルメ', 'ネットワーク', '開発'];
    arr_event_titles_3 TEXT[] := ARRAY['フェスティバル', 'サミット', 'カンファレンス', '展示会', 'フェア', 'ミートアップ'];
    
    arr_org_names TEXT[] := ARRAY['株式会社テックイノベーション', '一般社団法人アート振興会', 'グローバルミュージックラボ', '未来食プロジェクト', 'ネクストジェネレーション'];
    arr_venue_primary TEXT[] := ARRAY['メインホール', 'グランドステージ', '展示ホールA', '国際会議室', '屋外アリーナ'];
    arr_venue_others TEXT[] := ARRAY['101号室', '102号室', 'ラウンジA', 'ラウンジB', 'フードコート', 'キッチンカーエリア', '東トイレ前', '西エントランス', 'VIPラウンジ', 'ロッカー室'];
    
    arr_performer_last TEXT[] := ARRAY['佐藤', '鈴木', '高橋', '田中', '伊藤', '渡辺', '山本', '中村', '小林', '加藤'];
    arr_performer_first TEXT[] := ARRAY['太郎', '次郎', '花子', '美咲', '健太', 'さくら', '大輔', '結衣', '翔太', '陽菜'];
    arr_food_names TEXT[] := ARRAY['オーガニックカフェ', 'ステーキハウス29', '札幌ラーメン', 'ボッカ・イタリアン', '寿司処', 'バーガーキング'];

    v_curr_time TIME := '00:00:00';
    v_slot_display_order INTEGER := 1;
    v_event_global_count INTEGER := 0;
    v_events_in_slot INTEGER;
    v_venue_indices INTEGER[];
    v_rand_pos INTEGER;
    v_swap_tmp INTEGER;
    v_target_venue_idx INTEGER;

    -- Helper variables for randomness
    v_random_val FLOAT;

BEGIN
    -- categories (6件)
    FOR i IN 1..6 LOOP
        INSERT INTO public.categories (name, caption, icon, display_order)
        VALUES (
            arr_cat_names[i],
            CASE WHEN (random() < 0.2) THEN NULL ELSE arr_cat_names[i] || 'に関する最新情報が集まります。' END,
            CASE WHEN (random() < 0.1) THEN NULL ELSE '/categories/' || i || '.png' END,
            i
        ) RETURNING category_id INTO temp_id;
        v_cat_ids := array_append(v_cat_ids, temp_id);
    END LOOP;

    -- tags (18件: 各カテゴリに3つずつ)
    FOR i IN 1..6 LOOP
        FOR j IN 1..3 LOOP
            INSERT INTO public.tags (name, caption, display_order)
            VALUES (
                arr_tag_names[(i - 1) * 3 + j],
                CASE WHEN (random() < 0.3) THEN NULL ELSE arr_tag_names[(i - 1) * 3 + j] || 'について' END,
                (i - 1) * 3 + j
            ) RETURNING tag_id INTO temp_id;
            
            v_tag_ids := array_append(v_tag_ids, temp_id);

            INSERT INTO public.tags_categories (tag_id, category_id, display_order)
            VALUES (temp_id, v_cat_ids[i], j);
        END LOOP;
    END LOOP;

    -- venues - primary (5件)
    -- 札幌中心座標: 43.057149, 141.388626
    FOR i IN 1..5 LOOP
        INSERT INTO public.venues (name, icon, capacity, floor, map_latitude, map_longitude, is_primary, display_order)
        VALUES (
            arr_venue_primary[i],
            CASE WHEN (random() < 0.1) THEN NULL ELSE 'https://picsum.photos/512/512?random=venue_p' || i END,
            CASE WHEN (random() < 0.2) THEN NULL ELSE 500 + (i * 100) END,
            CASE WHEN (random() < 0.2) THEN NULL ELSE 1 + (i % 2) END,
            43.057149 + ((i - 3) * 0.00015),
            141.388626 + ((i - 3) * 0.00015),
            TRUE,
            i
        ) RETURNING venue_id INTO temp_id;
        v_venue_ids := array_append(v_venue_ids, temp_id);
    END LOOP;

    -- venues - others (10件)
    FOR i IN 1..10 LOOP
        INSERT INTO public.venues (name, icon, capacity, floor, map_latitude, map_longitude, is_primary, display_order)
        VALUES (
            arr_venue_others[i],
            CASE WHEN (random() < 0.3) THEN NULL ELSE 'https://picsum.photos/512/512?random=venue_o' || i END,
            CASE WHEN (random() < 0.5) THEN NULL ELSE 10 + (i * 5) END,
            CASE WHEN (random() < 0.5) THEN NULL ELSE 1 + (i % 2) END,
            43.057149 + (cos(i * 0.628) * 0.0005),
            141.388626 + (sin(i * 0.628) * 0.0005),
            FALSE,
            5 + i
        ) RETURNING venue_id INTO temp_id;
        v_venue_ids := array_append(v_venue_ids, temp_id);
    END LOOP;

    -- organizations (20件)
    FOR i IN 1..20 LOOP
        INSERT INTO public.organizations (name, caption, icon, sponsor, description, header_image, images)
        VALUES (
            arr_org_names[((i - 1) % array_length(arr_org_names, 1)) + 1] || ' ' || i,
            CASE WHEN (random() < 0.2) THEN NULL ELSE '業界をリードする企業です。' END,
            CASE WHEN (random() < 0.1) THEN NULL ELSE 'https://picsum.photos/512/512?random=org_icon' || i END,
            CASE 
                WHEN (random() < 0.7) THEN NULL 
                WHEN (random() < 0.9) THEN 'ゴールドスポンサー'
                ELSE 'シルバースポンサー'
            END,
            CASE WHEN (random() < 0.4) THEN NULL ELSE '私たちのミッションは技術と情熱で世界を変えることです。' END,
            CASE WHEN (random() < 0.3) THEN NULL ELSE 'https://picsum.photos/1920/1920?random=org_head' || i END,
            CASE 
                WHEN (random() < 0.3) THEN NULL 
                WHEN (random() < 0.6) THEN ARRAY['https://picsum.photos/1920/1080?random=org_img1_'||i]
                ELSE ARRAY['https://picsum.photos/1920/1080?random=org_img1_'||i, 'https://picsum.photos/1920/1080?random=org_img2_'||i]
            END
        ) RETURNING organization_id INTO temp_id;
        v_org_ids := array_append(v_org_ids, temp_id);
    END LOOP;

    -- venues_organizations
    FOR i IN 1..array_length(v_venue_ids, 1) LOOP
        -- Randomly 0 to 3 organizations per venue
        temp_count := floor(random() * 4)::int;
        FOR j IN 1..temp_count LOOP
            random_idx := 1 + floor(random() * array_length(v_org_ids, 1))::int;
            IF random_idx > array_length(v_org_ids, 1) THEN random_idx := array_length(v_org_ids, 1); END IF;
            
            INSERT INTO public.venues_organizations (venue_id, organization_id, display_order)
            VALUES (v_venue_ids[i], v_org_ids[random_idx], j)
            ON CONFLICT (venue_id, organization_id) WHERE deleted_at IS NULL DO NOTHING;
        END LOOP;
    END LOOP;

    -- foods (6件)
    FOR i IN 1..6 LOOP
        INSERT INTO public.foods (name, caption, description, icon, minutes, distance, address, website, display_order)
        VALUES (
            arr_food_names[i],
            '美味しい ' || arr_food_names[i],
            CASE WHEN (random() < 0.3) THEN NULL ELSE '新鮮な食材を使用しています。' END,
            'https://picsum.photos/512/512?random=food' || i,
            5 + (i * 2),
            100 + (i * 50),
            CASE WHEN (random() < 0.2) THEN NULL ELSE '東京都渋谷区 ' || i END,
            CASE WHEN (random() < 0.5) THEN NULL ELSE 'https://example.com/food' || i END,
            i
        );
    END LOOP;

    -- performers (50件)
    FOR i IN 1..50 LOOP
        INSERT INTO public.performers (name, affiliation, icon, display_order)
        VALUES (
            arr_performer_last[((i - 1) % 10) + 1] || ' ' || arr_performer_first[((i * 3 - 1) % 10) + 1],
            CASE 
                WHEN (random() < 0.3) THEN NULL 
                WHEN (random() < 0.6) THEN 'フリーランス' 
                ELSE '株式会社XX' 
            END,
            CASE WHEN (random() < 0.1) THEN NULL ELSE 'https://picsum.photos/512/512?random=perf' || i END,
            i
        ) RETURNING performer_id INTO temp_id;
        v_perf_ids := array_append(v_perf_ids, temp_id);
    END LOOP;

    -- EVENTS & SLOTS GENERATION (24 Hours Coverage)
    -- Loop from 00:00:00 to 23:50:00 (144 slots)
    
    FOR i IN 0..143 LOOP
        -- Calculate current time based on index * 10 minutes
        v_curr_time := make_time(0, 0, 0) + (i * interval '10 minutes');

        -- Create Slot
        INSERT INTO public.slots (starts, ends, display_order)
        VALUES (
            v_curr_time,
            v_curr_time + interval '10 minutes',
            v_slot_display_order
        ) RETURNING slot_id INTO temp_id;
        
        -- Generate events for this slot
        -- 10% chance: 0 events (Empty)
        -- 60% chance: 1-2 events (Sparse)
        -- 30% chance: 3-5 events (Dense - as requested)
        
        v_random_val := random();
        IF v_random_val < 0.1 THEN
            v_events_in_slot := 0;
        ELSIF v_random_val < 0.7 THEN
            v_events_in_slot := 1 + floor(random() * 2)::int; -- 1 to 2
        ELSE
            v_events_in_slot := 3 + floor(random() * 3)::int; -- 3 to 5
        END IF;
        
        -- Prepare valid primary venue indices (1..5)
        v_venue_indices := ARRAY[1, 2, 3, 4, 5];
        
        -- Shuffle valid indices (so we distribute events to different venues if possible, or repeat same venue if dense?
        -- User said "Same time slot, 4-5 events".
        -- Usually in one venue? Or across venues?
        -- "Events grouped by venue" is the view logic usually.
        -- If I put 5 events in *one* slot (Global), they might be distributed across venues.
        -- TimelinePreview scans a *specific* venue.
        -- So for a *specific venue* to have 4-5 events at once, we need to assign multiple events to the *same venue* in the *same slot*.
        -- My logic below assigns venue randomly.
        -- To ensure density *per venue*, I should perhaps just pick venues randomly with replacement.
        
        FOR k IN 1..v_events_in_slot LOOP
            v_event_global_count := v_event_global_count + 1;
            
            -- Pick a random venue (1..5 main + 1..10 sub? Just main logic used mostly)
            -- Let's stick to v_venue_ids logic.
            v_target_venue_idx := 1 + floor(random() * 5)::int; -- Pick one of the primary venues randomly
            
            INSERT INTO public.events (
                name, caption, icon, description, header_image, images, 
                organization_id, display_order
            )
            VALUES (
                -- Random mix of titles
                arr_event_titles_1[((v_event_global_count - 1) % 7) + 1] || 
                ' ' || arr_event_titles_2[((v_event_global_count - 1) % 6) + 1] || 
                ' ' || arr_event_titles_3[((v_event_global_count - 1) % 6) + 1] || 
                ' Vol.' || v_event_global_count,
                
                CASE WHEN (random() < 0.2) THEN NULL ELSE 'ワクワクする体験。' END,
                CASE WHEN (random() < 0.1) THEN NULL ELSE 'https://picsum.photos/512/512?random=ev_icon' || v_event_global_count END,
                CASE WHEN (random() < 0.4) THEN NULL ELSE '最新技術とアートの融合。お見逃しなく！' END,
                CASE WHEN (random() < 0.2) THEN NULL ELSE 'https://picsum.photos/1920/1920?random=ev_head' || v_event_global_count END,
                
                -- Random images array (NULL, Empty, or populated)
                CASE 
                    WHEN (random() < 0.2) THEN NULL 
                    WHEN (random() < 0.3) THEN ARRAY[]::text[] 
                    ELSE ARRAY[
                        'https://picsum.photos/1920/1080?random=ev_img1_' || v_event_global_count, 
                        'https://picsum.photos/1920/1080?random=ev_img2_' || v_event_global_count
                    ]
                END,
                
                -- Random Organization
                CASE WHEN (random() < 0.1) THEN NULL ELSE v_org_ids[((v_event_global_count - 1) % array_length(v_org_ids, 1)) + 1] END,
                v_event_global_count
            ) RETURNING event_id INTO v_event_id;

            -- events_venues (Primary Venue - always assign to ensure density)
            INSERT INTO public.events_venues (event_id, venue_id, display_order)
            VALUES (v_event_id, v_venue_ids[v_target_venue_idx], 1);

            -- events_slots (Current Slot)
            INSERT INTO public.events_slots (event_id, slot_id, display_order)
            VALUES (v_event_id, temp_id, 1);

            -- events_tags (0~3 items)
            temp_count := floor(random() * 4)::int;
            FOR j IN 1..temp_count LOOP
                random_idx := 1 + floor(random() * array_length(v_tag_ids, 1))::int;
                IF random_idx > array_length(v_tag_ids, 1) THEN random_idx := 1; END IF;
                
                INSERT INTO public.events_tags (event_id, tag_id, display_order)
                VALUES (v_event_id, v_tag_ids[random_idx], j)
                ON CONFLICT (event_id, tag_id) WHERE deleted_at IS NULL DO NOTHING;
            END LOOP;

            -- events_performers (0~5 items)
            temp_count := floor(random() * 6)::int;
            FOR j IN 1..temp_count LOOP
                random_idx := 1 + floor(random() * array_length(v_perf_ids, 1))::int;
                IF random_idx > array_length(v_perf_ids, 1) THEN random_idx := 1; END IF;

                INSERT INTO public.events_performers (event_id, performer_id, display_order)
                VALUES (v_event_id, v_perf_ids[random_idx], j)
                ON CONFLICT (event_id, performer_id) WHERE deleted_at IS NULL DO NOTHING;
            END LOOP;
        END LOOP;
        
        v_slot_display_order := v_slot_display_order + 1;
    END LOOP;

    -- features (2~5 items)
    FOR i IN 1..(2 + floor(random() * 4)::int) LOOP
        INSERT INTO public.features (name, caption, note, image, display_order)
        VALUES (
            '特集: ' || arr_cat_names[i],
            CASE WHEN (random() < 0.3) THEN NULL ELSE '必見ポイント' END,
            CASE WHEN (random() < 0.5) THEN NULL ELSE '詳細をチェック。' END,
            '/features/' || i || '.jpg',
            i
        );
    END LOOP;
    
    -- news (5~15 items)
    FOR i IN 1..(5 + floor(random() * 11)::int) LOOP
        INSERT INTO public.news (name, caption, description, header_image, thumbnail, display_order)
        VALUES (
            'ニュース ' || i,
            CASE WHEN (random() < 0.2) THEN NULL ELSE '重要なお知らせ' END,
            CASE WHEN (random() < 0.4) THEN NULL ELSE 'ニュース ' || i || ' に関する詳細情報です。' END,
            CASE WHEN (random() < 0.3) THEN NULL ELSE 'https://picsum.photos/1920/1920?random=news_h' || i END,
            CASE WHEN (random() < 0.2) THEN NULL ELSE 'https://picsum.photos/512/512?random=news_t' || i END,
            i
        );
    END LOOP;

    -- banners (3~8 items)
    FOR i IN 1..(3 + floor(random() * 6)::int) LOOP
        INSERT INTO public.banners (image, link, display_order)
        VALUES (
            'https://picsum.photos/1920/1080?random=ban' || i,
            CASE WHEN (random() < 0.1) THEN NULL ELSE 'https://example.com' END,
            i
        );
    END LOOP;

END $$;