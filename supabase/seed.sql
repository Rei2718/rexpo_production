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
    
    temp_id BIGINT;
    temp_count INTEGER;
    random_idx INTEGER;
    
    arr_cat_names TEXT[] := ARRAY['テクノロジー', 'アート', '音楽', 'ビジネス', 'フード', 'ライフスタイル'];
    arr_tag_names TEXT[] := ARRAY[
        'AI', 'Web開発', 'VR/AR',
        '絵画', '彫刻', 'デジタルアート',
        'ロック', 'ジャズ', 'クラシック',
        'スタートアップ', 'マーケティング', '投資',
        'スイーツ', 'オーガニック', 'ワイン',
        '健康', '旅行', 'ファッション'
    ];
    
    arr_event_titles_1 TEXT[] := ARRAY['未来の', '革新的', '究極の', 'みんなの', '春の', '大', '世界'];
    arr_event_titles_2 TEXT[] := ARRAY['技術', '芸術', '音楽', '食', '交流', '開発'];
    arr_event_titles_3 TEXT[] := ARRAY['フェスティバル', 'サミット', 'カンファレンス', '展', '博覧会', 'ミーティング'];
    
    arr_org_names TEXT[] := ARRAY['株式会社テックイノベーション', '一般社団法人アート振興会', 'Global Music Lab', 'Future Food Project', 'Next Gen Creators'];
    arr_venue_primary TEXT[] := ARRAY['メインホール', 'グランドステージ', '展示ホールA', '展示ホールB', '国際会議場', '野外アリーナ', 'サウスウィング', 'ノースウィング', 'センターコート', 'スカイホール'];
    arr_venue_others TEXT[] := ARRAY['第1会議室', '第2会議室', '休憩スペースA', '休憩スペースB', 'フードコート', 'キッチンカーエリア', '東側トイレ前', '西側エントランス', 'VIPラウンジ', 'ロッカールーム'];
    
    arr_performer_last TEXT[] := ARRAY['佐藤', '鈴木', '高橋', '田中', '伊藤', '渡辺', '山本', '中村', '小林', '加藤'];
    arr_performer_first TEXT[] := ARRAY['太郎', '次郎', '花子', '健太', '美咲', '翔', 'さくら', '大輔', '優', '直人'];
    arr_food_names TEXT[] := ARRAY['オーガニックカフェ', 'ステーキハウス', 'ラーメン横丁', 'イタリアンボッカ', '寿司処', 'バーガーキングダム'];

