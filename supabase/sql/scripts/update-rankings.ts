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
    console.log('🚀 Starting ranking update (Advanced Score Mode)...');

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
                    // Name -> ID mapping for legacy data support
                    if (item.name) {
                        nameToIdMap[item.name] = item.event_public_id;
                    }
                }
            });
        }
        console.log(`✅ Loaded ${validIdSet.size} events from DB. (Legacy map size: ${Object.keys(nameToIdMap).length})`);

        // --- 2. PostHogからデータ取得 ---
        if (!POSTHOG_PROJECT_ID || !POSTHOG_API_KEY) throw new Error('❌ No PostHog configuration found.');

        const project: ProjectConfig = { id: POSTHOG_PROJECT_ID, key: POSTHOG_API_KEY, name: 'Production' };

        let hasFetchError = false;

        // 共通Fetch関数
        const collectMetrics = async (hours: number, label: string): Promise<Record<string, MetricData>> => {
            console.log(`\n🔍 Collecting metrics for ${label} (Hours: ${hours})...`);

            const mergedMetrics: Record<string, MetricData> = {};

            const merge = (key: string, type: 'views' | 'bookmarks', count: number) => {
                let eventId: string | undefined;

                // 1. If key is a valid ID, use it directly (New Logic)
                if (validIdSet.has(key)) {
                    eventId = key;
                }
                // 2. If key is a known Name, map to ID (Legacy Logic)
                else if (nameToIdMap[key]) {
                    eventId = nameToIdMap[key];
                }

                if (eventId) {
                    if (!mergedMetrics[eventId]) mergedMetrics[eventId] = { views: 0, bookmarks: 0 };
                    mergedMetrics[eventId][type] += count;
                }
            };

            // 1. Fetch Views
            try {
                const views = await fetchHogQL(project, hours, 'views');
                views.forEach((r: any) => merge(r[0], 'views', Number(r[1])));
                // console.log(`   - [${project.name}] Views: fetched ${views.length} rows.`);
            } catch (e: any) {
                console.error(`   ⚠️ Failed to fetch views from ${project.name}:`, e.message);
                hasFetchError = true;
            }

            // 2. Fetch Bookmarks
            try {
                const bookmarks = await fetchHogQL(project, hours, 'bookmarks');
                bookmarks.forEach((r: any) => merge(r[0], 'bookmarks', Number(r[1])));
                // console.log(`   - [${project.name}] Bookmarks: fetched ${bookmarks.length} rows.`);
            } catch (e: any) {
                console.error(`   ⚠️ Failed to fetch bookmarks from ${project.name}:`, e.message);
                hasFetchError = true;
            }
            return mergedMetrics;
        };

        // --- 3. スコア計算 ---

        // A. Top Ranking (All-time)
        // Score = (Bookmarks * 15) + log10(Views + 1) * 100
        const topMetrics = await collectMetrics(-1, 'TOP (All-time)');
        const topRanking = calculateRanking(topMetrics, (m) => {
            return calculateAdvancedScore(m.views, m.bookmarks);
        });

        // B. Trending Ranking (1h)
        // Score = (1h_Bookmarks * 15) + log10(1h_Views + 1) * 100
        const trendingMetrics = await collectMetrics(1, 'TRENDING (1h)');
        const trendingRanking = calculateRanking(trendingMetrics, (m) => {
            return calculateAdvancedScore(m.views, m.bookmarks);
        });

        console.log(`\n📊 Scored Results:`);
        console.log(`   Top: ${topRanking.length} items.`);
        console.log(`   Trending: ${trendingRanking.length} items.`);

        // --- 4. データ作成 & DB更新 ---
        if (hasFetchError) {
            console.warn('\n⚠️ Errors occurred during metrics collection. Skipping DB update to prevent data corruption.');
            return;
        }
        const topDBData = mapToDBData(topRanking, nameToIdMap, 'top');
        const trendingDBData = mapToDBData(trendingRanking, nameToIdMap, 'trending');

        await updateRankingsInDB('top', topDBData);
        await updateRankingsInDB('trending', trendingDBData);

        console.log('\n🎉 Ranking update completed successfully!');

    } catch (error) {
        console.error('❌ Critical Error:', error);
        process.exit(1);
    }
}

function calculateAdvancedScore(views: number, bookmarks: number): number {
    // 1. ベーススコア算出（変更なし）
    // ブックマークの重み15, Viewは対数
    const baseScore = (bookmarks * 15) + (Math.log10(views + 1) * 100);

    // 2. 3桁上限（999）に合わせたパラメータ設定
    const CEILING = 999;
    const SENSITIVITY = 1500; // 1000人規模に最適化した感度

    // 3. 漸近関数で0〜999にマッピング
    const normalizedScore = CEILING * (1 - Math.exp(-baseScore / SENSITIVITY));

    return Math.round(normalizedScore);
}

// Result Aggregation & Sorting
function calculateRanking(
    metrics: Record<string, MetricData>,
    scoreFn: (m: MetricData) => number
) {
    return Object.entries(metrics)
        .map(([name, data]) => ({
            name,
            score: Math.round(scoreFn(data)), // Integer score
            ...data
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 5); // Limit Top 5
}

// Mapping to DB Schema
function mapToDBData(
    rankedList: any[],
    _: Record<string, string>, // Unused now
    type: 'top' | 'trending'
) {
    const result: any[] = [];
    rankedList.forEach((item, index) => {
        // item.name is now the event_public_id (from merge logic)
        const eventId = item.name;

        // Basic validation that it looks like a string (logic ensures it's a valid ID or mapped ID)
        if (eventId) {
            result.push({
                event_public_id: eventId,
                rank: index + 1,
                score: item.score,
                type: type,
                updated_at: new Date().toISOString()
            });
        }
    });
    return result;
}

// DB Updater
async function updateRankingsInDB(type: 'top' | 'trending', data: any[]) {
    // Clear old data
    const { error: delErr } = await supabase.from('rankings').delete().eq('type', type);
    if (delErr) throw new Error(`Failed to clear ${type}: ${delErr.message}`);

    // Insert new data
    if (data.length > 0) {
        const { error: insErr } = await supabase.from('rankings').insert(data);
        if (insErr) throw new Error(`Failed to insert ${type}: ${insErr.message}`);
    }
    console.log(`✅ Updated ${type.toUpperCase()}: ${data.length} records.`);
}

// HogQL Fetcher
async function fetchHogQL(proj: ProjectConfig, hours: number, type: 'views' | 'bookmarks') {
    let timeFilter = '';
    if (hours > 0) {
        timeFilter = `AND timestamp > now() - interval ${hours} hour`;
    }

    let query = '';
    if (type === 'views') {
        // Group by properties.label (Event Name)
        query = `
            SELECT properties.label, count()
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
        // Bookmarks: Group by properties.screen (Event Name in BookmarkButton)
        query = `
            SELECT properties.screen, count()
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

    if (!response.ok) throw new Error(`API Error ${response.status}`);
    const json = await response.json();
    return json.results || [];
}

main();