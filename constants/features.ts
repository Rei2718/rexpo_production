import { Feature, Verified } from "@/supabase/api/types";

export const STATIC_FEATURES: Verified<Feature>[] = [
    {
        feature_public_id: "355d1d54-b224-4c2c-a249-2631eff8bf71",
        name: "北昴×慶祥 よさこいコラボ",
        caption: "大迫力コラボステージを披露",
        note: "詳細をチェック。",
        image: require('@/assets/features/1.jpg') as any,
        event_public_id: "event_id_placeholder_1",
        display_order: 1,
    },
    {
        feature_public_id: "feature_id_2",
        name: "海外研修発表",
        caption: "国境を越え、価値観を揺さぶる旅へ",
        note: "詳細をチェック。",
        image: require('@/assets/features/2.jpg') as any,
        event_public_id: "event_id_placeholder_2",
        display_order: 2,
    },
    {
        feature_public_id: "feature_id_3",
        name: "芸術発表",
        caption: "教室では見せない、もう一つの顔",
        note: "詳細をチェック。",
        image: require('@/assets/features/3.jpg') as any,
        event_public_id: "event_id_placeholder_2",
        display_order: 2,
    }
];