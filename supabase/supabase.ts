import { createClient } from '@supabase/supabase-js';
import 'expo-sqlite/localStorage/install';

const supabaseUrl = "https://feevjgbrjoicwzbxnann.supabase.co";
const supabasePublishableKey = "sb_publishable__3zl66kFIskI4TxSnlTIEQ_KF9jgGBX";

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
    auth: {
        storage: localStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});

// npx supabase gen types typescript --project-id feevjgbrjoicwzbxnann --schema public > supabase/database.types.ts