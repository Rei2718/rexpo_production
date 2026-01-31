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
        data: ['西島 一樹', '稲村 湊'], // 仮名であれば実際の名前に
        type: 'grid',
    },
    {
        title: '初期開発・機材協力',
        data: ['山内 大佳良', '稲荷 久敬'], // 仮名であれば実際の名前に
        type: 'grid',
    },
    {
        title: '制作協力・仲介', // "仲介"よりも少し広い表現にすると収まりが良いです
        data: ['大沢 直樹 様'],
        type: 'default',
    },
    {
        title: 'テスト・技術支援', // "品質検証"より文脈に即した表現
        data: ['buntyan 様'],
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
            '田中 達也', '芳賀 智輝', '髙山 つばさ',
            '山内 大佳良', '小林 湊'
        ],
        type: 'grid',
    },
];