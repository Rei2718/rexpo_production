import { Feature, Verified } from "@/supabase/api/types";

export const STATIC_FEATURES: Verified<Feature>[] = [
    {
        feature_public_id: "355d1d54-b224-4c2c-a249-2631eff8bf71",
        name: "特集: テクノロジー",
        caption: "必見ポイント",
        note: "詳細をチェック。",
        image: require('@/assets/features/1.jpg') as any,
        event_public_id: "event_id_placeholder_1",
        display_order: 1,
    },
    {
        feature_public_id: "feature_id_2",
        name: "特集: デザイン",
        caption: "最新トレンド",
        note: "詳細をチェック。",
        image: require('@/assets/features/2.jpg') as any,
        event_public_id: "event_id_placeholder_2",
        display_order: 2,
    }
];