import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// .env ファイルを読み込む
dotenv.config();

// ローカルSupabaseの設定
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL || 'http://127.0.0.1:54321';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SERVICE_KEY) {
    console.error('❌ Error: SUPABASE_SERVICE_ROLE_KEY is missing in .env');
    process.exit(1);
}

// Service Role Key を使って管理者権限でクライアントを作成（RLSを無視して書き込み可能）
const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

const ASSETS_DIR = path.join(__dirname, '../supabase/seed-assets');

async function seedStorage() {
    console.log('🚀 Starting storage seed...');

    if (!fs.existsSync(ASSETS_DIR)) {
        console.warn(`⚠️ Assets directory not found: ${ASSETS_DIR}`);
        return;
    }

    // seed-assets 以下のディレクトリ（バケット名）を取得
    const buckets = fs.readdirSync(ASSETS_DIR, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

    for (const bucketName of buckets) {
        const bucketPath = path.join(ASSETS_DIR, bucketName);
        const files = fs.readdirSync(bucketPath);

        if (files.length === 0) continue;

        console.log(`📂 Processing bucket: "${bucketName}" (${files.length} files)`);

        for (const file of files) {
            // 隠しファイル（.DS_Storeなど）はスキップ
            if (file.startsWith('.')) continue;

            const filePath = path.join(bucketPath, file);
            const fileBuffer = fs.readFileSync(filePath);

            // Content-Typeの簡易判定（必要に応じて拡張）
            const ext = path.extname(file).toLowerCase();
            let contentType = 'application/octet-stream';
            if (ext === '.png') contentType = 'image/png';
            if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
            if (ext === '.svg') contentType = 'image/svg+xml';

            // アップロード実行（upsert: true で上書き許可）
            const { error } = await supabase.storage
                .from(bucketName)
                .upload(file, fileBuffer, {
                    contentType,
                    upsert: true,
                });

            if (error) {
                console.error(`   ❌ Failed to upload ${file}:`, error.message);
            } else {
                console.log(`   ✅ Uploaded: ${file}`);
            }
        }
    }

    console.log('✨ Storage seed completed!');
}

seedStorage().catch((err) => {
    console.error('Unexpected error:', err);
    process.exit(1);
});