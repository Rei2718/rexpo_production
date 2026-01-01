import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// .envファイルから環境変数を読み込む（クラウド移行時に使用）
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
});

const ASSETS_DIR = path.join(__dirname, '../seed-assets');

async function syncToCloud() {
    console.log(`🚀 Starting sync to: ${SUPABASE_URL}`);

    // 1. Storageの同期
    if (fs.existsSync(ASSETS_DIR)) {
        const buckets = fs.readdirSync(ASSETS_DIR, { withFileTypes: true })
            .filter(d => d.isDirectory()).map(d => d.name);

        for (const bucketName of buckets) {
            const files = fs.readdirSync(path.join(ASSETS_DIR, bucketName));
            console.log(`📂 Syncing bucket: "${bucketName}"`);

            for (const file of files) {
                if (file.startsWith('.')) continue;
                const fileBuffer = fs.readFileSync(path.join(ASSETS_DIR, bucketName, file));
                const { error } = await supabase.storage.from(bucketName).upload(file, fileBuffer, { upsert: true });
                if (error) console.error(`   ❌ Failed: ${file}`, error.message);
                else console.log(`   ✅ Uploaded: ${file}`);
            }
        }
    }

    // 2. マテリアライズドビューのリフレッシュ (RPCの呼び出し)
    console.log('🔄 Refreshing Materialized Views...');
    const { error: rpcError } = await supabase.rpc('refresh_all_mvs');
    if (rpcError) console.error('   ❌ RPC Error:', rpcError.message);
    else console.log('   ✅ All views refreshed!');
}

syncToCloud().catch(console.error);