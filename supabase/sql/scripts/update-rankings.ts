import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

// 環境変数のチェック
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

// Project 1
const POSTHOG_PROJECT_ID_1 = process.env.POSTHOG_PROJECT_ID;
const POSTHOG_API_KEY_1 = process.env.POSTHOG_API_KEY;

// Project 2
const POSTHOG_PROJECT_ID_2 = process.env.POSTHOG_PROJECT_ID_2;
const POSTHOG_API_KEY_2 = process.env.POSTHOG_API_KEY_2;

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
        if (Array.isArray(eventMapData)) {
            eventMapData.forEach((item: EventMapItem) => {
                if (item.name && item.event_public_id) {
                    nameToIdMap[item.name] = item.event_public_id;
                }
            });
        }
        console.log(`✅ Loaded ${Object.keys(nameToIdMap).length} events from DB.`);

        // --- 2. PostHogからデータ取得 ---
        const projects: ProjectConfig[] = [];
        if (POSTHOG_PROJECT_ID_1 && POSTHOG_API_KEY_1) projects.push({ id: POSTHOG_PROJECT_ID_1, key: POSTHOG_API_KEY_1, name: 'Project 1' });
        if (POSTHOG_PROJECT_ID_2 && POSTHOG_API_KEY_2) projects.push({ id: POSTHOG_PROJECT_ID_2, key: POSTHOG_API_KEY_2, name: 'Project 2' });

        if (projects.length === 0) throw new Error('❌ No PostHog configuration found.');

        // 共通Fetch関数
        const collectMetrics = async (hours: number, label: string): Promise<Record<string, MetricData>> => {
            console.log(`\n🔍 Collecting metrics for ${label} (Hours: ${hours})...`);

            const mergedMetrics: Record<string, MetricData> = {};

            const merge = (name: string, type: 'views' | 'bookmarks', count: number) => {
                if (!mergedMetrics[name]) mergedMetrics[name] = { views: 0, bookmarks: 0 };
                mergedMetrics[name][type] += count;
            };

            for (const proj of projects) {
                // 1. Fetch Views
                try {
                    const views = await fetchHogQL(proj, hours, 'views');
                    views.forEach((r: any) => merge(r[0], 'views', Number(r[1])));
                    // console.log(`   - [${proj.name}] Views: fetched ${views.length} rows.`);
                } catch (e: any) { console.error(`   ⚠️ Failed to fetch views from ${proj.name}:`, e.message); }

                // 2. Fetch Bookmarks
                try {
                    const bookmarks = await fetchHogQL(proj, hours, 'bookmarks');
                    bookmarks.forEach((r: any) => merge(r[0], 'bookmarks', Number(r[1])));
                    // console.log(`   - [${proj.name}] Bookmarks: fetched ${bookmarks.length} rows.`);
                } catch (e: any) { console.error(`   ⚠️ Failed to fetch bookmarks from ${proj.name}:`, e.message); }
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
    nameMap: Record<string, string>,
    type: 'top' | 'trending'
) {
    const result: any[] = [];
    rankedList.forEach((item, index) => {
        const uuid = nameMap[item.name];
        if (uuid) {
            result.push({
                event_public_id: uuid,
                rank: index + 1,
                score: item.score,
                type: type,
                updated_at: new Date().toISOString()
            });
        } else {
            // console.warn(`⚠️ Event not found in DB: "${item.name}"`);
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