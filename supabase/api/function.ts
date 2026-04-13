import { ALL_VENUE_ID } from "@/constants/venue-constants";
import { supabase } from "@/supabase/supabase";
import {
    Banner,
    Category,
    DisplayVenue,
    EventDetails,
    EventOverview,
    EventRankings,
    Feature,
    Food,
    News,
    OrganizationDetails,
    TagEvents,
    TimelineEvent,
    TimelineSlot,
    VenueDetails,
    VenueDynamicStatus,
    VenueStaticInfo,
    Verified
} from "./types";

const getStableDummy = (original: string, list: string[]) => {
    const hash = original.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return list[hash % list.length];
};

const DUMMY_NAMES = [
    '未来を創るAIテクノロジー', 'サステナブルな社会の実現へ', '次世代アートエキシビション', 
    'グローバルビジネス最新動向', 'インディーゲームフェス', '地域共生社会フォーラム'
];
const DUMMY_TAGS = ['テクノロジー', 'デザイン', 'ビジネス', 'カルチャー', 'アカデミック'];
const DUMMY_PEOPLE = ['山田 太郎', '佐藤 花子', '鈴木 一郎', '高橋 次郎'];
const DUMMY_AFFILIATIONS = ['株式会社ダミー', 'モックアップ大学', 'サンプル研究所'];
const DUMMY_VENUES = ['メインホール', 'カンファレンスルーム', '屋外ステージ', '第1展示場'];

const mockData = <T>(data: T): T => {
    if (!__DEV__) return data;
    if (data === null || data === undefined) return data;
    if (Array.isArray(data)) {
        return data.map(mockData) as unknown as T;
    }
    if (typeof data === 'object') {
        const mocked = { ...data } as any;
        for (const key in mocked) {
            const val = mocked[key];
            if (typeof val === 'string') {
                if (key === 'name') {
                    if ('affiliation' in mocked) {
                        mocked[key] = getStableDummy(val, DUMMY_PEOPLE);
                    } else if ('capacity' in mocked || 'is_primary' in mocked) {
                        mocked[key] = getStableDummy(val, DUMMY_VENUES);
                    } else if ('category_public_id' in mocked || 'tag_public_id' in mocked) {
                        mocked[key] = getStableDummy(val, DUMMY_TAGS);
                    } else {
                        mocked[key] = getStableDummy(val, DUMMY_NAMES);
                    }
                } else if (key === 'caption') {
                    mocked[key] = 'これはダミーの概要文です。モックアップとして表示されています。';
                } else if (key === 'description' || key === 'note') {
                    mocked[key] = 'これは詳細なダミーテキストです。開発環境やモックアップでのみ表示され、実際のデータが入力されるまでのプレースホルダーとして機能します。レイアウトの確認などに利用してください。';
                } else if (key === 'affiliation') {
                    mocked[key] = getStableDummy(val, DUMMY_AFFILIATIONS);
                } else if (key === 'venue_name') {
                    mocked[key] = getStableDummy(val, DUMMY_VENUES);
                }
            } else if (typeof val === 'object') {
                mocked[key] = mockData(val);
            }
        }
        return mocked;
    }
    return data;
};

export async function get_banners() {
    const { data, error } = await supabase.rpc("get_banners");
    if (error) throw error;
    return mockData(data) as unknown as Verified<Banner>[];
}

export async function get_features() {
    const { data, error } = await supabase.rpc("get_features");
    if (error) throw error;
    return mockData(data) as unknown as Verified<Feature>[];
}

export async function get_news() {
    const { data, error } = await supabase.rpc("get_news");
    if (error) throw error;
    return mockData(data) as unknown as Verified<News>[];
}

export async function get_display_venue() {
    const { data, error } = await supabase.rpc("get_display_venue");
    if (error) throw error;
    return mockData(data) as unknown as Verified<DisplayVenue>[];
}

export async function get_event_details(event_public_id: string) {
    const { data, error } = await supabase.rpc("get_event_details", {
        event_public_id,
    });
    if (error) throw error;
    return mockData(data) as unknown as Verified<EventDetails>;
}

export async function get_events_by_tag(tag_public_id?: string) {
    const { data, error } = await supabase.rpc("get_events_by_tag", {
        tag_public_id,
    });
    if (error) throw error;
    return mockData(data) as unknown as Verified<EventOverview>[];
}

export async function get_events_by_venue(venue_public_id?: string) {
    if (venue_public_id === ALL_VENUE_ID) {
        const { data, error } = await supabase.rpc("get_all_timeline");
        if (error) throw error;
        return mockData(data) as unknown as Verified<TimelineSlot>[];
    }
    const { data, error } = await supabase.rpc("get_events_by_venue", {
        venue_public_id,
    });
    if (error) throw error;
    return mockData(data) as unknown as Verified<TimelineSlot>[];
}

export async function get_several_events_by_tag() {
    const { data, error } = await supabase.rpc("get_several_events_by_tag");
    if (error) throw error;
    return mockData(data) as unknown as Verified<TagEvents>[];
}

export async function get_tag_and_events_by_category(category_public_id?: string) {
    const { data, error } = await supabase.rpc("get_tag_and_events_by_category", {
        category_public_id,
    });
    if (error) throw error;
    return mockData(data) as unknown as Verified<TagEvents>[];
}

export async function get_venue_details(venue_public_id: string) {
    const { data, error } = await supabase.rpc("get_venue_details", {
        venue_public_id,
    });
    if (error) throw error;
    return mockData(data) as unknown as Verified<VenueDetails>;
}

export async function get_venue_static_info(venue_public_id: string) {
    const { data, error } = await supabase.rpc("get_venue_static_info", {
        venue_public_id,
    });
    if (error) throw error;
    return mockData(data) as unknown as Verified<VenueStaticInfo>;
}

export async function get_venue_dynamic_status(venue_public_id: string) {
    const { data, error } = await supabase.rpc("get_venue_dynamic_status", {
        venue_public_id,
    });
    if (error) throw error;
    return mockData(data) as unknown as Verified<VenueDynamicStatus>;
}

export async function get_categories() {
    const { data, error } = await supabase.rpc("get_categories");
    if (error) throw error;
    return mockData(data) as unknown as Verified<Category>[];
}

export async function get_all_venues() {
    const { data, error } = await supabase.rpc("get_all_venues");
    if (error) throw error;
    return mockData(data) as unknown as Verified<DisplayVenue>[];
}

export async function get_events_by_ids(event_public_ids: string[]) {
    const { data, error } = await supabase.rpc("get_events_by_ids", {
        event_public_ids,
    });
    if (error) throw error;
    return mockData(data) as unknown as Verified<TimelineEvent>[];
}

export async function get_organization_details(organization_public_id: string) {
    const { data, error } = await supabase.rpc("get_organization_details", {
        organization_public_id,
    });
    if (error) throw error;
    return mockData(data) as unknown as Verified<OrganizationDetails>;
}

export async function get_foods() {
    const { data, error } = await supabase.rpc("get_foods");
    if (error) throw error;
    return mockData(data) as unknown as Verified<Food>[];
}

export async function get_event_rankings() {
    const { data, error } = await supabase.rpc("get_event_rankings");
    if (error) throw error;
    return mockData(data) as unknown as Verified<EventRankings>;
}