import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

// 環境変数のチェック
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

// Production Project
const POSTHOG_PROJECT_ID = process.env.POSTHOG_PROJECT_ID_PRODUCTION;
const POSTHOG_API_KEY = process.env.POSTHOG_API_KEY_PRODUCTION;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error('❌ Missing required Supabase environment variables.');
    process.exit(1);
}

// Supabaseクライアント (Service Role)
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
});

type EventMapItem = {
    event_public_id: string;
    name: string;
};

type ProjectConfig = { id: string; key: string; name: string };

type MetricData = {
    views: number;
    bookmarks: number;
};

async function main() {
    console.log('🚀 Starting ranking update (Advanced Score Mode with Unique User Count)...');

    try {
        // --- 1. Supabaseからイベントマッピング取得 ---
        const { data: eventMapData, error: mapError } = await supabase.rpc('get_all_event_names');

        if (mapError) throw new Error(`Failed to fetch event map: ${mapError.message}`);

        const nameToIdMap: Record<string, string> = {};
        const validIdSet = new Set<string>();

        if (Array.isArray(eventMapData)) {
            eventMapData.forEach((item: EventMapItem) => {
                if (item.event_public_id) {
                    validIdSet.add(item.event_public_id);
                    if (item.name) {
                        nameToIdMap[item.name] = item.event_public_id;
                    }
                }
            });
        }
        console.log(`✅ Loaded ${validIdSet.size} events from DB.`);

        // --- 2. PostHogからデータ取得 ---
        if (!POSTHOG_PROJECT_ID || !POSTHOG_API_KEY) throw new Error('❌ No PostHog configuration found.');

        const project: ProjectConfig = { id: POSTHOG_PROJECT_ID, key: POSTHOG_API_KEY, name: 'Production' };

        let hasFetchError = false;

        const collectMetrics = async (hours: number, label: string): Promise<Record<string, MetricData>> => {
            console.log(`\n🔍 Collecting metrics for ${label} (Hours: ${hours})...`);

            const mergedMetrics: Record<string, MetricData> = {};

            const merge = (key: string, type: 'views' | 'bookmarks', count: number) => {
                let eventId: string | undefined;

                if (validIdSet.has(key)) {
                    eventId = key;
                } else if (nameToIdMap[key]) {
                    eventId = nameToIdMap[key];
                }

                if (eventId) {
                    if (!mergedMetrics[eventId]) mergedMetrics[eventId] = { views: 0, bookmarks: 0 };
                    mergedMetrics[eventId][type] += count;
                }
            };

            // 1. Fetch Views (Unique Users)
            try {
                const views = await fetchHogQL(project, hours, 'views');
                views.forEach((r: any) => merge(r[0], 'views', Number(r[1])));
            } catch (e: any) {
                console.error(`   ⚠️ Failed to fetch views:`, e.message);
                hasFetchError = true;
            }

            // 2. Fetch Bookmarks (Unique Users)
            try {
                const bookmarks = await fetchHogQL(project, hours, 'bookmarks');
                bookmarks.forEach((r: any) => merge(r[0], 'bookmarks', Number(r[1])));
            } catch (e: any) {
                console.error(`   ⚠️ Failed to fetch bookmarks:`, e.message);
                hasFetchError = true;
            }
            return mergedMetrics;
        };

        // --- 3. スコア計算 ---

        // A. Top Ranking (All-time)
        const topMetrics = await collectMetrics(-1, 'TOP (All-time)');
        const topRanking = calculateRanking(topMetrics, (m) => {
            return calculateAdvancedScore(m.views, m.bookmarks);
        });

        // B. Trending Ranking (1h)
        const trendingMetrics = await collectMetrics(1, 'TRENDING (1h)');
        const trendingRanking = calculateRanking(trendingMetrics, (m) => {
            return calculateAdvancedScore(m.views, m.bookmarks);
        });

        console.log(`\n📊 Scored Results:`);
        console.log(`   Top: ${topRanking.length} items.`);
        console.log(`   Trending: ${trendingRanking.length} items.`);

        // --- 4. データ作成 & DB更新 ---
        if (hasFetchError) {
            console.warn('\n⚠️ Errors occurred during metrics collection. Skipping DB update.');
            return;
        }

        const topDBData = mapToDBData(topRanking, 'top');
        const trendingDBData = mapToDBData(trendingRanking, 'trending');

        await updateRankingsInDB('top', topDBData);
        await updateRankingsInDB('trending', trendingDBData);

        console.log('\n🎉 Ranking update completed successfully!');

    } catch (error) {
        console.error('❌ Critical Error:', error);
        process.exit(1);
    }
}