BEGIN
    -- categories (6件)
    FOR i IN 1..6 LOOP
        INSERT INTO public.categories (name, caption, icon, display_order)
        VALUES (
            arr_cat_names[i],
            arr_cat_names[i] || 'に関する最新情報が集まります。',
            '/categories/' || i || '.jpg',
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
                'これは' || arr_tag_names[(i - 1) * 3 + j] || 'に関するタグです。',
                (i - 1) * 3 + j
            ) RETURNING tag_id INTO temp_id;
            
            v_tag_ids := array_append(v_tag_ids, temp_id);

            INSERT INTO public.tags_categories (tag_id, category_id, display_order)
            VALUES (temp_id, v_cat_ids[i], j);
        END LOOP;
    END LOOP;

    -- venues - primary (10件)
    FOR i IN 1..10 LOOP
        INSERT INTO public.venues (name, icon, capacity, floor, map_latitude, map_longitude, is_primary, display_order)
        VALUES (
            arr_venue_primary[i],
            'https://picsum.photos/512/512?random=venue_p' || i,
            500 + (i * 100),
            1 + (i % 2),
            35.6895 + (i * 0.001),
            139.6917 + (i * 0.001),
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
            'https://picsum.photos/512/512?random=venue_o' || i,
            10 + (i * 5),
            1,
            35.6895 - (i * 0.001),
            139.6917 - (i * 0.001),
            FALSE,
            10 + i
        ) RETURNING venue_id INTO temp_id;
        v_venue_ids := array_append(v_venue_ids, temp_id);
    END LOOP;

    -- organizations (20件)
    FOR i IN 1..20 LOOP
        INSERT INTO public.organizations (name, caption, icon, sponsor, description, header_image, images)
        VALUES (
            arr_org_names[((i - 1) % array_length(arr_org_names, 1)) + 1] || ' ' || i,
            '業界をリードする企業です。',
            'https://picsum.photos/512/512?random=org_icon' || i,
            CASE WHEN i % 3 = 0 THEN 'Gold Sponsor' ELSE NULL END,
            '私たちのミッションは、世界をより良くすることです。',
            'https://picsum.photos/1920/1920?random=org_head' || i,
            ARRAY['https://picsum.photos/1920/1080?random=org_img1_'||i, 'https://picsum.photos/1920/1080?random=org_img2_'||i]
        ) RETURNING organization_id INTO temp_id;
        v_org_ids := array_append(v_org_ids, temp_id);
    END LOOP;

    -- venues_organizations
    FOR i IN 1..array_length(v_venue_ids, 1) LOOP
        temp_count := 1 + floor(random() * 3)::int;
        FOR j IN 1..temp_count LOOP
            random_idx := 1 + floor(random() * array_length(v_org_ids, 1))::int;
            IF random_idx > array_length(v_org_ids, 1) THEN
                random_idx := array_length(v_org_ids, 1);
            END IF;
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
            '美味しい' || arr_food_names[i],
            arr_food_names[i] || 'では、厳選された食材を使用しています。',
            'https://picsum.photos/512/512?random=food' || i,
            5 + (i * 2),
            100 + (i * 50),
            '東京都渋谷区' || i || '-' || i,
            'https://example.com/food' || i,
            i
        );
    END LOOP;

    -- performers (50件)
    FOR i IN 1..50 LOOP
        INSERT INTO public.performers (name, affiliation, icon, display_order)
        VALUES (
            arr_performer_last[((i - 1) % 10) + 1] || ' ' || arr_performer_first[((i * 3 - 1) % 10) + 1],
            CASE WHEN i % 2 = 0 THEN 'フリーランス' ELSE '株式会社XX' END,
            'https://picsum.photos/512/512?random=perf' || i,
            i
        ) RETURNING performer_id INTO temp_id;
        v_perf_ids := array_append(v_perf_ids, temp_id);
    END LOOP;

    -- slots (5件)
    INSERT INTO public.slots (starts, ends, display_order) VALUES ('10:00', '11:00', 1) RETURNING slot_id INTO temp_id; v_slot_ids := array_append(v_slot_ids, temp_id);
    INSERT INTO public.slots (starts, ends, display_order) VALUES ('11:00', '12:00', 2) RETURNING slot_id INTO temp_id; v_slot_ids := array_append(v_slot_ids, temp_id);
    INSERT INTO public.slots (starts, ends, display_order) VALUES ('13:00', '14:00', 3) RETURNING slot_id INTO temp_id; v_slot_ids := array_append(v_slot_ids, temp_id);
    INSERT INTO public.slots (starts, ends, display_order) VALUES ('14:00', '15:00', 4) RETURNING slot_id INTO temp_id; v_slot_ids := array_append(v_slot_ids, temp_id);
    INSERT INTO public.slots (starts, ends, display_order) VALUES ('15:00', '16:00', 5) RETURNING slot_id INTO temp_id; v_slot_ids := array_append(v_slot_ids, temp_id);

    -- events (200件)
    FOR i IN 1..200 LOOP
        INSERT INTO public.events (
            name, caption, icon, description, header_image, images, 
            organization_id, display_order
        )
        VALUES (
            arr_event_titles_1[((i - 1) % 7) + 1] || arr_event_titles_2[((i - 1) % 6) + 1] || arr_event_titles_3[((i - 1) % 6) + 1] || ' Vol.' || i,
            '心躍る体験をあなたに。',
            'https://picsum.photos/512/512?random=ev_icon' || i,
            'このイベントでは、最先端の技術と芸術が融合した素晴らしい展示をご覧いただけます。ぜひご参加ください。',
            'https://picsum.photos/1920/1920?random=ev_head' || i,
            ARRAY[
                'https://picsum.photos/1920/1080?random=ev_img1_' || i, 
                'https://picsum.photos/1920/1080?random=ev_img2_' || i,
                'https://picsum.photos/1920/1080?random=ev_img3_' || i
            ],
            v_org_ids[((i - 1) % array_length(v_org_ids, 1)) + 1],
            i
        ) RETURNING event_id INTO v_event_id;

        -- events_venues
        INSERT INTO public.events_venues (event_id, venue_id, display_order)
        VALUES (v_event_id, v_venue_ids[((i - 1) % array_length(v_venue_ids, 1)) + 1], 1);

        -- events_slots
        INSERT INTO public.events_slots (event_id, slot_id, display_order)
        VALUES (v_event_id, v_slot_ids[((i - 1) % array_length(v_slot_ids, 1)) + 1], 1);

        -- events_tags (1~3個ランダム)
        temp_count := 1 + floor(random() * 3)::int;
        FOR j IN 1..temp_count LOOP
            random_idx := 1 + floor(random() * array_length(v_tag_ids, 1))::int;
            IF random_idx > array_length(v_tag_ids, 1) THEN
                random_idx := array_length(v_tag_ids, 1);
            END IF;
            INSERT INTO public.events_tags (event_id, tag_id, display_order)
            VALUES (v_event_id, v_tag_ids[random_idx], j)
            ON CONFLICT (event_id, tag_id) WHERE deleted_at IS NULL DO NOTHING;
        END LOOP;

        -- events_performers (1~10人ランダム)
        temp_count := 1 + floor(random() * 10)::int;
        FOR j IN 1..temp_count LOOP
            random_idx := 1 + floor(random() * array_length(v_perf_ids, 1))::int;
            IF random_idx > array_length(v_perf_ids, 1) THEN
                random_idx := array_length(v_perf_ids, 1);
            END IF;
            INSERT INTO public.events_performers (event_id, performer_id, display_order)
            VALUES (v_event_id, v_perf_ids[random_idx], j)
            ON CONFLICT (event_id, performer_id) WHERE deleted_at IS NULL DO NOTHING;
        END LOOP;
    END LOOP;

    -- features (5件)
    FOR i IN 1..5 LOOP
        INSERT INTO public.features (name, caption, note, image, display_order)
        VALUES (
            '特集: ' || arr_cat_names[i],
            '見逃せない注目ポイント',
            '詳細はこちらをご覧ください。',
            '/features/' || i || '.jpg',
            i
        );
    END LOOP;
    
    -- news (10件)
    FOR i IN 1..10 LOOP
        INSERT INTO public.news (name, caption, description, header_image, thumbnail, display_order)
        VALUES (
            'お知らせ ' || i,
            '重要なお知らせです。',
            'イベントの開催時間が変更になりました。ご注意ください。',
            'https://picsum.photos/1920/1920?random=news_h' || i,
            'https://picsum.photos/512/512?random=news_t' || i,
            i
        );
    END LOOP;

    -- banners (5件)
    FOR i IN 1..5 LOOP
        INSERT INTO public.banners (image, link, display_order)
        VALUES (
            'https://picsum.photos/1920/1080?random=ban' || i,
            'https://example.com',
            i
        );
    END LOOP;

END $$;