import { Feature, Verified } from "@/supabase/api/types";

export const STATIC_FEATURES: Verified<Feature>[] = [
    {
        feature_public_id: "feature_id_1",
        name: "エコステーション",
        caption: "ゴミはエコステーションまでお持ちください",
        note: "",
        image: require('@/assets/features/3.jpg') as any,
        event_public_id: "event_id_placeholder_3",
        display_order: 3,
    },
    {
        feature_public_id: "feature_id_2",
        name: "北昴×慶祥 よさこいコラボ",
        caption: "慶祥生徒との大迫力コラボステージ",
        note: "詳細をチェック。",
        image: require('@/assets/features/1.jpg') as any,
        event_public_id: "event_id_placeholder_1",
        display_order: 2,
    },
    {
        feature_public_id: "feature_id_3",
        name: "海外研修発表",
        caption: "国境を越え、価値観を揺さぶる旅へ。",
        note: "詳細をチェック。",
        image: require('@/assets/features/2.jpg') as any,
        event_public_id: "event_id_placeholder_2",
        display_order: 1,
    }
];