/**
 * スコア計算ロジック
 * 漸近関数を用いて0〜999の範囲に収める
 */
function calculateAdvancedScore(views: number, bookmarks: number): number {
    const baseScore = (bookmarks * 15) + (Math.log10(views + 1) * 100);
    const CEILING = 999;
    const SENSITIVITY = 10000;
    const normalizedScore = CEILING * (1 - Math.exp(-baseScore / SENSITIVITY));
    return Math.round(normalizedScore);
}

/**
 * 集計とソート（上位5件）
 */
function calculateRanking(
    metrics: Record<string, MetricData>,
    scoreFn: (m: MetricData) => number
) {
    return Object.entries(metrics)
        .map(([name, data]) => ({
            name,
            score: Math.round(scoreFn(data)),
            ...data
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
}

/**
 * DBスキーマへのマッピング
 */
function mapToDBData(rankedList: any[], type: 'top' | 'trending') {
    return rankedList.map((item, index) => ({
        event_public_id: item.name,
        rank: index + 1,
        score: item.score,
        type: type,
        updated_at: new Date().toISOString()
    }));
}

/**
 * DB更新処理
 */
async function updateRankingsInDB(type: 'top' | 'trending', data: any[]) {
    const { error: delErr } = await supabase.from('rankings').delete().eq('type', type);
    if (delErr) throw new Error(`Failed to clear ${type}: ${delErr.message}`);

    if (data.length > 0) {
        const { error: insErr } = await supabase.from('rankings').insert(data);
        if (insErr) throw new Error(`Failed to insert ${type}: ${insErr.message}`);
    }
    console.log(`✅ Updated ${type.toUpperCase()}: ${data.length} records.`);
}

/**
 * HogQL Fetcher
 * count(DISTINCT distinct_id) を使用して連打対策を行う
 */
async function fetchHogQL(proj: ProjectConfig, hours: number, type: 'views' | 'bookmarks') {
    let timeFilter = '';
    if (hours > 0) {
        timeFilter = `AND timestamp > now() - interval ${hours} hour`;
    }

    let query = '';
    if (type === 'views') {
        // properties.label に格納されたイベントIDごとにユニークユーザー数をカウント
        query = `
            SELECT properties.label, count(DISTINCT distinct_id)
            FROM events 
            WHERE event = 'screen-view' 
              AND properties.screen = 'event-details'
              ${timeFilter}
              AND properties.label IS NOT NULL
              AND properties.label != ''
            GROUP BY properties.label
            LIMIT 1000
        `;
    } else {
        // properties.screen に格納されたイベントIDごとにユニークユーザー数をカウント
        query = `
            SELECT properties.screen, count(DISTINCT distinct_id)
            FROM events
            WHERE event = 'bookmark'
              AND properties.label = 'bookmarked'
              ${timeFilter}
              AND properties.screen IS NOT NULL
              AND properties.screen != ''
            GROUP BY properties.screen
            LIMIT 1000
        `;
    }

    const url = `https://app.posthog.com/api/projects/${proj.id}/query/`;
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${proj.key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: { kind: 'HogQLQuery', query } })
    });

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`API Error ${response.status}: ${errorBody}`);
    }

    const json = await response.json();
    return json.results || [];
}

main();