import { createClient } from '@supabase/supabase-js';
import 'expo-sqlite/localStorage/install';

const supabaseUrl = "https://blmzflkpvksjqkajrzhs.supabase.co";
const supabasePublishableKey = "sb_publishable_xZFTkXMODdJG4LXabjEDSg_CmdpVZWK";

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
    auth: {
        storage: localStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});

/**
 * Data Mode Flag
 * - false: Use live Supabase database endpoints (RPC).
 * - true:  Use local archive dataset defined in @/supabase/archive.ts.
 */
export const IS_ARCHIVE = true;

export const supabaseStorageUrl = IS_ARCHIVE
    ? ""
    : `${supabaseUrl}/storage/v1/object/public`;

export const getImageUrl = (path: string | null | undefined): string | null => {
    if (!path) return null;
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${supabaseStorageUrl}${cleanPath}`;
};