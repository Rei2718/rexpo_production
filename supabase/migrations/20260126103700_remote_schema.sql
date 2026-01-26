


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE EXTENSION IF NOT EXISTS "pg_cron" WITH SCHEMA "pg_catalog";






COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";






CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";






CREATE TYPE "public"."congestion_status_type" AS ENUM (
    '余裕あり',
    'やや混雑',
    '混雑',
    '制限中'
);


ALTER TYPE "public"."congestion_status_type" OWNER TO "postgres";


CREATE TYPE "public"."entry_type" AS ENUM (
    '自由入場',
    '整理券配布',
    '予約制'
);


ALTER TYPE "public"."entry_type" OWNER TO "postgres";


CREATE TYPE "public"."operational_status_type" AS ENUM (
    '公開中',
    '準備中',
    '終了'
);


ALTER TYPE "public"."operational_status_type" OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_all_timeline"() RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT
                jsonb_agg(
                    jsonb_build_object(
                        'starts', to_char(mv.starts, 'HH24:MI'),
                        'events', mv.events
                    ) ORDER BY mv.starts ASC
                )
            FROM public.mv_all_timeline mv
        ),
        '[]'::jsonb
    );
END;
$$;


ALTER FUNCTION "public"."get_all_timeline"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_all_venues"() RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'venue_public_id', v.venue_public_id,
                    'name',            v.name,
                    'icon',            v.icon,
                    'capacity',        v.capacity,
                    'floor',           v.floor,
                    'map_latitude',    v.map_latitude,
                    'map_longitude',   v.map_longitude,
                    'display_order',   v.display_order
                ) ORDER BY v.display_order DESC, v.venue_id
            )
            FROM public.venues v
            WHERE v.deleted_at IS NULL
            AND v.venue_public_id IS NOT NULL
        ),
        '[]'::jsonb
    );
END;
$$;


ALTER FUNCTION "public"."get_all_venues"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_banners"() RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'banner_public_id', b.banner_public_id,
                    'image',            b.image,
                    'link',             b.link,
                    'event_public_id',  e.event_public_id,
                    'display_order',    b.display_order
                ) ORDER BY b.display_order DESC, b.banner_id
            )
            FROM public.banners b
            LEFT JOIN public.events e ON b.event_id = e.event_id AND e.deleted_at IS NULL
            WHERE b.deleted_at IS NULL
            AND b.banner_public_id IS NOT NULL
        ),
        '[]'::jsonb
    );
END;
$$;


ALTER FUNCTION "public"."get_banners"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_categories"() RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'category_public_id', b.category_public_id,
                    'name',            b.name,
                    'icon',             b.icon,
                    'display_order',    b.display_order
                ) ORDER BY b.display_order DESC, b.category_id
            )
            FROM public.categories b
            WHERE b.deleted_at IS NULL
            AND b.category_public_id IS NOT NULL
        ),
        '[]'::jsonb
    );
END;
$$;


ALTER FUNCTION "public"."get_categories"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_display_venue"() RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'venue_public_id', v.venue_public_id,
                    'name',            v.name,
                    'icon',            v.icon,
                    'capacity',        v.capacity,
                    'floor',           v.floor,
                    'map_latitude',    v.map_latitude,
                    'map_longitude',   v.map_longitude,
                    'display_order',   v.display_order
                ) ORDER BY v.display_order DESC, v.venue_id
            )
            FROM public.venues v
            WHERE v.is_primary = TRUE
            AND v.deleted_at IS NULL
            AND v.venue_public_id IS NOT NULL
        ),
        '[]'::jsonb
    );
END;
$$;


ALTER FUNCTION "public"."get_display_venue"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_event_details"("event_public_id" "uuid" DEFAULT NULL::"uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
DECLARE
    result JSONB;
BEGIN
    IF event_public_id IS NULL THEN
        RETURN NULL;
    END IF;

    SELECT row_to_json(mv)
    INTO result
    FROM public.mv_event_details mv
    WHERE mv.event_public_id = get_event_details.event_public_id;

    RETURN result;
END;
$$;


ALTER FUNCTION "public"."get_event_details"("event_public_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_events_by_ids"("event_public_ids" "text"[]) RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
DECLARE
    result JSONB;
BEGIN
    SELECT COALESCE(
        jsonb_agg(
            jsonb_build_object(
                'event_public_id', e.event_public_id,
                'name',            e.name,
                'caption',         e.caption,
                'icon',            e.icon,
                'venue_name',      v.name,
                'starts',          to_char(s.starts, 'HH24:MI'),
                'ends',            to_char(s.ends, 'HH24:MI'),
                'display_order',   e.display_order
            ) ORDER BY s.starts ASC
        ),
        '[]'::jsonb
    )
    INTO result
    FROM public.events e
    JOIN public.events_venues ev ON e.event_id = ev.event_id AND ev.deleted_at IS NULL
    JOIN public.venues v ON ev.venue_id = v.venue_id AND v.deleted_at IS NULL
    JOIN public.events_slots es ON e.event_id = es.event_id AND es.deleted_at IS NULL
    JOIN public.slots s ON es.slot_id = s.slot_id AND s.deleted_at IS NULL
    WHERE e.event_public_id = ANY(event_public_ids::uuid[])
    AND e.deleted_at IS NULL
    AND e.event_public_id IS NOT NULL;

    RETURN result;
END;
$$;


ALTER FUNCTION "public"."get_events_by_ids"("event_public_ids" "text"[]) OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_events_by_tag"("tag_public_id" "uuid" DEFAULT NULL::"uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    IF tag_public_id IS NULL THEN
        RETURN '[]'::jsonb;
    END IF;

    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'event_public_id', e.event_public_id,
                    'name',            e.name,
                    'caption',         e.caption,
                    'icon',            e.icon,
                    'display_order',   e.display_order
                ) ORDER BY e.display_order DESC, e.event_id
            )
            FROM public.tags t
            JOIN public.events_tags et ON t.tag_id = et.tag_id AND et.deleted_at IS NULL
            JOIN public.events e ON et.event_id = e.event_id AND e.deleted_at IS NULL
            WHERE t.tag_public_id = get_events_by_tag.tag_public_id
            AND t.deleted_at IS NULL
            AND e.event_public_id IS NOT NULL
        ),
        '[]'::jsonb
    );
END;
$$;


ALTER FUNCTION "public"."get_events_by_tag"("tag_public_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_events_by_venue"("venue_public_id" "uuid" DEFAULT NULL::"uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    IF venue_public_id IS NULL THEN
        RETURN '[]'::jsonb;
    END IF;

    RETURN COALESCE(
        (
            SELECT mv.timeline
            FROM public.mv_venue_timeline mv
            WHERE mv.venue_public_id = get_events_by_venue.venue_public_id
        ),
        '[]'::jsonb
    );
END;
$$;


ALTER FUNCTION "public"."get_events_by_venue"("venue_public_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_features"() RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'feature_public_id', f.feature_public_id,
                    'name',              f.name,
                    'caption',           f.caption,
                    'note',              f.note,
                    'image',             f.image,
                    'event_public_id',   e.event_public_id,
                    'display_order',     f.display_order
                ) ORDER BY f.display_order DESC, f.feature_id
            )
            FROM public.features f
            LEFT JOIN public.events e ON f.event_id = e.event_id AND e.deleted_at IS NULL
            WHERE f.deleted_at IS NULL
            AND f.feature_public_id IS NOT NULL
        ),
        '[]'::jsonb
    );
END;
$$;


