import { Feature, Verified } from "@/supabase/api/types";

export const STATIC_FEATURES: Verified<Feature>[] = [
    {
        feature_public_id: "progate",
        name: "AI時代のものづくり",
        caption: "実際にプロダクトを創るライブデモ",
        note: "詳細をチェック",
        image: require('@/assets/features/progate.jpg') as any,
        event_public_id: "905d4c04-c6ea-4a98-bc9a-7e1622f0342c",
        display_order: 1,
    },
    {
        feature_public_id: "kita",
        name: "北昴×慶祥 よさこいコラボ",
        caption: "慶祥生徒との大迫力コラボステージ",
        note: "詳細をチェック",
        image: require('@/assets/features/kita.jpg') as any,
        event_public_id: "b9d70941-a91a-4262-aeff-ce9dee3a7b22",
        display_order: 2,
    },
    {
        feature_public_id: "eco",
        name: "エコステーション",
        caption: "ゴミはエコステーションまでお持ちください",
        note: "",
        image: require('@/assets/features/eco.jpg') as any,
        event_public_id: "",
        display_order: 3,
    }
];