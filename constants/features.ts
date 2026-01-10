import { Feature, Verified } from "@/supabase/api/types";

export const STATIC_FEATURES: Verified<Feature>[] = [
    {
        feature_public_id: "355d1d54-b224-4c2c-a249-2631eff8bf71",
        name: "北昴×慶祥 よさこいコラボステージ",
        caption: "YOSAKOIソーラン祭りで活躍する実力派チーム「北昴」が、慶祥生徒との大迫力コラボステージを披露します。",
        note: "詳細をチェック。",
        image: require('@/assets/features/1.jpg') as any,
        event_public_id: "event_id_placeholder_1",
        display_order: 1,
    },
    {
        feature_public_id: "feature_id_2",
        name: "海外研修発表",
        caption: "国境を越え、価値観を揺さぶる旅へ。慶祥生が世界各地で学んだ研修の成果を発表します",
        note: "詳細をチェック。",
        image: require('@/assets/features/2.jpg') as any,
        event_public_id: "event_id_placeholder_2",
        display_order: 2,
    },
    {
        feature_public_id: "feature_id_3",
        name: "芸術発表",
        caption: "教室では見せない、もう一つの顔。研ぎ澄まされたピアノやバイオリンの音色をお楽しみください",
        note: "詳細をチェック。",
        image: require('@/assets/features/3.jpg') as any,
        event_public_id: "event_id_placeholder_2",
        display_order: 2,
    }
];