ALTER FUNCTION "public"."get_features"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_foods"() RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'food_public_id', f.food_public_id,
                    'name',           f.name,
                    'description',    f.description,
                    'min_price',      f.min_price,
                    'max_price',      f.max_price,
                    'minutes',        f.minutes,
                    'distance',       f.distance,
                    'address',        f.address,
                    'website',        f.website,
                    'display_order',  f.display_order
                ) ORDER BY f.display_order DESC, f.created_at DESC
            )
            FROM public.foods f
            WHERE f.deleted_at IS NULL
            AND f.food_public_id IS NOT NULL
        ),
        '[]'::jsonb
    );
END;
$$;


ALTER FUNCTION "public"."get_foods"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_news"() RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'news_public_id', n.news_public_id,
                    'name',           n.name,
                    'caption',        n.caption,
                    'description',    n.description,
                    'header_image',   n.header_image,
                    'thumbnail',      n.thumbnail,
                    'website',        n.website,
                    'performer',      CASE 
                        WHEN p.performer_id IS NOT NULL AND p.performer_public_id IS NOT NULL THEN
                            jsonb_build_object(
                                'performer_public_id', p.performer_public_id,
                                'name',                p.name,
                                'affiliation',         p.affiliation,
                                'icon',                p.icon
                            )
                        ELSE NULL
                    END,
                    'display_order',  n.display_order
                ) ORDER BY n.display_order DESC, n.created_at DESC
            )
            FROM public.news n
            LEFT JOIN public.performers p ON n.performer_id = p.performer_id AND p.deleted_at IS NULL
            WHERE n.deleted_at IS NULL
            AND n.news_public_id IS NOT NULL
        ),
        '[]'::jsonb
    );
END;
$$;


ALTER FUNCTION "public"."get_news"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_organization_details"("organization_public_id" "uuid" DEFAULT NULL::"uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    IF organization_public_id IS NULL THEN
        RETURN NULL;
    END IF;

    RETURN (
        SELECT to_jsonb(o)
        FROM public.organizations o
        WHERE o.organization_public_id = get_organization_details.organization_public_id
        AND o.deleted_at IS NULL
    );
END;
$$;


ALTER FUNCTION "public"."get_organization_details"("organization_public_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_primary_timeline"() RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    RETURN COALESCE(
        (
            SELECT
                jsonb_agg(
                    jsonb_build_object(
                        'starts', to_char(mv.starts, 'HH24:MI'),
                        'events', mv.events
                    ) ORDER BY mv.starts ASC
                )
            FROM public.mv_primary_timeline mv
        ),
        '[]'::jsonb
    );
END;
$$;


ALTER FUNCTION "public"."get_primary_timeline"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_several_events_by_tag"() RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    RETURN COALESCE(
        (
            WITH cte_tag_events AS (
                SELECT
                    t.tag_id,
                    t.tag_public_id,
                    t.name,
                    t.caption,
                    t.display_order AS tag_display_order,
                    COALESCE(
                        jsonb_agg(
                            jsonb_build_object(
                                'event_public_id', e.event_public_id,
                                'name',            e.name,
                                'caption',         e.caption,
                                'icon',            e.icon,
                                'display_order',   e.display_order
                            ) ORDER BY e.display_order DESC, e.event_id
                        ) FILTER (WHERE e.event_id IS NOT NULL AND e.event_public_id IS NOT NULL),
                        '[]'::jsonb
                    ) AS events
                FROM public.tags t
                LEFT JOIN public.events_tags et ON t.tag_id = et.tag_id AND et.deleted_at IS NULL
                LEFT JOIN public.events e ON et.event_id = e.event_id AND e.deleted_at IS NULL
                WHERE t.deleted_at IS NULL
                AND t.tag_public_id IS NOT NULL
                GROUP BY t.tag_id, t.tag_public_id, t.name, t.caption, t.display_order
            )
            SELECT jsonb_agg(
                jsonb_build_object(
                    'tag_public_id', te.tag_public_id,
                    'name',          te.name,
                    'caption',       te.caption,
                    'events',        (
                        SELECT COALESCE(jsonb_agg(ev), '[]'::jsonb)
                        FROM (
                            SELECT ev
                            FROM jsonb_array_elements(te.events) AS ev
                            LIMIT 4
                        ) AS limited_events
                    ),
                    'display_order', te.tag_display_order
                ) ORDER BY te.tag_display_order DESC
            )
            FROM cte_tag_events te
        ),
        '[]'::jsonb
    );
END;
$$;


ALTER FUNCTION "public"."get_several_events_by_tag"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_tag_and_events_by_category"("category_public_id" "uuid" DEFAULT NULL::"uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
DECLARE
    _result JSONB;
BEGIN
    IF category_public_id IS NULL THEN
        RETURN '[]'::jsonb;
    END IF;

    SELECT jsonb_agg(tag_data) INTO _result
    FROM (
        SELECT
            t.tag_public_id,
            t.name,
            t.caption,
            tc.display_order AS display_order,
            COALESCE(
                (
                    SELECT jsonb_agg(event_item)
                    FROM (
                        SELECT jsonb_build_object(
                            'event_public_id', e.event_public_id,
                            'name', e.name,
                            'caption', e.caption,
                            'icon', e.icon,
                            'display_order', e.display_order
                        ) AS event_item
                        FROM public.events_tags et
                        JOIN public.events e ON et.event_id = e.event_id
                        WHERE et.tag_id = t.tag_id
                          AND et.deleted_at IS NULL
                          AND e.deleted_at IS NULL
                          AND e.event_public_id IS NOT NULL
                        ORDER BY e.display_order DESC, e.event_id
                        LIMIT 4
                    ) sub
                ),
                '[]'::jsonb
            ) AS events
        FROM public.categories c
        JOIN public.tags_categories tc ON c.category_id = tc.category_id
        JOIN public.tags t ON tc.tag_id = t.tag_id
        WHERE c.category_public_id = get_tag_and_events_by_category.category_public_id
          AND c.deleted_at IS NULL
          AND tc.deleted_at IS NULL
          AND t.deleted_at IS NULL
          AND t.tag_public_id IS NOT NULL
        ORDER BY tc.display_order DESC
    ) tag_data;

    RETURN COALESCE(_result, '[]'::jsonb);
END;
$$;


