import { createClient } from '@supabase/supabase-js';
import 'expo-sqlite/localStorage/install';

import Constants from 'expo-constants';


import { Platform } from 'react-native';

const origin = Constants.expoConfig?.hostUri?.split(":").shift();

const supabaseUrl = Platform.OS === 'web'
    ? "http://127.0.0.1:54321"
    : `http://${origin || '10.0.2.2'}:54321`;

const supabasePublishableKey = "sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH";


{/* 
const supabaseUrl = "https://jwgrxodqbnxnvzyrdzgf.supabase.co";
const supabasePublishableKey = "sb_publishable_98bePw2fvGnWwVEkixEHNw_0ckMLE4G";*/}

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
    auth: {
        storage: localStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});

export const supabaseStorageUrl = `${supabaseUrl}/storage/v1/object/public`;