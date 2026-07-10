import { createClient } from '@supabase/supabase-js';
import 'expo-sqlite/localStorage/install';

{/* Local development 
const origin = Constants.expoConfig?.hostUri?.split(":").shift();
const supabaseUrl = Platform.OS === 'web'
    ? "http://127.0.0.1:54321"
    : `http://${origin || '10.0.2.2'}:54321`;
const supabasePublishableKey = "sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH";
*/}


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

export const supabaseStorageUrl = __DEV__
    ? `https://blmzflkpvksjqkajrzhs.supabase.co/storage/v1/object/public`
    : `${supabaseUrl}/storage/v1/object/public`;