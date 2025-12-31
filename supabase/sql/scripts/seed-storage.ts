import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const SUPABASE_URL = 'http://127.0.0.1:54321';
const SERVICE_KEY = 'sb_secret_N7UND0UgjKTVK-Uodkm0Hg_xSvEMPvz';

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

const ASSETS_DIR = path.join(__dirname, '../seed-assets');

async function seedStorage() {
    console.log('🚀 Starting storage seed...');
    console.log(`📍 Connecting to ${SUPABASE_URL}`);
    console.log(`📂 Assets directory: ${ASSETS_DIR}`);

    if (!fs.existsSync(ASSETS_DIR)) {
        console.warn(`⚠️ Assets directory not found: ${ASSETS_DIR}`);
        return;
    }

    const buckets = fs.readdirSync(ASSETS_DIR, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

    for (const bucketName of buckets) {
        const bucketPath = path.join(ASSETS_DIR, bucketName);
        const files = fs.readdirSync(bucketPath);

        if (files.length === 0) continue;

        console.log(`📂 Processing bucket: "${bucketName}" (${files.length} files)`);

        for (const file of files) {
            if (file.startsWith('.')) continue;

            const filePath = path.join(bucketPath, file);
            const fileBuffer = fs.readFileSync(filePath);

            const ext = path.extname(file).toLowerCase();
            let contentType = 'application/octet-stream';
            if (ext === '.png') contentType = 'image/png';
            if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
            if (ext === '.svg') contentType = 'image/svg+xml';

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