ALTER FUNCTION "public"."get_tag_and_events_by_category"("category_public_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_venue_details"("venue_public_id" "uuid" DEFAULT NULL::"uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
DECLARE
    result JSONB;
BEGIN
    IF venue_public_id IS NULL THEN
        RETURN NULL;
    END IF;

    WITH cte_organizations AS (
        SELECT 
            vo.venue_id,
            jsonb_agg(
                jsonb_build_object(
                    'organization_public_id', o.organization_public_id,
                    'name',                   o.name,
                    'caption',                o.caption,
                    'icon',                   o.icon,
                    'display_order',          vo.display_order
                ) ORDER BY vo.display_order DESC, o.organization_id
            ) AS data
        FROM public.venues_organizations vo
        JOIN public.organizations o ON vo.organization_id = o.organization_id

        WHERE vo.deleted_at IS NULL AND o.deleted_at IS NULL
        AND o.organization_public_id IS NOT NULL
        GROUP BY vo.venue_id
    )
    SELECT jsonb_build_object(
        'venue_public_id', v.venue_public_id,
        'name',            v.name,
        'icon',            v.icon,
        'map_latitude',    v.map_latitude,
        'map_longitude',   v.map_longitude,
        'is_primary',      v.is_primary,

        'operational_status', v.operational_status,
        'congestion_status',  v.congestion_status,
        'entry_type',         v.entry_type,

        'organizations',   COALESCE(o.data, '[]'::jsonb)
    )
    INTO result
    FROM public.venues v
    LEFT JOIN cte_organizations o ON v.venue_id = o.venue_id
    WHERE v.venue_public_id = get_venue_details.venue_public_id
    AND v.deleted_at IS NULL
    AND v.venue_public_id IS NOT NULL;

    RETURN result;
END;
$$;


ALTER FUNCTION "public"."get_venue_details"("venue_public_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."randomize_events_order"() RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  UPDATE public.events
  SET display_order = floor(random() * 99999 + 1)::int
  WHERE deleted_at IS NULL;
END;
$$;


ALTER FUNCTION "public"."randomize_events_order"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."randomize_events_tags_order"() RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  UPDATE public.events_tags
  SET display_order = floor(random() * 99999 + 1)::int
  WHERE deleted_at IS NULL;
END;
$$;


ALTER FUNCTION "public"."randomize_events_tags_order"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."refresh_all_mvs"() RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    -- 基礎MV（重い結合のみ維持）
    REFRESH MATERIALIZED VIEW CONCURRENTLY public.mv_event_details;

    -- 派生MV
    REFRESH MATERIALIZED VIEW CONCURRENTLY public.mv_venue_timeline;
    REFRESH MATERIALIZED VIEW CONCURRENTLY public.mv_category_tree;
    REFRESH MATERIALIZED VIEW CONCURRENTLY public.mv_primary_timeline;
END;
$$;


ALTER FUNCTION "public"."refresh_all_mvs"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."reset_events_tags_order"() RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  UPDATE public.events_tags
  SET display_order = 0
  WHERE deleted_at IS NULL;
END;
$$;


ALTER FUNCTION "public"."reset_events_tags_order"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_at"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'pg_temp'
    AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."update_at"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."banners" (
    "banner_id" bigint NOT NULL,
    "banner_public_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "image" "text" NOT NULL,
    "link" "text",
    "event_id" bigint,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."banners" OWNER TO "postgres";


ALTER TABLE "public"."banners" ALTER COLUMN "banner_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."banners_banner_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."categories" (
    "category_id" bigint NOT NULL,
    "category_public_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "name" "text" NOT NULL,
    "caption" "text",
    "icon" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."categories" OWNER TO "postgres";


ALTER TABLE "public"."categories" ALTER COLUMN "category_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."categories_category_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."events" (
    "event_id" bigint NOT NULL,
    "event_public_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "name" "text" NOT NULL,
    "caption" "text",
    "icon" "text",
    "description" "text",
    "header_image" "text",
    "images" "text"[] DEFAULT '{}'::"text"[],
    "organization_id" bigint,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."events" OWNER TO "postgres";


ALTER TABLE "public"."events" ALTER COLUMN "event_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."events_event_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."events_performers" (
    "event_performer_id" bigint NOT NULL,
    "event_id" bigint NOT NULL,
    "performer_id" bigint NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."events_performers" OWNER TO "postgres";


ALTER TABLE "public"."events_performers" ALTER COLUMN "event_performer_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."events_performers_event_performer_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."events_slots" (
    "event_slot_id" bigint NOT NULL,
    "event_id" bigint NOT NULL,
    "slot_id" bigint NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."events_slots" OWNER TO "postgres";


ALTER TABLE "public"."events_slots" ALTER COLUMN "event_slot_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."events_slots_event_slot_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."events_tags" (
    "event_tag_id" bigint NOT NULL,
    "event_id" bigint NOT NULL,
    "tag_id" bigint NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."events_tags" OWNER TO "postgres";


ALTER TABLE "public"."events_tags" ALTER COLUMN "event_tag_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."events_tags_event_tag_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."events_venues" (
    "event_venue_id" bigint NOT NULL,
    "event_id" bigint NOT NULL,
    "venue_id" bigint NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."events_venues" OWNER TO "postgres";


ALTER TABLE "public"."events_venues" ALTER COLUMN "event_venue_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."events_venues_event_venue_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."features" (
    "feature_id" bigint NOT NULL,
    "feature_public_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "name" "text" NOT NULL,
    "caption" "text",
    "note" "text",
    "image" "text",
    "event_id" bigint,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."features" OWNER TO "postgres";


ALTER TABLE "public"."features" ALTER COLUMN "feature_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."features_feature_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."foods" (
    "food_id" bigint NOT NULL,
    "food_public_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "name" "text" NOT NULL,
    "description" "text",
    "min_price" integer,
    "max_price" integer,
    "minutes" integer,
    "distance" integer,
    "address" "text",
    "website" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."foods" OWNER TO "postgres";


ALTER TABLE "public"."foods" ALTER COLUMN "food_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."foods_food_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."slots" (
    "slot_id" bigint NOT NULL,
    "slot_public_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "starts" time(0) without time zone NOT NULL,
    "ends" time(0) without time zone NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."slots" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."venues" (
    "venue_id" bigint NOT NULL,
    "venue_public_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "name" "text" NOT NULL,
    "icon" "text",
    "capacity" integer,
    "floor" integer,
    "map_latitude" double precision,
    "map_longitude" double precision,
    "is_primary" boolean DEFAULT false,
    "operational_status" "public"."operational_status_type" DEFAULT '準備中'::"public"."operational_status_type",
    "congestion_status" "public"."congestion_status_type" DEFAULT '余裕あり'::"public"."congestion_status_type",
    "entry_type" "public"."entry_type" DEFAULT '自由入場'::"public"."entry_type",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."venues" OWNER TO "postgres";


CREATE MATERIALIZED VIEW "public"."mv_all_timeline" AS
 SELECT "s"."starts",
    "count"("e"."event_id") AS "event_count",
    "jsonb_agg"("jsonb_build_object"('event_public_id', "e"."event_public_id", 'name', "e"."name", 'caption', "e"."caption", 'icon', "e"."icon", 'venue_name', "v"."name", 'starts', "to_char"(("s"."starts")::interval, 'HH24:MI'::"text"), 'ends', "to_char"(("s"."ends")::interval, 'HH24:MI'::"text"), 'display_order', "e"."display_order") ORDER BY "v"."display_order" DESC, "e"."display_order" DESC) AS "events"
   FROM (((("public"."events" "e"
     JOIN "public"."events_venues" "ev" ON ((("e"."event_id" = "ev"."event_id") AND ("ev"."deleted_at" IS NULL))))
     JOIN "public"."venues" "v" ON ((("ev"."venue_id" = "v"."venue_id") AND ("v"."deleted_at" IS NULL))))
     JOIN "public"."events_slots" "es" ON ((("e"."event_id" = "es"."event_id") AND ("es"."deleted_at" IS NULL))))
     JOIN "public"."slots" "s" ON ((("es"."slot_id" = "s"."slot_id") AND ("s"."deleted_at" IS NULL))))
  WHERE ("e"."deleted_at" IS NULL)
  GROUP BY "s"."starts"
  ORDER BY "s"."starts"
  WITH NO DATA;


ALTER MATERIALIZED VIEW "public"."mv_all_timeline" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tags" (
    "tag_id" bigint NOT NULL,
    "tag_public_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "name" "text" NOT NULL,
    "caption" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."tags" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tags_categories" (
    "tag_category_id" bigint NOT NULL,
    "tag_id" bigint NOT NULL,
    "category_id" bigint NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."tags_categories" OWNER TO "postgres";


CREATE MATERIALIZED VIEW "public"."mv_category_tree" AS
 WITH "cte_tag_events" AS (
         SELECT "t"."tag_id",
            "t"."tag_public_id",
            "t"."name",
            "t"."caption",
            COALESCE("jsonb_agg"("jsonb_build_object"('event_public_id', "e"."event_public_id", 'name', "e"."name", 'caption', "e"."caption", 'icon', "e"."icon", 'display_order', "e"."display_order") ORDER BY "e"."display_order" DESC, "e"."event_id") FILTER (WHERE (("e"."event_id" IS NOT NULL) AND ("e"."event_public_id" IS NOT NULL))), '[]'::"jsonb") AS "events"
           FROM (("public"."tags" "t"
             LEFT JOIN "public"."events_tags" "et" ON ((("t"."tag_id" = "et"."tag_id") AND ("et"."deleted_at" IS NULL))))
             LEFT JOIN "public"."events" "e" ON ((("et"."event_id" = "e"."event_id") AND ("e"."deleted_at" IS NULL))))
          WHERE ("t"."deleted_at" IS NULL)
          GROUP BY "t"."tag_id", "t"."tag_public_id", "t"."name", "t"."caption"
        )
 SELECT "c"."category_public_id",
    "c"."name",
    "c"."caption",
    "c"."icon",
    "c"."display_order" AS "category_display_order",
    COALESCE("jsonb_agg"("jsonb_build_object"('tag_public_id', "te"."tag_public_id", 'name', "te"."name", 'caption', "te"."caption", 'events', "te"."events", 'display_order', "tc"."display_order") ORDER BY "tc"."display_order" DESC, "te"."tag_id") FILTER (WHERE (("te"."tag_id" IS NOT NULL) AND ("te"."tag_public_id" IS NOT NULL))), '[]'::"jsonb") AS "tags"
   FROM (("public"."categories" "c"
     LEFT JOIN "public"."tags_categories" "tc" ON ((("c"."category_id" = "tc"."category_id") AND ("tc"."deleted_at" IS NULL))))
     LEFT JOIN "cte_tag_events" "te" ON (("tc"."tag_id" = "te"."tag_id")))
  WHERE (("c"."deleted_at" IS NULL) AND ("c"."category_public_id" IS NOT NULL))
  GROUP BY "c"."category_id", "c"."category_public_id", "c"."name", "c"."caption", "c"."icon", "c"."display_order"
  WITH NO DATA;


ALTER MATERIALIZED VIEW "public"."mv_category_tree" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."organizations" (
    "organization_id" bigint NOT NULL,
    "organization_public_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "name" "text" NOT NULL,
    "caption" "text",
    "icon" "text",
    "sponsor" "text",
    "description" "text",
    "header_image" "text",
    "images" "text"[] DEFAULT '{}'::"text"[],
    "website" "text",
    "instagram" "text",
    "linkedin" "text",
    "twitter" "text",
    "youtube" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."organizations" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."performers" (
    "performer_id" bigint NOT NULL,
    "performer_public_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "name" "text" NOT NULL,
    "affiliation" "text",
    "icon" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."performers" OWNER TO "postgres";


CREATE MATERIALIZED VIEW "public"."mv_event_details" AS
 WITH "cte_venues" AS (
         SELECT "ev"."event_id",
            "jsonb_agg"("jsonb_build_object"('venue_public_id', "v_1"."venue_public_id", 'name', "v_1"."name", 'display_order', "ev"."display_order") ORDER BY "ev"."display_order" DESC, "v_1"."venue_id") AS "data"
           FROM ("public"."events_venues" "ev"
             JOIN "public"."venues" "v_1" ON (("ev"."venue_id" = "v_1"."venue_id")))
          WHERE (("ev"."deleted_at" IS NULL) AND ("v_1"."deleted_at" IS NULL) AND ("v_1"."venue_public_id" IS NOT NULL))
          GROUP BY "ev"."event_id"
        ), "cte_tags" AS (
         SELECT "et"."event_id",
            "jsonb_agg"("jsonb_build_object"('tag_public_id', "t_1"."tag_public_id", 'name', "t_1"."name", 'display_order', "et"."display_order") ORDER BY "et"."display_order" DESC, "t_1"."tag_id") AS "data"
           FROM ("public"."events_tags" "et"
             JOIN "public"."tags" "t_1" ON (("et"."tag_id" = "t_1"."tag_id")))
          WHERE (("et"."deleted_at" IS NULL) AND ("t_1"."deleted_at" IS NULL) AND ("t_1"."tag_public_id" IS NOT NULL))
          GROUP BY "et"."event_id"
        ), "cte_slots" AS (
         SELECT "es"."event_id",
            "jsonb_agg"("jsonb_build_object"('slot_public_id', "s_1"."slot_public_id", 'starts', "to_char"(("s_1"."starts")::interval, 'HH24:MI'::"text"), 'ends', "to_char"(("s_1"."ends")::interval, 'HH24:MI'::"text"), 'display_order', "es"."display_order") ORDER BY "es"."display_order" DESC, "s_1"."slot_id") AS "data"
           FROM ("public"."events_slots" "es"
             JOIN "public"."slots" "s_1" ON (("es"."slot_id" = "s_1"."slot_id")))
          WHERE (("es"."deleted_at" IS NULL) AND ("s_1"."deleted_at" IS NULL) AND ("s_1"."slot_public_id" IS NOT NULL))
          GROUP BY "es"."event_id"
        ), "cte_performers" AS (
         SELECT "ep"."event_id",
            "jsonb_agg"("jsonb_build_object"('performer_public_id', "p_1"."performer_public_id", 'name', "p_1"."name", 'affiliation', "p_1"."affiliation", 'icon', "p_1"."icon", 'display_order', "ep"."display_order") ORDER BY "ep"."display_order" DESC, "p_1"."performer_id") AS "data"
           FROM ("public"."events_performers" "ep"
             JOIN "public"."performers" "p_1" ON (("ep"."performer_id" = "p_1"."performer_id")))
          WHERE (("ep"."deleted_at" IS NULL) AND ("p_1"."deleted_at" IS NULL) AND ("p_1"."performer_public_id" IS NOT NULL))
          GROUP BY "ep"."event_id"
        )
 SELECT "e"."event_public_id",
    "e"."header_image",
    "e"."icon",
    "e"."name",
    "e"."caption",
    "e"."description",
    COALESCE("e"."images", '{}'::"text"[]) AS "images",
        CASE
            WHEN (("o"."organization_id" IS NOT NULL) AND ("o"."organization_public_id" IS NOT NULL)) THEN "jsonb_build_object"('organization_public_id', "o"."organization_public_id", 'name', "o"."name", 'caption', "o"."caption", 'icon', "o"."icon", 'sponsor', "o"."sponsor")
            ELSE NULL::"jsonb"
        END AS "organization",
    COALESCE("v"."data", '[]'::"jsonb") AS "venues",
    COALESCE("t"."data", '[]'::"jsonb") AS "tags",
    COALESCE("s"."data", '[]'::"jsonb") AS "slots",
    COALESCE("p"."data", '[]'::"jsonb") AS "performers",
    "e"."display_order"
   FROM ((((("public"."events" "e"
     LEFT JOIN "public"."organizations" "o" ON (("e"."organization_id" = "o"."organization_id")))
     LEFT JOIN "cte_venues" "v" ON (("e"."event_id" = "v"."event_id")))
     LEFT JOIN "cte_tags" "t" ON (("e"."event_id" = "t"."event_id")))
     LEFT JOIN "cte_slots" "s" ON (("e"."event_id" = "s"."event_id")))
     LEFT JOIN "cte_performers" "p" ON (("e"."event_id" = "p"."event_id")))
  WHERE (("e"."deleted_at" IS NULL) AND ("e"."event_public_id" IS NOT NULL))
  WITH NO DATA;


ALTER MATERIALIZED VIEW "public"."mv_event_details" OWNER TO "postgres";


CREATE MATERIALIZED VIEW "public"."mv_primary_timeline" AS
 SELECT "s"."starts",
    "count"("e"."event_id") AS "event_count",
    "jsonb_agg"("jsonb_build_object"('event_public_id', "e"."event_public_id", 'name', "e"."name", 'caption', "e"."caption", 'icon', "e"."icon", 'venue_name', "v"."name", 'starts', "to_char"(("s"."starts")::interval, 'HH24:MI'::"text"), 'ends', "to_char"(("s"."ends")::interval, 'HH24:MI'::"text"), 'display_order', "e"."display_order") ORDER BY "v"."display_order" DESC, "e"."display_order" DESC) AS "events"
   FROM (((("public"."events" "e"
     JOIN "public"."events_venues" "ev" ON ((("e"."event_id" = "ev"."event_id") AND ("ev"."deleted_at" IS NULL))))
     JOIN "public"."venues" "v" ON ((("ev"."venue_id" = "v"."venue_id") AND ("v"."deleted_at" IS NULL))))
     JOIN "public"."events_slots" "es" ON ((("e"."event_id" = "es"."event_id") AND ("es"."deleted_at" IS NULL))))
     JOIN "public"."slots" "s" ON ((("es"."slot_id" = "s"."slot_id") AND ("s"."deleted_at" IS NULL))))
  WHERE (("e"."deleted_at" IS NULL) AND ("v"."is_primary" = true))
  GROUP BY "s"."starts"
  ORDER BY "s"."starts"
  WITH NO DATA;


ALTER MATERIALIZED VIEW "public"."mv_primary_timeline" OWNER TO "postgres";


CREATE MATERIALIZED VIEW "public"."mv_venue_timeline" AS
 WITH "cte_timeline" AS (
         SELECT "ev"."venue_id",
            "s"."starts",
            "s"."ends",
            "jsonb_agg"("jsonb_build_object"('event_public_id', "e"."event_public_id", 'name', "e"."name", 'caption', "e"."caption", 'icon', "e"."icon", 'venue_name', "v_1"."name", 'starts', "to_char"(("s"."starts")::interval, 'HH24:MI'::"text"), 'ends', "to_char"(("s"."ends")::interval, 'HH24:MI'::"text"), 'display_order', "e"."display_order") ORDER BY "e"."display_order" DESC, "e"."event_id") AS "events"
           FROM (((("public"."events" "e"
             JOIN "public"."events_venues" "ev" ON ((("e"."event_id" = "ev"."event_id") AND ("ev"."deleted_at" IS NULL))))
             JOIN "public"."venues" "v_1" ON ((("ev"."venue_id" = "v_1"."venue_id") AND ("v_1"."deleted_at" IS NULL))))
             JOIN "public"."events_slots" "es" ON ((("e"."event_id" = "es"."event_id") AND ("es"."deleted_at" IS NULL))))
             JOIN "public"."slots" "s" ON ((("es"."slot_id" = "s"."slot_id") AND ("s"."deleted_at" IS NULL))))
          WHERE (("e"."deleted_at" IS NULL) AND ("e"."event_public_id" IS NOT NULL))
          GROUP BY "ev"."venue_id", "s"."starts", "s"."ends", "v_1"."name"
        )
 SELECT "v"."venue_public_id",
    "v"."name",
    "v"."icon",
    COALESCE("jsonb_agg"("jsonb_build_object"('starts', "to_char"(("t"."starts")::interval, 'HH24:MI'::"text"), 'ends', "to_char"(("t"."ends")::interval, 'HH24:MI'::"text"), 'events', "t"."events") ORDER BY "t"."starts") FILTER (WHERE ("t"."starts" IS NOT NULL)), '[]'::"jsonb") AS "timeline"
   FROM ("public"."venues" "v"
     LEFT JOIN "cte_timeline" "t" ON (("v"."venue_id" = "t"."venue_id")))
  WHERE ("v"."deleted_at" IS NULL)
  GROUP BY "v"."venue_public_id", "v"."name", "v"."icon"
  WITH NO DATA;


ALTER MATERIALIZED VIEW "public"."mv_venue_timeline" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."news" (
    "news_id" bigint NOT NULL,
    "news_public_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "name" "text" NOT NULL,
    "caption" "text",
    "description" "text",
    "header_image" "text",
    "thumbnail" "text",
    "website" "text",
    "performer_id" bigint,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."news" OWNER TO "postgres";


ALTER TABLE "public"."news" ALTER COLUMN "news_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."news_news_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE "public"."organizations" ALTER COLUMN "organization_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."organizations_organization_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE "public"."performers" ALTER COLUMN "performer_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."performers_performer_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE "public"."slots" ALTER COLUMN "slot_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."slots_slot_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE "public"."tags_categories" ALTER COLUMN "tag_category_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."tags_categories_tag_category_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE "public"."tags" ALTER COLUMN "tag_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."tags_tag_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."venues_organizations" (
    "venue_organization_id" bigint NOT NULL,
    "venue_id" bigint NOT NULL,
    "organization_id" bigint NOT NULL,
    "display_order" integer DEFAULT 0 NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "deleted_at" timestamp with time zone
);


ALTER TABLE "public"."venues_organizations" OWNER TO "postgres";


ALTER TABLE "public"."venues_organizations" ALTER COLUMN "venue_organization_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."venues_organizations_venue_organization_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE "public"."venues" ALTER COLUMN "venue_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."venues_venue_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE ONLY "public"."banners"
    ADD CONSTRAINT "banners_banner_public_id_key" UNIQUE ("banner_public_id");



ALTER TABLE ONLY "public"."banners"
    ADD CONSTRAINT "banners_pkey" PRIMARY KEY ("banner_id");



ALTER TABLE ONLY "public"."categories"
    ADD CONSTRAINT "categories_category_public_id_key" UNIQUE ("category_public_id");



ALTER TABLE ONLY "public"."categories"
    ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("category_id");



ALTER TABLE ONLY "public"."events"
    ADD CONSTRAINT "events_event_public_id_key" UNIQUE ("event_public_id");



ALTER TABLE ONLY "public"."events_performers"
    ADD CONSTRAINT "events_performers_pkey" PRIMARY KEY ("event_performer_id");



ALTER TABLE ONLY "public"."events"
    ADD CONSTRAINT "events_pkey" PRIMARY KEY ("event_id");



ALTER TABLE ONLY "public"."events_slots"
    ADD CONSTRAINT "events_slots_pkey" PRIMARY KEY ("event_slot_id");



ALTER TABLE ONLY "public"."events_tags"
    ADD CONSTRAINT "events_tags_pkey" PRIMARY KEY ("event_tag_id");



ALTER TABLE ONLY "public"."events_venues"
    ADD CONSTRAINT "events_venues_pkey" PRIMARY KEY ("event_venue_id");



ALTER TABLE ONLY "public"."features"
    ADD CONSTRAINT "features_feature_public_id_key" UNIQUE ("feature_public_id");



ALTER TABLE ONLY "public"."features"
    ADD CONSTRAINT "features_pkey" PRIMARY KEY ("feature_id");



ALTER TABLE ONLY "public"."foods"
    ADD CONSTRAINT "foods_food_public_id_key" UNIQUE ("food_public_id");



ALTER TABLE ONLY "public"."foods"
    ADD CONSTRAINT "foods_pkey" PRIMARY KEY ("food_id");



ALTER TABLE ONLY "public"."news"
    ADD CONSTRAINT "news_news_public_id_key" UNIQUE ("news_public_id");



ALTER TABLE ONLY "public"."news"
    ADD CONSTRAINT "news_pkey" PRIMARY KEY ("news_id");



ALTER TABLE ONLY "public"."organizations"
    ADD CONSTRAINT "organizations_organization_public_id_key" UNIQUE ("organization_public_id");



ALTER TABLE ONLY "public"."organizations"
    ADD CONSTRAINT "organizations_pkey" PRIMARY KEY ("organization_id");



ALTER TABLE ONLY "public"."performers"
    ADD CONSTRAINT "performers_performer_public_id_key" UNIQUE ("performer_public_id");



ALTER TABLE ONLY "public"."performers"
    ADD CONSTRAINT "performers_pkey" PRIMARY KEY ("performer_id");



ALTER TABLE ONLY "public"."slots"
    ADD CONSTRAINT "slots_pkey" PRIMARY KEY ("slot_id");



ALTER TABLE ONLY "public"."slots"
    ADD CONSTRAINT "slots_slot_public_id_key" UNIQUE ("slot_public_id");



ALTER TABLE ONLY "public"."tags_categories"
    ADD CONSTRAINT "tags_categories_pkey" PRIMARY KEY ("tag_category_id");



ALTER TABLE ONLY "public"."tags"
    ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("tag_id");



ALTER TABLE ONLY "public"."tags"
    ADD CONSTRAINT "tags_tag_public_id_key" UNIQUE ("tag_public_id");



ALTER TABLE ONLY "public"."venues_organizations"
    ADD CONSTRAINT "venues_organizations_pkey" PRIMARY KEY ("venue_organization_id");



ALTER TABLE ONLY "public"."venues"
    ADD CONSTRAINT "venues_pkey" PRIMARY KEY ("venue_id");



ALTER TABLE ONLY "public"."venues"
    ADD CONSTRAINT "venues_venue_public_id_key" UNIQUE ("venue_public_id");



CREATE INDEX "idx_banners_display_order" ON "public"."banners" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_banners_event_id" ON "public"."banners" USING "btree" ("event_id");



CREATE INDEX "idx_category_display_order" ON "public"."categories" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_event_display_order" ON "public"."events" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_event_organization_id" ON "public"."events" USING "btree" ("organization_id");



CREATE INDEX "idx_events_performers_display_order" ON "public"."events_performers" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_events_performers_event_id" ON "public"."events_performers" USING "btree" ("event_id");



CREATE INDEX "idx_events_performers_performer_id" ON "public"."events_performers" USING "btree" ("performer_id");



CREATE UNIQUE INDEX "idx_events_performers_unique_active" ON "public"."events_performers" USING "btree" ("event_id", "performer_id") WHERE ("deleted_at" IS NULL);



CREATE INDEX "idx_events_slots_display_order" ON "public"."events_slots" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_events_slots_event_id" ON "public"."events_slots" USING "btree" ("event_id");



CREATE INDEX "idx_events_slots_slot_id" ON "public"."events_slots" USING "btree" ("slot_id");



CREATE UNIQUE INDEX "idx_events_slots_unique_active" ON "public"."events_slots" USING "btree" ("event_id", "slot_id") WHERE ("deleted_at" IS NULL);



CREATE INDEX "idx_events_tags_display_order" ON "public"."events_tags" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_events_tags_event_id" ON "public"."events_tags" USING "btree" ("event_id");



CREATE INDEX "idx_events_tags_tag_id" ON "public"."events_tags" USING "btree" ("tag_id");



CREATE UNIQUE INDEX "idx_events_tags_unique_active" ON "public"."events_tags" USING "btree" ("event_id", "tag_id") WHERE ("deleted_at" IS NULL);



CREATE INDEX "idx_events_venues_display_order" ON "public"."events_venues" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_events_venues_event_id" ON "public"."events_venues" USING "btree" ("event_id");



CREATE UNIQUE INDEX "idx_events_venues_unique_active" ON "public"."events_venues" USING "btree" ("event_id", "venue_id") WHERE ("deleted_at" IS NULL);



CREATE INDEX "idx_events_venues_venue_id" ON "public"."events_venues" USING "btree" ("venue_id");



CREATE INDEX "idx_features_display_order" ON "public"."features" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_features_event_id" ON "public"."features" USING "btree" ("event_id");



CREATE INDEX "idx_foods_display_order" ON "public"."foods" USING "btree" ("display_order" DESC);



CREATE UNIQUE INDEX "idx_mv_all_timeline_starts" ON "public"."mv_all_timeline" USING "btree" ("starts");



CREATE INDEX "idx_mv_category_tree_display_order" ON "public"."mv_category_tree" USING "btree" ("category_display_order" DESC);



CREATE UNIQUE INDEX "idx_mv_category_tree_public_id" ON "public"."mv_category_tree" USING "btree" ("category_public_id");



CREATE INDEX "idx_mv_event_details_display_order" ON "public"."mv_event_details" USING "btree" ("display_order" DESC);



CREATE UNIQUE INDEX "idx_mv_event_details_public_id" ON "public"."mv_event_details" USING "btree" ("event_public_id");



CREATE INDEX "idx_mv_event_details_tags" ON "public"."mv_event_details" USING "gin" ("tags");



CREATE UNIQUE INDEX "idx_mv_primary_timeline_starts" ON "public"."mv_primary_timeline" USING "btree" ("starts");



CREATE UNIQUE INDEX "idx_mv_venue_timeline_venue_public_id" ON "public"."mv_venue_timeline" USING "btree" ("venue_public_id");



CREATE INDEX "idx_news_display_order" ON "public"."news" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_news_performer_id" ON "public"."news" USING "btree" ("performer_id");



CREATE INDEX "idx_organization_display_order" ON "public"."organizations" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_performer_display_order" ON "public"."performers" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_slot_display_order" ON "public"."slots" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_tag_display_order" ON "public"."tags" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_tags_categories_category_id" ON "public"."tags_categories" USING "btree" ("category_id");



CREATE INDEX "idx_tags_categories_display_order" ON "public"."tags_categories" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_tags_categories_tag_id" ON "public"."tags_categories" USING "btree" ("tag_id");



CREATE UNIQUE INDEX "idx_tags_categories_unique_active" ON "public"."tags_categories" USING "btree" ("tag_id", "category_id") WHERE ("deleted_at" IS NULL);



CREATE INDEX "idx_venue_display_order" ON "public"."venues" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_venues_organizations_display_order" ON "public"."venues_organizations" USING "btree" ("display_order" DESC);



CREATE INDEX "idx_venues_organizations_organization_id" ON "public"."venues_organizations" USING "btree" ("organization_id");



CREATE UNIQUE INDEX "idx_venues_organizations_unique_active" ON "public"."venues_organizations" USING "btree" ("venue_id", "organization_id") WHERE ("deleted_at" IS NULL);



CREATE INDEX "idx_venues_organizations_venue_id" ON "public"."venues_organizations" USING "btree" ("venue_id");



CREATE OR REPLACE TRIGGER "update_banners" BEFORE UPDATE ON "public"."banners" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_categories" BEFORE UPDATE ON "public"."categories" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_events" BEFORE UPDATE ON "public"."events" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_events_performers" BEFORE UPDATE ON "public"."events_performers" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_events_slots" BEFORE UPDATE ON "public"."events_slots" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_events_tags" BEFORE UPDATE ON "public"."events_tags" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_events_venues" BEFORE UPDATE ON "public"."events_venues" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_features" BEFORE UPDATE ON "public"."features" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_foods" BEFORE UPDATE ON "public"."foods" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_news" BEFORE UPDATE ON "public"."news" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_organizations" BEFORE UPDATE ON "public"."organizations" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_performers" BEFORE UPDATE ON "public"."performers" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_slots" BEFORE UPDATE ON "public"."slots" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_tags" BEFORE UPDATE ON "public"."tags" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_tags_categories" BEFORE UPDATE ON "public"."tags_categories" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_venues" BEFORE UPDATE ON "public"."venues" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



CREATE OR REPLACE TRIGGER "update_venues_organizations" BEFORE UPDATE ON "public"."venues_organizations" FOR EACH ROW EXECUTE FUNCTION "public"."update_at"();



ALTER TABLE ONLY "public"."banners"
    ADD CONSTRAINT "banners_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "public"."events"("event_id");



ALTER TABLE ONLY "public"."events"
    ADD CONSTRAINT "events_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("organization_id");



ALTER TABLE ONLY "public"."events_performers"
    ADD CONSTRAINT "events_performers_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "public"."events"("event_id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."events_performers"
    ADD CONSTRAINT "events_performers_performer_id_fkey" FOREIGN KEY ("performer_id") REFERENCES "public"."performers"("performer_id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."events_slots"
    ADD CONSTRAINT "events_slots_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "public"."events"("event_id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."events_slots"
    ADD CONSTRAINT "events_slots_slot_id_fkey" FOREIGN KEY ("slot_id") REFERENCES "public"."slots"("slot_id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."events_tags"
    ADD CONSTRAINT "events_tags_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "public"."events"("event_id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."events_tags"
    ADD CONSTRAINT "events_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("tag_id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."events_venues"
    ADD CONSTRAINT "events_venues_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "public"."events"("event_id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."events_venues"
    ADD CONSTRAINT "events_venues_venue_id_fkey" FOREIGN KEY ("venue_id") REFERENCES "public"."venues"("venue_id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."features"
    ADD CONSTRAINT "features_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "public"."events"("event_id");



ALTER TABLE ONLY "public"."news"
    ADD CONSTRAINT "news_performer_id_fkey" FOREIGN KEY ("performer_id") REFERENCES "public"."performers"("performer_id");



ALTER TABLE ONLY "public"."tags_categories"
    ADD CONSTRAINT "tags_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("category_id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tags_categories"
    ADD CONSTRAINT "tags_categories_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("tag_id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."venues_organizations"
    ADD CONSTRAINT "venues_organizations_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("organization_id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."venues_organizations"
    ADD CONSTRAINT "venues_organizations_venue_id_fkey" FOREIGN KEY ("venue_id") REFERENCES "public"."venues"("venue_id") ON DELETE CASCADE;



CREATE POLICY "No direct access" ON "public"."banners" USING (false);



CREATE POLICY "No direct access" ON "public"."categories" USING (false);



CREATE POLICY "No direct access" ON "public"."events" USING (false);



CREATE POLICY "No direct access" ON "public"."events_performers" USING (false);



CREATE POLICY "No direct access" ON "public"."events_slots" USING (false);



CREATE POLICY "No direct access" ON "public"."events_tags" USING (false);



CREATE POLICY "No direct access" ON "public"."events_venues" USING (false);



CREATE POLICY "No direct access" ON "public"."features" USING (false);



CREATE POLICY "No direct access" ON "public"."foods" USING (false);



CREATE POLICY "No direct access" ON "public"."news" USING (false);



CREATE POLICY "No direct access" ON "public"."organizations" USING (false);



CREATE POLICY "No direct access" ON "public"."performers" USING (false);



CREATE POLICY "No direct access" ON "public"."slots" USING (false);



CREATE POLICY "No direct access" ON "public"."tags" USING (false);



CREATE POLICY "No direct access" ON "public"."tags_categories" USING (false);



CREATE POLICY "No direct access" ON "public"."venues" USING (false);



CREATE POLICY "No direct access" ON "public"."venues_organizations" USING (false);



ALTER TABLE "public"."banners" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."categories" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."events" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."events_performers" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."events_slots" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."events_tags" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."events_venues" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."features" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."foods" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."news" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."organizations" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."performers" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."slots" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tags" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tags_categories" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."venues" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."venues_organizations" ENABLE ROW LEVEL SECURITY;




ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";





GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";














































































































































































GRANT ALL ON FUNCTION "public"."get_all_timeline"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_all_timeline"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_all_timeline"() TO "service_role";



GRANT ALL ON FUNCTION "public"."get_all_venues"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_all_venues"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_all_venues"() TO "service_role";



GRANT ALL ON FUNCTION "public"."get_banners"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_banners"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_banners"() TO "service_role";



GRANT ALL ON FUNCTION "public"."get_categories"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_categories"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_categories"() TO "service_role";



GRANT ALL ON FUNCTION "public"."get_display_venue"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_display_venue"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_display_venue"() TO "service_role";



GRANT ALL ON FUNCTION "public"."get_event_details"("event_public_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_event_details"("event_public_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_event_details"("event_public_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."get_events_by_ids"("event_public_ids" "text"[]) TO "anon";
GRANT ALL ON FUNCTION "public"."get_events_by_ids"("event_public_ids" "text"[]) TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_events_by_ids"("event_public_ids" "text"[]) TO "service_role";



GRANT ALL ON FUNCTION "public"."get_events_by_tag"("tag_public_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_events_by_tag"("tag_public_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_events_by_tag"("tag_public_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."get_events_by_venue"("venue_public_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_events_by_venue"("venue_public_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_events_by_venue"("venue_public_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."get_features"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_features"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_features"() TO "service_role";



GRANT ALL ON FUNCTION "public"."get_foods"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_foods"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_foods"() TO "service_role";



GRANT ALL ON FUNCTION "public"."get_news"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_news"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_news"() TO "service_role";



GRANT ALL ON FUNCTION "public"."get_organization_details"("organization_public_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_organization_details"("organization_public_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_organization_details"("organization_public_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."get_primary_timeline"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_primary_timeline"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_primary_timeline"() TO "service_role";



GRANT ALL ON FUNCTION "public"."get_several_events_by_tag"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_several_events_by_tag"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_several_events_by_tag"() TO "service_role";



GRANT ALL ON FUNCTION "public"."get_tag_and_events_by_category"("category_public_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_tag_and_events_by_category"("category_public_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_tag_and_events_by_category"("category_public_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."get_venue_details"("venue_public_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_venue_details"("venue_public_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_venue_details"("venue_public_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."randomize_events_order"() TO "anon";
GRANT ALL ON FUNCTION "public"."randomize_events_order"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."randomize_events_order"() TO "service_role";



GRANT ALL ON FUNCTION "public"."randomize_events_tags_order"() TO "anon";
GRANT ALL ON FUNCTION "public"."randomize_events_tags_order"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."randomize_events_tags_order"() TO "service_role";



REVOKE ALL ON FUNCTION "public"."refresh_all_mvs"() FROM PUBLIC;
GRANT ALL ON FUNCTION "public"."refresh_all_mvs"() TO "anon";
GRANT ALL ON FUNCTION "public"."refresh_all_mvs"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."refresh_all_mvs"() TO "service_role";



GRANT ALL ON FUNCTION "public"."reset_events_tags_order"() TO "anon";
GRANT ALL ON FUNCTION "public"."reset_events_tags_order"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."reset_events_tags_order"() TO "service_role";



REVOKE ALL ON FUNCTION "public"."update_at"() FROM PUBLIC;
GRANT ALL ON FUNCTION "public"."update_at"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_at"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_at"() TO "service_role";
























GRANT ALL ON TABLE "public"."banners" TO "anon";
GRANT ALL ON TABLE "public"."banners" TO "authenticated";
GRANT ALL ON TABLE "public"."banners" TO "service_role";



GRANT ALL ON SEQUENCE "public"."banners_banner_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."banners_banner_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."banners_banner_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."categories" TO "anon";
GRANT ALL ON TABLE "public"."categories" TO "authenticated";
GRANT ALL ON TABLE "public"."categories" TO "service_role";



GRANT ALL ON SEQUENCE "public"."categories_category_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."categories_category_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."categories_category_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."events" TO "anon";
GRANT ALL ON TABLE "public"."events" TO "authenticated";
GRANT ALL ON TABLE "public"."events" TO "service_role";



GRANT ALL ON SEQUENCE "public"."events_event_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."events_event_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."events_event_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."events_performers" TO "anon";
GRANT ALL ON TABLE "public"."events_performers" TO "authenticated";
GRANT ALL ON TABLE "public"."events_performers" TO "service_role";



GRANT ALL ON SEQUENCE "public"."events_performers_event_performer_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."events_performers_event_performer_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."events_performers_event_performer_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."events_slots" TO "anon";
GRANT ALL ON TABLE "public"."events_slots" TO "authenticated";
GRANT ALL ON TABLE "public"."events_slots" TO "service_role";



GRANT ALL ON SEQUENCE "public"."events_slots_event_slot_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."events_slots_event_slot_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."events_slots_event_slot_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."events_tags" TO "anon";
GRANT ALL ON TABLE "public"."events_tags" TO "authenticated";
GRANT ALL ON TABLE "public"."events_tags" TO "service_role";



GRANT ALL ON SEQUENCE "public"."events_tags_event_tag_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."events_tags_event_tag_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."events_tags_event_tag_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."events_venues" TO "anon";
GRANT ALL ON TABLE "public"."events_venues" TO "authenticated";
GRANT ALL ON TABLE "public"."events_venues" TO "service_role";



GRANT ALL ON SEQUENCE "public"."events_venues_event_venue_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."events_venues_event_venue_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."events_venues_event_venue_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."features" TO "anon";
GRANT ALL ON TABLE "public"."features" TO "authenticated";
GRANT ALL ON TABLE "public"."features" TO "service_role";



GRANT ALL ON SEQUENCE "public"."features_feature_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."features_feature_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."features_feature_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."foods" TO "anon";
GRANT ALL ON TABLE "public"."foods" TO "authenticated";
GRANT ALL ON TABLE "public"."foods" TO "service_role";



GRANT ALL ON SEQUENCE "public"."foods_food_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."foods_food_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."foods_food_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."slots" TO "anon";
GRANT ALL ON TABLE "public"."slots" TO "authenticated";
GRANT ALL ON TABLE "public"."slots" TO "service_role";



GRANT ALL ON TABLE "public"."venues" TO "anon";
GRANT ALL ON TABLE "public"."venues" TO "authenticated";
GRANT ALL ON TABLE "public"."venues" TO "service_role";



GRANT ALL ON TABLE "public"."mv_all_timeline" TO "service_role";



GRANT ALL ON TABLE "public"."tags" TO "anon";
GRANT ALL ON TABLE "public"."tags" TO "authenticated";
GRANT ALL ON TABLE "public"."tags" TO "service_role";



GRANT ALL ON TABLE "public"."tags_categories" TO "anon";
GRANT ALL ON TABLE "public"."tags_categories" TO "authenticated";
GRANT ALL ON TABLE "public"."tags_categories" TO "service_role";



GRANT ALL ON TABLE "public"."mv_category_tree" TO "service_role";



GRANT ALL ON TABLE "public"."organizations" TO "anon";
GRANT ALL ON TABLE "public"."organizations" TO "authenticated";
GRANT ALL ON TABLE "public"."organizations" TO "service_role";



GRANT ALL ON TABLE "public"."performers" TO "anon";
GRANT ALL ON TABLE "public"."performers" TO "authenticated";
GRANT ALL ON TABLE "public"."performers" TO "service_role";



GRANT ALL ON TABLE "public"."mv_event_details" TO "service_role";



GRANT ALL ON TABLE "public"."mv_primary_timeline" TO "service_role";



GRANT ALL ON TABLE "public"."mv_venue_timeline" TO "service_role";



GRANT ALL ON TABLE "public"."news" TO "anon";
GRANT ALL ON TABLE "public"."news" TO "authenticated";
GRANT ALL ON TABLE "public"."news" TO "service_role";



GRANT ALL ON SEQUENCE "public"."news_news_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."news_news_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."news_news_id_seq" TO "service_role";



GRANT ALL ON SEQUENCE "public"."organizations_organization_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."organizations_organization_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."organizations_organization_id_seq" TO "service_role";



GRANT ALL ON SEQUENCE "public"."performers_performer_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."performers_performer_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."performers_performer_id_seq" TO "service_role";



GRANT ALL ON SEQUENCE "public"."slots_slot_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."slots_slot_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."slots_slot_id_seq" TO "service_role";



GRANT ALL ON SEQUENCE "public"."tags_categories_tag_category_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."tags_categories_tag_category_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."tags_categories_tag_category_id_seq" TO "service_role";



GRANT ALL ON SEQUENCE "public"."tags_tag_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."tags_tag_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."tags_tag_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."venues_organizations" TO "anon";
GRANT ALL ON TABLE "public"."venues_organizations" TO "authenticated";
GRANT ALL ON TABLE "public"."venues_organizations" TO "service_role";



GRANT ALL ON SEQUENCE "public"."venues_organizations_venue_organization_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."venues_organizations_venue_organization_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."venues_organizations_venue_organization_id_seq" TO "service_role";



GRANT ALL ON SEQUENCE "public"."venues_venue_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."venues_venue_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."venues_venue_id_seq" TO "service_role";









ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "service_role";































drop extension if exists "pg_net";


  create policy "Public Access Banners"
  on "storage"."objects"
  as permissive
  for select
  to public
using ((bucket_id = 'banners'::text));



  create policy "Public Access Categories"
  on "storage"."objects"
  as permissive
  for select
  to public
using ((bucket_id = 'categories'::text));



  create policy "Public Access Events"
  on "storage"."objects"
  as permissive
  for select
  to public
using ((bucket_id = 'events'::text));



  create policy "Public Access Features"
  on "storage"."objects"
  as permissive
  for select
  to public
using ((bucket_id = 'features'::text));



  create policy "Public Access Foods"
  on "storage"."objects"
  as permissive
  for select
  to public
using ((bucket_id = 'foods'::text));



  create policy "Public Access News"
  on "storage"."objects"
  as permissive
  for select
  to public
using ((bucket_id = 'news'::text));



  create policy "Public Access Organizations"
  on "storage"."objects"
  as permissive
  for select
  to public
using ((bucket_id = 'organizations'::text));



  create policy "Public Access Performers"
  on "storage"."objects"
  as permissive
  for select
  to public
using ((bucket_id = 'performers'::text));



  create policy "Public Access Venues"
  on "storage"."objects"
  as permissive
  for select
  to public
using ((bucket_id = 'venues'::text));



