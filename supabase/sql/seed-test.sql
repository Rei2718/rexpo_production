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
    arr_cat_names TEXT[] := ARRAY['テクノロジー', 'Art & Design', '音楽 (Music)', 'Business', 'フード/食', 'Lifestyle'];
    arr_tag_names TEXT[] := ARRAY[
        'AI/ML', 'Web development', 'XR (VR/AR)', -- Tech
        '油絵', 'Media Art', 'Sculpture', -- Art
        'Rock', 'Jazz Session', 'Classic', -- Music
        'Startup', 'Marketing', 'VC/Investment', -- Business
        'Sweets', 'Organic Food', 'Craft Beer', -- Food
        'Yoga/Health', 'Travel', 'Fashion' -- Lifestyle
    ];
    
    arr_event_titles_1 TEXT[] := ARRAY['未来の', 'Innovative', '究極の', 'Official', '春の', 'Great', 'Global'];
    arr_event_titles_2 TEXT[] := ARRAY['Tech', 'Art', 'Sound', 'Gourmet', 'Network', 'Dev'];
    arr_event_titles_3 TEXT[] := ARRAY['Festival', 'Summit', 'Conference', 'Exhibition', 'Fair', 'Meetup'];
    
    arr_org_names TEXT[] := ARRAY['Tech Innovation Inc.', '一般社団法人アート振興会', 'Global Music Lab', 'Future Food Project', 'Next Gen Creators'];
    arr_venue_primary TEXT[] := ARRAY['Main Hall', 'Grand Stage', 'Exhibition Hall A', 'International Conference Room', 'Outdoor Arena'];
    arr_venue_others TEXT[] := ARRAY['Room 101', 'Room 102', 'Lounge A', 'Lounge B', 'Food Court', 'Kitchen Car Area', 'Restroom East', 'Entrance West', 'VIP Lounge', 'Locker Room'];
    
    arr_performer_last TEXT[] := ARRAY['佐藤 (Sato)', 'Smith', '高橋', 'Johnson', '伊藤', 'Williams', '山本', 'Brown', '小林', 'Miller'];
    arr_performer_first TEXT[] := ARRAY['Taro', 'John', 'Hanako', 'David', 'Misaki', 'Michael', 'Sakura', 'Chris', 'Yu', 'Sarah'];
    arr_food_names TEXT[] := ARRAY['Organic Cafe', 'Steak House 29', 'Sapporo Ramen', 'Bocca Italian', 'Sushi Dokoro', 'Burger King'];

    v_curr_time TIME := '10:00:00';
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
                CASE WHEN (random() < 0.3) THEN NULL ELSE 'About ' || arr_tag_names[(i - 1) * 3 + j] END,
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
            CASE WHEN (random() < 0.2) THEN NULL ELSE 'Leading the industry.' END,
            CASE WHEN (random() < 0.1) THEN NULL ELSE 'https://picsum.photos/512/512?random=org_icon' || i END,
            CASE 
                WHEN (random() < 0.7) THEN NULL 
                WHEN (random() < 0.9) THEN 'Gold Sponsor'
                ELSE 'Silver Sponsor'
            END,
            CASE WHEN (random() < 0.4) THEN NULL ELSE 'Our mission is to innovate the world with technology and passion.' END,
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
            'Delicious ' || arr_food_names[i],
            CASE WHEN (random() < 0.3) THEN NULL ELSE 'Fresh ingredients used.' END,
            'https://picsum.photos/512/512?random=food' || i,
            5 + (i * 2),
            100 + (i * 50),
            CASE WHEN (random() < 0.2) THEN NULL ELSE 'Shibuya, Tokyo ' || i END,
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
                WHEN (random() < 0.6) THEN 'Freelance' 
                ELSE 'Company XX' 
            END,
            CASE WHEN (random() < 0.1) THEN NULL ELSE 'https://picsum.photos/512/512?random=perf' || i END,
            i
        ) RETURNING performer_id INTO temp_id;
        v_perf_ids := array_append(v_perf_ids, temp_id);
    END LOOP;

    -- EVENTS & SLOTS GENERATION
    -- 10:00 to 18:00 (Every 10 minutes)
    WHILE v_curr_time <= '18:00:00'::TIME LOOP
        
        -- Create Slot
        INSERT INTO public.slots (starts, ends, display_order)
        VALUES (
            v_curr_time,
            v_curr_time + interval '10 minutes',
            v_slot_display_order
        ) RETURNING slot_id INTO temp_id;
        
        -- Generate 0 to 4 events for this slot (occasionally empty slots)
        -- 10% chance of empty slot
        IF random() < 0.1 THEN
            v_events_in_slot := 0;
        ELSE
            v_events_in_slot := 1 + floor(random() * 4)::int;
        END IF;
        
        -- Prepare valid primary venue indices (1..5)
        v_venue_indices := ARRAY[1, 2, 3, 4, 5];
        
        -- Shuffle valid indices
        FOR k IN 1..5 LOOP
            v_rand_pos := 1 + floor(random() * 5)::int;
            v_swap_tmp := v_venue_indices[k];
            v_venue_indices[k] := v_venue_indices[v_rand_pos];
            v_venue_indices[v_rand_pos] := v_swap_tmp;
        END LOOP;
        
        -- Create events
        FOR k IN 1..v_events_in_slot LOOP
            v_event_global_count := v_event_global_count + 1;
            v_target_venue_idx := v_venue_indices[k]; -- Pick from shuffled
            
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
                
                CASE WHEN (random() < 0.2) THEN NULL ELSE 'Exciting experience.' END,
                CASE WHEN (random() < 0.1) THEN NULL ELSE 'https://picsum.photos/512/512?random=ev_icon' || v_event_global_count END,
                CASE WHEN (random() < 0.4) THEN NULL ELSE 'Cutting edge technology meets art. Don''t miss it!' END,
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
                
                -- Random Organization (sometimes NULL if allowed, though logic usually expects one. Let's make 10% NULL)
                CASE WHEN (random() < 0.1) THEN NULL ELSE v_org_ids[((v_event_global_count - 1) % array_length(v_org_ids, 1)) + 1] END,
                v_event_global_count
            ) RETURNING event_id INTO v_event_id;

            -- events_venues (Primary Venue, always present for now, or maybe 5% NULL?)
            IF random() > 0.05 THEN
               INSERT INTO public.events_venues (event_id, venue_id, display_order)
               VALUES (v_event_id, v_venue_ids[v_target_venue_idx], 1);
            END IF;

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
        v_curr_time := v_curr_time + interval '10 minutes';
    END LOOP;

    -- features (2~5 items)
    FOR i IN 1..(2 + floor(random() * 4)::int) LOOP
        INSERT INTO public.features (name, caption, note, image, display_order)
        VALUES (
            'Feature: ' || arr_cat_names[i],
            CASE WHEN (random() < 0.3) THEN NULL ELSE 'Must see point' END,
            CASE WHEN (random() < 0.5) THEN NULL ELSE 'Check details.' END,
            '/features/' || i || '.jpg',
            i
        );
    END LOOP;
    
    -- news (5~15 items)
    FOR i IN 1..(5 + floor(random() * 11)::int) LOOP
        INSERT INTO public.news (name, caption, description, header_image, thumbnail, display_order)
        VALUES (
            'News ' || i,
            CASE WHEN (random() < 0.2) THEN NULL ELSE 'Important notice' END,
            CASE WHEN (random() < 0.4) THEN NULL ELSE 'Details about news ' || i END,
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