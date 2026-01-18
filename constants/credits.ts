export type CreditSection = {
    title: string;
    data: string[];
    type: 'default' | 'grid';
};

export const CREDITS_DATA: CreditSection[] = [
    // --- 【Level 1: 制作・開発チーム】 ---
    // アプリの根幹を作ったメンバー
    {
        title: '企画・開発',
        data: ['石川 壱朗'],
        type: 'default',
    },
    {
        title: 'データ編集・管理',
        data: ['佐藤 健太', '鈴木 美咲'], // 仮名であれば実際の名前に
        type: 'grid',
    },
    {
        title: '初期開発・機材協力',
        data: ['田中 翔太', '高橋 優子'], // 仮名であれば実際の名前に
        type: 'grid',
    },

    // --- 【Level 2: 外部パートナー・専門家】 ---
    // 個人・法人問わず、実務的な支援をしてくれた「大人」たち
    {
        title: '協賛情報連携',
        data: ['株式会社CLAM 佐藤 紘基 様'],
        type: 'default',
    },
    {
        title: '制作協力・仲介', // "仲介"よりも少し広い表現にすると収まりが良いです
        data: ['大沢 直樹 様'],
        type: 'default',
    },
    {
        title: 'テスト・技術支援', // "品質検証"より文脈に即した表現
        data: ['山田 太郎 様'],
        type: 'default',
    },

    // --- 【Level 3: 監修・アドバイザリー】 ---
    // プロジェクトの信頼性を担保する組織
    {
        title: '企画・方針アドバイザー',
        data: ['Microsoft Base Ritsumeikan'],
        type: 'default',
    },
    {
        title: '法務監修',
        data: ['学校法人立命館 法務コンプライアンス室'],
        type: 'default',
    },

    // --- 【Level 4: スペシャルサンクスチーム】 ---
    // 数で貢献してくれた生徒チーム
    {
        title: 'テストチーム',
        data: [
            '伊藤 蓮', '渡辺 陽葵', '山本 陸',
            '中村 結衣', '小林 湊'
        ],
        type: 'grid',
    },
    {
        title: '周辺地域リサーチ',
        data: [
            '加藤 蒼', '吉田 紬', '山口 颯太', '松本 咲良',
            '井上 陽向', '木村 湊斗', '林 芽依', '清水 悠真',
            '斎藤 莉子', '阿部 大翔'
        ],
        type: 'grid',
    },
];