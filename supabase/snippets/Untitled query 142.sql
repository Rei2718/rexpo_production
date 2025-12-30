-- 既存のvenuesの座標を札幌中心に更新
DO $$
DECLARE
    v_venues RECORD;
    i INTEGER := 1;
BEGIN
    -- Primary venues (最初の5件)
    FOR v_venues IN 
        SELECT venue_id FROM public.venues WHERE is_primary = TRUE ORDER BY display_order
    LOOP
        UPDATE public.venues 
        SET map_latitude = 43.057149 + ((i - 3) * 0.00015),
            map_longitude = 141.388626 + ((i - 3) * 0.00015)
        WHERE venue_id = v_venues.venue_id;
        i := i + 1;
        IF i > 5 THEN EXIT; END IF;
    END LOOP;
    
    -- Other venues (残りの10件)
    i := 1;
    FOR v_venues IN 
        SELECT venue_id FROM public.venues WHERE is_primary = FALSE ORDER BY display_order
    LOOP
        UPDATE public.venues 
        SET map_latitude = 43.057149 + (cos(i * 0.628) * 0.0005),
            map_longitude = 141.388626 + (sin(i * 0.628) * 0.0005)
        WHERE venue_id = v_venues.venue_id;
        i := i + 1;
        IF i > 10 THEN EXIT; END IF;
    END LOOP;
END $$;