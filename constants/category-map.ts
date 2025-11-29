import { ImageSourcePropType } from 'react-native';

export type TagInfo = {
    tag: string;
    title: string;
    subtitle: string;
};

export type Category = {
    id: string;
    label: string;
    icon: ImageSourcePropType;
    tags: TagInfo[];
};

export const CATEGORIES: Category[] = [
    {
        id: 'academic',
        label: 'アカデミック',
        icon: require('@/assets/category/1.png'),
        tags: [
            { tag: "テクノロジー_TEST", title: "理系・情報研究", subtitle: "AI・ロボティクス・VR" },
            { tag: "ビジネス_TEST", title: "社会科学・経済", subtitle: "キャリアフォーラム・シンポジウム" }
        ]
    },
    {
        id: 'entertainment',
        label: 'エンターテイメント',
        icon: require('@/assets/category/2.png'),
        tags: [
            { tag: "コミュニティ_TEST", title: "ステージ・大会", subtitle: "eスポーツ大会・ビンゴ" },
            { tag: "クリエイティブ_TEST", title: "ライブパフォーマンス", subtitle: "バンド演奏・ダンス・演劇" }
        ]
    },
    {
        id: 'booth_collab',
        label: 'ブース＆コラボ',
        icon: require('@/assets/category/3.png'),
        tags: [
            { tag: "ビジネス_TEST", title: "企業・スタートアップ", subtitle: "企業展示・起業相談会" },
            { tag: "コミュニティ_TEST", title: "飲食・物販", subtitle: "キッチンカー・模擬店" }
        ]
    },
    {
        id: 'creative',
        label: 'クリエイティブ',
        icon: require('@/assets/category/4.png'),
        tags: [
            { tag: "クリエイティブ_TEST", title: "アート・デザイン展", subtitle: "美術・写真・映像作品" },
            { tag: "テクノロジー_TEST", title: "メディアアート", subtitle: "プロジェクションマッピング" }
        ]
    },
    {
        id: 'research_project',
        label: 'リサーチ＆プロジェクト',
        icon: require('@/assets/category/5.png'),
        tags: [
            { tag: "テクノロジー_TEST", title: "探究成果発表", subtitle: "科学技術・情報工学" },
            { tag: "ビジネス_TEST", title: "SDGs・社会課題", subtitle: "ソーシャルビジネス提案" }
        ]
    },
    {
        id: 'fieldwork',
        label: 'フィールドワーク',
        icon: require('@/assets/category/6.png'),
        tags: [
            { tag: "コミュニティ_TEST", title: "地域貢献活動", subtitle: "清掃活動・ボランティア" },
            { tag: "クリエイティブ_TEST", title: "ワークショップ", subtitle: "体験型講座・ものづくり" }
        ]
    },
    {
        id: 'presentation',
        label: 'プレゼンテーション',
        icon: require('@/assets/category/7.png'),
        tags: [
            { tag: "ビジネス_TEST", title: "ビジネスコンテスト", subtitle: "起業アイデアピッチ" },
            { tag: "テクノロジー_TEST", title: "ライトニングトーク", subtitle: "技術共有・開発秘話" }
        ]
    },
    {
        id: 'other',
        label: 'その他',
        icon: require('@/assets/category/8.png'),
        tags: [
            { tag: "コミュニティ_TEST", title: "全般・インフォ", subtitle: "総合案内・休憩所情報" },
            { tag: "ビジネス_TEST", title: "協賛・スポンサー", subtitle: "支援企業一覧" }
        ]
    }
];