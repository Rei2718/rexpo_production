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
        feature_public_id: "teen",
        name: "Rising Teenager Award 2026",
        caption: "全国で活躍する若者が集まる新アワード\n北大×慶祥が魅せる次世代の祭典",
        note: "観覧予約はこちら",
        image: require('@/assets/features/teen.jpg') as any,
        event_public_id: "https://reg31.smp.ne.jp/regist/is?SMPFORM=lioi-mbnfpj-417cdc5c8b5f37390dab3360cfddb4a7",
        display_order: 2,
    },
    {
        feature_public_id: "artist",
        name: "『君に捧げる応援歌』",
        caption: "困難を乗り越えていく人の背中を押す歌い手",
        note: "MVを見る",
        image: require('@/assets/features/artist.jpg') as any,
        event_public_id: "https://youtu.be/DiRXDpDL7es?si=hSFcNJSEHPfdMF8d",
        display_order: 3,
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