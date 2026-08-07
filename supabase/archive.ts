import {
    Banner,
    Category,
    DisplayVenue,
    EventDetails,
    EventOverview,
    EventRankings,
    Feature,
    Food,
    News,
    OrganizationDetails,
    TagEvents,
    TimelineSlot,
    VenueDetails,
    VenueDynamicStatus,
    VenueStaticInfo,
    Verified
} from "./api/types";

export const archiveBanners: Verified<Banner>[] = [
    {
        "banner_public_id": "archive-banner-1",
        "image": "https://picsum.photos/800/400?random=1",
        "link": "https://example.com/banner/1",
        "event_public_id": "archive-event-1",
        "display_order": 1
    },
    {
        "banner_public_id": "archive-banner-2",
        "image": "https://picsum.photos/800/400?random=2",
        "link": "https://example.com/banner/2",
        "event_public_id": "archive-event-2",
        "display_order": 2
    },
    {
        "banner_public_id": "archive-banner-3",
        "image": "https://picsum.photos/800/400?random=3",
        "link": "https://example.com/banner/3",
        "event_public_id": "archive-event-3",
        "display_order": 3
    },
    {
        "banner_public_id": "archive-banner-4",
        "image": "https://picsum.photos/800/400?random=4",
        "link": "https://example.com/banner/4",
        "event_public_id": "archive-event-4",
        "display_order": 4
    },
    {
        "banner_public_id": "archive-banner-5",
        "image": "https://picsum.photos/800/400?random=5",
        "link": "https://example.com/banner/5",
        "event_public_id": "archive-event-5",
        "display_order": 5
    },
    {
        "banner_public_id": "archive-banner-6",
        "image": "https://picsum.photos/800/400?random=6",
        "link": "https://example.com/banner/6",
        "event_public_id": "archive-event-6",
        "display_order": 6
    },
    {
        "banner_public_id": "archive-banner-7",
        "image": "https://picsum.photos/800/400?random=7",
        "link": "https://example.com/banner/7",
        "event_public_id": "archive-event-7",
        "display_order": 7
    },
    {
        "banner_public_id": "archive-banner-8",
        "image": "https://picsum.photos/800/400?random=8",
        "link": "https://example.com/banner/8",
        "event_public_id": "archive-event-8",
        "display_order": 8
    },
    {
        "banner_public_id": "archive-banner-9",
        "image": "https://picsum.photos/800/400?random=9",
        "link": "https://example.com/banner/9",
        "event_public_id": "archive-event-9",
        "display_order": 9
    },
    {
        "banner_public_id": "archive-banner-10",
        "image": "https://picsum.photos/800/400?random=10",
        "link": "https://example.com/banner/10",
        "event_public_id": "archive-event-10",
        "display_order": 10
    }
];

export const archiveFeatures: Verified<Feature>[] = [
    {
        "feature_public_id": "archive-feature-1",
        "name": "注目特集 #1: AIと未来のテクノロジー基調講演",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=20",
        "event_public_id": "archive-event-1",
        "display_order": 1
    },
    {
        "feature_public_id": "archive-feature-2",
        "name": "注目特集 #2: デザインシステム構築の実践ガイド",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=21",
        "event_public_id": "archive-event-2",
        "display_order": 2
    },
    {
        "feature_public_id": "archive-feature-3",
        "name": "注目特集 #3: 次世代メタバース空間のアーキテクチャ",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=22",
        "event_public_id": "archive-event-3",
        "display_order": 3
    },
    {
        "feature_public_id": "archive-feature-4",
        "name": "注目特集 #4: グリーンエネルギーが切り開く持続可能な社会",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=23",
        "event_public_id": "archive-event-4",
        "display_order": 4
    },
    {
        "feature_public_id": "archive-feature-5",
        "name": "注目特集 #5: 量子コンピューティングの実用化と展望",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=24",
        "event_public_id": "archive-event-5",
        "display_order": 5
    },
    {
        "feature_public_id": "archive-feature-6",
        "name": "注目特集 #6: Web3時代の分散型IDとプライバシー",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=25",
        "event_public_id": "archive-event-6",
        "display_order": 6
    },
    {
        "feature_public_id": "archive-feature-7",
        "name": "注目特集 #7: スマートモビリティと自動運転の最前線",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=26",
        "event_public_id": "archive-event-7",
        "display_order": 7
    },
    {
        "feature_public_id": "archive-feature-8",
        "name": "注目特集 #8: ヘルスケアテックの最新イノベーション",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=27",
        "event_public_id": "archive-event-8",
        "display_order": 8
    },
    {
        "feature_public_id": "archive-feature-9",
        "name": "注目特集 #9: 宇宙ビジネスの現状と今後の可能性",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=28",
        "event_public_id": "archive-event-9",
        "display_order": 9
    },
    {
        "feature_public_id": "archive-feature-10",
        "name": "注目特集 #10: サイバーセキュリティ防御戦略2026",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=29",
        "event_public_id": "archive-event-10",
        "display_order": 10
    },
    {
        "feature_public_id": "archive-feature-11",
        "name": "注目特集 #11: 生成AIを活用したプロダクト開発の現場",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=30",
        "event_public_id": "archive-event-11",
        "display_order": 11
    },
    {
        "feature_public_id": "archive-feature-12",
        "name": "注目特集 #12: UXライティングが変えるユーザー体験",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=31",
        "event_public_id": "archive-event-12",
        "display_order": 12
    },
    {
        "feature_public_id": "archive-feature-13",
        "name": "注目特集 #13: フードテックが解決するグローバルな課題",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=32",
        "event_public_id": "archive-event-13",
        "display_order": 13
    },
    {
        "feature_public_id": "archive-feature-14",
        "name": "注目特集 #14: 地方創生とデジタルツインの融合",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=33",
        "event_public_id": "archive-event-14",
        "display_order": 14
    },
    {
        "feature_public_id": "archive-feature-15",
        "name": "注目特集 #15: スタートアップピッチコンテスト決勝",
        "caption": "業界のトップランナーが語る特別セッション",
        "note": "必見アーカイブ",
        "image": "https://picsum.photos/600/400?random=34",
        "event_public_id": "archive-event-15",
        "display_order": 15
    }
];

export const archiveNews: Verified<News>[] = [
    {
        "news_public_id": "archive-news-1",
        "name": "アーカイブニュース #1: セッションレポート公開",
        "caption": "【公式レポート】AIと未来のテクノロジー基調講演のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=40",
        "thumbnail": "https://picsum.photos/400/300?random=40",
        "website": "https://example.com/news/1",
        "performer": {
            "performer_public_id": "archive-performer-1",
            "name": "登壇者 1",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=70"
        },
        "display_order": 1
    },
    {
        "news_public_id": "archive-news-2",
        "name": "アーカイブニュース #2: セッションレポート公開",
        "caption": "【公式レポート】デザインシステム構築の実践ガイドのハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=41",
        "thumbnail": "https://picsum.photos/400/300?random=41",
        "website": "https://example.com/news/2",
        "performer": {
            "performer_public_id": "archive-performer-2",
            "name": "登壇者 2",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=71"
        },
        "display_order": 2
    },
    {
        "news_public_id": "archive-news-3",
        "name": "アーカイブニュース #3: セッションレポート公開",
        "caption": "【公式レポート】次世代メタバース空間のアーキテクチャのハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=42",
        "thumbnail": "https://picsum.photos/400/300?random=42",
        "website": "https://example.com/news/3",
        "performer": {
            "performer_public_id": "archive-performer-3",
            "name": "登壇者 3",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=72"
        },
        "display_order": 3
    },
    {
        "news_public_id": "archive-news-4",
        "name": "アーカイブニュース #4: セッションレポート公開",
        "caption": "【公式レポート】グリーンエネルギーが切り開く持続可能な社会のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=43",
        "thumbnail": "https://picsum.photos/400/300?random=43",
        "website": "https://example.com/news/4",
        "performer": {
            "performer_public_id": "archive-performer-4",
            "name": "登壇者 4",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=73"
        },
        "display_order": 4
    },
    {
        "news_public_id": "archive-news-5",
        "name": "アーカイブニュース #5: セッションレポート公開",
        "caption": "【公式レポート】量子コンピューティングの実用化と展望のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=44",
        "thumbnail": "https://picsum.photos/400/300?random=44",
        "website": "https://example.com/news/5",
        "performer": {
            "performer_public_id": "archive-performer-5",
            "name": "登壇者 5",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=74"
        },
        "display_order": 5
    },
    {
        "news_public_id": "archive-news-6",
        "name": "アーカイブニュース #6: セッションレポート公開",
        "caption": "【公式レポート】Web3時代の分散型IDとプライバシーのハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=45",
        "thumbnail": "https://picsum.photos/400/300?random=45",
        "website": "https://example.com/news/6",
        "performer": {
            "performer_public_id": "archive-performer-6",
            "name": "登壇者 6",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=75"
        },
        "display_order": 6
    },
    {
        "news_public_id": "archive-news-7",
        "name": "アーカイブニュース #7: セッションレポート公開",
        "caption": "【公式レポート】スマートモビリティと自動運転の最前線のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=46",
        "thumbnail": "https://picsum.photos/400/300?random=46",
        "website": "https://example.com/news/7",
        "performer": {
            "performer_public_id": "archive-performer-7",
            "name": "登壇者 7",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=76"
        },
        "display_order": 7
    },
    {
        "news_public_id": "archive-news-8",
        "name": "アーカイブニュース #8: セッションレポート公開",
        "caption": "【公式レポート】ヘルスケアテックの最新イノベーションのハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=47",
        "thumbnail": "https://picsum.photos/400/300?random=47",
        "website": "https://example.com/news/8",
        "performer": {
            "performer_public_id": "archive-performer-8",
            "name": "登壇者 8",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=77"
        },
        "display_order": 8
    },
    {
        "news_public_id": "archive-news-9",
        "name": "アーカイブニュース #9: セッションレポート公開",
        "caption": "【公式レポート】宇宙ビジネスの現状と今後の可能性のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=48",
        "thumbnail": "https://picsum.photos/400/300?random=48",
        "website": "https://example.com/news/9",
        "performer": {
            "performer_public_id": "archive-performer-9",
            "name": "登壇者 9",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=78"
        },
        "display_order": 9
    },
    {
        "news_public_id": "archive-news-10",
        "name": "アーカイブニュース #10: セッションレポート公開",
        "caption": "【公式レポート】サイバーセキュリティ防御戦略2026のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=49",
        "thumbnail": "https://picsum.photos/400/300?random=49",
        "website": "https://example.com/news/10",
        "performer": {
            "performer_public_id": "archive-performer-10",
            "name": "登壇者 10",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=79"
        },
        "display_order": 10
    },
    {
        "news_public_id": "archive-news-11",
        "name": "アーカイブニュース #11: セッションレポート公開",
        "caption": "【公式レポート】生成AIを活用したプロダクト開発の現場のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=50",
        "thumbnail": "https://picsum.photos/400/300?random=50",
        "website": "https://example.com/news/11",
        "performer": {
            "performer_public_id": "archive-performer-11",
            "name": "登壇者 11",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=80"
        },
        "display_order": 11
    },
    {
        "news_public_id": "archive-news-12",
        "name": "アーカイブニュース #12: セッションレポート公開",
        "caption": "【公式レポート】UXライティングが変えるユーザー体験のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=51",
        "thumbnail": "https://picsum.photos/400/300?random=51",
        "website": "https://example.com/news/12",
        "performer": {
            "performer_public_id": "archive-performer-12",
            "name": "登壇者 12",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=81"
        },
        "display_order": 12
    },
    {
        "news_public_id": "archive-news-13",
        "name": "アーカイブニュース #13: セッションレポート公開",
        "caption": "【公式レポート】フードテックが解決するグローバルな課題のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=52",
        "thumbnail": "https://picsum.photos/400/300?random=52",
        "website": "https://example.com/news/13",
        "performer": {
            "performer_public_id": "archive-performer-13",
            "name": "登壇者 13",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=82"
        },
        "display_order": 13
    },
    {
        "news_public_id": "archive-news-14",
        "name": "アーカイブニュース #14: セッションレポート公開",
        "caption": "【公式レポート】地方創生とデジタルツインの融合のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=53",
        "thumbnail": "https://picsum.photos/400/300?random=53",
        "website": "https://example.com/news/14",
        "performer": {
            "performer_public_id": "archive-performer-14",
            "name": "登壇者 14",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=83"
        },
        "display_order": 14
    },
    {
        "news_public_id": "archive-news-15",
        "name": "アーカイブニュース #15: セッションレポート公開",
        "caption": "【公式レポート】スタートアップピッチコンテスト決勝のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=54",
        "thumbnail": "https://picsum.photos/400/300?random=54",
        "website": "https://example.com/news/15",
        "performer": {
            "performer_public_id": "archive-performer-15",
            "name": "登壇者 15",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=84"
        },
        "display_order": 15
    },
    {
        "news_public_id": "archive-news-16",
        "name": "アーカイブニュース #16: セッションレポート公開",
        "caption": "【公式レポート】ロボティクスと自動化の現場導入事例のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=55",
        "thumbnail": "https://picsum.photos/400/300?random=55",
        "website": "https://example.com/news/16",
        "performer": {
            "performer_public_id": "archive-performer-16",
            "name": "登壇者 16",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=85"
        },
        "display_order": 16
    },
    {
        "news_public_id": "archive-news-17",
        "name": "アーカイブニュース #17: セッションレポート公開",
        "caption": "【公式レポート】アジャイル開発とチームビルディングのハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=56",
        "thumbnail": "https://picsum.photos/400/300?random=56",
        "website": "https://example.com/news/17",
        "performer": {
            "performer_public_id": "archive-performer-17",
            "name": "登壇者 17",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=86"
        },
        "display_order": 17
    },
    {
        "news_public_id": "archive-news-18",
        "name": "アーカイブニュース #18: セッションレポート公開",
        "caption": "【公式レポート】データサイエンスによるビジネス変革のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=57",
        "thumbnail": "https://picsum.photos/400/300?random=57",
        "website": "https://example.com/news/18",
        "performer": {
            "performer_public_id": "archive-performer-18",
            "name": "登壇者 18",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=87"
        },
        "display_order": 18
    },
    {
        "news_public_id": "archive-news-19",
        "name": "アーカイブニュース #19: セッションレポート公開",
        "caption": "【公式レポート】オープンソースコミュニティの未来のハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=58",
        "thumbnail": "https://picsum.photos/400/300?random=58",
        "website": "https://example.com/news/19",
        "performer": {
            "performer_public_id": "archive-performer-19",
            "name": "登壇者 19",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=88"
        },
        "display_order": 19
    },
    {
        "news_public_id": "archive-news-20",
        "name": "アーカイブニュース #20: セッションレポート公開",
        "caption": "【公式レポート】AR/VRコンテンツデザインの最新トレンドのハイライト",
        "description": "ご参加いただいた皆様ありがとうございました。当日の講演資料およびアーカイブ映像を順次公開しております。",
        "header_image": "https://picsum.photos/800/400?random=59",
        "thumbnail": "https://picsum.photos/400/300?random=59",
        "website": "https://example.com/news/20",
        "performer": {
            "performer_public_id": "archive-performer-20",
            "name": "登壇者 20",
            "affiliation": "EXPO 運営委員会",
            "icon": "https://picsum.photos/150/150?random=89"
        },
        "display_order": 20
    }
];

export const archiveDisplayVenues: Verified<DisplayVenue>[] = [
    {
        "venue_public_id": "archive-venue-1",
        "name": "メインアリーナ",
        "icon": "https://picsum.photos/100/100?random=100",
        "capacity": 200,
        "floor": 1,
        "map_latitude": 35.6812,
        "map_longitude": 139.7671,
        "display_order": 1
    },
    {
        "venue_public_id": "archive-venue-2",
        "name": "サブホール",
        "icon": "https://picsum.photos/100/100?random=101",
        "capacity": 300,
        "floor": 2,
        "map_latitude": 35.6815,
        "map_longitude": 139.7674,
        "display_order": 2
    },
    {
        "venue_public_id": "archive-venue-3",
        "name": "EXPOドーム",
        "icon": "https://picsum.photos/100/100?random=102",
        "capacity": 400,
        "floor": 1,
        "map_latitude": 35.681799999999996,
        "map_longitude": 139.7677,
        "display_order": 3
    },
    {
        "venue_public_id": "archive-venue-4",
        "name": "イノベーションステージ",
        "icon": "https://picsum.photos/100/100?random=103",
        "capacity": 500,
        "floor": 2,
        "map_latitude": 35.6821,
        "map_longitude": 139.768,
        "display_order": 4
    },
    {
        "venue_public_id": "archive-venue-5",
        "name": "コネクトスクエア",
        "icon": "https://picsum.photos/100/100?random=104",
        "capacity": 600,
        "floor": 1,
        "map_latitude": 35.682399999999994,
        "map_longitude": 139.7683,
        "display_order": 5
    },
    {
        "venue_public_id": "archive-venue-6",
        "name": "フューチャープラザ",
        "icon": "https://picsum.photos/100/100?random=105",
        "capacity": 700,
        "floor": 2,
        "map_latitude": 35.6827,
        "map_longitude": 139.7686,
        "display_order": 6
    },
    {
        "venue_public_id": "archive-venue-7",
        "name": "テックスタジオ",
        "icon": "https://picsum.photos/100/100?random=106",
        "capacity": 800,
        "floor": 1,
        "map_latitude": 35.683,
        "map_longitude": 139.7689,
        "display_order": 7
    },
    {
        "venue_public_id": "archive-venue-8",
        "name": "ワークショップA",
        "icon": "https://picsum.photos/100/100?random=107",
        "capacity": 900,
        "floor": 2,
        "map_latitude": 35.683299999999996,
        "map_longitude": 139.7692,
        "display_order": 8
    },
    {
        "venue_public_id": "archive-venue-9",
        "name": "ワークショップB",
        "icon": "https://picsum.photos/100/100?random=108",
        "capacity": 1000,
        "floor": 1,
        "map_latitude": 35.6836,
        "map_longitude": 139.7695,
        "display_order": 9
    },
    {
        "venue_public_id": "archive-venue-10",
        "name": "オープンステージ",
        "icon": "https://picsum.photos/100/100?random=109",
        "capacity": 1100,
        "floor": 2,
        "map_latitude": 35.683899999999994,
        "map_longitude": 139.7698,
        "display_order": 10
    }
];

export const archiveCategories: Verified<Category>[] = [
    {
        "category_public_id": "archive-cat-1",
        "name": "AI・ロボティクス",
        "icon": "https://picsum.photos/100/100?random=120",
        "display_order": 1
    },
    {
        "category_public_id": "archive-cat-2",
        "name": "Web3・ブロックチェーン",
        "icon": "https://picsum.photos/100/100?random=121",
        "display_order": 2
    },
    {
        "category_public_id": "archive-cat-3",
        "name": "デザイン・UX",
        "icon": "https://picsum.photos/100/100?random=122",
        "display_order": 3
    },
    {
        "category_public_id": "archive-cat-4",
        "name": "グリーンテック",
        "icon": "https://picsum.photos/100/100?random=123",
        "display_order": 4
    },
    {
        "category_public_id": "archive-cat-5",
        "name": "ヘルスケア",
        "icon": "https://picsum.photos/100/100?random=124",
        "display_order": 5
    },
    {
        "category_public_id": "archive-cat-6",
        "name": "宇宙開発",
        "icon": "https://picsum.photos/100/100?random=125",
        "display_order": 6
    },
    {
        "category_public_id": "archive-cat-7",
        "name": "エンタメ・メタバース",
        "icon": "https://picsum.photos/100/100?random=126",
        "display_order": 7
    },
    {
        "category_public_id": "archive-cat-8",
        "name": "フードイノベーション",
        "icon": "https://picsum.photos/100/100?random=127",
        "display_order": 8
    },
    {
        "category_public_id": "archive-cat-9",
        "name": "モビリティ",
        "icon": "https://picsum.photos/100/100?random=128",
        "display_order": 9
    },
    {
        "category_public_id": "archive-cat-10",
        "name": "サイバーセキュリティ",
        "icon": "https://picsum.photos/100/100?random=129",
        "display_order": 10
    }
];

export const archiveTagEvents: Verified<TagEvents>[] = [
    {
        "tag_public_id": "archive-tag-1",
        "name": "アーカイブテーマ #1",
        "caption": "注目のセッションコレクション #1",
        "display_order": 1,
        "events": [
            {
                "event_public_id": "archive-event-1",
                "name": "AIと未来のテクノロジー基調講演 (セッション #1)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=200",
                "display_order": 1
            },
            {
                "event_public_id": "archive-event-2",
                "name": "デザインシステム構築の実践ガイド (セッション #2)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=201",
                "display_order": 2
            },
            {
                "event_public_id": "archive-event-3",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #3)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=202",
                "display_order": 3
            },
            {
                "event_public_id": "archive-event-4",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #4)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=203",
                "display_order": 4
            },
            {
                "event_public_id": "archive-event-5",
                "name": "量子コンピューティングの実用化と展望 (セッション #5)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=204",
                "display_order": 5
            },
            {
                "event_public_id": "archive-event-6",
                "name": "Web3時代の分散型IDとプライバシー (セッション #6)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=205",
                "display_order": 6
            },
            {
                "event_public_id": "archive-event-7",
                "name": "スマートモビリティと自動運転の最前線 (セッション #7)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=206",
                "display_order": 7
            },
            {
                "event_public_id": "archive-event-8",
                "name": "ヘルスケアテックの最新イノベーション (セッション #8)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=207",
                "display_order": 8
            },
            {
                "event_public_id": "archive-event-9",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #9)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=208",
                "display_order": 9
            },
            {
                "event_public_id": "archive-event-10",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #10)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=209",
                "display_order": 10
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-2",
        "name": "アーカイブテーマ #2",
        "caption": "注目のセッションコレクション #2",
        "display_order": 2,
        "events": [
            {
                "event_public_id": "archive-event-11",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #11)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=210",
                "display_order": 11
            },
            {
                "event_public_id": "archive-event-12",
                "name": "UXライティングが変えるユーザー体験 (セッション #12)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=211",
                "display_order": 12
            },
            {
                "event_public_id": "archive-event-13",
                "name": "フードテックが解決するグローバルな課題 (セッション #13)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=212",
                "display_order": 13
            },
            {
                "event_public_id": "archive-event-14",
                "name": "地方創生とデジタルツインの融合 (セッション #14)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=213",
                "display_order": 14
            },
            {
                "event_public_id": "archive-event-15",
                "name": "スタートアップピッチコンテスト決勝 (セッション #15)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=214",
                "display_order": 15
            },
            {
                "event_public_id": "archive-event-16",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #16)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=215",
                "display_order": 16
            },
            {
                "event_public_id": "archive-event-17",
                "name": "アジャイル開発とチームビルディング (セッション #17)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=216",
                "display_order": 17
            },
            {
                "event_public_id": "archive-event-18",
                "name": "データサイエンスによるビジネス変革 (セッション #18)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=217",
                "display_order": 18
            },
            {
                "event_public_id": "archive-event-19",
                "name": "オープンソースコミュニティの未来 (セッション #19)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=218",
                "display_order": 19
            },
            {
                "event_public_id": "archive-event-20",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #20)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=219",
                "display_order": 20
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-3",
        "name": "アーカイブテーマ #3",
        "caption": "注目のセッションコレクション #3",
        "display_order": 3,
        "events": [
            {
                "event_public_id": "archive-event-21",
                "name": "AIと未来のテクノロジー基調講演 (セッション #21)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=220",
                "display_order": 21
            },
            {
                "event_public_id": "archive-event-22",
                "name": "デザインシステム構築の実践ガイド (セッション #22)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=221",
                "display_order": 22
            },
            {
                "event_public_id": "archive-event-23",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #23)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=222",
                "display_order": 23
            },
            {
                "event_public_id": "archive-event-24",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #24)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=223",
                "display_order": 24
            },
            {
                "event_public_id": "archive-event-25",
                "name": "量子コンピューティングの実用化と展望 (セッション #25)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=224",
                "display_order": 25
            },
            {
                "event_public_id": "archive-event-26",
                "name": "Web3時代の分散型IDとプライバシー (セッション #26)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=225",
                "display_order": 26
            },
            {
                "event_public_id": "archive-event-27",
                "name": "スマートモビリティと自動運転の最前線 (セッション #27)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=226",
                "display_order": 27
            },
            {
                "event_public_id": "archive-event-28",
                "name": "ヘルスケアテックの最新イノベーション (セッション #28)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=227",
                "display_order": 28
            },
            {
                "event_public_id": "archive-event-29",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #29)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=228",
                "display_order": 29
            },
            {
                "event_public_id": "archive-event-30",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #30)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=229",
                "display_order": 30
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-4",
        "name": "アーカイブテーマ #4",
        "caption": "注目のセッションコレクション #4",
        "display_order": 4,
        "events": [
            {
                "event_public_id": "archive-event-31",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #31)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=230",
                "display_order": 31
            },
            {
                "event_public_id": "archive-event-32",
                "name": "UXライティングが変えるユーザー体験 (セッション #32)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=231",
                "display_order": 32
            },
            {
                "event_public_id": "archive-event-33",
                "name": "フードテックが解決するグローバルな課題 (セッション #33)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=232",
                "display_order": 33
            },
            {
                "event_public_id": "archive-event-34",
                "name": "地方創生とデジタルツインの融合 (セッション #34)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=233",
                "display_order": 34
            },
            {
                "event_public_id": "archive-event-35",
                "name": "スタートアップピッチコンテスト決勝 (セッション #35)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=234",
                "display_order": 35
            },
            {
                "event_public_id": "archive-event-36",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #36)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=235",
                "display_order": 36
            },
            {
                "event_public_id": "archive-event-37",
                "name": "アジャイル開発とチームビルディング (セッション #37)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=236",
                "display_order": 37
            },
            {
                "event_public_id": "archive-event-38",
                "name": "データサイエンスによるビジネス変革 (セッション #38)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=237",
                "display_order": 38
            },
            {
                "event_public_id": "archive-event-39",
                "name": "オープンソースコミュニティの未来 (セッション #39)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=238",
                "display_order": 39
            },
            {
                "event_public_id": "archive-event-40",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #40)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=239",
                "display_order": 40
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-5",
        "name": "アーカイブテーマ #5",
        "caption": "注目のセッションコレクション #5",
        "display_order": 5,
        "events": [
            {
                "event_public_id": "archive-event-41",
                "name": "AIと未来のテクノロジー基調講演 (セッション #41)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=240",
                "display_order": 41
            },
            {
                "event_public_id": "archive-event-42",
                "name": "デザインシステム構築の実践ガイド (セッション #42)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=241",
                "display_order": 42
            },
            {
                "event_public_id": "archive-event-43",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #43)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=242",
                "display_order": 43
            },
            {
                "event_public_id": "archive-event-44",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #44)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=243",
                "display_order": 44
            },
            {
                "event_public_id": "archive-event-45",
                "name": "量子コンピューティングの実用化と展望 (セッション #45)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=244",
                "display_order": 45
            },
            {
                "event_public_id": "archive-event-46",
                "name": "Web3時代の分散型IDとプライバシー (セッション #46)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=245",
                "display_order": 46
            },
            {
                "event_public_id": "archive-event-47",
                "name": "スマートモビリティと自動運転の最前線 (セッション #47)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=246",
                "display_order": 47
            },
            {
                "event_public_id": "archive-event-48",
                "name": "ヘルスケアテックの最新イノベーション (セッション #48)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=247",
                "display_order": 48
            },
            {
                "event_public_id": "archive-event-49",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #49)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=248",
                "display_order": 49
            },
            {
                "event_public_id": "archive-event-50",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #50)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=249",
                "display_order": 50
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-6",
        "name": "アーカイブテーマ #6",
        "caption": "注目のセッションコレクション #6",
        "display_order": 6,
        "events": [
            {
                "event_public_id": "archive-event-51",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #51)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=250",
                "display_order": 51
            },
            {
                "event_public_id": "archive-event-52",
                "name": "UXライティングが変えるユーザー体験 (セッション #52)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=251",
                "display_order": 52
            },
            {
                "event_public_id": "archive-event-53",
                "name": "フードテックが解決するグローバルな課題 (セッション #53)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=252",
                "display_order": 53
            },
            {
                "event_public_id": "archive-event-54",
                "name": "地方創生とデジタルツインの融合 (セッション #54)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=253",
                "display_order": 54
            },
            {
                "event_public_id": "archive-event-55",
                "name": "スタートアップピッチコンテスト決勝 (セッション #55)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=254",
                "display_order": 55
            },
            {
                "event_public_id": "archive-event-56",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #56)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=255",
                "display_order": 56
            },
            {
                "event_public_id": "archive-event-57",
                "name": "アジャイル開発とチームビルディング (セッション #57)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=256",
                "display_order": 57
            },
            {
                "event_public_id": "archive-event-58",
                "name": "データサイエンスによるビジネス変革 (セッション #58)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=257",
                "display_order": 58
            },
            {
                "event_public_id": "archive-event-59",
                "name": "オープンソースコミュニティの未来 (セッション #59)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=258",
                "display_order": 59
            },
            {
                "event_public_id": "archive-event-60",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #60)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=259",
                "display_order": 60
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-7",
        "name": "アーカイブテーマ #7",
        "caption": "注目のセッションコレクション #7",
        "display_order": 7,
        "events": [
            {
                "event_public_id": "archive-event-61",
                "name": "AIと未来のテクノロジー基調講演 (セッション #61)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=260",
                "display_order": 61
            },
            {
                "event_public_id": "archive-event-62",
                "name": "デザインシステム構築の実践ガイド (セッション #62)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=261",
                "display_order": 62
            },
            {
                "event_public_id": "archive-event-63",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #63)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=262",
                "display_order": 63
            },
            {
                "event_public_id": "archive-event-64",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #64)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=263",
                "display_order": 64
            },
            {
                "event_public_id": "archive-event-65",
                "name": "量子コンピューティングの実用化と展望 (セッション #65)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=264",
                "display_order": 65
            },
            {
                "event_public_id": "archive-event-66",
                "name": "Web3時代の分散型IDとプライバシー (セッション #66)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=265",
                "display_order": 66
            },
            {
                "event_public_id": "archive-event-67",
                "name": "スマートモビリティと自動運転の最前線 (セッション #67)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=266",
                "display_order": 67
            },
            {
                "event_public_id": "archive-event-68",
                "name": "ヘルスケアテックの最新イノベーション (セッション #68)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=267",
                "display_order": 68
            },
            {
                "event_public_id": "archive-event-69",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #69)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=268",
                "display_order": 69
            },
            {
                "event_public_id": "archive-event-70",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #70)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=269",
                "display_order": 70
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-8",
        "name": "アーカイブテーマ #8",
        "caption": "注目のセッションコレクション #8",
        "display_order": 8,
        "events": [
            {
                "event_public_id": "archive-event-71",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #71)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=270",
                "display_order": 71
            },
            {
                "event_public_id": "archive-event-72",
                "name": "UXライティングが変えるユーザー体験 (セッション #72)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=271",
                "display_order": 72
            },
            {
                "event_public_id": "archive-event-73",
                "name": "フードテックが解決するグローバルな課題 (セッション #73)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=272",
                "display_order": 73
            },
            {
                "event_public_id": "archive-event-74",
                "name": "地方創生とデジタルツインの融合 (セッション #74)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=273",
                "display_order": 74
            },
            {
                "event_public_id": "archive-event-75",
                "name": "スタートアップピッチコンテスト決勝 (セッション #75)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=274",
                "display_order": 75
            },
            {
                "event_public_id": "archive-event-76",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #76)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=275",
                "display_order": 76
            },
            {
                "event_public_id": "archive-event-77",
                "name": "アジャイル開発とチームビルディング (セッション #77)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=276",
                "display_order": 77
            },
            {
                "event_public_id": "archive-event-78",
                "name": "データサイエンスによるビジネス変革 (セッション #78)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=277",
                "display_order": 78
            },
            {
                "event_public_id": "archive-event-79",
                "name": "オープンソースコミュニティの未来 (セッション #79)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=278",
                "display_order": 79
            },
            {
                "event_public_id": "archive-event-80",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #80)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=279",
                "display_order": 80
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-9",
        "name": "アーカイブテーマ #9",
        "caption": "注目のセッションコレクション #9",
        "display_order": 9,
        "events": [
            {
                "event_public_id": "archive-event-81",
                "name": "AIと未来のテクノロジー基調講演 (セッション #81)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=280",
                "display_order": 81
            },
            {
                "event_public_id": "archive-event-82",
                "name": "デザインシステム構築の実践ガイド (セッション #82)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=281",
                "display_order": 82
            },
            {
                "event_public_id": "archive-event-83",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #83)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=282",
                "display_order": 83
            },
            {
                "event_public_id": "archive-event-84",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #84)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=283",
                "display_order": 84
            },
            {
                "event_public_id": "archive-event-85",
                "name": "量子コンピューティングの実用化と展望 (セッション #85)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=284",
                "display_order": 85
            },
            {
                "event_public_id": "archive-event-86",
                "name": "Web3時代の分散型IDとプライバシー (セッション #86)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=285",
                "display_order": 86
            },
            {
                "event_public_id": "archive-event-87",
                "name": "スマートモビリティと自動運転の最前線 (セッション #87)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=286",
                "display_order": 87
            },
            {
                "event_public_id": "archive-event-88",
                "name": "ヘルスケアテックの最新イノベーション (セッション #88)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=287",
                "display_order": 88
            },
            {
                "event_public_id": "archive-event-89",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #89)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=288",
                "display_order": 89
            },
            {
                "event_public_id": "archive-event-90",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #90)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=289",
                "display_order": 90
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-10",
        "name": "アーカイブテーマ #10",
        "caption": "注目のセッションコレクション #10",
        "display_order": 10,
        "events": [
            {
                "event_public_id": "archive-event-91",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #91)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=290",
                "display_order": 91
            },
            {
                "event_public_id": "archive-event-92",
                "name": "UXライティングが変えるユーザー体験 (セッション #92)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=291",
                "display_order": 92
            },
            {
                "event_public_id": "archive-event-93",
                "name": "フードテックが解決するグローバルな課題 (セッション #93)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=292",
                "display_order": 93
            },
            {
                "event_public_id": "archive-event-94",
                "name": "地方創生とデジタルツインの融合 (セッション #94)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=293",
                "display_order": 94
            },
            {
                "event_public_id": "archive-event-95",
                "name": "スタートアップピッチコンテスト決勝 (セッション #95)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=294",
                "display_order": 95
            },
            {
                "event_public_id": "archive-event-96",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #96)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=295",
                "display_order": 96
            },
            {
                "event_public_id": "archive-event-97",
                "name": "アジャイル開発とチームビルディング (セッション #97)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=296",
                "display_order": 97
            },
            {
                "event_public_id": "archive-event-98",
                "name": "データサイエンスによるビジネス変革 (セッション #98)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=297",
                "display_order": 98
            },
            {
                "event_public_id": "archive-event-99",
                "name": "オープンソースコミュニティの未来 (セッション #99)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=298",
                "display_order": 99
            },
            {
                "event_public_id": "archive-event-100",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #100)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=299",
                "display_order": 100
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-11",
        "name": "アーカイブテーマ #11",
        "caption": "注目のセッションコレクション #11",
        "display_order": 11,
        "events": [
            {
                "event_public_id": "archive-event-101",
                "name": "AIと未来のテクノロジー基調講演 (セッション #101)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=300",
                "display_order": 101
            },
            {
                "event_public_id": "archive-event-102",
                "name": "デザインシステム構築の実践ガイド (セッション #102)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=301",
                "display_order": 102
            },
            {
                "event_public_id": "archive-event-103",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #103)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=302",
                "display_order": 103
            },
            {
                "event_public_id": "archive-event-104",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #104)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=303",
                "display_order": 104
            },
            {
                "event_public_id": "archive-event-105",
                "name": "量子コンピューティングの実用化と展望 (セッション #105)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=304",
                "display_order": 105
            },
            {
                "event_public_id": "archive-event-106",
                "name": "Web3時代の分散型IDとプライバシー (セッション #106)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=305",
                "display_order": 106
            },
            {
                "event_public_id": "archive-event-107",
                "name": "スマートモビリティと自動運転の最前線 (セッション #107)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=306",
                "display_order": 107
            },
            {
                "event_public_id": "archive-event-108",
                "name": "ヘルスケアテックの最新イノベーション (セッション #108)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=307",
                "display_order": 108
            },
            {
                "event_public_id": "archive-event-109",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #109)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=308",
                "display_order": 109
            },
            {
                "event_public_id": "archive-event-110",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #110)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=309",
                "display_order": 110
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-12",
        "name": "アーカイブテーマ #12",
        "caption": "注目のセッションコレクション #12",
        "display_order": 12,
        "events": [
            {
                "event_public_id": "archive-event-111",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #111)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=310",
                "display_order": 111
            },
            {
                "event_public_id": "archive-event-112",
                "name": "UXライティングが変えるユーザー体験 (セッション #112)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=311",
                "display_order": 112
            },
            {
                "event_public_id": "archive-event-113",
                "name": "フードテックが解決するグローバルな課題 (セッション #113)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=312",
                "display_order": 113
            },
            {
                "event_public_id": "archive-event-114",
                "name": "地方創生とデジタルツインの融合 (セッション #114)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=313",
                "display_order": 114
            },
            {
                "event_public_id": "archive-event-115",
                "name": "スタートアップピッチコンテスト決勝 (セッション #115)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=314",
                "display_order": 115
            },
            {
                "event_public_id": "archive-event-116",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #116)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=315",
                "display_order": 116
            },
            {
                "event_public_id": "archive-event-117",
                "name": "アジャイル開発とチームビルディング (セッション #117)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=316",
                "display_order": 117
            },
            {
                "event_public_id": "archive-event-118",
                "name": "データサイエンスによるビジネス変革 (セッション #118)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=317",
                "display_order": 118
            },
            {
                "event_public_id": "archive-event-119",
                "name": "オープンソースコミュニティの未来 (セッション #119)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=318",
                "display_order": 119
            },
            {
                "event_public_id": "archive-event-120",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #120)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=319",
                "display_order": 120
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-13",
        "name": "アーカイブテーマ #13",
        "caption": "注目のセッションコレクション #13",
        "display_order": 13,
        "events": [
            {
                "event_public_id": "archive-event-121",
                "name": "AIと未来のテクノロジー基調講演 (セッション #121)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=320",
                "display_order": 121
            },
            {
                "event_public_id": "archive-event-122",
                "name": "デザインシステム構築の実践ガイド (セッション #122)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=321",
                "display_order": 122
            },
            {
                "event_public_id": "archive-event-123",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #123)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=322",
                "display_order": 123
            },
            {
                "event_public_id": "archive-event-124",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #124)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=323",
                "display_order": 124
            },
            {
                "event_public_id": "archive-event-125",
                "name": "量子コンピューティングの実用化と展望 (セッション #125)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=324",
                "display_order": 125
            },
            {
                "event_public_id": "archive-event-126",
                "name": "Web3時代の分散型IDとプライバシー (セッション #126)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=325",
                "display_order": 126
            },
            {
                "event_public_id": "archive-event-127",
                "name": "スマートモビリティと自動運転の最前線 (セッション #127)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=326",
                "display_order": 127
            },
            {
                "event_public_id": "archive-event-128",
                "name": "ヘルスケアテックの最新イノベーション (セッション #128)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=327",
                "display_order": 128
            },
            {
                "event_public_id": "archive-event-129",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #129)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=328",
                "display_order": 129
            },
            {
                "event_public_id": "archive-event-130",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #130)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=329",
                "display_order": 130
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-14",
        "name": "アーカイブテーマ #14",
        "caption": "注目のセッションコレクション #14",
        "display_order": 14,
        "events": [
            {
                "event_public_id": "archive-event-131",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #131)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=330",
                "display_order": 131
            },
            {
                "event_public_id": "archive-event-132",
                "name": "UXライティングが変えるユーザー体験 (セッション #132)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=331",
                "display_order": 132
            },
            {
                "event_public_id": "archive-event-133",
                "name": "フードテックが解決するグローバルな課題 (セッション #133)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=332",
                "display_order": 133
            },
            {
                "event_public_id": "archive-event-134",
                "name": "地方創生とデジタルツインの融合 (セッション #134)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=333",
                "display_order": 134
            },
            {
                "event_public_id": "archive-event-135",
                "name": "スタートアップピッチコンテスト決勝 (セッション #135)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=334",
                "display_order": 135
            },
            {
                "event_public_id": "archive-event-136",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #136)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=335",
                "display_order": 136
            },
            {
                "event_public_id": "archive-event-137",
                "name": "アジャイル開発とチームビルディング (セッション #137)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=336",
                "display_order": 137
            },
            {
                "event_public_id": "archive-event-138",
                "name": "データサイエンスによるビジネス変革 (セッション #138)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=337",
                "display_order": 138
            },
            {
                "event_public_id": "archive-event-139",
                "name": "オープンソースコミュニティの未来 (セッション #139)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=338",
                "display_order": 139
            },
            {
                "event_public_id": "archive-event-140",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #140)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=339",
                "display_order": 140
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-15",
        "name": "アーカイブテーマ #15",
        "caption": "注目のセッションコレクション #15",
        "display_order": 15,
        "events": [
            {
                "event_public_id": "archive-event-141",
                "name": "AIと未来のテクノロジー基調講演 (セッション #141)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=340",
                "display_order": 141
            },
            {
                "event_public_id": "archive-event-142",
                "name": "デザインシステム構築の実践ガイド (セッション #142)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=341",
                "display_order": 142
            },
            {
                "event_public_id": "archive-event-143",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #143)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=342",
                "display_order": 143
            },
            {
                "event_public_id": "archive-event-144",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #144)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=343",
                "display_order": 144
            },
            {
                "event_public_id": "archive-event-145",
                "name": "量子コンピューティングの実用化と展望 (セッション #145)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=344",
                "display_order": 145
            },
            {
                "event_public_id": "archive-event-146",
                "name": "Web3時代の分散型IDとプライバシー (セッション #146)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=345",
                "display_order": 146
            },
            {
                "event_public_id": "archive-event-147",
                "name": "スマートモビリティと自動運転の最前線 (セッション #147)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=346",
                "display_order": 147
            },
            {
                "event_public_id": "archive-event-148",
                "name": "ヘルスケアテックの最新イノベーション (セッション #148)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=347",
                "display_order": 148
            },
            {
                "event_public_id": "archive-event-149",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #149)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=348",
                "display_order": 149
            },
            {
                "event_public_id": "archive-event-150",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #150)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=349",
                "display_order": 150
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-16",
        "name": "アーカイブテーマ #16",
        "caption": "注目のセッションコレクション #16",
        "display_order": 16,
        "events": [
            {
                "event_public_id": "archive-event-151",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #151)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=350",
                "display_order": 151
            },
            {
                "event_public_id": "archive-event-152",
                "name": "UXライティングが変えるユーザー体験 (セッション #152)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=351",
                "display_order": 152
            },
            {
                "event_public_id": "archive-event-153",
                "name": "フードテックが解決するグローバルな課題 (セッション #153)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=352",
                "display_order": 153
            },
            {
                "event_public_id": "archive-event-154",
                "name": "地方創生とデジタルツインの融合 (セッション #154)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=353",
                "display_order": 154
            },
            {
                "event_public_id": "archive-event-155",
                "name": "スタートアップピッチコンテスト決勝 (セッション #155)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=354",
                "display_order": 155
            },
            {
                "event_public_id": "archive-event-156",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #156)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=355",
                "display_order": 156
            },
            {
                "event_public_id": "archive-event-157",
                "name": "アジャイル開発とチームビルディング (セッション #157)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=356",
                "display_order": 157
            },
            {
                "event_public_id": "archive-event-158",
                "name": "データサイエンスによるビジネス変革 (セッション #158)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=357",
                "display_order": 158
            },
            {
                "event_public_id": "archive-event-159",
                "name": "オープンソースコミュニティの未来 (セッション #159)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=358",
                "display_order": 159
            },
            {
                "event_public_id": "archive-event-160",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #160)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=359",
                "display_order": 160
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-17",
        "name": "アーカイブテーマ #17",
        "caption": "注目のセッションコレクション #17",
        "display_order": 17,
        "events": [
            {
                "event_public_id": "archive-event-161",
                "name": "AIと未来のテクノロジー基調講演 (セッション #161)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=360",
                "display_order": 161
            },
            {
                "event_public_id": "archive-event-162",
                "name": "デザインシステム構築の実践ガイド (セッション #162)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=361",
                "display_order": 162
            },
            {
                "event_public_id": "archive-event-163",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #163)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=362",
                "display_order": 163
            },
            {
                "event_public_id": "archive-event-164",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #164)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=363",
                "display_order": 164
            },
            {
                "event_public_id": "archive-event-165",
                "name": "量子コンピューティングの実用化と展望 (セッション #165)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=364",
                "display_order": 165
            },
            {
                "event_public_id": "archive-event-166",
                "name": "Web3時代の分散型IDとプライバシー (セッション #166)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=365",
                "display_order": 166
            },
            {
                "event_public_id": "archive-event-167",
                "name": "スマートモビリティと自動運転の最前線 (セッション #167)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=366",
                "display_order": 167
            },
            {
                "event_public_id": "archive-event-168",
                "name": "ヘルスケアテックの最新イノベーション (セッション #168)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=367",
                "display_order": 168
            },
            {
                "event_public_id": "archive-event-169",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #169)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=368",
                "display_order": 169
            },
            {
                "event_public_id": "archive-event-170",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #170)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=369",
                "display_order": 170
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-18",
        "name": "アーカイブテーマ #18",
        "caption": "注目のセッションコレクション #18",
        "display_order": 18,
        "events": [
            {
                "event_public_id": "archive-event-171",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #171)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=370",
                "display_order": 171
            },
            {
                "event_public_id": "archive-event-172",
                "name": "UXライティングが変えるユーザー体験 (セッション #172)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=371",
                "display_order": 172
            },
            {
                "event_public_id": "archive-event-173",
                "name": "フードテックが解決するグローバルな課題 (セッション #173)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=372",
                "display_order": 173
            },
            {
                "event_public_id": "archive-event-174",
                "name": "地方創生とデジタルツインの融合 (セッション #174)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=373",
                "display_order": 174
            },
            {
                "event_public_id": "archive-event-175",
                "name": "スタートアップピッチコンテスト決勝 (セッション #175)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=374",
                "display_order": 175
            },
            {
                "event_public_id": "archive-event-176",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #176)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=375",
                "display_order": 176
            },
            {
                "event_public_id": "archive-event-177",
                "name": "アジャイル開発とチームビルディング (セッション #177)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=376",
                "display_order": 177
            },
            {
                "event_public_id": "archive-event-178",
                "name": "データサイエンスによるビジネス変革 (セッション #178)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=377",
                "display_order": 178
            },
            {
                "event_public_id": "archive-event-179",
                "name": "オープンソースコミュニティの未来 (セッション #179)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=378",
                "display_order": 179
            },
            {
                "event_public_id": "archive-event-180",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #180)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=379",
                "display_order": 180
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-19",
        "name": "アーカイブテーマ #19",
        "caption": "注目のセッションコレクション #19",
        "display_order": 19,
        "events": [
            {
                "event_public_id": "archive-event-181",
                "name": "AIと未来のテクノロジー基調講演 (セッション #181)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=380",
                "display_order": 181
            },
            {
                "event_public_id": "archive-event-182",
                "name": "デザインシステム構築の実践ガイド (セッション #182)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=381",
                "display_order": 182
            },
            {
                "event_public_id": "archive-event-183",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #183)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=382",
                "display_order": 183
            },
            {
                "event_public_id": "archive-event-184",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #184)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=383",
                "display_order": 184
            },
            {
                "event_public_id": "archive-event-185",
                "name": "量子コンピューティングの実用化と展望 (セッション #185)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=384",
                "display_order": 185
            },
            {
                "event_public_id": "archive-event-186",
                "name": "Web3時代の分散型IDとプライバシー (セッション #186)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=385",
                "display_order": 186
            },
            {
                "event_public_id": "archive-event-187",
                "name": "スマートモビリティと自動運転の最前線 (セッション #187)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=386",
                "display_order": 187
            },
            {
                "event_public_id": "archive-event-188",
                "name": "ヘルスケアテックの最新イノベーション (セッション #188)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=387",
                "display_order": 188
            },
            {
                "event_public_id": "archive-event-189",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #189)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=388",
                "display_order": 189
            },
            {
                "event_public_id": "archive-event-190",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #190)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=389",
                "display_order": 190
            }
        ]
    },
    {
        "tag_public_id": "archive-tag-20",
        "name": "アーカイブテーマ #20",
        "caption": "注目のセッションコレクション #20",
        "display_order": 20,
        "events": [
            {
                "event_public_id": "archive-event-191",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #191)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=390",
                "display_order": 191
            },
            {
                "event_public_id": "archive-event-192",
                "name": "UXライティングが変えるユーザー体験 (セッション #192)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=391",
                "display_order": 192
            },
            {
                "event_public_id": "archive-event-193",
                "name": "フードテックが解決するグローバルな課題 (セッション #193)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=392",
                "display_order": 193
            },
            {
                "event_public_id": "archive-event-194",
                "name": "地方創生とデジタルツインの融合 (セッション #194)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=393",
                "display_order": 194
            },
            {
                "event_public_id": "archive-event-195",
                "name": "スタートアップピッチコンテスト決勝 (セッション #195)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=394",
                "display_order": 195
            },
            {
                "event_public_id": "archive-event-196",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #196)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=395",
                "display_order": 196
            },
            {
                "event_public_id": "archive-event-197",
                "name": "アジャイル開発とチームビルディング (セッション #197)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=396",
                "display_order": 197
            },
            {
                "event_public_id": "archive-event-198",
                "name": "データサイエンスによるビジネス変革 (セッション #198)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=397",
                "display_order": 198
            },
            {
                "event_public_id": "archive-event-199",
                "name": "オープンソースコミュニティの未来 (セッション #199)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=398",
                "display_order": 199
            },
            {
                "event_public_id": "archive-event-200",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #200)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=399",
                "display_order": 200
            }
        ]
    }
];

export const archiveEventDetails: Record<string, Verified<EventDetails>> = {
    "archive-event-1": {
        "event_public_id": "archive-event-1",
        "header_image": "https://picsum.photos/800/400?random=200",
        "icon": "https://picsum.photos/200/200?random=200",
        "name": "AIと未来のテクノロジー基調講演 (セッション #1)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AIと未来のテクノロジー基調講演」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1000",
            "https://picsum.photos/600/400?random=2000"
        ],
        "organization": {
            "organization_public_id": "archive-org-1",
            "name": "パートナー企業 #1",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=500",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-1",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-1",
                "name": "スピーカー 1",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=600",
                "display_order": 1
            }
        ],
        "display_order": 1
    },
    "archive-event-2": {
        "event_public_id": "archive-event-2",
        "header_image": "https://picsum.photos/800/400?random=201",
        "icon": "https://picsum.photos/200/200?random=201",
        "name": "デザインシステム構築の実践ガイド (セッション #2)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「デザインシステム構築の実践ガイド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1001",
            "https://picsum.photos/600/400?random=2001"
        ],
        "organization": {
            "organization_public_id": "archive-org-2",
            "name": "パートナー企業 #2",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=501",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-2",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-2",
                "name": "スピーカー 2",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=601",
                "display_order": 1
            }
        ],
        "display_order": 2
    },
    "archive-event-3": {
        "event_public_id": "archive-event-3",
        "header_image": "https://picsum.photos/800/400?random=202",
        "icon": "https://picsum.photos/200/200?random=202",
        "name": "次世代メタバース空間のアーキテクチャ (セッション #3)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「次世代メタバース空間のアーキテクチャ」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1002",
            "https://picsum.photos/600/400?random=2002"
        ],
        "organization": {
            "organization_public_id": "archive-org-3",
            "name": "パートナー企業 #3",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=502",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-3",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-3",
                "name": "スピーカー 3",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=602",
                "display_order": 1
            }
        ],
        "display_order": 3
    },
    "archive-event-4": {
        "event_public_id": "archive-event-4",
        "header_image": "https://picsum.photos/800/400?random=203",
        "icon": "https://picsum.photos/200/200?random=203",
        "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #4)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「グリーンエネルギーが切り開く持続可能な社会」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1003",
            "https://picsum.photos/600/400?random=2003"
        ],
        "organization": {
            "organization_public_id": "archive-org-4",
            "name": "パートナー企業 #4",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=503",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-4",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-4",
                "name": "スピーカー 4",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=603",
                "display_order": 1
            }
        ],
        "display_order": 4
    },
    "archive-event-5": {
        "event_public_id": "archive-event-5",
        "header_image": "https://picsum.photos/800/400?random=204",
        "icon": "https://picsum.photos/200/200?random=204",
        "name": "量子コンピューティングの実用化と展望 (セッション #5)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「量子コンピューティングの実用化と展望」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1004",
            "https://picsum.photos/600/400?random=2004"
        ],
        "organization": {
            "organization_public_id": "archive-org-5",
            "name": "パートナー企業 #5",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=504",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-5",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-5",
                "name": "スピーカー 5",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=604",
                "display_order": 1
            }
        ],
        "display_order": 5
    },
    "archive-event-6": {
        "event_public_id": "archive-event-6",
        "header_image": "https://picsum.photos/800/400?random=205",
        "icon": "https://picsum.photos/200/200?random=205",
        "name": "Web3時代の分散型IDとプライバシー (セッション #6)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「Web3時代の分散型IDとプライバシー」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1005",
            "https://picsum.photos/600/400?random=2005"
        ],
        "organization": {
            "organization_public_id": "archive-org-6",
            "name": "パートナー企業 #6",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=505",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-6",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-6",
                "name": "スピーカー 6",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=605",
                "display_order": 1
            }
        ],
        "display_order": 6
    },
    "archive-event-7": {
        "event_public_id": "archive-event-7",
        "header_image": "https://picsum.photos/800/400?random=206",
        "icon": "https://picsum.photos/200/200?random=206",
        "name": "スマートモビリティと自動運転の最前線 (セッション #7)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スマートモビリティと自動運転の最前線」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1006",
            "https://picsum.photos/600/400?random=2006"
        ],
        "organization": {
            "organization_public_id": "archive-org-7",
            "name": "パートナー企業 #7",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=506",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-7",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-7",
                "name": "スピーカー 7",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=606",
                "display_order": 1
            }
        ],
        "display_order": 7
    },
    "archive-event-8": {
        "event_public_id": "archive-event-8",
        "header_image": "https://picsum.photos/800/400?random=207",
        "icon": "https://picsum.photos/200/200?random=207",
        "name": "ヘルスケアテックの最新イノベーション (セッション #8)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ヘルスケアテックの最新イノベーション」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1007",
            "https://picsum.photos/600/400?random=2007"
        ],
        "organization": {
            "organization_public_id": "archive-org-8",
            "name": "パートナー企業 #8",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=507",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-8",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-8",
                "name": "スピーカー 8",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=607",
                "display_order": 1
            }
        ],
        "display_order": 8
    },
    "archive-event-9": {
        "event_public_id": "archive-event-9",
        "header_image": "https://picsum.photos/800/400?random=208",
        "icon": "https://picsum.photos/200/200?random=208",
        "name": "宇宙ビジネスの現状と今後の可能性 (セッション #9)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「宇宙ビジネスの現状と今後の可能性」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1008",
            "https://picsum.photos/600/400?random=2008"
        ],
        "organization": {
            "organization_public_id": "archive-org-9",
            "name": "パートナー企業 #9",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=508",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-9",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-9",
                "name": "スピーカー 9",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=608",
                "display_order": 1
            }
        ],
        "display_order": 9
    },
    "archive-event-10": {
        "event_public_id": "archive-event-10",
        "header_image": "https://picsum.photos/800/400?random=209",
        "icon": "https://picsum.photos/200/200?random=209",
        "name": "サイバーセキュリティ防御戦略2026 (セッション #10)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「サイバーセキュリティ防御戦略2026」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1009",
            "https://picsum.photos/600/400?random=2009"
        ],
        "organization": {
            "organization_public_id": "archive-org-10",
            "name": "パートナー企業 #10",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=509",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-10",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-10",
                "name": "スピーカー 10",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=609",
                "display_order": 1
            }
        ],
        "display_order": 10
    },
    "archive-event-11": {
        "event_public_id": "archive-event-11",
        "header_image": "https://picsum.photos/800/400?random=210",
        "icon": "https://picsum.photos/200/200?random=210",
        "name": "生成AIを活用したプロダクト開発の現場 (セッション #11)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「生成AIを活用したプロダクト開発の現場」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1010",
            "https://picsum.photos/600/400?random=2010"
        ],
        "organization": {
            "organization_public_id": "archive-org-11",
            "name": "パートナー企業 #11",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=510",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-2",
                "name": "アーカイブテーマ #2",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-11",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-11",
                "name": "スピーカー 11",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=610",
                "display_order": 1
            }
        ],
        "display_order": 11
    },
    "archive-event-12": {
        "event_public_id": "archive-event-12",
        "header_image": "https://picsum.photos/800/400?random=211",
        "icon": "https://picsum.photos/200/200?random=211",
        "name": "UXライティングが変えるユーザー体験 (セッション #12)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「UXライティングが変えるユーザー体験」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1011",
            "https://picsum.photos/600/400?random=2011"
        ],
        "organization": {
            "organization_public_id": "archive-org-12",
            "name": "パートナー企業 #12",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=511",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-2",
                "name": "アーカイブテーマ #2",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-12",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-12",
                "name": "スピーカー 12",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=611",
                "display_order": 1
            }
        ],
        "display_order": 12
    },
    "archive-event-13": {
        "event_public_id": "archive-event-13",
        "header_image": "https://picsum.photos/800/400?random=212",
        "icon": "https://picsum.photos/200/200?random=212",
        "name": "フードテックが解決するグローバルな課題 (セッション #13)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「フードテックが解決するグローバルな課題」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1012",
            "https://picsum.photos/600/400?random=2012"
        ],
        "organization": {
            "organization_public_id": "archive-org-13",
            "name": "パートナー企業 #13",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=512",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-2",
                "name": "アーカイブテーマ #2",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-13",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-13",
                "name": "スピーカー 13",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=612",
                "display_order": 1
            }
        ],
        "display_order": 13
    },
    "archive-event-14": {
        "event_public_id": "archive-event-14",
        "header_image": "https://picsum.photos/800/400?random=213",
        "icon": "https://picsum.photos/200/200?random=213",
        "name": "地方創生とデジタルツインの融合 (セッション #14)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「地方創生とデジタルツインの融合」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1013",
            "https://picsum.photos/600/400?random=2013"
        ],
        "organization": {
            "organization_public_id": "archive-org-14",
            "name": "パートナー企業 #14",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=513",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-2",
                "name": "アーカイブテーマ #2",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-14",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-14",
                "name": "スピーカー 14",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=613",
                "display_order": 1
            }
        ],
        "display_order": 14
    },
    "archive-event-15": {
        "event_public_id": "archive-event-15",
        "header_image": "https://picsum.photos/800/400?random=214",
        "icon": "https://picsum.photos/200/200?random=214",
        "name": "スタートアップピッチコンテスト決勝 (セッション #15)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スタートアップピッチコンテスト決勝」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1014",
            "https://picsum.photos/600/400?random=2014"
        ],
        "organization": {
            "organization_public_id": "archive-org-15",
            "name": "パートナー企業 #15",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=514",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-2",
                "name": "アーカイブテーマ #2",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-15",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-15",
                "name": "スピーカー 15",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=614",
                "display_order": 1
            }
        ],
        "display_order": 15
    },
    "archive-event-16": {
        "event_public_id": "archive-event-16",
        "header_image": "https://picsum.photos/800/400?random=215",
        "icon": "https://picsum.photos/200/200?random=215",
        "name": "ロボティクスと自動化の現場導入事例 (セッション #16)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ロボティクスと自動化の現場導入事例」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1015",
            "https://picsum.photos/600/400?random=2015"
        ],
        "organization": {
            "organization_public_id": "archive-org-16",
            "name": "パートナー企業 #16",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=515",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-2",
                "name": "アーカイブテーマ #2",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-16",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-16",
                "name": "スピーカー 16",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=615",
                "display_order": 1
            }
        ],
        "display_order": 16
    },
    "archive-event-17": {
        "event_public_id": "archive-event-17",
        "header_image": "https://picsum.photos/800/400?random=216",
        "icon": "https://picsum.photos/200/200?random=216",
        "name": "アジャイル開発とチームビルディング (セッション #17)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「アジャイル開発とチームビルディング」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1016",
            "https://picsum.photos/600/400?random=2016"
        ],
        "organization": {
            "organization_public_id": "archive-org-17",
            "name": "パートナー企業 #17",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=516",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-2",
                "name": "アーカイブテーマ #2",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-17",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-17",
                "name": "スピーカー 17",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=616",
                "display_order": 1
            }
        ],
        "display_order": 17
    },
    "archive-event-18": {
        "event_public_id": "archive-event-18",
        "header_image": "https://picsum.photos/800/400?random=217",
        "icon": "https://picsum.photos/200/200?random=217",
        "name": "データサイエンスによるビジネス変革 (セッション #18)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「データサイエンスによるビジネス変革」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1017",
            "https://picsum.photos/600/400?random=2017"
        ],
        "organization": {
            "organization_public_id": "archive-org-18",
            "name": "パートナー企業 #18",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=517",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-2",
                "name": "アーカイブテーマ #2",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-18",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-18",
                "name": "スピーカー 18",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=617",
                "display_order": 1
            }
        ],
        "display_order": 18
    },
    "archive-event-19": {
        "event_public_id": "archive-event-19",
        "header_image": "https://picsum.photos/800/400?random=218",
        "icon": "https://picsum.photos/200/200?random=218",
        "name": "オープンソースコミュニティの未来 (セッション #19)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「オープンソースコミュニティの未来」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1018",
            "https://picsum.photos/600/400?random=2018"
        ],
        "organization": {
            "organization_public_id": "archive-org-19",
            "name": "パートナー企業 #19",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=518",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-2",
                "name": "アーカイブテーマ #2",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-19",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-19",
                "name": "スピーカー 19",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=618",
                "display_order": 1
            }
        ],
        "display_order": 19
    },
    "archive-event-20": {
        "event_public_id": "archive-event-20",
        "header_image": "https://picsum.photos/800/400?random=219",
        "icon": "https://picsum.photos/200/200?random=219",
        "name": "AR/VRコンテンツデザインの最新トレンド (セッション #20)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AR/VRコンテンツデザインの最新トレンド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1019",
            "https://picsum.photos/600/400?random=2019"
        ],
        "organization": {
            "organization_public_id": "archive-org-20",
            "name": "パートナー企業 #20",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=519",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-2",
                "name": "アーカイブテーマ #2",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-20",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-20",
                "name": "スピーカー 20",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=619",
                "display_order": 1
            }
        ],
        "display_order": 20
    },
    "archive-event-21": {
        "event_public_id": "archive-event-21",
        "header_image": "https://picsum.photos/800/400?random=220",
        "icon": "https://picsum.photos/200/200?random=220",
        "name": "AIと未来のテクノロジー基調講演 (セッション #21)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AIと未来のテクノロジー基調講演」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1020",
            "https://picsum.photos/600/400?random=2020"
        ],
        "organization": {
            "organization_public_id": "archive-org-21",
            "name": "パートナー企業 #21",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=520",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-3",
                "name": "アーカイブテーマ #3",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-21",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-21",
                "name": "スピーカー 21",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=620",
                "display_order": 1
            }
        ],
        "display_order": 21
    },
    "archive-event-22": {
        "event_public_id": "archive-event-22",
        "header_image": "https://picsum.photos/800/400?random=221",
        "icon": "https://picsum.photos/200/200?random=221",
        "name": "デザインシステム構築の実践ガイド (セッション #22)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「デザインシステム構築の実践ガイド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1021",
            "https://picsum.photos/600/400?random=2021"
        ],
        "organization": {
            "organization_public_id": "archive-org-22",
            "name": "パートナー企業 #22",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=521",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-3",
                "name": "アーカイブテーマ #3",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-22",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-22",
                "name": "スピーカー 22",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=621",
                "display_order": 1
            }
        ],
        "display_order": 22
    },
    "archive-event-23": {
        "event_public_id": "archive-event-23",
        "header_image": "https://picsum.photos/800/400?random=222",
        "icon": "https://picsum.photos/200/200?random=222",
        "name": "次世代メタバース空間のアーキテクチャ (セッション #23)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「次世代メタバース空間のアーキテクチャ」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1022",
            "https://picsum.photos/600/400?random=2022"
        ],
        "organization": {
            "organization_public_id": "archive-org-23",
            "name": "パートナー企業 #23",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=522",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-3",
                "name": "アーカイブテーマ #3",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-23",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-23",
                "name": "スピーカー 23",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=622",
                "display_order": 1
            }
        ],
        "display_order": 23
    },
    "archive-event-24": {
        "event_public_id": "archive-event-24",
        "header_image": "https://picsum.photos/800/400?random=223",
        "icon": "https://picsum.photos/200/200?random=223",
        "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #24)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「グリーンエネルギーが切り開く持続可能な社会」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1023",
            "https://picsum.photos/600/400?random=2023"
        ],
        "organization": {
            "organization_public_id": "archive-org-24",
            "name": "パートナー企業 #24",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=523",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-3",
                "name": "アーカイブテーマ #3",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-24",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-24",
                "name": "スピーカー 24",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=623",
                "display_order": 1
            }
        ],
        "display_order": 24
    },
    "archive-event-25": {
        "event_public_id": "archive-event-25",
        "header_image": "https://picsum.photos/800/400?random=224",
        "icon": "https://picsum.photos/200/200?random=224",
        "name": "量子コンピューティングの実用化と展望 (セッション #25)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「量子コンピューティングの実用化と展望」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1024",
            "https://picsum.photos/600/400?random=2024"
        ],
        "organization": {
            "organization_public_id": "archive-org-25",
            "name": "パートナー企業 #25",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=524",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-3",
                "name": "アーカイブテーマ #3",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-25",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-25",
                "name": "スピーカー 25",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=624",
                "display_order": 1
            }
        ],
        "display_order": 25
    },
    "archive-event-26": {
        "event_public_id": "archive-event-26",
        "header_image": "https://picsum.photos/800/400?random=225",
        "icon": "https://picsum.photos/200/200?random=225",
        "name": "Web3時代の分散型IDとプライバシー (セッション #26)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「Web3時代の分散型IDとプライバシー」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1025",
            "https://picsum.photos/600/400?random=2025"
        ],
        "organization": {
            "organization_public_id": "archive-org-26",
            "name": "パートナー企業 #26",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=525",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-3",
                "name": "アーカイブテーマ #3",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-26",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-26",
                "name": "スピーカー 26",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=625",
                "display_order": 1
            }
        ],
        "display_order": 26
    },
    "archive-event-27": {
        "event_public_id": "archive-event-27",
        "header_image": "https://picsum.photos/800/400?random=226",
        "icon": "https://picsum.photos/200/200?random=226",
        "name": "スマートモビリティと自動運転の最前線 (セッション #27)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スマートモビリティと自動運転の最前線」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1026",
            "https://picsum.photos/600/400?random=2026"
        ],
        "organization": {
            "organization_public_id": "archive-org-27",
            "name": "パートナー企業 #27",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=526",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-3",
                "name": "アーカイブテーマ #3",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-27",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-27",
                "name": "スピーカー 27",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=626",
                "display_order": 1
            }
        ],
        "display_order": 27
    },
    "archive-event-28": {
        "event_public_id": "archive-event-28",
        "header_image": "https://picsum.photos/800/400?random=227",
        "icon": "https://picsum.photos/200/200?random=227",
        "name": "ヘルスケアテックの最新イノベーション (セッション #28)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ヘルスケアテックの最新イノベーション」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1027",
            "https://picsum.photos/600/400?random=2027"
        ],
        "organization": {
            "organization_public_id": "archive-org-28",
            "name": "パートナー企業 #28",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=527",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-3",
                "name": "アーカイブテーマ #3",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-28",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-28",
                "name": "スピーカー 28",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=627",
                "display_order": 1
            }
        ],
        "display_order": 28
    },
    "archive-event-29": {
        "event_public_id": "archive-event-29",
        "header_image": "https://picsum.photos/800/400?random=228",
        "icon": "https://picsum.photos/200/200?random=228",
        "name": "宇宙ビジネスの現状と今後の可能性 (セッション #29)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「宇宙ビジネスの現状と今後の可能性」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1028",
            "https://picsum.photos/600/400?random=2028"
        ],
        "organization": {
            "organization_public_id": "archive-org-29",
            "name": "パートナー企業 #29",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=528",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-3",
                "name": "アーカイブテーマ #3",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-29",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-29",
                "name": "スピーカー 29",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=628",
                "display_order": 1
            }
        ],
        "display_order": 29
    },
    "archive-event-30": {
        "event_public_id": "archive-event-30",
        "header_image": "https://picsum.photos/800/400?random=229",
        "icon": "https://picsum.photos/200/200?random=229",
        "name": "サイバーセキュリティ防御戦略2026 (セッション #30)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「サイバーセキュリティ防御戦略2026」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1029",
            "https://picsum.photos/600/400?random=2029"
        ],
        "organization": {
            "organization_public_id": "archive-org-30",
            "name": "パートナー企業 #30",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=529",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-3",
                "name": "アーカイブテーマ #3",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-30",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-30",
                "name": "スピーカー 30",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=629",
                "display_order": 1
            }
        ],
        "display_order": 30
    },
    "archive-event-31": {
        "event_public_id": "archive-event-31",
        "header_image": "https://picsum.photos/800/400?random=230",
        "icon": "https://picsum.photos/200/200?random=230",
        "name": "生成AIを活用したプロダクト開発の現場 (セッション #31)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「生成AIを活用したプロダクト開発の現場」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1030",
            "https://picsum.photos/600/400?random=2030"
        ],
        "organization": {
            "organization_public_id": "archive-org-1",
            "name": "パートナー企業 #1",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=530",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-4",
                "name": "アーカイブテーマ #4",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-31",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-31",
                "name": "スピーカー 31",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=630",
                "display_order": 1
            }
        ],
        "display_order": 31
    },
    "archive-event-32": {
        "event_public_id": "archive-event-32",
        "header_image": "https://picsum.photos/800/400?random=231",
        "icon": "https://picsum.photos/200/200?random=231",
        "name": "UXライティングが変えるユーザー体験 (セッション #32)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「UXライティングが変えるユーザー体験」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1031",
            "https://picsum.photos/600/400?random=2031"
        ],
        "organization": {
            "organization_public_id": "archive-org-2",
            "name": "パートナー企業 #2",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=531",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-4",
                "name": "アーカイブテーマ #4",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-32",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-32",
                "name": "スピーカー 32",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=631",
                "display_order": 1
            }
        ],
        "display_order": 32
    },
    "archive-event-33": {
        "event_public_id": "archive-event-33",
        "header_image": "https://picsum.photos/800/400?random=232",
        "icon": "https://picsum.photos/200/200?random=232",
        "name": "フードテックが解決するグローバルな課題 (セッション #33)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「フードテックが解決するグローバルな課題」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1032",
            "https://picsum.photos/600/400?random=2032"
        ],
        "organization": {
            "organization_public_id": "archive-org-3",
            "name": "パートナー企業 #3",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=532",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-4",
                "name": "アーカイブテーマ #4",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-33",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-33",
                "name": "スピーカー 33",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=632",
                "display_order": 1
            }
        ],
        "display_order": 33
    },
    "archive-event-34": {
        "event_public_id": "archive-event-34",
        "header_image": "https://picsum.photos/800/400?random=233",
        "icon": "https://picsum.photos/200/200?random=233",
        "name": "地方創生とデジタルツインの融合 (セッション #34)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「地方創生とデジタルツインの融合」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1033",
            "https://picsum.photos/600/400?random=2033"
        ],
        "organization": {
            "organization_public_id": "archive-org-4",
            "name": "パートナー企業 #4",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=533",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-4",
                "name": "アーカイブテーマ #4",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-34",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-34",
                "name": "スピーカー 34",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=633",
                "display_order": 1
            }
        ],
        "display_order": 34
    },
    "archive-event-35": {
        "event_public_id": "archive-event-35",
        "header_image": "https://picsum.photos/800/400?random=234",
        "icon": "https://picsum.photos/200/200?random=234",
        "name": "スタートアップピッチコンテスト決勝 (セッション #35)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スタートアップピッチコンテスト決勝」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1034",
            "https://picsum.photos/600/400?random=2034"
        ],
        "organization": {
            "organization_public_id": "archive-org-5",
            "name": "パートナー企業 #5",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=534",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-4",
                "name": "アーカイブテーマ #4",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-35",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-35",
                "name": "スピーカー 35",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=634",
                "display_order": 1
            }
        ],
        "display_order": 35
    },
    "archive-event-36": {
        "event_public_id": "archive-event-36",
        "header_image": "https://picsum.photos/800/400?random=235",
        "icon": "https://picsum.photos/200/200?random=235",
        "name": "ロボティクスと自動化の現場導入事例 (セッション #36)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ロボティクスと自動化の現場導入事例」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1035",
            "https://picsum.photos/600/400?random=2035"
        ],
        "organization": {
            "organization_public_id": "archive-org-6",
            "name": "パートナー企業 #6",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=535",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-4",
                "name": "アーカイブテーマ #4",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-36",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-36",
                "name": "スピーカー 36",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=635",
                "display_order": 1
            }
        ],
        "display_order": 36
    },
    "archive-event-37": {
        "event_public_id": "archive-event-37",
        "header_image": "https://picsum.photos/800/400?random=236",
        "icon": "https://picsum.photos/200/200?random=236",
        "name": "アジャイル開発とチームビルディング (セッション #37)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「アジャイル開発とチームビルディング」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1036",
            "https://picsum.photos/600/400?random=2036"
        ],
        "organization": {
            "organization_public_id": "archive-org-7",
            "name": "パートナー企業 #7",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=536",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-4",
                "name": "アーカイブテーマ #4",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-37",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-37",
                "name": "スピーカー 37",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=636",
                "display_order": 1
            }
        ],
        "display_order": 37
    },
    "archive-event-38": {
        "event_public_id": "archive-event-38",
        "header_image": "https://picsum.photos/800/400?random=237",
        "icon": "https://picsum.photos/200/200?random=237",
        "name": "データサイエンスによるビジネス変革 (セッション #38)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「データサイエンスによるビジネス変革」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1037",
            "https://picsum.photos/600/400?random=2037"
        ],
        "organization": {
            "organization_public_id": "archive-org-8",
            "name": "パートナー企業 #8",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=537",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-4",
                "name": "アーカイブテーマ #4",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-38",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-38",
                "name": "スピーカー 38",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=637",
                "display_order": 1
            }
        ],
        "display_order": 38
    },
    "archive-event-39": {
        "event_public_id": "archive-event-39",
        "header_image": "https://picsum.photos/800/400?random=238",
        "icon": "https://picsum.photos/200/200?random=238",
        "name": "オープンソースコミュニティの未来 (セッション #39)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「オープンソースコミュニティの未来」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1038",
            "https://picsum.photos/600/400?random=2038"
        ],
        "organization": {
            "organization_public_id": "archive-org-9",
            "name": "パートナー企業 #9",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=538",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-4",
                "name": "アーカイブテーマ #4",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-39",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-39",
                "name": "スピーカー 39",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=638",
                "display_order": 1
            }
        ],
        "display_order": 39
    },
    "archive-event-40": {
        "event_public_id": "archive-event-40",
        "header_image": "https://picsum.photos/800/400?random=239",
        "icon": "https://picsum.photos/200/200?random=239",
        "name": "AR/VRコンテンツデザインの最新トレンド (セッション #40)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AR/VRコンテンツデザインの最新トレンド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1039",
            "https://picsum.photos/600/400?random=2039"
        ],
        "organization": {
            "organization_public_id": "archive-org-10",
            "name": "パートナー企業 #10",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=539",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-4",
                "name": "アーカイブテーマ #4",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-40",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-40",
                "name": "スピーカー 40",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=639",
                "display_order": 1
            }
        ],
        "display_order": 40
    },
    "archive-event-41": {
        "event_public_id": "archive-event-41",
        "header_image": "https://picsum.photos/800/400?random=240",
        "icon": "https://picsum.photos/200/200?random=240",
        "name": "AIと未来のテクノロジー基調講演 (セッション #41)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AIと未来のテクノロジー基調講演」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1040",
            "https://picsum.photos/600/400?random=2040"
        ],
        "organization": {
            "organization_public_id": "archive-org-11",
            "name": "パートナー企業 #11",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=540",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-5",
                "name": "アーカイブテーマ #5",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-41",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-41",
                "name": "スピーカー 41",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=640",
                "display_order": 1
            }
        ],
        "display_order": 41
    },
    "archive-event-42": {
        "event_public_id": "archive-event-42",
        "header_image": "https://picsum.photos/800/400?random=241",
        "icon": "https://picsum.photos/200/200?random=241",
        "name": "デザインシステム構築の実践ガイド (セッション #42)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「デザインシステム構築の実践ガイド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1041",
            "https://picsum.photos/600/400?random=2041"
        ],
        "organization": {
            "organization_public_id": "archive-org-12",
            "name": "パートナー企業 #12",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=541",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-5",
                "name": "アーカイブテーマ #5",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-42",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-42",
                "name": "スピーカー 42",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=641",
                "display_order": 1
            }
        ],
        "display_order": 42
    },
    "archive-event-43": {
        "event_public_id": "archive-event-43",
        "header_image": "https://picsum.photos/800/400?random=242",
        "icon": "https://picsum.photos/200/200?random=242",
        "name": "次世代メタバース空間のアーキテクチャ (セッション #43)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「次世代メタバース空間のアーキテクチャ」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1042",
            "https://picsum.photos/600/400?random=2042"
        ],
        "organization": {
            "organization_public_id": "archive-org-13",
            "name": "パートナー企業 #13",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=542",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-5",
                "name": "アーカイブテーマ #5",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-43",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-43",
                "name": "スピーカー 43",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=642",
                "display_order": 1
            }
        ],
        "display_order": 43
    },
    "archive-event-44": {
        "event_public_id": "archive-event-44",
        "header_image": "https://picsum.photos/800/400?random=243",
        "icon": "https://picsum.photos/200/200?random=243",
        "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #44)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「グリーンエネルギーが切り開く持続可能な社会」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1043",
            "https://picsum.photos/600/400?random=2043"
        ],
        "organization": {
            "organization_public_id": "archive-org-14",
            "name": "パートナー企業 #14",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=543",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-5",
                "name": "アーカイブテーマ #5",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-44",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-44",
                "name": "スピーカー 44",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=643",
                "display_order": 1
            }
        ],
        "display_order": 44
    },
    "archive-event-45": {
        "event_public_id": "archive-event-45",
        "header_image": "https://picsum.photos/800/400?random=244",
        "icon": "https://picsum.photos/200/200?random=244",
        "name": "量子コンピューティングの実用化と展望 (セッション #45)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「量子コンピューティングの実用化と展望」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1044",
            "https://picsum.photos/600/400?random=2044"
        ],
        "organization": {
            "organization_public_id": "archive-org-15",
            "name": "パートナー企業 #15",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=544",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-5",
                "name": "アーカイブテーマ #5",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-45",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-45",
                "name": "スピーカー 45",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=644",
                "display_order": 1
            }
        ],
        "display_order": 45
    },
    "archive-event-46": {
        "event_public_id": "archive-event-46",
        "header_image": "https://picsum.photos/800/400?random=245",
        "icon": "https://picsum.photos/200/200?random=245",
        "name": "Web3時代の分散型IDとプライバシー (セッション #46)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「Web3時代の分散型IDとプライバシー」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1045",
            "https://picsum.photos/600/400?random=2045"
        ],
        "organization": {
            "organization_public_id": "archive-org-16",
            "name": "パートナー企業 #16",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=545",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-5",
                "name": "アーカイブテーマ #5",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-46",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-46",
                "name": "スピーカー 46",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=645",
                "display_order": 1
            }
        ],
        "display_order": 46
    },
    "archive-event-47": {
        "event_public_id": "archive-event-47",
        "header_image": "https://picsum.photos/800/400?random=246",
        "icon": "https://picsum.photos/200/200?random=246",
        "name": "スマートモビリティと自動運転の最前線 (セッション #47)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スマートモビリティと自動運転の最前線」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1046",
            "https://picsum.photos/600/400?random=2046"
        ],
        "organization": {
            "organization_public_id": "archive-org-17",
            "name": "パートナー企業 #17",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=546",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-5",
                "name": "アーカイブテーマ #5",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-47",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-47",
                "name": "スピーカー 47",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=646",
                "display_order": 1
            }
        ],
        "display_order": 47
    },
    "archive-event-48": {
        "event_public_id": "archive-event-48",
        "header_image": "https://picsum.photos/800/400?random=247",
        "icon": "https://picsum.photos/200/200?random=247",
        "name": "ヘルスケアテックの最新イノベーション (セッション #48)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ヘルスケアテックの最新イノベーション」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1047",
            "https://picsum.photos/600/400?random=2047"
        ],
        "organization": {
            "organization_public_id": "archive-org-18",
            "name": "パートナー企業 #18",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=547",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-5",
                "name": "アーカイブテーマ #5",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-48",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-48",
                "name": "スピーカー 48",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=647",
                "display_order": 1
            }
        ],
        "display_order": 48
    },
    "archive-event-49": {
        "event_public_id": "archive-event-49",
        "header_image": "https://picsum.photos/800/400?random=248",
        "icon": "https://picsum.photos/200/200?random=248",
        "name": "宇宙ビジネスの現状と今後の可能性 (セッション #49)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「宇宙ビジネスの現状と今後の可能性」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1048",
            "https://picsum.photos/600/400?random=2048"
        ],
        "organization": {
            "organization_public_id": "archive-org-19",
            "name": "パートナー企業 #19",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=548",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-5",
                "name": "アーカイブテーマ #5",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-49",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-49",
                "name": "スピーカー 49",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=648",
                "display_order": 1
            }
        ],
        "display_order": 49
    },
    "archive-event-50": {
        "event_public_id": "archive-event-50",
        "header_image": "https://picsum.photos/800/400?random=249",
        "icon": "https://picsum.photos/200/200?random=249",
        "name": "サイバーセキュリティ防御戦略2026 (セッション #50)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「サイバーセキュリティ防御戦略2026」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1049",
            "https://picsum.photos/600/400?random=2049"
        ],
        "organization": {
            "organization_public_id": "archive-org-20",
            "name": "パートナー企業 #20",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=549",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-5",
                "name": "アーカイブテーマ #5",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-50",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-50",
                "name": "スピーカー 50",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=649",
                "display_order": 1
            }
        ],
        "display_order": 50
    },
    "archive-event-51": {
        "event_public_id": "archive-event-51",
        "header_image": "https://picsum.photos/800/400?random=250",
        "icon": "https://picsum.photos/200/200?random=250",
        "name": "生成AIを活用したプロダクト開発の現場 (セッション #51)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「生成AIを活用したプロダクト開発の現場」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1050",
            "https://picsum.photos/600/400?random=2050"
        ],
        "organization": {
            "organization_public_id": "archive-org-21",
            "name": "パートナー企業 #21",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=550",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-6",
                "name": "アーカイブテーマ #6",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-51",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-1",
                "name": "スピーカー 1",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=650",
                "display_order": 1
            }
        ],
        "display_order": 51
    },
    "archive-event-52": {
        "event_public_id": "archive-event-52",
        "header_image": "https://picsum.photos/800/400?random=251",
        "icon": "https://picsum.photos/200/200?random=251",
        "name": "UXライティングが変えるユーザー体験 (セッション #52)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「UXライティングが変えるユーザー体験」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1051",
            "https://picsum.photos/600/400?random=2051"
        ],
        "organization": {
            "organization_public_id": "archive-org-22",
            "name": "パートナー企業 #22",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=551",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-6",
                "name": "アーカイブテーマ #6",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-52",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-2",
                "name": "スピーカー 2",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=651",
                "display_order": 1
            }
        ],
        "display_order": 52
    },
    "archive-event-53": {
        "event_public_id": "archive-event-53",
        "header_image": "https://picsum.photos/800/400?random=252",
        "icon": "https://picsum.photos/200/200?random=252",
        "name": "フードテックが解決するグローバルな課題 (セッション #53)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「フードテックが解決するグローバルな課題」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1052",
            "https://picsum.photos/600/400?random=2052"
        ],
        "organization": {
            "organization_public_id": "archive-org-23",
            "name": "パートナー企業 #23",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=552",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-6",
                "name": "アーカイブテーマ #6",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-53",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-3",
                "name": "スピーカー 3",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=652",
                "display_order": 1
            }
        ],
        "display_order": 53
    },
    "archive-event-54": {
        "event_public_id": "archive-event-54",
        "header_image": "https://picsum.photos/800/400?random=253",
        "icon": "https://picsum.photos/200/200?random=253",
        "name": "地方創生とデジタルツインの融合 (セッション #54)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「地方創生とデジタルツインの融合」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1053",
            "https://picsum.photos/600/400?random=2053"
        ],
        "organization": {
            "organization_public_id": "archive-org-24",
            "name": "パートナー企業 #24",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=553",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-6",
                "name": "アーカイブテーマ #6",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-54",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-4",
                "name": "スピーカー 4",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=653",
                "display_order": 1
            }
        ],
        "display_order": 54
    },
    "archive-event-55": {
        "event_public_id": "archive-event-55",
        "header_image": "https://picsum.photos/800/400?random=254",
        "icon": "https://picsum.photos/200/200?random=254",
        "name": "スタートアップピッチコンテスト決勝 (セッション #55)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スタートアップピッチコンテスト決勝」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1054",
            "https://picsum.photos/600/400?random=2054"
        ],
        "organization": {
            "organization_public_id": "archive-org-25",
            "name": "パートナー企業 #25",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=554",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-6",
                "name": "アーカイブテーマ #6",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-55",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-5",
                "name": "スピーカー 5",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=654",
                "display_order": 1
            }
        ],
        "display_order": 55
    },
    "archive-event-56": {
        "event_public_id": "archive-event-56",
        "header_image": "https://picsum.photos/800/400?random=255",
        "icon": "https://picsum.photos/200/200?random=255",
        "name": "ロボティクスと自動化の現場導入事例 (セッション #56)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ロボティクスと自動化の現場導入事例」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1055",
            "https://picsum.photos/600/400?random=2055"
        ],
        "organization": {
            "organization_public_id": "archive-org-26",
            "name": "パートナー企業 #26",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=555",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-6",
                "name": "アーカイブテーマ #6",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-56",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-6",
                "name": "スピーカー 6",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=655",
                "display_order": 1
            }
        ],
        "display_order": 56
    },
    "archive-event-57": {
        "event_public_id": "archive-event-57",
        "header_image": "https://picsum.photos/800/400?random=256",
        "icon": "https://picsum.photos/200/200?random=256",
        "name": "アジャイル開発とチームビルディング (セッション #57)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「アジャイル開発とチームビルディング」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1056",
            "https://picsum.photos/600/400?random=2056"
        ],
        "organization": {
            "organization_public_id": "archive-org-27",
            "name": "パートナー企業 #27",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=556",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-6",
                "name": "アーカイブテーマ #6",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-57",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-7",
                "name": "スピーカー 7",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=656",
                "display_order": 1
            }
        ],
        "display_order": 57
    },
    "archive-event-58": {
        "event_public_id": "archive-event-58",
        "header_image": "https://picsum.photos/800/400?random=257",
        "icon": "https://picsum.photos/200/200?random=257",
        "name": "データサイエンスによるビジネス変革 (セッション #58)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「データサイエンスによるビジネス変革」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1057",
            "https://picsum.photos/600/400?random=2057"
        ],
        "organization": {
            "organization_public_id": "archive-org-28",
            "name": "パートナー企業 #28",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=557",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-6",
                "name": "アーカイブテーマ #6",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-58",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-8",
                "name": "スピーカー 8",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=657",
                "display_order": 1
            }
        ],
        "display_order": 58
    },
    "archive-event-59": {
        "event_public_id": "archive-event-59",
        "header_image": "https://picsum.photos/800/400?random=258",
        "icon": "https://picsum.photos/200/200?random=258",
        "name": "オープンソースコミュニティの未来 (セッション #59)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「オープンソースコミュニティの未来」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1058",
            "https://picsum.photos/600/400?random=2058"
        ],
        "organization": {
            "organization_public_id": "archive-org-29",
            "name": "パートナー企業 #29",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=558",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-6",
                "name": "アーカイブテーマ #6",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-59",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-9",
                "name": "スピーカー 9",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=658",
                "display_order": 1
            }
        ],
        "display_order": 59
    },
    "archive-event-60": {
        "event_public_id": "archive-event-60",
        "header_image": "https://picsum.photos/800/400?random=259",
        "icon": "https://picsum.photos/200/200?random=259",
        "name": "AR/VRコンテンツデザインの最新トレンド (セッション #60)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AR/VRコンテンツデザインの最新トレンド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1059",
            "https://picsum.photos/600/400?random=2059"
        ],
        "organization": {
            "organization_public_id": "archive-org-30",
            "name": "パートナー企業 #30",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=559",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-6",
                "name": "アーカイブテーマ #6",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-60",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-10",
                "name": "スピーカー 10",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=659",
                "display_order": 1
            }
        ],
        "display_order": 60
    },
    "archive-event-61": {
        "event_public_id": "archive-event-61",
        "header_image": "https://picsum.photos/800/400?random=260",
        "icon": "https://picsum.photos/200/200?random=260",
        "name": "AIと未来のテクノロジー基調講演 (セッション #61)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AIと未来のテクノロジー基調講演」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1060",
            "https://picsum.photos/600/400?random=2060"
        ],
        "organization": {
            "organization_public_id": "archive-org-1",
            "name": "パートナー企業 #1",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=560",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-7",
                "name": "アーカイブテーマ #7",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-61",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-11",
                "name": "スピーカー 11",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=660",
                "display_order": 1
            }
        ],
        "display_order": 61
    },
    "archive-event-62": {
        "event_public_id": "archive-event-62",
        "header_image": "https://picsum.photos/800/400?random=261",
        "icon": "https://picsum.photos/200/200?random=261",
        "name": "デザインシステム構築の実践ガイド (セッション #62)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「デザインシステム構築の実践ガイド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1061",
            "https://picsum.photos/600/400?random=2061"
        ],
        "organization": {
            "organization_public_id": "archive-org-2",
            "name": "パートナー企業 #2",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=561",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-7",
                "name": "アーカイブテーマ #7",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-62",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-12",
                "name": "スピーカー 12",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=661",
                "display_order": 1
            }
        ],
        "display_order": 62
    },
    "archive-event-63": {
        "event_public_id": "archive-event-63",
        "header_image": "https://picsum.photos/800/400?random=262",
        "icon": "https://picsum.photos/200/200?random=262",
        "name": "次世代メタバース空間のアーキテクチャ (セッション #63)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「次世代メタバース空間のアーキテクチャ」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1062",
            "https://picsum.photos/600/400?random=2062"
        ],
        "organization": {
            "organization_public_id": "archive-org-3",
            "name": "パートナー企業 #3",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=562",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-7",
                "name": "アーカイブテーマ #7",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-63",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-13",
                "name": "スピーカー 13",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=662",
                "display_order": 1
            }
        ],
        "display_order": 63
    },
    "archive-event-64": {
        "event_public_id": "archive-event-64",
        "header_image": "https://picsum.photos/800/400?random=263",
        "icon": "https://picsum.photos/200/200?random=263",
        "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #64)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「グリーンエネルギーが切り開く持続可能な社会」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1063",
            "https://picsum.photos/600/400?random=2063"
        ],
        "organization": {
            "organization_public_id": "archive-org-4",
            "name": "パートナー企業 #4",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=563",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-7",
                "name": "アーカイブテーマ #7",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-64",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-14",
                "name": "スピーカー 14",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=663",
                "display_order": 1
            }
        ],
        "display_order": 64
    },
    "archive-event-65": {
        "event_public_id": "archive-event-65",
        "header_image": "https://picsum.photos/800/400?random=264",
        "icon": "https://picsum.photos/200/200?random=264",
        "name": "量子コンピューティングの実用化と展望 (セッション #65)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「量子コンピューティングの実用化と展望」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1064",
            "https://picsum.photos/600/400?random=2064"
        ],
        "organization": {
            "organization_public_id": "archive-org-5",
            "name": "パートナー企業 #5",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=564",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-7",
                "name": "アーカイブテーマ #7",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-65",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-15",
                "name": "スピーカー 15",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=664",
                "display_order": 1
            }
        ],
        "display_order": 65
    },
    "archive-event-66": {
        "event_public_id": "archive-event-66",
        "header_image": "https://picsum.photos/800/400?random=265",
        "icon": "https://picsum.photos/200/200?random=265",
        "name": "Web3時代の分散型IDとプライバシー (セッション #66)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「Web3時代の分散型IDとプライバシー」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1065",
            "https://picsum.photos/600/400?random=2065"
        ],
        "organization": {
            "organization_public_id": "archive-org-6",
            "name": "パートナー企業 #6",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=565",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-7",
                "name": "アーカイブテーマ #7",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-66",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-16",
                "name": "スピーカー 16",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=665",
                "display_order": 1
            }
        ],
        "display_order": 66
    },
    "archive-event-67": {
        "event_public_id": "archive-event-67",
        "header_image": "https://picsum.photos/800/400?random=266",
        "icon": "https://picsum.photos/200/200?random=266",
        "name": "スマートモビリティと自動運転の最前線 (セッション #67)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スマートモビリティと自動運転の最前線」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1066",
            "https://picsum.photos/600/400?random=2066"
        ],
        "organization": {
            "organization_public_id": "archive-org-7",
            "name": "パートナー企業 #7",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=566",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-7",
                "name": "アーカイブテーマ #7",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-67",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-17",
                "name": "スピーカー 17",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=666",
                "display_order": 1
            }
        ],
        "display_order": 67
    },
    "archive-event-68": {
        "event_public_id": "archive-event-68",
        "header_image": "https://picsum.photos/800/400?random=267",
        "icon": "https://picsum.photos/200/200?random=267",
        "name": "ヘルスケアテックの最新イノベーション (セッション #68)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ヘルスケアテックの最新イノベーション」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1067",
            "https://picsum.photos/600/400?random=2067"
        ],
        "organization": {
            "organization_public_id": "archive-org-8",
            "name": "パートナー企業 #8",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=567",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-7",
                "name": "アーカイブテーマ #7",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-68",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-18",
                "name": "スピーカー 18",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=667",
                "display_order": 1
            }
        ],
        "display_order": 68
    },
    "archive-event-69": {
        "event_public_id": "archive-event-69",
        "header_image": "https://picsum.photos/800/400?random=268",
        "icon": "https://picsum.photos/200/200?random=268",
        "name": "宇宙ビジネスの現状と今後の可能性 (セッション #69)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「宇宙ビジネスの現状と今後の可能性」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1068",
            "https://picsum.photos/600/400?random=2068"
        ],
        "organization": {
            "organization_public_id": "archive-org-9",
            "name": "パートナー企業 #9",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=568",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-7",
                "name": "アーカイブテーマ #7",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-69",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-19",
                "name": "スピーカー 19",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=668",
                "display_order": 1
            }
        ],
        "display_order": 69
    },
    "archive-event-70": {
        "event_public_id": "archive-event-70",
        "header_image": "https://picsum.photos/800/400?random=269",
        "icon": "https://picsum.photos/200/200?random=269",
        "name": "サイバーセキュリティ防御戦略2026 (セッション #70)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「サイバーセキュリティ防御戦略2026」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1069",
            "https://picsum.photos/600/400?random=2069"
        ],
        "organization": {
            "organization_public_id": "archive-org-10",
            "name": "パートナー企業 #10",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=569",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-7",
                "name": "アーカイブテーマ #7",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-70",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-20",
                "name": "スピーカー 20",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=669",
                "display_order": 1
            }
        ],
        "display_order": 70
    },
    "archive-event-71": {
        "event_public_id": "archive-event-71",
        "header_image": "https://picsum.photos/800/400?random=270",
        "icon": "https://picsum.photos/200/200?random=270",
        "name": "生成AIを活用したプロダクト開発の現場 (セッション #71)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「生成AIを活用したプロダクト開発の現場」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1070",
            "https://picsum.photos/600/400?random=2070"
        ],
        "organization": {
            "organization_public_id": "archive-org-11",
            "name": "パートナー企業 #11",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=570",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-8",
                "name": "アーカイブテーマ #8",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-71",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-21",
                "name": "スピーカー 21",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=670",
                "display_order": 1
            }
        ],
        "display_order": 71
    },
    "archive-event-72": {
        "event_public_id": "archive-event-72",
        "header_image": "https://picsum.photos/800/400?random=271",
        "icon": "https://picsum.photos/200/200?random=271",
        "name": "UXライティングが変えるユーザー体験 (セッション #72)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「UXライティングが変えるユーザー体験」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1071",
            "https://picsum.photos/600/400?random=2071"
        ],
        "organization": {
            "organization_public_id": "archive-org-12",
            "name": "パートナー企業 #12",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=571",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-8",
                "name": "アーカイブテーマ #8",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-72",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-22",
                "name": "スピーカー 22",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=671",
                "display_order": 1
            }
        ],
        "display_order": 72
    },
    "archive-event-73": {
        "event_public_id": "archive-event-73",
        "header_image": "https://picsum.photos/800/400?random=272",
        "icon": "https://picsum.photos/200/200?random=272",
        "name": "フードテックが解決するグローバルな課題 (セッション #73)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「フードテックが解決するグローバルな課題」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1072",
            "https://picsum.photos/600/400?random=2072"
        ],
        "organization": {
            "organization_public_id": "archive-org-13",
            "name": "パートナー企業 #13",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=572",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-8",
                "name": "アーカイブテーマ #8",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-73",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-23",
                "name": "スピーカー 23",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=672",
                "display_order": 1
            }
        ],
        "display_order": 73
    },
    "archive-event-74": {
        "event_public_id": "archive-event-74",
        "header_image": "https://picsum.photos/800/400?random=273",
        "icon": "https://picsum.photos/200/200?random=273",
        "name": "地方創生とデジタルツインの融合 (セッション #74)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「地方創生とデジタルツインの融合」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1073",
            "https://picsum.photos/600/400?random=2073"
        ],
        "organization": {
            "organization_public_id": "archive-org-14",
            "name": "パートナー企業 #14",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=573",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-8",
                "name": "アーカイブテーマ #8",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-74",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-24",
                "name": "スピーカー 24",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=673",
                "display_order": 1
            }
        ],
        "display_order": 74
    },
    "archive-event-75": {
        "event_public_id": "archive-event-75",
        "header_image": "https://picsum.photos/800/400?random=274",
        "icon": "https://picsum.photos/200/200?random=274",
        "name": "スタートアップピッチコンテスト決勝 (セッション #75)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スタートアップピッチコンテスト決勝」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1074",
            "https://picsum.photos/600/400?random=2074"
        ],
        "organization": {
            "organization_public_id": "archive-org-15",
            "name": "パートナー企業 #15",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=574",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-8",
                "name": "アーカイブテーマ #8",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-75",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-25",
                "name": "スピーカー 25",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=674",
                "display_order": 1
            }
        ],
        "display_order": 75
    },
    "archive-event-76": {
        "event_public_id": "archive-event-76",
        "header_image": "https://picsum.photos/800/400?random=275",
        "icon": "https://picsum.photos/200/200?random=275",
        "name": "ロボティクスと自動化の現場導入事例 (セッション #76)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ロボティクスと自動化の現場導入事例」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1075",
            "https://picsum.photos/600/400?random=2075"
        ],
        "organization": {
            "organization_public_id": "archive-org-16",
            "name": "パートナー企業 #16",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=575",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-8",
                "name": "アーカイブテーマ #8",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-76",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-26",
                "name": "スピーカー 26",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=675",
                "display_order": 1
            }
        ],
        "display_order": 76
    },
    "archive-event-77": {
        "event_public_id": "archive-event-77",
        "header_image": "https://picsum.photos/800/400?random=276",
        "icon": "https://picsum.photos/200/200?random=276",
        "name": "アジャイル開発とチームビルディング (セッション #77)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「アジャイル開発とチームビルディング」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1076",
            "https://picsum.photos/600/400?random=2076"
        ],
        "organization": {
            "organization_public_id": "archive-org-17",
            "name": "パートナー企業 #17",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=576",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-8",
                "name": "アーカイブテーマ #8",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-77",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-27",
                "name": "スピーカー 27",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=676",
                "display_order": 1
            }
        ],
        "display_order": 77
    },
    "archive-event-78": {
        "event_public_id": "archive-event-78",
        "header_image": "https://picsum.photos/800/400?random=277",
        "icon": "https://picsum.photos/200/200?random=277",
        "name": "データサイエンスによるビジネス変革 (セッション #78)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「データサイエンスによるビジネス変革」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1077",
            "https://picsum.photos/600/400?random=2077"
        ],
        "organization": {
            "organization_public_id": "archive-org-18",
            "name": "パートナー企業 #18",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=577",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-8",
                "name": "アーカイブテーマ #8",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-78",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-28",
                "name": "スピーカー 28",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=677",
                "display_order": 1
            }
        ],
        "display_order": 78
    },
    "archive-event-79": {
        "event_public_id": "archive-event-79",
        "header_image": "https://picsum.photos/800/400?random=278",
        "icon": "https://picsum.photos/200/200?random=278",
        "name": "オープンソースコミュニティの未来 (セッション #79)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「オープンソースコミュニティの未来」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1078",
            "https://picsum.photos/600/400?random=2078"
        ],
        "organization": {
            "organization_public_id": "archive-org-19",
            "name": "パートナー企業 #19",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=578",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-8",
                "name": "アーカイブテーマ #8",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-79",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-29",
                "name": "スピーカー 29",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=678",
                "display_order": 1
            }
        ],
        "display_order": 79
    },
    "archive-event-80": {
        "event_public_id": "archive-event-80",
        "header_image": "https://picsum.photos/800/400?random=279",
        "icon": "https://picsum.photos/200/200?random=279",
        "name": "AR/VRコンテンツデザインの最新トレンド (セッション #80)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AR/VRコンテンツデザインの最新トレンド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1079",
            "https://picsum.photos/600/400?random=2079"
        ],
        "organization": {
            "organization_public_id": "archive-org-20",
            "name": "パートナー企業 #20",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=579",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-8",
                "name": "アーカイブテーマ #8",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-80",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-30",
                "name": "スピーカー 30",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=679",
                "display_order": 1
            }
        ],
        "display_order": 80
    },
    "archive-event-81": {
        "event_public_id": "archive-event-81",
        "header_image": "https://picsum.photos/800/400?random=280",
        "icon": "https://picsum.photos/200/200?random=280",
        "name": "AIと未来のテクノロジー基調講演 (セッション #81)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AIと未来のテクノロジー基調講演」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1080",
            "https://picsum.photos/600/400?random=2080"
        ],
        "organization": {
            "organization_public_id": "archive-org-21",
            "name": "パートナー企業 #21",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=580",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-9",
                "name": "アーカイブテーマ #9",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-81",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-31",
                "name": "スピーカー 31",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=680",
                "display_order": 1
            }
        ],
        "display_order": 81
    },
    "archive-event-82": {
        "event_public_id": "archive-event-82",
        "header_image": "https://picsum.photos/800/400?random=281",
        "icon": "https://picsum.photos/200/200?random=281",
        "name": "デザインシステム構築の実践ガイド (セッション #82)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「デザインシステム構築の実践ガイド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1081",
            "https://picsum.photos/600/400?random=2081"
        ],
        "organization": {
            "organization_public_id": "archive-org-22",
            "name": "パートナー企業 #22",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=581",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-9",
                "name": "アーカイブテーマ #9",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-82",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-32",
                "name": "スピーカー 32",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=681",
                "display_order": 1
            }
        ],
        "display_order": 82
    },
    "archive-event-83": {
        "event_public_id": "archive-event-83",
        "header_image": "https://picsum.photos/800/400?random=282",
        "icon": "https://picsum.photos/200/200?random=282",
        "name": "次世代メタバース空間のアーキテクチャ (セッション #83)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「次世代メタバース空間のアーキテクチャ」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1082",
            "https://picsum.photos/600/400?random=2082"
        ],
        "organization": {
            "organization_public_id": "archive-org-23",
            "name": "パートナー企業 #23",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=582",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-9",
                "name": "アーカイブテーマ #9",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-83",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-33",
                "name": "スピーカー 33",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=682",
                "display_order": 1
            }
        ],
        "display_order": 83
    },
    "archive-event-84": {
        "event_public_id": "archive-event-84",
        "header_image": "https://picsum.photos/800/400?random=283",
        "icon": "https://picsum.photos/200/200?random=283",
        "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #84)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「グリーンエネルギーが切り開く持続可能な社会」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1083",
            "https://picsum.photos/600/400?random=2083"
        ],
        "organization": {
            "organization_public_id": "archive-org-24",
            "name": "パートナー企業 #24",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=583",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-9",
                "name": "アーカイブテーマ #9",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-84",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-34",
                "name": "スピーカー 34",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=683",
                "display_order": 1
            }
        ],
        "display_order": 84
    },
    "archive-event-85": {
        "event_public_id": "archive-event-85",
        "header_image": "https://picsum.photos/800/400?random=284",
        "icon": "https://picsum.photos/200/200?random=284",
        "name": "量子コンピューティングの実用化と展望 (セッション #85)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「量子コンピューティングの実用化と展望」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1084",
            "https://picsum.photos/600/400?random=2084"
        ],
        "organization": {
            "organization_public_id": "archive-org-25",
            "name": "パートナー企業 #25",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=584",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-9",
                "name": "アーカイブテーマ #9",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-85",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-35",
                "name": "スピーカー 35",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=684",
                "display_order": 1
            }
        ],
        "display_order": 85
    },
    "archive-event-86": {
        "event_public_id": "archive-event-86",
        "header_image": "https://picsum.photos/800/400?random=285",
        "icon": "https://picsum.photos/200/200?random=285",
        "name": "Web3時代の分散型IDとプライバシー (セッション #86)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「Web3時代の分散型IDとプライバシー」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1085",
            "https://picsum.photos/600/400?random=2085"
        ],
        "organization": {
            "organization_public_id": "archive-org-26",
            "name": "パートナー企業 #26",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=585",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-9",
                "name": "アーカイブテーマ #9",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-86",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-36",
                "name": "スピーカー 36",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=685",
                "display_order": 1
            }
        ],
        "display_order": 86
    },
    "archive-event-87": {
        "event_public_id": "archive-event-87",
        "header_image": "https://picsum.photos/800/400?random=286",
        "icon": "https://picsum.photos/200/200?random=286",
        "name": "スマートモビリティと自動運転の最前線 (セッション #87)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スマートモビリティと自動運転の最前線」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1086",
            "https://picsum.photos/600/400?random=2086"
        ],
        "organization": {
            "organization_public_id": "archive-org-27",
            "name": "パートナー企業 #27",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=586",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-9",
                "name": "アーカイブテーマ #9",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-87",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-37",
                "name": "スピーカー 37",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=686",
                "display_order": 1
            }
        ],
        "display_order": 87
    },
    "archive-event-88": {
        "event_public_id": "archive-event-88",
        "header_image": "https://picsum.photos/800/400?random=287",
        "icon": "https://picsum.photos/200/200?random=287",
        "name": "ヘルスケアテックの最新イノベーション (セッション #88)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ヘルスケアテックの最新イノベーション」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1087",
            "https://picsum.photos/600/400?random=2087"
        ],
        "organization": {
            "organization_public_id": "archive-org-28",
            "name": "パートナー企業 #28",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=587",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-9",
                "name": "アーカイブテーマ #9",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-88",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-38",
                "name": "スピーカー 38",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=687",
                "display_order": 1
            }
        ],
        "display_order": 88
    },
    "archive-event-89": {
        "event_public_id": "archive-event-89",
        "header_image": "https://picsum.photos/800/400?random=288",
        "icon": "https://picsum.photos/200/200?random=288",
        "name": "宇宙ビジネスの現状と今後の可能性 (セッション #89)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「宇宙ビジネスの現状と今後の可能性」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1088",
            "https://picsum.photos/600/400?random=2088"
        ],
        "organization": {
            "organization_public_id": "archive-org-29",
            "name": "パートナー企業 #29",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=588",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-9",
                "name": "アーカイブテーマ #9",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-89",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-39",
                "name": "スピーカー 39",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=688",
                "display_order": 1
            }
        ],
        "display_order": 89
    },
    "archive-event-90": {
        "event_public_id": "archive-event-90",
        "header_image": "https://picsum.photos/800/400?random=289",
        "icon": "https://picsum.photos/200/200?random=289",
        "name": "サイバーセキュリティ防御戦略2026 (セッション #90)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「サイバーセキュリティ防御戦略2026」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1089",
            "https://picsum.photos/600/400?random=2089"
        ],
        "organization": {
            "organization_public_id": "archive-org-30",
            "name": "パートナー企業 #30",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=589",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-9",
                "name": "アーカイブテーマ #9",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-90",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-40",
                "name": "スピーカー 40",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=689",
                "display_order": 1
            }
        ],
        "display_order": 90
    },
    "archive-event-91": {
        "event_public_id": "archive-event-91",
        "header_image": "https://picsum.photos/800/400?random=290",
        "icon": "https://picsum.photos/200/200?random=290",
        "name": "生成AIを活用したプロダクト開発の現場 (セッション #91)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「生成AIを活用したプロダクト開発の現場」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1090",
            "https://picsum.photos/600/400?random=2090"
        ],
        "organization": {
            "organization_public_id": "archive-org-1",
            "name": "パートナー企業 #1",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=590",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-10",
                "name": "アーカイブテーマ #10",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-91",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-41",
                "name": "スピーカー 41",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=690",
                "display_order": 1
            }
        ],
        "display_order": 91
    },
    "archive-event-92": {
        "event_public_id": "archive-event-92",
        "header_image": "https://picsum.photos/800/400?random=291",
        "icon": "https://picsum.photos/200/200?random=291",
        "name": "UXライティングが変えるユーザー体験 (セッション #92)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「UXライティングが変えるユーザー体験」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1091",
            "https://picsum.photos/600/400?random=2091"
        ],
        "organization": {
            "organization_public_id": "archive-org-2",
            "name": "パートナー企業 #2",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=591",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-10",
                "name": "アーカイブテーマ #10",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-92",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-42",
                "name": "スピーカー 42",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=691",
                "display_order": 1
            }
        ],
        "display_order": 92
    },
    "archive-event-93": {
        "event_public_id": "archive-event-93",
        "header_image": "https://picsum.photos/800/400?random=292",
        "icon": "https://picsum.photos/200/200?random=292",
        "name": "フードテックが解決するグローバルな課題 (セッション #93)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「フードテックが解決するグローバルな課題」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1092",
            "https://picsum.photos/600/400?random=2092"
        ],
        "organization": {
            "organization_public_id": "archive-org-3",
            "name": "パートナー企業 #3",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=592",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-10",
                "name": "アーカイブテーマ #10",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-93",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-43",
                "name": "スピーカー 43",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=692",
                "display_order": 1
            }
        ],
        "display_order": 93
    },
    "archive-event-94": {
        "event_public_id": "archive-event-94",
        "header_image": "https://picsum.photos/800/400?random=293",
        "icon": "https://picsum.photos/200/200?random=293",
        "name": "地方創生とデジタルツインの融合 (セッション #94)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「地方創生とデジタルツインの融合」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1093",
            "https://picsum.photos/600/400?random=2093"
        ],
        "organization": {
            "organization_public_id": "archive-org-4",
            "name": "パートナー企業 #4",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=593",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-10",
                "name": "アーカイブテーマ #10",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-94",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-44",
                "name": "スピーカー 44",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=693",
                "display_order": 1
            }
        ],
        "display_order": 94
    },
    "archive-event-95": {
        "event_public_id": "archive-event-95",
        "header_image": "https://picsum.photos/800/400?random=294",
        "icon": "https://picsum.photos/200/200?random=294",
        "name": "スタートアップピッチコンテスト決勝 (セッション #95)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スタートアップピッチコンテスト決勝」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1094",
            "https://picsum.photos/600/400?random=2094"
        ],
        "organization": {
            "organization_public_id": "archive-org-5",
            "name": "パートナー企業 #5",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=594",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-10",
                "name": "アーカイブテーマ #10",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-95",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-45",
                "name": "スピーカー 45",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=694",
                "display_order": 1
            }
        ],
        "display_order": 95
    },
    "archive-event-96": {
        "event_public_id": "archive-event-96",
        "header_image": "https://picsum.photos/800/400?random=295",
        "icon": "https://picsum.photos/200/200?random=295",
        "name": "ロボティクスと自動化の現場導入事例 (セッション #96)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ロボティクスと自動化の現場導入事例」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1095",
            "https://picsum.photos/600/400?random=2095"
        ],
        "organization": {
            "organization_public_id": "archive-org-6",
            "name": "パートナー企業 #6",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=595",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-10",
                "name": "アーカイブテーマ #10",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-96",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-46",
                "name": "スピーカー 46",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=695",
                "display_order": 1
            }
        ],
        "display_order": 96
    },
    "archive-event-97": {
        "event_public_id": "archive-event-97",
        "header_image": "https://picsum.photos/800/400?random=296",
        "icon": "https://picsum.photos/200/200?random=296",
        "name": "アジャイル開発とチームビルディング (セッション #97)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「アジャイル開発とチームビルディング」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1096",
            "https://picsum.photos/600/400?random=2096"
        ],
        "organization": {
            "organization_public_id": "archive-org-7",
            "name": "パートナー企業 #7",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=596",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-10",
                "name": "アーカイブテーマ #10",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-97",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-47",
                "name": "スピーカー 47",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=696",
                "display_order": 1
            }
        ],
        "display_order": 97
    },
    "archive-event-98": {
        "event_public_id": "archive-event-98",
        "header_image": "https://picsum.photos/800/400?random=297",
        "icon": "https://picsum.photos/200/200?random=297",
        "name": "データサイエンスによるビジネス変革 (セッション #98)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「データサイエンスによるビジネス変革」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1097",
            "https://picsum.photos/600/400?random=2097"
        ],
        "organization": {
            "organization_public_id": "archive-org-8",
            "name": "パートナー企業 #8",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=597",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-10",
                "name": "アーカイブテーマ #10",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-98",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-48",
                "name": "スピーカー 48",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=697",
                "display_order": 1
            }
        ],
        "display_order": 98
    },
    "archive-event-99": {
        "event_public_id": "archive-event-99",
        "header_image": "https://picsum.photos/800/400?random=298",
        "icon": "https://picsum.photos/200/200?random=298",
        "name": "オープンソースコミュニティの未来 (セッション #99)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「オープンソースコミュニティの未来」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1098",
            "https://picsum.photos/600/400?random=2098"
        ],
        "organization": {
            "organization_public_id": "archive-org-9",
            "name": "パートナー企業 #9",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=598",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-10",
                "name": "アーカイブテーマ #10",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-99",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-49",
                "name": "スピーカー 49",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=698",
                "display_order": 1
            }
        ],
        "display_order": 99
    },
    "archive-event-100": {
        "event_public_id": "archive-event-100",
        "header_image": "https://picsum.photos/800/400?random=299",
        "icon": "https://picsum.photos/200/200?random=299",
        "name": "AR/VRコンテンツデザインの最新トレンド (セッション #100)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AR/VRコンテンツデザインの最新トレンド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1099",
            "https://picsum.photos/600/400?random=2099"
        ],
        "organization": {
            "organization_public_id": "archive-org-10",
            "name": "パートナー企業 #10",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=599",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-10",
                "name": "アーカイブテーマ #10",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-100",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-50",
                "name": "スピーカー 50",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=699",
                "display_order": 1
            }
        ],
        "display_order": 100
    },
    "archive-event-101": {
        "event_public_id": "archive-event-101",
        "header_image": "https://picsum.photos/800/400?random=300",
        "icon": "https://picsum.photos/200/200?random=300",
        "name": "AIと未来のテクノロジー基調講演 (セッション #101)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AIと未来のテクノロジー基調講演」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1100",
            "https://picsum.photos/600/400?random=2100"
        ],
        "organization": {
            "organization_public_id": "archive-org-11",
            "name": "パートナー企業 #11",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=600",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-11",
                "name": "アーカイブテーマ #11",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-101",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-1",
                "name": "スピーカー 1",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=700",
                "display_order": 1
            }
        ],
        "display_order": 101
    },
    "archive-event-102": {
        "event_public_id": "archive-event-102",
        "header_image": "https://picsum.photos/800/400?random=301",
        "icon": "https://picsum.photos/200/200?random=301",
        "name": "デザインシステム構築の実践ガイド (セッション #102)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「デザインシステム構築の実践ガイド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1101",
            "https://picsum.photos/600/400?random=2101"
        ],
        "organization": {
            "organization_public_id": "archive-org-12",
            "name": "パートナー企業 #12",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=601",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-11",
                "name": "アーカイブテーマ #11",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-102",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-2",
                "name": "スピーカー 2",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=701",
                "display_order": 1
            }
        ],
        "display_order": 102
    },
    "archive-event-103": {
        "event_public_id": "archive-event-103",
        "header_image": "https://picsum.photos/800/400?random=302",
        "icon": "https://picsum.photos/200/200?random=302",
        "name": "次世代メタバース空間のアーキテクチャ (セッション #103)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「次世代メタバース空間のアーキテクチャ」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1102",
            "https://picsum.photos/600/400?random=2102"
        ],
        "organization": {
            "organization_public_id": "archive-org-13",
            "name": "パートナー企業 #13",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=602",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-11",
                "name": "アーカイブテーマ #11",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-103",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-3",
                "name": "スピーカー 3",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=702",
                "display_order": 1
            }
        ],
        "display_order": 103
    },
    "archive-event-104": {
        "event_public_id": "archive-event-104",
        "header_image": "https://picsum.photos/800/400?random=303",
        "icon": "https://picsum.photos/200/200?random=303",
        "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #104)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「グリーンエネルギーが切り開く持続可能な社会」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1103",
            "https://picsum.photos/600/400?random=2103"
        ],
        "organization": {
            "organization_public_id": "archive-org-14",
            "name": "パートナー企業 #14",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=603",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-11",
                "name": "アーカイブテーマ #11",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-104",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-4",
                "name": "スピーカー 4",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=703",
                "display_order": 1
            }
        ],
        "display_order": 104
    },
    "archive-event-105": {
        "event_public_id": "archive-event-105",
        "header_image": "https://picsum.photos/800/400?random=304",
        "icon": "https://picsum.photos/200/200?random=304",
        "name": "量子コンピューティングの実用化と展望 (セッション #105)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「量子コンピューティングの実用化と展望」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1104",
            "https://picsum.photos/600/400?random=2104"
        ],
        "organization": {
            "organization_public_id": "archive-org-15",
            "name": "パートナー企業 #15",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=604",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-11",
                "name": "アーカイブテーマ #11",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-105",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-5",
                "name": "スピーカー 5",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=704",
                "display_order": 1
            }
        ],
        "display_order": 105
    },
    "archive-event-106": {
        "event_public_id": "archive-event-106",
        "header_image": "https://picsum.photos/800/400?random=305",
        "icon": "https://picsum.photos/200/200?random=305",
        "name": "Web3時代の分散型IDとプライバシー (セッション #106)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「Web3時代の分散型IDとプライバシー」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1105",
            "https://picsum.photos/600/400?random=2105"
        ],
        "organization": {
            "organization_public_id": "archive-org-16",
            "name": "パートナー企業 #16",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=605",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-11",
                "name": "アーカイブテーマ #11",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-106",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-6",
                "name": "スピーカー 6",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=705",
                "display_order": 1
            }
        ],
        "display_order": 106
    },
    "archive-event-107": {
        "event_public_id": "archive-event-107",
        "header_image": "https://picsum.photos/800/400?random=306",
        "icon": "https://picsum.photos/200/200?random=306",
        "name": "スマートモビリティと自動運転の最前線 (セッション #107)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スマートモビリティと自動運転の最前線」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1106",
            "https://picsum.photos/600/400?random=2106"
        ],
        "organization": {
            "organization_public_id": "archive-org-17",
            "name": "パートナー企業 #17",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=606",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-11",
                "name": "アーカイブテーマ #11",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-107",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-7",
                "name": "スピーカー 7",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=706",
                "display_order": 1
            }
        ],
        "display_order": 107
    },
    "archive-event-108": {
        "event_public_id": "archive-event-108",
        "header_image": "https://picsum.photos/800/400?random=307",
        "icon": "https://picsum.photos/200/200?random=307",
        "name": "ヘルスケアテックの最新イノベーション (セッション #108)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ヘルスケアテックの最新イノベーション」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1107",
            "https://picsum.photos/600/400?random=2107"
        ],
        "organization": {
            "organization_public_id": "archive-org-18",
            "name": "パートナー企業 #18",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=607",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-11",
                "name": "アーカイブテーマ #11",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-108",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-8",
                "name": "スピーカー 8",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=707",
                "display_order": 1
            }
        ],
        "display_order": 108
    },
    "archive-event-109": {
        "event_public_id": "archive-event-109",
        "header_image": "https://picsum.photos/800/400?random=308",
        "icon": "https://picsum.photos/200/200?random=308",
        "name": "宇宙ビジネスの現状と今後の可能性 (セッション #109)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「宇宙ビジネスの現状と今後の可能性」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1108",
            "https://picsum.photos/600/400?random=2108"
        ],
        "organization": {
            "organization_public_id": "archive-org-19",
            "name": "パートナー企業 #19",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=608",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-11",
                "name": "アーカイブテーマ #11",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-109",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-9",
                "name": "スピーカー 9",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=708",
                "display_order": 1
            }
        ],
        "display_order": 109
    },
    "archive-event-110": {
        "event_public_id": "archive-event-110",
        "header_image": "https://picsum.photos/800/400?random=309",
        "icon": "https://picsum.photos/200/200?random=309",
        "name": "サイバーセキュリティ防御戦略2026 (セッション #110)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「サイバーセキュリティ防御戦略2026」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1109",
            "https://picsum.photos/600/400?random=2109"
        ],
        "organization": {
            "organization_public_id": "archive-org-20",
            "name": "パートナー企業 #20",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=609",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-11",
                "name": "アーカイブテーマ #11",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-110",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-10",
                "name": "スピーカー 10",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=709",
                "display_order": 1
            }
        ],
        "display_order": 110
    },
    "archive-event-111": {
        "event_public_id": "archive-event-111",
        "header_image": "https://picsum.photos/800/400?random=310",
        "icon": "https://picsum.photos/200/200?random=310",
        "name": "生成AIを活用したプロダクト開発の現場 (セッション #111)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「生成AIを活用したプロダクト開発の現場」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1110",
            "https://picsum.photos/600/400?random=2110"
        ],
        "organization": {
            "organization_public_id": "archive-org-21",
            "name": "パートナー企業 #21",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=610",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-12",
                "name": "アーカイブテーマ #12",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-111",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-11",
                "name": "スピーカー 11",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=710",
                "display_order": 1
            }
        ],
        "display_order": 111
    },
    "archive-event-112": {
        "event_public_id": "archive-event-112",
        "header_image": "https://picsum.photos/800/400?random=311",
        "icon": "https://picsum.photos/200/200?random=311",
        "name": "UXライティングが変えるユーザー体験 (セッション #112)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「UXライティングが変えるユーザー体験」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1111",
            "https://picsum.photos/600/400?random=2111"
        ],
        "organization": {
            "organization_public_id": "archive-org-22",
            "name": "パートナー企業 #22",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=611",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-12",
                "name": "アーカイブテーマ #12",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-112",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-12",
                "name": "スピーカー 12",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=711",
                "display_order": 1
            }
        ],
        "display_order": 112
    },
    "archive-event-113": {
        "event_public_id": "archive-event-113",
        "header_image": "https://picsum.photos/800/400?random=312",
        "icon": "https://picsum.photos/200/200?random=312",
        "name": "フードテックが解決するグローバルな課題 (セッション #113)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「フードテックが解決するグローバルな課題」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1112",
            "https://picsum.photos/600/400?random=2112"
        ],
        "organization": {
            "organization_public_id": "archive-org-23",
            "name": "パートナー企業 #23",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=612",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-12",
                "name": "アーカイブテーマ #12",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-113",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-13",
                "name": "スピーカー 13",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=712",
                "display_order": 1
            }
        ],
        "display_order": 113
    },
    "archive-event-114": {
        "event_public_id": "archive-event-114",
        "header_image": "https://picsum.photos/800/400?random=313",
        "icon": "https://picsum.photos/200/200?random=313",
        "name": "地方創生とデジタルツインの融合 (セッション #114)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「地方創生とデジタルツインの融合」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1113",
            "https://picsum.photos/600/400?random=2113"
        ],
        "organization": {
            "organization_public_id": "archive-org-24",
            "name": "パートナー企業 #24",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=613",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-12",
                "name": "アーカイブテーマ #12",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-114",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-14",
                "name": "スピーカー 14",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=713",
                "display_order": 1
            }
        ],
        "display_order": 114
    },
    "archive-event-115": {
        "event_public_id": "archive-event-115",
        "header_image": "https://picsum.photos/800/400?random=314",
        "icon": "https://picsum.photos/200/200?random=314",
        "name": "スタートアップピッチコンテスト決勝 (セッション #115)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スタートアップピッチコンテスト決勝」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1114",
            "https://picsum.photos/600/400?random=2114"
        ],
        "organization": {
            "organization_public_id": "archive-org-25",
            "name": "パートナー企業 #25",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=614",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-12",
                "name": "アーカイブテーマ #12",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-115",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-15",
                "name": "スピーカー 15",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=714",
                "display_order": 1
            }
        ],
        "display_order": 115
    },
    "archive-event-116": {
        "event_public_id": "archive-event-116",
        "header_image": "https://picsum.photos/800/400?random=315",
        "icon": "https://picsum.photos/200/200?random=315",
        "name": "ロボティクスと自動化の現場導入事例 (セッション #116)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ロボティクスと自動化の現場導入事例」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1115",
            "https://picsum.photos/600/400?random=2115"
        ],
        "organization": {
            "organization_public_id": "archive-org-26",
            "name": "パートナー企業 #26",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=615",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-12",
                "name": "アーカイブテーマ #12",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-116",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-16",
                "name": "スピーカー 16",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=715",
                "display_order": 1
            }
        ],
        "display_order": 116
    },
    "archive-event-117": {
        "event_public_id": "archive-event-117",
        "header_image": "https://picsum.photos/800/400?random=316",
        "icon": "https://picsum.photos/200/200?random=316",
        "name": "アジャイル開発とチームビルディング (セッション #117)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「アジャイル開発とチームビルディング」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1116",
            "https://picsum.photos/600/400?random=2116"
        ],
        "organization": {
            "organization_public_id": "archive-org-27",
            "name": "パートナー企業 #27",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=616",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-12",
                "name": "アーカイブテーマ #12",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-117",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-17",
                "name": "スピーカー 17",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=716",
                "display_order": 1
            }
        ],
        "display_order": 117
    },
    "archive-event-118": {
        "event_public_id": "archive-event-118",
        "header_image": "https://picsum.photos/800/400?random=317",
        "icon": "https://picsum.photos/200/200?random=317",
        "name": "データサイエンスによるビジネス変革 (セッション #118)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「データサイエンスによるビジネス変革」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1117",
            "https://picsum.photos/600/400?random=2117"
        ],
        "organization": {
            "organization_public_id": "archive-org-28",
            "name": "パートナー企業 #28",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=617",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-12",
                "name": "アーカイブテーマ #12",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-118",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-18",
                "name": "スピーカー 18",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=717",
                "display_order": 1
            }
        ],
        "display_order": 118
    },
    "archive-event-119": {
        "event_public_id": "archive-event-119",
        "header_image": "https://picsum.photos/800/400?random=318",
        "icon": "https://picsum.photos/200/200?random=318",
        "name": "オープンソースコミュニティの未来 (セッション #119)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「オープンソースコミュニティの未来」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1118",
            "https://picsum.photos/600/400?random=2118"
        ],
        "organization": {
            "organization_public_id": "archive-org-29",
            "name": "パートナー企業 #29",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=618",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-12",
                "name": "アーカイブテーマ #12",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-119",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-19",
                "name": "スピーカー 19",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=718",
                "display_order": 1
            }
        ],
        "display_order": 119
    },
    "archive-event-120": {
        "event_public_id": "archive-event-120",
        "header_image": "https://picsum.photos/800/400?random=319",
        "icon": "https://picsum.photos/200/200?random=319",
        "name": "AR/VRコンテンツデザインの最新トレンド (セッション #120)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AR/VRコンテンツデザインの最新トレンド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1119",
            "https://picsum.photos/600/400?random=2119"
        ],
        "organization": {
            "organization_public_id": "archive-org-30",
            "name": "パートナー企業 #30",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=619",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-12",
                "name": "アーカイブテーマ #12",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-120",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-20",
                "name": "スピーカー 20",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=719",
                "display_order": 1
            }
        ],
        "display_order": 120
    },
    "archive-event-121": {
        "event_public_id": "archive-event-121",
        "header_image": "https://picsum.photos/800/400?random=320",
        "icon": "https://picsum.photos/200/200?random=320",
        "name": "AIと未来のテクノロジー基調講演 (セッション #121)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AIと未来のテクノロジー基調講演」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1120",
            "https://picsum.photos/600/400?random=2120"
        ],
        "organization": {
            "organization_public_id": "archive-org-1",
            "name": "パートナー企業 #1",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=620",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-13",
                "name": "アーカイブテーマ #13",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-121",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-21",
                "name": "スピーカー 21",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=720",
                "display_order": 1
            }
        ],
        "display_order": 121
    },
    "archive-event-122": {
        "event_public_id": "archive-event-122",
        "header_image": "https://picsum.photos/800/400?random=321",
        "icon": "https://picsum.photos/200/200?random=321",
        "name": "デザインシステム構築の実践ガイド (セッション #122)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「デザインシステム構築の実践ガイド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1121",
            "https://picsum.photos/600/400?random=2121"
        ],
        "organization": {
            "organization_public_id": "archive-org-2",
            "name": "パートナー企業 #2",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=621",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-13",
                "name": "アーカイブテーマ #13",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-122",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-22",
                "name": "スピーカー 22",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=721",
                "display_order": 1
            }
        ],
        "display_order": 122
    },
    "archive-event-123": {
        "event_public_id": "archive-event-123",
        "header_image": "https://picsum.photos/800/400?random=322",
        "icon": "https://picsum.photos/200/200?random=322",
        "name": "次世代メタバース空間のアーキテクチャ (セッション #123)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「次世代メタバース空間のアーキテクチャ」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1122",
            "https://picsum.photos/600/400?random=2122"
        ],
        "organization": {
            "organization_public_id": "archive-org-3",
            "name": "パートナー企業 #3",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=622",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-13",
                "name": "アーカイブテーマ #13",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-123",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-23",
                "name": "スピーカー 23",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=722",
                "display_order": 1
            }
        ],
        "display_order": 123
    },
    "archive-event-124": {
        "event_public_id": "archive-event-124",
        "header_image": "https://picsum.photos/800/400?random=323",
        "icon": "https://picsum.photos/200/200?random=323",
        "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #124)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「グリーンエネルギーが切り開く持続可能な社会」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1123",
            "https://picsum.photos/600/400?random=2123"
        ],
        "organization": {
            "organization_public_id": "archive-org-4",
            "name": "パートナー企業 #4",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=623",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-13",
                "name": "アーカイブテーマ #13",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-124",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-24",
                "name": "スピーカー 24",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=723",
                "display_order": 1
            }
        ],
        "display_order": 124
    },
    "archive-event-125": {
        "event_public_id": "archive-event-125",
        "header_image": "https://picsum.photos/800/400?random=324",
        "icon": "https://picsum.photos/200/200?random=324",
        "name": "量子コンピューティングの実用化と展望 (セッション #125)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「量子コンピューティングの実用化と展望」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1124",
            "https://picsum.photos/600/400?random=2124"
        ],
        "organization": {
            "organization_public_id": "archive-org-5",
            "name": "パートナー企業 #5",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=624",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-13",
                "name": "アーカイブテーマ #13",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-125",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-25",
                "name": "スピーカー 25",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=724",
                "display_order": 1
            }
        ],
        "display_order": 125
    },
    "archive-event-126": {
        "event_public_id": "archive-event-126",
        "header_image": "https://picsum.photos/800/400?random=325",
        "icon": "https://picsum.photos/200/200?random=325",
        "name": "Web3時代の分散型IDとプライバシー (セッション #126)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「Web3時代の分散型IDとプライバシー」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1125",
            "https://picsum.photos/600/400?random=2125"
        ],
        "organization": {
            "organization_public_id": "archive-org-6",
            "name": "パートナー企業 #6",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=625",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-13",
                "name": "アーカイブテーマ #13",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-126",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-26",
                "name": "スピーカー 26",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=725",
                "display_order": 1
            }
        ],
        "display_order": 126
    },
    "archive-event-127": {
        "event_public_id": "archive-event-127",
        "header_image": "https://picsum.photos/800/400?random=326",
        "icon": "https://picsum.photos/200/200?random=326",
        "name": "スマートモビリティと自動運転の最前線 (セッション #127)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スマートモビリティと自動運転の最前線」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1126",
            "https://picsum.photos/600/400?random=2126"
        ],
        "organization": {
            "organization_public_id": "archive-org-7",
            "name": "パートナー企業 #7",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=626",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-13",
                "name": "アーカイブテーマ #13",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-127",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-27",
                "name": "スピーカー 27",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=726",
                "display_order": 1
            }
        ],
        "display_order": 127
    },
    "archive-event-128": {
        "event_public_id": "archive-event-128",
        "header_image": "https://picsum.photos/800/400?random=327",
        "icon": "https://picsum.photos/200/200?random=327",
        "name": "ヘルスケアテックの最新イノベーション (セッション #128)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ヘルスケアテックの最新イノベーション」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1127",
            "https://picsum.photos/600/400?random=2127"
        ],
        "organization": {
            "organization_public_id": "archive-org-8",
            "name": "パートナー企業 #8",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=627",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-13",
                "name": "アーカイブテーマ #13",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-128",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-28",
                "name": "スピーカー 28",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=727",
                "display_order": 1
            }
        ],
        "display_order": 128
    },
    "archive-event-129": {
        "event_public_id": "archive-event-129",
        "header_image": "https://picsum.photos/800/400?random=328",
        "icon": "https://picsum.photos/200/200?random=328",
        "name": "宇宙ビジネスの現状と今後の可能性 (セッション #129)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「宇宙ビジネスの現状と今後の可能性」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1128",
            "https://picsum.photos/600/400?random=2128"
        ],
        "organization": {
            "organization_public_id": "archive-org-9",
            "name": "パートナー企業 #9",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=628",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-13",
                "name": "アーカイブテーマ #13",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-129",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-29",
                "name": "スピーカー 29",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=728",
                "display_order": 1
            }
        ],
        "display_order": 129
    },
    "archive-event-130": {
        "event_public_id": "archive-event-130",
        "header_image": "https://picsum.photos/800/400?random=329",
        "icon": "https://picsum.photos/200/200?random=329",
        "name": "サイバーセキュリティ防御戦略2026 (セッション #130)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「サイバーセキュリティ防御戦略2026」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1129",
            "https://picsum.photos/600/400?random=2129"
        ],
        "organization": {
            "organization_public_id": "archive-org-10",
            "name": "パートナー企業 #10",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=629",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-13",
                "name": "アーカイブテーマ #13",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-130",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-30",
                "name": "スピーカー 30",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=729",
                "display_order": 1
            }
        ],
        "display_order": 130
    },
    "archive-event-131": {
        "event_public_id": "archive-event-131",
        "header_image": "https://picsum.photos/800/400?random=330",
        "icon": "https://picsum.photos/200/200?random=330",
        "name": "生成AIを活用したプロダクト開発の現場 (セッション #131)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「生成AIを活用したプロダクト開発の現場」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1130",
            "https://picsum.photos/600/400?random=2130"
        ],
        "organization": {
            "organization_public_id": "archive-org-11",
            "name": "パートナー企業 #11",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=630",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-14",
                "name": "アーカイブテーマ #14",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-131",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-31",
                "name": "スピーカー 31",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=730",
                "display_order": 1
            }
        ],
        "display_order": 131
    },
    "archive-event-132": {
        "event_public_id": "archive-event-132",
        "header_image": "https://picsum.photos/800/400?random=331",
        "icon": "https://picsum.photos/200/200?random=331",
        "name": "UXライティングが変えるユーザー体験 (セッション #132)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「UXライティングが変えるユーザー体験」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1131",
            "https://picsum.photos/600/400?random=2131"
        ],
        "organization": {
            "organization_public_id": "archive-org-12",
            "name": "パートナー企業 #12",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=631",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-14",
                "name": "アーカイブテーマ #14",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-132",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-32",
                "name": "スピーカー 32",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=731",
                "display_order": 1
            }
        ],
        "display_order": 132
    },
    "archive-event-133": {
        "event_public_id": "archive-event-133",
        "header_image": "https://picsum.photos/800/400?random=332",
        "icon": "https://picsum.photos/200/200?random=332",
        "name": "フードテックが解決するグローバルな課題 (セッション #133)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「フードテックが解決するグローバルな課題」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1132",
            "https://picsum.photos/600/400?random=2132"
        ],
        "organization": {
            "organization_public_id": "archive-org-13",
            "name": "パートナー企業 #13",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=632",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-14",
                "name": "アーカイブテーマ #14",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-133",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-33",
                "name": "スピーカー 33",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=732",
                "display_order": 1
            }
        ],
        "display_order": 133
    },
    "archive-event-134": {
        "event_public_id": "archive-event-134",
        "header_image": "https://picsum.photos/800/400?random=333",
        "icon": "https://picsum.photos/200/200?random=333",
        "name": "地方創生とデジタルツインの融合 (セッション #134)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「地方創生とデジタルツインの融合」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1133",
            "https://picsum.photos/600/400?random=2133"
        ],
        "organization": {
            "organization_public_id": "archive-org-14",
            "name": "パートナー企業 #14",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=633",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-14",
                "name": "アーカイブテーマ #14",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-134",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-34",
                "name": "スピーカー 34",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=733",
                "display_order": 1
            }
        ],
        "display_order": 134
    },
    "archive-event-135": {
        "event_public_id": "archive-event-135",
        "header_image": "https://picsum.photos/800/400?random=334",
        "icon": "https://picsum.photos/200/200?random=334",
        "name": "スタートアップピッチコンテスト決勝 (セッション #135)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スタートアップピッチコンテスト決勝」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1134",
            "https://picsum.photos/600/400?random=2134"
        ],
        "organization": {
            "organization_public_id": "archive-org-15",
            "name": "パートナー企業 #15",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=634",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-14",
                "name": "アーカイブテーマ #14",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-135",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-35",
                "name": "スピーカー 35",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=734",
                "display_order": 1
            }
        ],
        "display_order": 135
    },
    "archive-event-136": {
        "event_public_id": "archive-event-136",
        "header_image": "https://picsum.photos/800/400?random=335",
        "icon": "https://picsum.photos/200/200?random=335",
        "name": "ロボティクスと自動化の現場導入事例 (セッション #136)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ロボティクスと自動化の現場導入事例」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1135",
            "https://picsum.photos/600/400?random=2135"
        ],
        "organization": {
            "organization_public_id": "archive-org-16",
            "name": "パートナー企業 #16",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=635",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-14",
                "name": "アーカイブテーマ #14",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-136",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-36",
                "name": "スピーカー 36",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=735",
                "display_order": 1
            }
        ],
        "display_order": 136
    },
    "archive-event-137": {
        "event_public_id": "archive-event-137",
        "header_image": "https://picsum.photos/800/400?random=336",
        "icon": "https://picsum.photos/200/200?random=336",
        "name": "アジャイル開発とチームビルディング (セッション #137)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「アジャイル開発とチームビルディング」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1136",
            "https://picsum.photos/600/400?random=2136"
        ],
        "organization": {
            "organization_public_id": "archive-org-17",
            "name": "パートナー企業 #17",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=636",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-14",
                "name": "アーカイブテーマ #14",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-137",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-37",
                "name": "スピーカー 37",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=736",
                "display_order": 1
            }
        ],
        "display_order": 137
    },
    "archive-event-138": {
        "event_public_id": "archive-event-138",
        "header_image": "https://picsum.photos/800/400?random=337",
        "icon": "https://picsum.photos/200/200?random=337",
        "name": "データサイエンスによるビジネス変革 (セッション #138)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「データサイエンスによるビジネス変革」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1137",
            "https://picsum.photos/600/400?random=2137"
        ],
        "organization": {
            "organization_public_id": "archive-org-18",
            "name": "パートナー企業 #18",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=637",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-14",
                "name": "アーカイブテーマ #14",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-138",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-38",
                "name": "スピーカー 38",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=737",
                "display_order": 1
            }
        ],
        "display_order": 138
    },
    "archive-event-139": {
        "event_public_id": "archive-event-139",
        "header_image": "https://picsum.photos/800/400?random=338",
        "icon": "https://picsum.photos/200/200?random=338",
        "name": "オープンソースコミュニティの未来 (セッション #139)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「オープンソースコミュニティの未来」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1138",
            "https://picsum.photos/600/400?random=2138"
        ],
        "organization": {
            "organization_public_id": "archive-org-19",
            "name": "パートナー企業 #19",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=638",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-14",
                "name": "アーカイブテーマ #14",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-139",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-39",
                "name": "スピーカー 39",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=738",
                "display_order": 1
            }
        ],
        "display_order": 139
    },
    "archive-event-140": {
        "event_public_id": "archive-event-140",
        "header_image": "https://picsum.photos/800/400?random=339",
        "icon": "https://picsum.photos/200/200?random=339",
        "name": "AR/VRコンテンツデザインの最新トレンド (セッション #140)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AR/VRコンテンツデザインの最新トレンド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1139",
            "https://picsum.photos/600/400?random=2139"
        ],
        "organization": {
            "organization_public_id": "archive-org-20",
            "name": "パートナー企業 #20",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=639",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-14",
                "name": "アーカイブテーマ #14",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-140",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-40",
                "name": "スピーカー 40",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=739",
                "display_order": 1
            }
        ],
        "display_order": 140
    },
    "archive-event-141": {
        "event_public_id": "archive-event-141",
        "header_image": "https://picsum.photos/800/400?random=340",
        "icon": "https://picsum.photos/200/200?random=340",
        "name": "AIと未来のテクノロジー基調講演 (セッション #141)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AIと未来のテクノロジー基調講演」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1140",
            "https://picsum.photos/600/400?random=2140"
        ],
        "organization": {
            "organization_public_id": "archive-org-21",
            "name": "パートナー企業 #21",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=640",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-15",
                "name": "アーカイブテーマ #15",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-141",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-41",
                "name": "スピーカー 41",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=740",
                "display_order": 1
            }
        ],
        "display_order": 141
    },
    "archive-event-142": {
        "event_public_id": "archive-event-142",
        "header_image": "https://picsum.photos/800/400?random=341",
        "icon": "https://picsum.photos/200/200?random=341",
        "name": "デザインシステム構築の実践ガイド (セッション #142)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「デザインシステム構築の実践ガイド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1141",
            "https://picsum.photos/600/400?random=2141"
        ],
        "organization": {
            "organization_public_id": "archive-org-22",
            "name": "パートナー企業 #22",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=641",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-15",
                "name": "アーカイブテーマ #15",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-142",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-42",
                "name": "スピーカー 42",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=741",
                "display_order": 1
            }
        ],
        "display_order": 142
    },
    "archive-event-143": {
        "event_public_id": "archive-event-143",
        "header_image": "https://picsum.photos/800/400?random=342",
        "icon": "https://picsum.photos/200/200?random=342",
        "name": "次世代メタバース空間のアーキテクチャ (セッション #143)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「次世代メタバース空間のアーキテクチャ」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1142",
            "https://picsum.photos/600/400?random=2142"
        ],
        "organization": {
            "organization_public_id": "archive-org-23",
            "name": "パートナー企業 #23",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=642",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-15",
                "name": "アーカイブテーマ #15",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-143",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-43",
                "name": "スピーカー 43",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=742",
                "display_order": 1
            }
        ],
        "display_order": 143
    },
    "archive-event-144": {
        "event_public_id": "archive-event-144",
        "header_image": "https://picsum.photos/800/400?random=343",
        "icon": "https://picsum.photos/200/200?random=343",
        "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #144)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「グリーンエネルギーが切り開く持続可能な社会」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1143",
            "https://picsum.photos/600/400?random=2143"
        ],
        "organization": {
            "organization_public_id": "archive-org-24",
            "name": "パートナー企業 #24",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=643",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-15",
                "name": "アーカイブテーマ #15",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-144",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-44",
                "name": "スピーカー 44",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=743",
                "display_order": 1
            }
        ],
        "display_order": 144
    },
    "archive-event-145": {
        "event_public_id": "archive-event-145",
        "header_image": "https://picsum.photos/800/400?random=344",
        "icon": "https://picsum.photos/200/200?random=344",
        "name": "量子コンピューティングの実用化と展望 (セッション #145)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「量子コンピューティングの実用化と展望」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1144",
            "https://picsum.photos/600/400?random=2144"
        ],
        "organization": {
            "organization_public_id": "archive-org-25",
            "name": "パートナー企業 #25",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=644",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-15",
                "name": "アーカイブテーマ #15",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-145",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-45",
                "name": "スピーカー 45",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=744",
                "display_order": 1
            }
        ],
        "display_order": 145
    },
    "archive-event-146": {
        "event_public_id": "archive-event-146",
        "header_image": "https://picsum.photos/800/400?random=345",
        "icon": "https://picsum.photos/200/200?random=345",
        "name": "Web3時代の分散型IDとプライバシー (セッション #146)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「Web3時代の分散型IDとプライバシー」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1145",
            "https://picsum.photos/600/400?random=2145"
        ],
        "organization": {
            "organization_public_id": "archive-org-26",
            "name": "パートナー企業 #26",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=645",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-15",
                "name": "アーカイブテーマ #15",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-146",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-46",
                "name": "スピーカー 46",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=745",
                "display_order": 1
            }
        ],
        "display_order": 146
    },
    "archive-event-147": {
        "event_public_id": "archive-event-147",
        "header_image": "https://picsum.photos/800/400?random=346",
        "icon": "https://picsum.photos/200/200?random=346",
        "name": "スマートモビリティと自動運転の最前線 (セッション #147)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スマートモビリティと自動運転の最前線」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1146",
            "https://picsum.photos/600/400?random=2146"
        ],
        "organization": {
            "organization_public_id": "archive-org-27",
            "name": "パートナー企業 #27",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=646",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-15",
                "name": "アーカイブテーマ #15",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-147",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-47",
                "name": "スピーカー 47",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=746",
                "display_order": 1
            }
        ],
        "display_order": 147
    },
    "archive-event-148": {
        "event_public_id": "archive-event-148",
        "header_image": "https://picsum.photos/800/400?random=347",
        "icon": "https://picsum.photos/200/200?random=347",
        "name": "ヘルスケアテックの最新イノベーション (セッション #148)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ヘルスケアテックの最新イノベーション」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1147",
            "https://picsum.photos/600/400?random=2147"
        ],
        "organization": {
            "organization_public_id": "archive-org-28",
            "name": "パートナー企業 #28",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=647",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-15",
                "name": "アーカイブテーマ #15",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-148",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-48",
                "name": "スピーカー 48",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=747",
                "display_order": 1
            }
        ],
        "display_order": 148
    },
    "archive-event-149": {
        "event_public_id": "archive-event-149",
        "header_image": "https://picsum.photos/800/400?random=348",
        "icon": "https://picsum.photos/200/200?random=348",
        "name": "宇宙ビジネスの現状と今後の可能性 (セッション #149)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「宇宙ビジネスの現状と今後の可能性」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1148",
            "https://picsum.photos/600/400?random=2148"
        ],
        "organization": {
            "organization_public_id": "archive-org-29",
            "name": "パートナー企業 #29",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=648",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-15",
                "name": "アーカイブテーマ #15",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-149",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-49",
                "name": "スピーカー 49",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=748",
                "display_order": 1
            }
        ],
        "display_order": 149
    },
    "archive-event-150": {
        "event_public_id": "archive-event-150",
        "header_image": "https://picsum.photos/800/400?random=349",
        "icon": "https://picsum.photos/200/200?random=349",
        "name": "サイバーセキュリティ防御戦略2026 (セッション #150)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「サイバーセキュリティ防御戦略2026」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1149",
            "https://picsum.photos/600/400?random=2149"
        ],
        "organization": {
            "organization_public_id": "archive-org-30",
            "name": "パートナー企業 #30",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=649",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-15",
                "name": "アーカイブテーマ #15",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-150",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-50",
                "name": "スピーカー 50",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=749",
                "display_order": 1
            }
        ],
        "display_order": 150
    },
    "archive-event-151": {
        "event_public_id": "archive-event-151",
        "header_image": "https://picsum.photos/800/400?random=350",
        "icon": "https://picsum.photos/200/200?random=350",
        "name": "生成AIを活用したプロダクト開発の現場 (セッション #151)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「生成AIを活用したプロダクト開発の現場」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1150",
            "https://picsum.photos/600/400?random=2150"
        ],
        "organization": {
            "organization_public_id": "archive-org-1",
            "name": "パートナー企業 #1",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=650",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-16",
                "name": "アーカイブテーマ #16",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-151",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-1",
                "name": "スピーカー 1",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=750",
                "display_order": 1
            }
        ],
        "display_order": 151
    },
    "archive-event-152": {
        "event_public_id": "archive-event-152",
        "header_image": "https://picsum.photos/800/400?random=351",
        "icon": "https://picsum.photos/200/200?random=351",
        "name": "UXライティングが変えるユーザー体験 (セッション #152)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「UXライティングが変えるユーザー体験」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1151",
            "https://picsum.photos/600/400?random=2151"
        ],
        "organization": {
            "organization_public_id": "archive-org-2",
            "name": "パートナー企業 #2",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=651",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-16",
                "name": "アーカイブテーマ #16",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-152",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-2",
                "name": "スピーカー 2",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=751",
                "display_order": 1
            }
        ],
        "display_order": 152
    },
    "archive-event-153": {
        "event_public_id": "archive-event-153",
        "header_image": "https://picsum.photos/800/400?random=352",
        "icon": "https://picsum.photos/200/200?random=352",
        "name": "フードテックが解決するグローバルな課題 (セッション #153)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「フードテックが解決するグローバルな課題」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1152",
            "https://picsum.photos/600/400?random=2152"
        ],
        "organization": {
            "organization_public_id": "archive-org-3",
            "name": "パートナー企業 #3",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=652",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-16",
                "name": "アーカイブテーマ #16",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-153",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-3",
                "name": "スピーカー 3",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=752",
                "display_order": 1
            }
        ],
        "display_order": 153
    },
    "archive-event-154": {
        "event_public_id": "archive-event-154",
        "header_image": "https://picsum.photos/800/400?random=353",
        "icon": "https://picsum.photos/200/200?random=353",
        "name": "地方創生とデジタルツインの融合 (セッション #154)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「地方創生とデジタルツインの融合」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1153",
            "https://picsum.photos/600/400?random=2153"
        ],
        "organization": {
            "organization_public_id": "archive-org-4",
            "name": "パートナー企業 #4",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=653",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-16",
                "name": "アーカイブテーマ #16",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-154",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-4",
                "name": "スピーカー 4",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=753",
                "display_order": 1
            }
        ],
        "display_order": 154
    },
    "archive-event-155": {
        "event_public_id": "archive-event-155",
        "header_image": "https://picsum.photos/800/400?random=354",
        "icon": "https://picsum.photos/200/200?random=354",
        "name": "スタートアップピッチコンテスト決勝 (セッション #155)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スタートアップピッチコンテスト決勝」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1154",
            "https://picsum.photos/600/400?random=2154"
        ],
        "organization": {
            "organization_public_id": "archive-org-5",
            "name": "パートナー企業 #5",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=654",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-16",
                "name": "アーカイブテーマ #16",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-155",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-5",
                "name": "スピーカー 5",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=754",
                "display_order": 1
            }
        ],
        "display_order": 155
    },
    "archive-event-156": {
        "event_public_id": "archive-event-156",
        "header_image": "https://picsum.photos/800/400?random=355",
        "icon": "https://picsum.photos/200/200?random=355",
        "name": "ロボティクスと自動化の現場導入事例 (セッション #156)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ロボティクスと自動化の現場導入事例」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1155",
            "https://picsum.photos/600/400?random=2155"
        ],
        "organization": {
            "organization_public_id": "archive-org-6",
            "name": "パートナー企業 #6",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=655",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-16",
                "name": "アーカイブテーマ #16",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-156",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-6",
                "name": "スピーカー 6",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=755",
                "display_order": 1
            }
        ],
        "display_order": 156
    },
    "archive-event-157": {
        "event_public_id": "archive-event-157",
        "header_image": "https://picsum.photos/800/400?random=356",
        "icon": "https://picsum.photos/200/200?random=356",
        "name": "アジャイル開発とチームビルディング (セッション #157)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「アジャイル開発とチームビルディング」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1156",
            "https://picsum.photos/600/400?random=2156"
        ],
        "organization": {
            "organization_public_id": "archive-org-7",
            "name": "パートナー企業 #7",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=656",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-16",
                "name": "アーカイブテーマ #16",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-157",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-7",
                "name": "スピーカー 7",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=756",
                "display_order": 1
            }
        ],
        "display_order": 157
    },
    "archive-event-158": {
        "event_public_id": "archive-event-158",
        "header_image": "https://picsum.photos/800/400?random=357",
        "icon": "https://picsum.photos/200/200?random=357",
        "name": "データサイエンスによるビジネス変革 (セッション #158)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「データサイエンスによるビジネス変革」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1157",
            "https://picsum.photos/600/400?random=2157"
        ],
        "organization": {
            "organization_public_id": "archive-org-8",
            "name": "パートナー企業 #8",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=657",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-16",
                "name": "アーカイブテーマ #16",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-158",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-8",
                "name": "スピーカー 8",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=757",
                "display_order": 1
            }
        ],
        "display_order": 158
    },
    "archive-event-159": {
        "event_public_id": "archive-event-159",
        "header_image": "https://picsum.photos/800/400?random=358",
        "icon": "https://picsum.photos/200/200?random=358",
        "name": "オープンソースコミュニティの未来 (セッション #159)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「オープンソースコミュニティの未来」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1158",
            "https://picsum.photos/600/400?random=2158"
        ],
        "organization": {
            "organization_public_id": "archive-org-9",
            "name": "パートナー企業 #9",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=658",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-16",
                "name": "アーカイブテーマ #16",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-159",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-9",
                "name": "スピーカー 9",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=758",
                "display_order": 1
            }
        ],
        "display_order": 159
    },
    "archive-event-160": {
        "event_public_id": "archive-event-160",
        "header_image": "https://picsum.photos/800/400?random=359",
        "icon": "https://picsum.photos/200/200?random=359",
        "name": "AR/VRコンテンツデザインの最新トレンド (セッション #160)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AR/VRコンテンツデザインの最新トレンド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1159",
            "https://picsum.photos/600/400?random=2159"
        ],
        "organization": {
            "organization_public_id": "archive-org-10",
            "name": "パートナー企業 #10",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=659",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-16",
                "name": "アーカイブテーマ #16",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-160",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-10",
                "name": "スピーカー 10",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=759",
                "display_order": 1
            }
        ],
        "display_order": 160
    },
    "archive-event-161": {
        "event_public_id": "archive-event-161",
        "header_image": "https://picsum.photos/800/400?random=360",
        "icon": "https://picsum.photos/200/200?random=360",
        "name": "AIと未来のテクノロジー基調講演 (セッション #161)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AIと未来のテクノロジー基調講演」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1160",
            "https://picsum.photos/600/400?random=2160"
        ],
        "organization": {
            "organization_public_id": "archive-org-11",
            "name": "パートナー企業 #11",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=660",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-17",
                "name": "アーカイブテーマ #17",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-161",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-11",
                "name": "スピーカー 11",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=760",
                "display_order": 1
            }
        ],
        "display_order": 161
    },
    "archive-event-162": {
        "event_public_id": "archive-event-162",
        "header_image": "https://picsum.photos/800/400?random=361",
        "icon": "https://picsum.photos/200/200?random=361",
        "name": "デザインシステム構築の実践ガイド (セッション #162)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「デザインシステム構築の実践ガイド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1161",
            "https://picsum.photos/600/400?random=2161"
        ],
        "organization": {
            "organization_public_id": "archive-org-12",
            "name": "パートナー企業 #12",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=661",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-17",
                "name": "アーカイブテーマ #17",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-162",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-12",
                "name": "スピーカー 12",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=761",
                "display_order": 1
            }
        ],
        "display_order": 162
    },
    "archive-event-163": {
        "event_public_id": "archive-event-163",
        "header_image": "https://picsum.photos/800/400?random=362",
        "icon": "https://picsum.photos/200/200?random=362",
        "name": "次世代メタバース空間のアーキテクチャ (セッション #163)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「次世代メタバース空間のアーキテクチャ」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1162",
            "https://picsum.photos/600/400?random=2162"
        ],
        "organization": {
            "organization_public_id": "archive-org-13",
            "name": "パートナー企業 #13",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=662",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-17",
                "name": "アーカイブテーマ #17",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-163",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-13",
                "name": "スピーカー 13",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=762",
                "display_order": 1
            }
        ],
        "display_order": 163
    },
    "archive-event-164": {
        "event_public_id": "archive-event-164",
        "header_image": "https://picsum.photos/800/400?random=363",
        "icon": "https://picsum.photos/200/200?random=363",
        "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #164)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「グリーンエネルギーが切り開く持続可能な社会」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1163",
            "https://picsum.photos/600/400?random=2163"
        ],
        "organization": {
            "organization_public_id": "archive-org-14",
            "name": "パートナー企業 #14",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=663",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-17",
                "name": "アーカイブテーマ #17",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-164",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-14",
                "name": "スピーカー 14",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=763",
                "display_order": 1
            }
        ],
        "display_order": 164
    },
    "archive-event-165": {
        "event_public_id": "archive-event-165",
        "header_image": "https://picsum.photos/800/400?random=364",
        "icon": "https://picsum.photos/200/200?random=364",
        "name": "量子コンピューティングの実用化と展望 (セッション #165)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「量子コンピューティングの実用化と展望」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1164",
            "https://picsum.photos/600/400?random=2164"
        ],
        "organization": {
            "organization_public_id": "archive-org-15",
            "name": "パートナー企業 #15",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=664",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-17",
                "name": "アーカイブテーマ #17",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-165",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-15",
                "name": "スピーカー 15",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=764",
                "display_order": 1
            }
        ],
        "display_order": 165
    },
    "archive-event-166": {
        "event_public_id": "archive-event-166",
        "header_image": "https://picsum.photos/800/400?random=365",
        "icon": "https://picsum.photos/200/200?random=365",
        "name": "Web3時代の分散型IDとプライバシー (セッション #166)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「Web3時代の分散型IDとプライバシー」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1165",
            "https://picsum.photos/600/400?random=2165"
        ],
        "organization": {
            "organization_public_id": "archive-org-16",
            "name": "パートナー企業 #16",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=665",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-17",
                "name": "アーカイブテーマ #17",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-166",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-16",
                "name": "スピーカー 16",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=765",
                "display_order": 1
            }
        ],
        "display_order": 166
    },
    "archive-event-167": {
        "event_public_id": "archive-event-167",
        "header_image": "https://picsum.photos/800/400?random=366",
        "icon": "https://picsum.photos/200/200?random=366",
        "name": "スマートモビリティと自動運転の最前線 (セッション #167)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スマートモビリティと自動運転の最前線」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1166",
            "https://picsum.photos/600/400?random=2166"
        ],
        "organization": {
            "organization_public_id": "archive-org-17",
            "name": "パートナー企業 #17",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=666",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-17",
                "name": "アーカイブテーマ #17",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-167",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-17",
                "name": "スピーカー 17",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=766",
                "display_order": 1
            }
        ],
        "display_order": 167
    },
    "archive-event-168": {
        "event_public_id": "archive-event-168",
        "header_image": "https://picsum.photos/800/400?random=367",
        "icon": "https://picsum.photos/200/200?random=367",
        "name": "ヘルスケアテックの最新イノベーション (セッション #168)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ヘルスケアテックの最新イノベーション」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1167",
            "https://picsum.photos/600/400?random=2167"
        ],
        "organization": {
            "organization_public_id": "archive-org-18",
            "name": "パートナー企業 #18",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=667",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-17",
                "name": "アーカイブテーマ #17",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-168",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-18",
                "name": "スピーカー 18",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=767",
                "display_order": 1
            }
        ],
        "display_order": 168
    },
    "archive-event-169": {
        "event_public_id": "archive-event-169",
        "header_image": "https://picsum.photos/800/400?random=368",
        "icon": "https://picsum.photos/200/200?random=368",
        "name": "宇宙ビジネスの現状と今後の可能性 (セッション #169)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「宇宙ビジネスの現状と今後の可能性」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1168",
            "https://picsum.photos/600/400?random=2168"
        ],
        "organization": {
            "organization_public_id": "archive-org-19",
            "name": "パートナー企業 #19",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=668",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-17",
                "name": "アーカイブテーマ #17",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-169",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-19",
                "name": "スピーカー 19",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=768",
                "display_order": 1
            }
        ],
        "display_order": 169
    },
    "archive-event-170": {
        "event_public_id": "archive-event-170",
        "header_image": "https://picsum.photos/800/400?random=369",
        "icon": "https://picsum.photos/200/200?random=369",
        "name": "サイバーセキュリティ防御戦略2026 (セッション #170)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「サイバーセキュリティ防御戦略2026」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1169",
            "https://picsum.photos/600/400?random=2169"
        ],
        "organization": {
            "organization_public_id": "archive-org-20",
            "name": "パートナー企業 #20",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=669",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-17",
                "name": "アーカイブテーマ #17",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-170",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-20",
                "name": "スピーカー 20",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=769",
                "display_order": 1
            }
        ],
        "display_order": 170
    },
    "archive-event-171": {
        "event_public_id": "archive-event-171",
        "header_image": "https://picsum.photos/800/400?random=370",
        "icon": "https://picsum.photos/200/200?random=370",
        "name": "生成AIを活用したプロダクト開発の現場 (セッション #171)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「生成AIを活用したプロダクト開発の現場」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1170",
            "https://picsum.photos/600/400?random=2170"
        ],
        "organization": {
            "organization_public_id": "archive-org-21",
            "name": "パートナー企業 #21",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=670",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-18",
                "name": "アーカイブテーマ #18",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-171",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-21",
                "name": "スピーカー 21",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=770",
                "display_order": 1
            }
        ],
        "display_order": 171
    },
    "archive-event-172": {
        "event_public_id": "archive-event-172",
        "header_image": "https://picsum.photos/800/400?random=371",
        "icon": "https://picsum.photos/200/200?random=371",
        "name": "UXライティングが変えるユーザー体験 (セッション #172)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「UXライティングが変えるユーザー体験」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1171",
            "https://picsum.photos/600/400?random=2171"
        ],
        "organization": {
            "organization_public_id": "archive-org-22",
            "name": "パートナー企業 #22",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=671",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-18",
                "name": "アーカイブテーマ #18",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-172",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-22",
                "name": "スピーカー 22",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=771",
                "display_order": 1
            }
        ],
        "display_order": 172
    },
    "archive-event-173": {
        "event_public_id": "archive-event-173",
        "header_image": "https://picsum.photos/800/400?random=372",
        "icon": "https://picsum.photos/200/200?random=372",
        "name": "フードテックが解決するグローバルな課題 (セッション #173)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「フードテックが解決するグローバルな課題」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1172",
            "https://picsum.photos/600/400?random=2172"
        ],
        "organization": {
            "organization_public_id": "archive-org-23",
            "name": "パートナー企業 #23",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=672",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-18",
                "name": "アーカイブテーマ #18",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-173",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-23",
                "name": "スピーカー 23",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=772",
                "display_order": 1
            }
        ],
        "display_order": 173
    },
    "archive-event-174": {
        "event_public_id": "archive-event-174",
        "header_image": "https://picsum.photos/800/400?random=373",
        "icon": "https://picsum.photos/200/200?random=373",
        "name": "地方創生とデジタルツインの融合 (セッション #174)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「地方創生とデジタルツインの融合」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1173",
            "https://picsum.photos/600/400?random=2173"
        ],
        "organization": {
            "organization_public_id": "archive-org-24",
            "name": "パートナー企業 #24",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=673",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-18",
                "name": "アーカイブテーマ #18",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-174",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-24",
                "name": "スピーカー 24",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=773",
                "display_order": 1
            }
        ],
        "display_order": 174
    },
    "archive-event-175": {
        "event_public_id": "archive-event-175",
        "header_image": "https://picsum.photos/800/400?random=374",
        "icon": "https://picsum.photos/200/200?random=374",
        "name": "スタートアップピッチコンテスト決勝 (セッション #175)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スタートアップピッチコンテスト決勝」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1174",
            "https://picsum.photos/600/400?random=2174"
        ],
        "organization": {
            "organization_public_id": "archive-org-25",
            "name": "パートナー企業 #25",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=674",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-18",
                "name": "アーカイブテーマ #18",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-175",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-25",
                "name": "スピーカー 25",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=774",
                "display_order": 1
            }
        ],
        "display_order": 175
    },
    "archive-event-176": {
        "event_public_id": "archive-event-176",
        "header_image": "https://picsum.photos/800/400?random=375",
        "icon": "https://picsum.photos/200/200?random=375",
        "name": "ロボティクスと自動化の現場導入事例 (セッション #176)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ロボティクスと自動化の現場導入事例」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1175",
            "https://picsum.photos/600/400?random=2175"
        ],
        "organization": {
            "organization_public_id": "archive-org-26",
            "name": "パートナー企業 #26",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=675",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-18",
                "name": "アーカイブテーマ #18",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-176",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-26",
                "name": "スピーカー 26",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=775",
                "display_order": 1
            }
        ],
        "display_order": 176
    },
    "archive-event-177": {
        "event_public_id": "archive-event-177",
        "header_image": "https://picsum.photos/800/400?random=376",
        "icon": "https://picsum.photos/200/200?random=376",
        "name": "アジャイル開発とチームビルディング (セッション #177)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「アジャイル開発とチームビルディング」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1176",
            "https://picsum.photos/600/400?random=2176"
        ],
        "organization": {
            "organization_public_id": "archive-org-27",
            "name": "パートナー企業 #27",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=676",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-18",
                "name": "アーカイブテーマ #18",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-177",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-27",
                "name": "スピーカー 27",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=776",
                "display_order": 1
            }
        ],
        "display_order": 177
    },
    "archive-event-178": {
        "event_public_id": "archive-event-178",
        "header_image": "https://picsum.photos/800/400?random=377",
        "icon": "https://picsum.photos/200/200?random=377",
        "name": "データサイエンスによるビジネス変革 (セッション #178)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「データサイエンスによるビジネス変革」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1177",
            "https://picsum.photos/600/400?random=2177"
        ],
        "organization": {
            "organization_public_id": "archive-org-28",
            "name": "パートナー企業 #28",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=677",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-18",
                "name": "アーカイブテーマ #18",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-178",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-28",
                "name": "スピーカー 28",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=777",
                "display_order": 1
            }
        ],
        "display_order": 178
    },
    "archive-event-179": {
        "event_public_id": "archive-event-179",
        "header_image": "https://picsum.photos/800/400?random=378",
        "icon": "https://picsum.photos/200/200?random=378",
        "name": "オープンソースコミュニティの未来 (セッション #179)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「オープンソースコミュニティの未来」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1178",
            "https://picsum.photos/600/400?random=2178"
        ],
        "organization": {
            "organization_public_id": "archive-org-29",
            "name": "パートナー企業 #29",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=678",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-18",
                "name": "アーカイブテーマ #18",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-179",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-29",
                "name": "スピーカー 29",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=778",
                "display_order": 1
            }
        ],
        "display_order": 179
    },
    "archive-event-180": {
        "event_public_id": "archive-event-180",
        "header_image": "https://picsum.photos/800/400?random=379",
        "icon": "https://picsum.photos/200/200?random=379",
        "name": "AR/VRコンテンツデザインの最新トレンド (セッション #180)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AR/VRコンテンツデザインの最新トレンド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1179",
            "https://picsum.photos/600/400?random=2179"
        ],
        "organization": {
            "organization_public_id": "archive-org-30",
            "name": "パートナー企業 #30",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=679",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-18",
                "name": "アーカイブテーマ #18",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-180",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-30",
                "name": "スピーカー 30",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=779",
                "display_order": 1
            }
        ],
        "display_order": 180
    },
    "archive-event-181": {
        "event_public_id": "archive-event-181",
        "header_image": "https://picsum.photos/800/400?random=380",
        "icon": "https://picsum.photos/200/200?random=380",
        "name": "AIと未来のテクノロジー基調講演 (セッション #181)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AIと未来のテクノロジー基調講演」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1180",
            "https://picsum.photos/600/400?random=2180"
        ],
        "organization": {
            "organization_public_id": "archive-org-1",
            "name": "パートナー企業 #1",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=680",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-19",
                "name": "アーカイブテーマ #19",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-181",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-31",
                "name": "スピーカー 31",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=780",
                "display_order": 1
            }
        ],
        "display_order": 181
    },
    "archive-event-182": {
        "event_public_id": "archive-event-182",
        "header_image": "https://picsum.photos/800/400?random=381",
        "icon": "https://picsum.photos/200/200?random=381",
        "name": "デザインシステム構築の実践ガイド (セッション #182)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「デザインシステム構築の実践ガイド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1181",
            "https://picsum.photos/600/400?random=2181"
        ],
        "organization": {
            "organization_public_id": "archive-org-2",
            "name": "パートナー企業 #2",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=681",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-19",
                "name": "アーカイブテーマ #19",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-182",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-32",
                "name": "スピーカー 32",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=781",
                "display_order": 1
            }
        ],
        "display_order": 182
    },
    "archive-event-183": {
        "event_public_id": "archive-event-183",
        "header_image": "https://picsum.photos/800/400?random=382",
        "icon": "https://picsum.photos/200/200?random=382",
        "name": "次世代メタバース空間のアーキテクチャ (セッション #183)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「次世代メタバース空間のアーキテクチャ」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1182",
            "https://picsum.photos/600/400?random=2182"
        ],
        "organization": {
            "organization_public_id": "archive-org-3",
            "name": "パートナー企業 #3",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=682",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-19",
                "name": "アーカイブテーマ #19",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-183",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-33",
                "name": "スピーカー 33",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=782",
                "display_order": 1
            }
        ],
        "display_order": 183
    },
    "archive-event-184": {
        "event_public_id": "archive-event-184",
        "header_image": "https://picsum.photos/800/400?random=383",
        "icon": "https://picsum.photos/200/200?random=383",
        "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #184)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「グリーンエネルギーが切り開く持続可能な社会」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1183",
            "https://picsum.photos/600/400?random=2183"
        ],
        "organization": {
            "organization_public_id": "archive-org-4",
            "name": "パートナー企業 #4",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=683",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-19",
                "name": "アーカイブテーマ #19",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-184",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-34",
                "name": "スピーカー 34",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=783",
                "display_order": 1
            }
        ],
        "display_order": 184
    },
    "archive-event-185": {
        "event_public_id": "archive-event-185",
        "header_image": "https://picsum.photos/800/400?random=384",
        "icon": "https://picsum.photos/200/200?random=384",
        "name": "量子コンピューティングの実用化と展望 (セッション #185)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「量子コンピューティングの実用化と展望」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1184",
            "https://picsum.photos/600/400?random=2184"
        ],
        "organization": {
            "organization_public_id": "archive-org-5",
            "name": "パートナー企業 #5",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=684",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-19",
                "name": "アーカイブテーマ #19",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-185",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-35",
                "name": "スピーカー 35",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=784",
                "display_order": 1
            }
        ],
        "display_order": 185
    },
    "archive-event-186": {
        "event_public_id": "archive-event-186",
        "header_image": "https://picsum.photos/800/400?random=385",
        "icon": "https://picsum.photos/200/200?random=385",
        "name": "Web3時代の分散型IDとプライバシー (セッション #186)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「Web3時代の分散型IDとプライバシー」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1185",
            "https://picsum.photos/600/400?random=2185"
        ],
        "organization": {
            "organization_public_id": "archive-org-6",
            "name": "パートナー企業 #6",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=685",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-19",
                "name": "アーカイブテーマ #19",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-186",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-36",
                "name": "スピーカー 36",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=785",
                "display_order": 1
            }
        ],
        "display_order": 186
    },
    "archive-event-187": {
        "event_public_id": "archive-event-187",
        "header_image": "https://picsum.photos/800/400?random=386",
        "icon": "https://picsum.photos/200/200?random=386",
        "name": "スマートモビリティと自動運転の最前線 (セッション #187)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スマートモビリティと自動運転の最前線」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1186",
            "https://picsum.photos/600/400?random=2186"
        ],
        "organization": {
            "organization_public_id": "archive-org-7",
            "name": "パートナー企業 #7",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=686",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-19",
                "name": "アーカイブテーマ #19",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-187",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-37",
                "name": "スピーカー 37",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=786",
                "display_order": 1
            }
        ],
        "display_order": 187
    },
    "archive-event-188": {
        "event_public_id": "archive-event-188",
        "header_image": "https://picsum.photos/800/400?random=387",
        "icon": "https://picsum.photos/200/200?random=387",
        "name": "ヘルスケアテックの最新イノベーション (セッション #188)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ヘルスケアテックの最新イノベーション」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1187",
            "https://picsum.photos/600/400?random=2187"
        ],
        "organization": {
            "organization_public_id": "archive-org-8",
            "name": "パートナー企業 #8",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=687",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-19",
                "name": "アーカイブテーマ #19",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-188",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-38",
                "name": "スピーカー 38",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=787",
                "display_order": 1
            }
        ],
        "display_order": 188
    },
    "archive-event-189": {
        "event_public_id": "archive-event-189",
        "header_image": "https://picsum.photos/800/400?random=388",
        "icon": "https://picsum.photos/200/200?random=388",
        "name": "宇宙ビジネスの現状と今後の可能性 (セッション #189)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「宇宙ビジネスの現状と今後の可能性」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1188",
            "https://picsum.photos/600/400?random=2188"
        ],
        "organization": {
            "organization_public_id": "archive-org-9",
            "name": "パートナー企業 #9",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=688",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-19",
                "name": "アーカイブテーマ #19",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-189",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-39",
                "name": "スピーカー 39",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=788",
                "display_order": 1
            }
        ],
        "display_order": 189
    },
    "archive-event-190": {
        "event_public_id": "archive-event-190",
        "header_image": "https://picsum.photos/800/400?random=389",
        "icon": "https://picsum.photos/200/200?random=389",
        "name": "サイバーセキュリティ防御戦略2026 (セッション #190)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「サイバーセキュリティ防御戦略2026」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1189",
            "https://picsum.photos/600/400?random=2189"
        ],
        "organization": {
            "organization_public_id": "archive-org-10",
            "name": "パートナー企業 #10",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=689",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-19",
                "name": "アーカイブテーマ #19",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-190",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-40",
                "name": "スピーカー 40",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=789",
                "display_order": 1
            }
        ],
        "display_order": 190
    },
    "archive-event-191": {
        "event_public_id": "archive-event-191",
        "header_image": "https://picsum.photos/800/400?random=390",
        "icon": "https://picsum.photos/200/200?random=390",
        "name": "生成AIを活用したプロダクト開発の現場 (セッション #191)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「生成AIを活用したプロダクト開発の現場」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1190",
            "https://picsum.photos/600/400?random=2190"
        ],
        "organization": {
            "organization_public_id": "archive-org-11",
            "name": "パートナー企業 #11",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=690",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-20",
                "name": "アーカイブテーマ #20",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-191",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-41",
                "name": "スピーカー 41",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=790",
                "display_order": 1
            }
        ],
        "display_order": 191
    },
    "archive-event-192": {
        "event_public_id": "archive-event-192",
        "header_image": "https://picsum.photos/800/400?random=391",
        "icon": "https://picsum.photos/200/200?random=391",
        "name": "UXライティングが変えるユーザー体験 (セッション #192)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「UXライティングが変えるユーザー体験」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1191",
            "https://picsum.photos/600/400?random=2191"
        ],
        "organization": {
            "organization_public_id": "archive-org-12",
            "name": "パートナー企業 #12",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=691",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-20",
                "name": "アーカイブテーマ #20",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-192",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-42",
                "name": "スピーカー 42",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=791",
                "display_order": 1
            }
        ],
        "display_order": 192
    },
    "archive-event-193": {
        "event_public_id": "archive-event-193",
        "header_image": "https://picsum.photos/800/400?random=392",
        "icon": "https://picsum.photos/200/200?random=392",
        "name": "フードテックが解決するグローバルな課題 (セッション #193)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「フードテックが解決するグローバルな課題」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1192",
            "https://picsum.photos/600/400?random=2192"
        ],
        "organization": {
            "organization_public_id": "archive-org-13",
            "name": "パートナー企業 #13",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=692",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-20",
                "name": "アーカイブテーマ #20",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-193",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-43",
                "name": "スピーカー 43",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=792",
                "display_order": 1
            }
        ],
        "display_order": 193
    },
    "archive-event-194": {
        "event_public_id": "archive-event-194",
        "header_image": "https://picsum.photos/800/400?random=393",
        "icon": "https://picsum.photos/200/200?random=393",
        "name": "地方創生とデジタルツインの融合 (セッション #194)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「地方創生とデジタルツインの融合」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1193",
            "https://picsum.photos/600/400?random=2193"
        ],
        "organization": {
            "organization_public_id": "archive-org-14",
            "name": "パートナー企業 #14",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=693",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-20",
                "name": "アーカイブテーマ #20",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-194",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-44",
                "name": "スピーカー 44",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=793",
                "display_order": 1
            }
        ],
        "display_order": 194
    },
    "archive-event-195": {
        "event_public_id": "archive-event-195",
        "header_image": "https://picsum.photos/800/400?random=394",
        "icon": "https://picsum.photos/200/200?random=394",
        "name": "スタートアップピッチコンテスト決勝 (セッション #195)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スタートアップピッチコンテスト決勝」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1194",
            "https://picsum.photos/600/400?random=2194"
        ],
        "organization": {
            "organization_public_id": "archive-org-15",
            "name": "パートナー企業 #15",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=694",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-20",
                "name": "アーカイブテーマ #20",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-195",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-45",
                "name": "スピーカー 45",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=794",
                "display_order": 1
            }
        ],
        "display_order": 195
    },
    "archive-event-196": {
        "event_public_id": "archive-event-196",
        "header_image": "https://picsum.photos/800/400?random=395",
        "icon": "https://picsum.photos/200/200?random=395",
        "name": "ロボティクスと自動化の現場導入事例 (セッション #196)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ロボティクスと自動化の現場導入事例」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1195",
            "https://picsum.photos/600/400?random=2195"
        ],
        "organization": {
            "organization_public_id": "archive-org-16",
            "name": "パートナー企業 #16",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=695",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-20",
                "name": "アーカイブテーマ #20",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-196",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-46",
                "name": "スピーカー 46",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=795",
                "display_order": 1
            }
        ],
        "display_order": 196
    },
    "archive-event-197": {
        "event_public_id": "archive-event-197",
        "header_image": "https://picsum.photos/800/400?random=396",
        "icon": "https://picsum.photos/200/200?random=396",
        "name": "アジャイル開発とチームビルディング (セッション #197)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「アジャイル開発とチームビルディング」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1196",
            "https://picsum.photos/600/400?random=2196"
        ],
        "organization": {
            "organization_public_id": "archive-org-17",
            "name": "パートナー企業 #17",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=696",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-20",
                "name": "アーカイブテーマ #20",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-197",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-47",
                "name": "スピーカー 47",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=796",
                "display_order": 1
            }
        ],
        "display_order": 197
    },
    "archive-event-198": {
        "event_public_id": "archive-event-198",
        "header_image": "https://picsum.photos/800/400?random=397",
        "icon": "https://picsum.photos/200/200?random=397",
        "name": "データサイエンスによるビジネス変革 (セッション #198)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「データサイエンスによるビジネス変革」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1197",
            "https://picsum.photos/600/400?random=2197"
        ],
        "organization": {
            "organization_public_id": "archive-org-18",
            "name": "パートナー企業 #18",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=697",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-20",
                "name": "アーカイブテーマ #20",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-198",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-48",
                "name": "スピーカー 48",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=797",
                "display_order": 1
            }
        ],
        "display_order": 198
    },
    "archive-event-199": {
        "event_public_id": "archive-event-199",
        "header_image": "https://picsum.photos/800/400?random=398",
        "icon": "https://picsum.photos/200/200?random=398",
        "name": "オープンソースコミュニティの未来 (セッション #199)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「オープンソースコミュニティの未来」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1198",
            "https://picsum.photos/600/400?random=2198"
        ],
        "organization": {
            "organization_public_id": "archive-org-19",
            "name": "パートナー企業 #19",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=698",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-20",
                "name": "アーカイブテーマ #20",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-199",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-49",
                "name": "スピーカー 49",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=798",
                "display_order": 1
            }
        ],
        "display_order": 199
    },
    "archive-event-200": {
        "event_public_id": "archive-event-200",
        "header_image": "https://picsum.photos/800/400?random=399",
        "icon": "https://picsum.photos/200/200?random=399",
        "name": "AR/VRコンテンツデザインの最新トレンド (セッション #200)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AR/VRコンテンツデザインの最新トレンド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1199",
            "https://picsum.photos/600/400?random=2199"
        ],
        "organization": {
            "organization_public_id": "archive-org-20",
            "name": "パートナー企業 #20",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=699",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-20",
                "name": "アーカイブテーマ #20",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-200",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-50",
                "name": "スピーカー 50",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=799",
                "display_order": 1
            }
        ],
        "display_order": 200
    },
    "archive-event-201": {
        "event_public_id": "archive-event-201",
        "header_image": "https://picsum.photos/800/400?random=400",
        "icon": "https://picsum.photos/200/200?random=400",
        "name": "AIと未来のテクノロジー基調講演 (セッション #201)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「AIと未来のテクノロジー基調講演」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1200",
            "https://picsum.photos/600/400?random=2200"
        ],
        "organization": {
            "organization_public_id": "archive-org-21",
            "name": "パートナー企業 #21",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=700",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-1",
                "name": "メインアリーナ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-201",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-1",
                "name": "スピーカー 1",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=800",
                "display_order": 1
            }
        ],
        "display_order": 201
    },
    "archive-event-202": {
        "event_public_id": "archive-event-202",
        "header_image": "https://picsum.photos/800/400?random=401",
        "icon": "https://picsum.photos/200/200?random=401",
        "name": "デザインシステム構築の実践ガイド (セッション #202)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「デザインシステム構築の実践ガイド」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1201",
            "https://picsum.photos/600/400?random=2201"
        ],
        "organization": {
            "organization_public_id": "archive-org-22",
            "name": "パートナー企業 #22",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=701",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-2",
                "name": "サブホール",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-202",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-2",
                "name": "スピーカー 2",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=801",
                "display_order": 1
            }
        ],
        "display_order": 202
    },
    "archive-event-203": {
        "event_public_id": "archive-event-203",
        "header_image": "https://picsum.photos/800/400?random=402",
        "icon": "https://picsum.photos/200/200?random=402",
        "name": "次世代メタバース空間のアーキテクチャ (セッション #203)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「次世代メタバース空間のアーキテクチャ」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1202",
            "https://picsum.photos/600/400?random=2202"
        ],
        "organization": {
            "organization_public_id": "archive-org-23",
            "name": "パートナー企業 #23",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=702",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-3",
                "name": "EXPOドーム",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-203",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-3",
                "name": "スピーカー 3",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=802",
                "display_order": 1
            }
        ],
        "display_order": 203
    },
    "archive-event-204": {
        "event_public_id": "archive-event-204",
        "header_image": "https://picsum.photos/800/400?random=403",
        "icon": "https://picsum.photos/200/200?random=403",
        "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #204)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「グリーンエネルギーが切り開く持続可能な社会」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1203",
            "https://picsum.photos/600/400?random=2203"
        ],
        "organization": {
            "organization_public_id": "archive-org-24",
            "name": "パートナー企業 #24",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=703",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-4",
                "name": "イノベーションステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-204",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-4",
                "name": "スピーカー 4",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=803",
                "display_order": 1
            }
        ],
        "display_order": 204
    },
    "archive-event-205": {
        "event_public_id": "archive-event-205",
        "header_image": "https://picsum.photos/800/400?random=404",
        "icon": "https://picsum.photos/200/200?random=404",
        "name": "量子コンピューティングの実用化と展望 (セッション #205)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「量子コンピューティングの実用化と展望」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1204",
            "https://picsum.photos/600/400?random=2204"
        ],
        "organization": {
            "organization_public_id": "archive-org-25",
            "name": "パートナー企業 #25",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=704",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-5",
                "name": "コネクトスクエア",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-205",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-5",
                "name": "スピーカー 5",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=804",
                "display_order": 1
            }
        ],
        "display_order": 205
    },
    "archive-event-206": {
        "event_public_id": "archive-event-206",
        "header_image": "https://picsum.photos/800/400?random=405",
        "icon": "https://picsum.photos/200/200?random=405",
        "name": "Web3時代の分散型IDとプライバシー (セッション #206)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「Web3時代の分散型IDとプライバシー」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1205",
            "https://picsum.photos/600/400?random=2205"
        ],
        "organization": {
            "organization_public_id": "archive-org-26",
            "name": "パートナー企業 #26",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=705",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-6",
                "name": "フューチャープラザ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-206",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-6",
                "name": "スピーカー 6",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=805",
                "display_order": 1
            }
        ],
        "display_order": 206
    },
    "archive-event-207": {
        "event_public_id": "archive-event-207",
        "header_image": "https://picsum.photos/800/400?random=406",
        "icon": "https://picsum.photos/200/200?random=406",
        "name": "スマートモビリティと自動運転の最前線 (セッション #207)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「スマートモビリティと自動運転の最前線」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1206",
            "https://picsum.photos/600/400?random=2206"
        ],
        "organization": {
            "organization_public_id": "archive-org-27",
            "name": "パートナー企業 #27",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=706",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-7",
                "name": "テックスタジオ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-207",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-7",
                "name": "スピーカー 7",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=806",
                "display_order": 1
            }
        ],
        "display_order": 207
    },
    "archive-event-208": {
        "event_public_id": "archive-event-208",
        "header_image": "https://picsum.photos/800/400?random=407",
        "icon": "https://picsum.photos/200/200?random=407",
        "name": "ヘルスケアテックの最新イノベーション (セッション #208)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「ヘルスケアテックの最新イノベーション」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1207",
            "https://picsum.photos/600/400?random=2207"
        ],
        "organization": {
            "organization_public_id": "archive-org-28",
            "name": "パートナー企業 #28",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=707",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-8",
                "name": "ワークショップA",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-208",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-8",
                "name": "スピーカー 8",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=807",
                "display_order": 1
            }
        ],
        "display_order": 208
    },
    "archive-event-209": {
        "event_public_id": "archive-event-209",
        "header_image": "https://picsum.photos/800/400?random=408",
        "icon": "https://picsum.photos/200/200?random=408",
        "name": "宇宙ビジネスの現状と今後の可能性 (セッション #209)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「宇宙ビジネスの現状と今後の可能性」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1208",
            "https://picsum.photos/600/400?random=2208"
        ],
        "organization": {
            "organization_public_id": "archive-org-29",
            "name": "パートナー企業 #29",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=708",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-9",
                "name": "ワークショップB",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-209",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-9",
                "name": "スピーカー 9",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=808",
                "display_order": 1
            }
        ],
        "display_order": 209
    },
    "archive-event-210": {
        "event_public_id": "archive-event-210",
        "header_image": "https://picsum.photos/800/400?random=409",
        "icon": "https://picsum.photos/200/200?random=409",
        "name": "サイバーセキュリティ防御戦略2026 (セッション #210)",
        "caption": "業界最先端のナレッジを共有する特別セッション",
        "description": "本セッションでは「サイバーセキュリティ防御戦略2026」をテーマに、第一線で活躍するエキスパートが最新動向と今後の展望について深く議論します。",
        "images": [
            "https://picsum.photos/600/400?random=1209",
            "https://picsum.photos/600/400?random=2209"
        ],
        "organization": {
            "organization_public_id": "archive-org-30",
            "name": "パートナー企業 #30",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=709",
            "sponsor": true
        },
        "venues": [
            {
                "venue_public_id": "archive-venue-10",
                "name": "オープンステージ",
                "display_order": 1
            }
        ],
        "tags": [
            {
                "tag_public_id": "archive-tag-1",
                "name": "アーカイブテーマ #1",
                "display_order": 1
            }
        ],
        "slots": [
            {
                "slot_public_id": "archive-slot-210",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 1
            }
        ],
        "performers": [
            {
                "performer_public_id": "archive-performer-10",
                "name": "スピーカー 10",
                "affiliation": "テクノロジー研究所 Senior Researcher",
                "icon": "https://picsum.photos/150/150?random=809",
                "display_order": 1
            }
        ],
        "display_order": 210
    }
};

export const archiveTimelineSlots: Verified<TimelineSlot>[] = [
    {
        "starts": "09:00",
        "events": [
            {
                "event_public_id": "archive-event-1",
                "name": "AIと未来のテクノロジー基調講演 (セッション #1)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=200",
                "venue_name": "メインアリーナ",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 1
            },
            {
                "event_public_id": "archive-event-18",
                "name": "データサイエンスによるビジネス変革 (セッション #18)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=217",
                "venue_name": "ワークショップA",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 18
            },
            {
                "event_public_id": "archive-event-35",
                "name": "スタートアップピッチコンテスト決勝 (セッション #35)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=234",
                "venue_name": "コネクトスクエア",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 35
            },
            {
                "event_public_id": "archive-event-52",
                "name": "UXライティングが変えるユーザー体験 (セッション #52)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=251",
                "venue_name": "サブホール",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 52
            },
            {
                "event_public_id": "archive-event-69",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #69)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=268",
                "venue_name": "ワークショップB",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 69
            },
            {
                "event_public_id": "archive-event-86",
                "name": "Web3時代の分散型IDとプライバシー (セッション #86)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=285",
                "venue_name": "フューチャープラザ",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 86
            },
            {
                "event_public_id": "archive-event-103",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #103)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=302",
                "venue_name": "EXPOドーム",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 103
            },
            {
                "event_public_id": "archive-event-120",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #120)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=319",
                "venue_name": "オープンステージ",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 120
            },
            {
                "event_public_id": "archive-event-137",
                "name": "アジャイル開発とチームビルディング (セッション #137)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=336",
                "venue_name": "テックスタジオ",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 137
            },
            {
                "event_public_id": "archive-event-154",
                "name": "地方創生とデジタルツインの融合 (セッション #154)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=353",
                "venue_name": "イノベーションステージ",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 154
            },
            {
                "event_public_id": "archive-event-171",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #171)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=370",
                "venue_name": "メインアリーナ",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 171
            },
            {
                "event_public_id": "archive-event-188",
                "name": "ヘルスケアテックの最新イノベーション (セッション #188)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=387",
                "venue_name": "ワークショップA",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 188
            },
            {
                "event_public_id": "archive-event-205",
                "name": "量子コンピューティングの実用化と展望 (セッション #205)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=404",
                "venue_name": "コネクトスクエア",
                "starts": "09:00",
                "ends": "09:30",
                "display_order": 205
            }
        ]
    },
    {
        "starts": "09:30",
        "events": [
            {
                "event_public_id": "archive-event-2",
                "name": "デザインシステム構築の実践ガイド (セッション #2)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=201",
                "venue_name": "サブホール",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 2
            },
            {
                "event_public_id": "archive-event-19",
                "name": "オープンソースコミュニティの未来 (セッション #19)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=218",
                "venue_name": "ワークショップB",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 19
            },
            {
                "event_public_id": "archive-event-36",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #36)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=235",
                "venue_name": "フューチャープラザ",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 36
            },
            {
                "event_public_id": "archive-event-53",
                "name": "フードテックが解決するグローバルな課題 (セッション #53)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=252",
                "venue_name": "EXPOドーム",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 53
            },
            {
                "event_public_id": "archive-event-70",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #70)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=269",
                "venue_name": "オープンステージ",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 70
            },
            {
                "event_public_id": "archive-event-87",
                "name": "スマートモビリティと自動運転の最前線 (セッション #87)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=286",
                "venue_name": "テックスタジオ",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 87
            },
            {
                "event_public_id": "archive-event-104",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #104)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=303",
                "venue_name": "イノベーションステージ",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 104
            },
            {
                "event_public_id": "archive-event-121",
                "name": "AIと未来のテクノロジー基調講演 (セッション #121)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=320",
                "venue_name": "メインアリーナ",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 121
            },
            {
                "event_public_id": "archive-event-138",
                "name": "データサイエンスによるビジネス変革 (セッション #138)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=337",
                "venue_name": "ワークショップA",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 138
            },
            {
                "event_public_id": "archive-event-155",
                "name": "スタートアップピッチコンテスト決勝 (セッション #155)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=354",
                "venue_name": "コネクトスクエア",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 155
            },
            {
                "event_public_id": "archive-event-172",
                "name": "UXライティングが変えるユーザー体験 (セッション #172)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=371",
                "venue_name": "サブホール",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 172
            },
            {
                "event_public_id": "archive-event-189",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #189)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=388",
                "venue_name": "ワークショップB",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 189
            },
            {
                "event_public_id": "archive-event-206",
                "name": "Web3時代の分散型IDとプライバシー (セッション #206)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=405",
                "venue_name": "フューチャープラザ",
                "starts": "09:30",
                "ends": "10:00",
                "display_order": 206
            }
        ]
    },
    {
        "starts": "10:00",
        "events": [
            {
                "event_public_id": "archive-event-3",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #3)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=202",
                "venue_name": "EXPOドーム",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 3
            },
            {
                "event_public_id": "archive-event-20",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #20)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=219",
                "venue_name": "オープンステージ",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 20
            },
            {
                "event_public_id": "archive-event-37",
                "name": "アジャイル開発とチームビルディング (セッション #37)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=236",
                "venue_name": "テックスタジオ",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 37
            },
            {
                "event_public_id": "archive-event-54",
                "name": "地方創生とデジタルツインの融合 (セッション #54)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=253",
                "venue_name": "イノベーションステージ",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 54
            },
            {
                "event_public_id": "archive-event-71",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #71)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=270",
                "venue_name": "メインアリーナ",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 71
            },
            {
                "event_public_id": "archive-event-88",
                "name": "ヘルスケアテックの最新イノベーション (セッション #88)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=287",
                "venue_name": "ワークショップA",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 88
            },
            {
                "event_public_id": "archive-event-105",
                "name": "量子コンピューティングの実用化と展望 (セッション #105)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=304",
                "venue_name": "コネクトスクエア",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 105
            },
            {
                "event_public_id": "archive-event-122",
                "name": "デザインシステム構築の実践ガイド (セッション #122)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=321",
                "venue_name": "サブホール",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 122
            },
            {
                "event_public_id": "archive-event-139",
                "name": "オープンソースコミュニティの未来 (セッション #139)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=338",
                "venue_name": "ワークショップB",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 139
            },
            {
                "event_public_id": "archive-event-156",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #156)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=355",
                "venue_name": "フューチャープラザ",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 156
            },
            {
                "event_public_id": "archive-event-173",
                "name": "フードテックが解決するグローバルな課題 (セッション #173)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=372",
                "venue_name": "EXPOドーム",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 173
            },
            {
                "event_public_id": "archive-event-190",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #190)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=389",
                "venue_name": "オープンステージ",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 190
            },
            {
                "event_public_id": "archive-event-207",
                "name": "スマートモビリティと自動運転の最前線 (セッション #207)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=406",
                "venue_name": "テックスタジオ",
                "starts": "10:00",
                "ends": "10:30",
                "display_order": 207
            }
        ]
    },
    {
        "starts": "10:30",
        "events": [
            {
                "event_public_id": "archive-event-4",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #4)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=203",
                "venue_name": "イノベーションステージ",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 4
            },
            {
                "event_public_id": "archive-event-21",
                "name": "AIと未来のテクノロジー基調講演 (セッション #21)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=220",
                "venue_name": "メインアリーナ",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 21
            },
            {
                "event_public_id": "archive-event-38",
                "name": "データサイエンスによるビジネス変革 (セッション #38)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=237",
                "venue_name": "ワークショップA",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 38
            },
            {
                "event_public_id": "archive-event-55",
                "name": "スタートアップピッチコンテスト決勝 (セッション #55)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=254",
                "venue_name": "コネクトスクエア",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 55
            },
            {
                "event_public_id": "archive-event-72",
                "name": "UXライティングが変えるユーザー体験 (セッション #72)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=271",
                "venue_name": "サブホール",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 72
            },
            {
                "event_public_id": "archive-event-89",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #89)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=288",
                "venue_name": "ワークショップB",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 89
            },
            {
                "event_public_id": "archive-event-106",
                "name": "Web3時代の分散型IDとプライバシー (セッション #106)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=305",
                "venue_name": "フューチャープラザ",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 106
            },
            {
                "event_public_id": "archive-event-123",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #123)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=322",
                "venue_name": "EXPOドーム",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 123
            },
            {
                "event_public_id": "archive-event-140",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #140)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=339",
                "venue_name": "オープンステージ",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 140
            },
            {
                "event_public_id": "archive-event-157",
                "name": "アジャイル開発とチームビルディング (セッション #157)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=356",
                "venue_name": "テックスタジオ",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 157
            },
            {
                "event_public_id": "archive-event-174",
                "name": "地方創生とデジタルツインの融合 (セッション #174)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=373",
                "venue_name": "イノベーションステージ",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 174
            },
            {
                "event_public_id": "archive-event-191",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #191)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=390",
                "venue_name": "メインアリーナ",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 191
            },
            {
                "event_public_id": "archive-event-208",
                "name": "ヘルスケアテックの最新イノベーション (セッション #208)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=407",
                "venue_name": "ワークショップA",
                "starts": "10:30",
                "ends": "11:00",
                "display_order": 208
            }
        ]
    },
    {
        "starts": "11:00",
        "events": [
            {
                "event_public_id": "archive-event-5",
                "name": "量子コンピューティングの実用化と展望 (セッション #5)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=204",
                "venue_name": "コネクトスクエア",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 5
            },
            {
                "event_public_id": "archive-event-22",
                "name": "デザインシステム構築の実践ガイド (セッション #22)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=221",
                "venue_name": "サブホール",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 22
            },
            {
                "event_public_id": "archive-event-39",
                "name": "オープンソースコミュニティの未来 (セッション #39)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=238",
                "venue_name": "ワークショップB",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 39
            },
            {
                "event_public_id": "archive-event-56",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #56)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=255",
                "venue_name": "フューチャープラザ",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 56
            },
            {
                "event_public_id": "archive-event-73",
                "name": "フードテックが解決するグローバルな課題 (セッション #73)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=272",
                "venue_name": "EXPOドーム",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 73
            },
            {
                "event_public_id": "archive-event-90",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #90)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=289",
                "venue_name": "オープンステージ",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 90
            },
            {
                "event_public_id": "archive-event-107",
                "name": "スマートモビリティと自動運転の最前線 (セッション #107)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=306",
                "venue_name": "テックスタジオ",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 107
            },
            {
                "event_public_id": "archive-event-124",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #124)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=323",
                "venue_name": "イノベーションステージ",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 124
            },
            {
                "event_public_id": "archive-event-141",
                "name": "AIと未来のテクノロジー基調講演 (セッション #141)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=340",
                "venue_name": "メインアリーナ",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 141
            },
            {
                "event_public_id": "archive-event-158",
                "name": "データサイエンスによるビジネス変革 (セッション #158)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=357",
                "venue_name": "ワークショップA",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 158
            },
            {
                "event_public_id": "archive-event-175",
                "name": "スタートアップピッチコンテスト決勝 (セッション #175)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=374",
                "venue_name": "コネクトスクエア",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 175
            },
            {
                "event_public_id": "archive-event-192",
                "name": "UXライティングが変えるユーザー体験 (セッション #192)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=391",
                "venue_name": "サブホール",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 192
            },
            {
                "event_public_id": "archive-event-209",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #209)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=408",
                "venue_name": "ワークショップB",
                "starts": "11:00",
                "ends": "11:30",
                "display_order": 209
            }
        ]
    },
    {
        "starts": "11:30",
        "events": [
            {
                "event_public_id": "archive-event-6",
                "name": "Web3時代の分散型IDとプライバシー (セッション #6)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=205",
                "venue_name": "フューチャープラザ",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 6
            },
            {
                "event_public_id": "archive-event-23",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #23)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=222",
                "venue_name": "EXPOドーム",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 23
            },
            {
                "event_public_id": "archive-event-40",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #40)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=239",
                "venue_name": "オープンステージ",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 40
            },
            {
                "event_public_id": "archive-event-57",
                "name": "アジャイル開発とチームビルディング (セッション #57)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=256",
                "venue_name": "テックスタジオ",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 57
            },
            {
                "event_public_id": "archive-event-74",
                "name": "地方創生とデジタルツインの融合 (セッション #74)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=273",
                "venue_name": "イノベーションステージ",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 74
            },
            {
                "event_public_id": "archive-event-91",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #91)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=290",
                "venue_name": "メインアリーナ",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 91
            },
            {
                "event_public_id": "archive-event-108",
                "name": "ヘルスケアテックの最新イノベーション (セッション #108)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=307",
                "venue_name": "ワークショップA",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 108
            },
            {
                "event_public_id": "archive-event-125",
                "name": "量子コンピューティングの実用化と展望 (セッション #125)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=324",
                "venue_name": "コネクトスクエア",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 125
            },
            {
                "event_public_id": "archive-event-142",
                "name": "デザインシステム構築の実践ガイド (セッション #142)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=341",
                "venue_name": "サブホール",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 142
            },
            {
                "event_public_id": "archive-event-159",
                "name": "オープンソースコミュニティの未来 (セッション #159)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=358",
                "venue_name": "ワークショップB",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 159
            },
            {
                "event_public_id": "archive-event-176",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #176)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=375",
                "venue_name": "フューチャープラザ",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 176
            },
            {
                "event_public_id": "archive-event-193",
                "name": "フードテックが解決するグローバルな課題 (セッション #193)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=392",
                "venue_name": "EXPOドーム",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 193
            },
            {
                "event_public_id": "archive-event-210",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #210)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=409",
                "venue_name": "オープンステージ",
                "starts": "11:30",
                "ends": "12:00",
                "display_order": 210
            }
        ]
    },
    {
        "starts": "12:00",
        "events": [
            {
                "event_public_id": "archive-event-7",
                "name": "スマートモビリティと自動運転の最前線 (セッション #7)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=206",
                "venue_name": "テックスタジオ",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 7
            },
            {
                "event_public_id": "archive-event-24",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #24)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=223",
                "venue_name": "イノベーションステージ",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 24
            },
            {
                "event_public_id": "archive-event-41",
                "name": "AIと未来のテクノロジー基調講演 (セッション #41)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=240",
                "venue_name": "メインアリーナ",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 41
            },
            {
                "event_public_id": "archive-event-58",
                "name": "データサイエンスによるビジネス変革 (セッション #58)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=257",
                "venue_name": "ワークショップA",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 58
            },
            {
                "event_public_id": "archive-event-75",
                "name": "スタートアップピッチコンテスト決勝 (セッション #75)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=274",
                "venue_name": "コネクトスクエア",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 75
            },
            {
                "event_public_id": "archive-event-92",
                "name": "UXライティングが変えるユーザー体験 (セッション #92)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=291",
                "venue_name": "サブホール",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 92
            },
            {
                "event_public_id": "archive-event-109",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #109)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=308",
                "venue_name": "ワークショップB",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 109
            },
            {
                "event_public_id": "archive-event-126",
                "name": "Web3時代の分散型IDとプライバシー (セッション #126)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=325",
                "venue_name": "フューチャープラザ",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 126
            },
            {
                "event_public_id": "archive-event-143",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #143)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=342",
                "venue_name": "EXPOドーム",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 143
            },
            {
                "event_public_id": "archive-event-160",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #160)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=359",
                "venue_name": "オープンステージ",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 160
            },
            {
                "event_public_id": "archive-event-177",
                "name": "アジャイル開発とチームビルディング (セッション #177)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=376",
                "venue_name": "テックスタジオ",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 177
            },
            {
                "event_public_id": "archive-event-194",
                "name": "地方創生とデジタルツインの融合 (セッション #194)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=393",
                "venue_name": "イノベーションステージ",
                "starts": "12:00",
                "ends": "12:30",
                "display_order": 194
            }
        ]
    },
    {
        "starts": "12:30",
        "events": [
            {
                "event_public_id": "archive-event-8",
                "name": "ヘルスケアテックの最新イノベーション (セッション #8)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=207",
                "venue_name": "ワークショップA",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 8
            },
            {
                "event_public_id": "archive-event-25",
                "name": "量子コンピューティングの実用化と展望 (セッション #25)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=224",
                "venue_name": "コネクトスクエア",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 25
            },
            {
                "event_public_id": "archive-event-42",
                "name": "デザインシステム構築の実践ガイド (セッション #42)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=241",
                "venue_name": "サブホール",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 42
            },
            {
                "event_public_id": "archive-event-59",
                "name": "オープンソースコミュニティの未来 (セッション #59)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=258",
                "venue_name": "ワークショップB",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 59
            },
            {
                "event_public_id": "archive-event-76",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #76)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=275",
                "venue_name": "フューチャープラザ",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 76
            },
            {
                "event_public_id": "archive-event-93",
                "name": "フードテックが解決するグローバルな課題 (セッション #93)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=292",
                "venue_name": "EXPOドーム",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 93
            },
            {
                "event_public_id": "archive-event-110",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #110)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=309",
                "venue_name": "オープンステージ",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 110
            },
            {
                "event_public_id": "archive-event-127",
                "name": "スマートモビリティと自動運転の最前線 (セッション #127)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=326",
                "venue_name": "テックスタジオ",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 127
            },
            {
                "event_public_id": "archive-event-144",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #144)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=343",
                "venue_name": "イノベーションステージ",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 144
            },
            {
                "event_public_id": "archive-event-161",
                "name": "AIと未来のテクノロジー基調講演 (セッション #161)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=360",
                "venue_name": "メインアリーナ",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 161
            },
            {
                "event_public_id": "archive-event-178",
                "name": "データサイエンスによるビジネス変革 (セッション #178)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=377",
                "venue_name": "ワークショップA",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 178
            },
            {
                "event_public_id": "archive-event-195",
                "name": "スタートアップピッチコンテスト決勝 (セッション #195)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=394",
                "venue_name": "コネクトスクエア",
                "starts": "12:30",
                "ends": "13:00",
                "display_order": 195
            }
        ]
    },
    {
        "starts": "13:00",
        "events": [
            {
                "event_public_id": "archive-event-9",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #9)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=208",
                "venue_name": "ワークショップB",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 9
            },
            {
                "event_public_id": "archive-event-26",
                "name": "Web3時代の分散型IDとプライバシー (セッション #26)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=225",
                "venue_name": "フューチャープラザ",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 26
            },
            {
                "event_public_id": "archive-event-43",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #43)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=242",
                "venue_name": "EXPOドーム",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 43
            },
            {
                "event_public_id": "archive-event-60",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #60)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=259",
                "venue_name": "オープンステージ",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 60
            },
            {
                "event_public_id": "archive-event-77",
                "name": "アジャイル開発とチームビルディング (セッション #77)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=276",
                "venue_name": "テックスタジオ",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 77
            },
            {
                "event_public_id": "archive-event-94",
                "name": "地方創生とデジタルツインの融合 (セッション #94)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=293",
                "venue_name": "イノベーションステージ",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 94
            },
            {
                "event_public_id": "archive-event-111",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #111)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=310",
                "venue_name": "メインアリーナ",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 111
            },
            {
                "event_public_id": "archive-event-128",
                "name": "ヘルスケアテックの最新イノベーション (セッション #128)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=327",
                "venue_name": "ワークショップA",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 128
            },
            {
                "event_public_id": "archive-event-145",
                "name": "量子コンピューティングの実用化と展望 (セッション #145)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=344",
                "venue_name": "コネクトスクエア",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 145
            },
            {
                "event_public_id": "archive-event-162",
                "name": "デザインシステム構築の実践ガイド (セッション #162)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=361",
                "venue_name": "サブホール",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 162
            },
            {
                "event_public_id": "archive-event-179",
                "name": "オープンソースコミュニティの未来 (セッション #179)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=378",
                "venue_name": "ワークショップB",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 179
            },
            {
                "event_public_id": "archive-event-196",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #196)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=395",
                "venue_name": "フューチャープラザ",
                "starts": "13:00",
                "ends": "13:30",
                "display_order": 196
            }
        ]
    },
    {
        "starts": "13:30",
        "events": [
            {
                "event_public_id": "archive-event-10",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #10)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=209",
                "venue_name": "オープンステージ",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 10
            },
            {
                "event_public_id": "archive-event-27",
                "name": "スマートモビリティと自動運転の最前線 (セッション #27)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=226",
                "venue_name": "テックスタジオ",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 27
            },
            {
                "event_public_id": "archive-event-44",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #44)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=243",
                "venue_name": "イノベーションステージ",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 44
            },
            {
                "event_public_id": "archive-event-61",
                "name": "AIと未来のテクノロジー基調講演 (セッション #61)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=260",
                "venue_name": "メインアリーナ",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 61
            },
            {
                "event_public_id": "archive-event-78",
                "name": "データサイエンスによるビジネス変革 (セッション #78)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=277",
                "venue_name": "ワークショップA",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 78
            },
            {
                "event_public_id": "archive-event-95",
                "name": "スタートアップピッチコンテスト決勝 (セッション #95)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=294",
                "venue_name": "コネクトスクエア",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 95
            },
            {
                "event_public_id": "archive-event-112",
                "name": "UXライティングが変えるユーザー体験 (セッション #112)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=311",
                "venue_name": "サブホール",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 112
            },
            {
                "event_public_id": "archive-event-129",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #129)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=328",
                "venue_name": "ワークショップB",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 129
            },
            {
                "event_public_id": "archive-event-146",
                "name": "Web3時代の分散型IDとプライバシー (セッション #146)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=345",
                "venue_name": "フューチャープラザ",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 146
            },
            {
                "event_public_id": "archive-event-163",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #163)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=362",
                "venue_name": "EXPOドーム",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 163
            },
            {
                "event_public_id": "archive-event-180",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #180)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=379",
                "venue_name": "オープンステージ",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 180
            },
            {
                "event_public_id": "archive-event-197",
                "name": "アジャイル開発とチームビルディング (セッション #197)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=396",
                "venue_name": "テックスタジオ",
                "starts": "13:30",
                "ends": "14:00",
                "display_order": 197
            }
        ]
    },
    {
        "starts": "14:00",
        "events": [
            {
                "event_public_id": "archive-event-11",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #11)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=210",
                "venue_name": "メインアリーナ",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 11
            },
            {
                "event_public_id": "archive-event-28",
                "name": "ヘルスケアテックの最新イノベーション (セッション #28)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=227",
                "venue_name": "ワークショップA",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 28
            },
            {
                "event_public_id": "archive-event-45",
                "name": "量子コンピューティングの実用化と展望 (セッション #45)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=244",
                "venue_name": "コネクトスクエア",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 45
            },
            {
                "event_public_id": "archive-event-62",
                "name": "デザインシステム構築の実践ガイド (セッション #62)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=261",
                "venue_name": "サブホール",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 62
            },
            {
                "event_public_id": "archive-event-79",
                "name": "オープンソースコミュニティの未来 (セッション #79)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=278",
                "venue_name": "ワークショップB",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 79
            },
            {
                "event_public_id": "archive-event-96",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #96)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=295",
                "venue_name": "フューチャープラザ",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 96
            },
            {
                "event_public_id": "archive-event-113",
                "name": "フードテックが解決するグローバルな課題 (セッション #113)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=312",
                "venue_name": "EXPOドーム",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 113
            },
            {
                "event_public_id": "archive-event-130",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #130)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=329",
                "venue_name": "オープンステージ",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 130
            },
            {
                "event_public_id": "archive-event-147",
                "name": "スマートモビリティと自動運転の最前線 (セッション #147)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=346",
                "venue_name": "テックスタジオ",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 147
            },
            {
                "event_public_id": "archive-event-164",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #164)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=363",
                "venue_name": "イノベーションステージ",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 164
            },
            {
                "event_public_id": "archive-event-181",
                "name": "AIと未来のテクノロジー基調講演 (セッション #181)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=380",
                "venue_name": "メインアリーナ",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 181
            },
            {
                "event_public_id": "archive-event-198",
                "name": "データサイエンスによるビジネス変革 (セッション #198)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=397",
                "venue_name": "ワークショップA",
                "starts": "14:00",
                "ends": "14:30",
                "display_order": 198
            }
        ]
    },
    {
        "starts": "14:30",
        "events": [
            {
                "event_public_id": "archive-event-12",
                "name": "UXライティングが変えるユーザー体験 (セッション #12)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=211",
                "venue_name": "サブホール",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 12
            },
            {
                "event_public_id": "archive-event-29",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #29)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=228",
                "venue_name": "ワークショップB",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 29
            },
            {
                "event_public_id": "archive-event-46",
                "name": "Web3時代の分散型IDとプライバシー (セッション #46)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=245",
                "venue_name": "フューチャープラザ",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 46
            },
            {
                "event_public_id": "archive-event-63",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #63)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=262",
                "venue_name": "EXPOドーム",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 63
            },
            {
                "event_public_id": "archive-event-80",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #80)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=279",
                "venue_name": "オープンステージ",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 80
            },
            {
                "event_public_id": "archive-event-97",
                "name": "アジャイル開発とチームビルディング (セッション #97)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=296",
                "venue_name": "テックスタジオ",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 97
            },
            {
                "event_public_id": "archive-event-114",
                "name": "地方創生とデジタルツインの融合 (セッション #114)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=313",
                "venue_name": "イノベーションステージ",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 114
            },
            {
                "event_public_id": "archive-event-131",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #131)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=330",
                "venue_name": "メインアリーナ",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 131
            },
            {
                "event_public_id": "archive-event-148",
                "name": "ヘルスケアテックの最新イノベーション (セッション #148)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=347",
                "venue_name": "ワークショップA",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 148
            },
            {
                "event_public_id": "archive-event-165",
                "name": "量子コンピューティングの実用化と展望 (セッション #165)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=364",
                "venue_name": "コネクトスクエア",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 165
            },
            {
                "event_public_id": "archive-event-182",
                "name": "デザインシステム構築の実践ガイド (セッション #182)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=381",
                "venue_name": "サブホール",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 182
            },
            {
                "event_public_id": "archive-event-199",
                "name": "オープンソースコミュニティの未来 (セッション #199)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=398",
                "venue_name": "ワークショップB",
                "starts": "14:30",
                "ends": "15:00",
                "display_order": 199
            }
        ]
    },
    {
        "starts": "15:00",
        "events": [
            {
                "event_public_id": "archive-event-13",
                "name": "フードテックが解決するグローバルな課題 (セッション #13)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=212",
                "venue_name": "EXPOドーム",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 13
            },
            {
                "event_public_id": "archive-event-30",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #30)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=229",
                "venue_name": "オープンステージ",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 30
            },
            {
                "event_public_id": "archive-event-47",
                "name": "スマートモビリティと自動運転の最前線 (セッション #47)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=246",
                "venue_name": "テックスタジオ",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 47
            },
            {
                "event_public_id": "archive-event-64",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #64)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=263",
                "venue_name": "イノベーションステージ",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 64
            },
            {
                "event_public_id": "archive-event-81",
                "name": "AIと未来のテクノロジー基調講演 (セッション #81)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=280",
                "venue_name": "メインアリーナ",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 81
            },
            {
                "event_public_id": "archive-event-98",
                "name": "データサイエンスによるビジネス変革 (セッション #98)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=297",
                "venue_name": "ワークショップA",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 98
            },
            {
                "event_public_id": "archive-event-115",
                "name": "スタートアップピッチコンテスト決勝 (セッション #115)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=314",
                "venue_name": "コネクトスクエア",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 115
            },
            {
                "event_public_id": "archive-event-132",
                "name": "UXライティングが変えるユーザー体験 (セッション #132)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=331",
                "venue_name": "サブホール",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 132
            },
            {
                "event_public_id": "archive-event-149",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #149)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=348",
                "venue_name": "ワークショップB",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 149
            },
            {
                "event_public_id": "archive-event-166",
                "name": "Web3時代の分散型IDとプライバシー (セッション #166)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=365",
                "venue_name": "フューチャープラザ",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 166
            },
            {
                "event_public_id": "archive-event-183",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #183)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=382",
                "venue_name": "EXPOドーム",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 183
            },
            {
                "event_public_id": "archive-event-200",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #200)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=399",
                "venue_name": "オープンステージ",
                "starts": "15:00",
                "ends": "15:30",
                "display_order": 200
            }
        ]
    },
    {
        "starts": "15:30",
        "events": [
            {
                "event_public_id": "archive-event-14",
                "name": "地方創生とデジタルツインの融合 (セッション #14)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=213",
                "venue_name": "イノベーションステージ",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 14
            },
            {
                "event_public_id": "archive-event-31",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #31)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=230",
                "venue_name": "メインアリーナ",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 31
            },
            {
                "event_public_id": "archive-event-48",
                "name": "ヘルスケアテックの最新イノベーション (セッション #48)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=247",
                "venue_name": "ワークショップA",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 48
            },
            {
                "event_public_id": "archive-event-65",
                "name": "量子コンピューティングの実用化と展望 (セッション #65)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=264",
                "venue_name": "コネクトスクエア",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 65
            },
            {
                "event_public_id": "archive-event-82",
                "name": "デザインシステム構築の実践ガイド (セッション #82)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=281",
                "venue_name": "サブホール",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 82
            },
            {
                "event_public_id": "archive-event-99",
                "name": "オープンソースコミュニティの未来 (セッション #99)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=298",
                "venue_name": "ワークショップB",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 99
            },
            {
                "event_public_id": "archive-event-116",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #116)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=315",
                "venue_name": "フューチャープラザ",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 116
            },
            {
                "event_public_id": "archive-event-133",
                "name": "フードテックが解決するグローバルな課題 (セッション #133)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=332",
                "venue_name": "EXPOドーム",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 133
            },
            {
                "event_public_id": "archive-event-150",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #150)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=349",
                "venue_name": "オープンステージ",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 150
            },
            {
                "event_public_id": "archive-event-167",
                "name": "スマートモビリティと自動運転の最前線 (セッション #167)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=366",
                "venue_name": "テックスタジオ",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 167
            },
            {
                "event_public_id": "archive-event-184",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #184)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=383",
                "venue_name": "イノベーションステージ",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 184
            },
            {
                "event_public_id": "archive-event-201",
                "name": "AIと未来のテクノロジー基調講演 (セッション #201)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=400",
                "venue_name": "メインアリーナ",
                "starts": "15:30",
                "ends": "16:00",
                "display_order": 201
            }
        ]
    },
    {
        "starts": "16:00",
        "events": [
            {
                "event_public_id": "archive-event-15",
                "name": "スタートアップピッチコンテスト決勝 (セッション #15)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=214",
                "venue_name": "コネクトスクエア",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 15
            },
            {
                "event_public_id": "archive-event-32",
                "name": "UXライティングが変えるユーザー体験 (セッション #32)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=231",
                "venue_name": "サブホール",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 32
            },
            {
                "event_public_id": "archive-event-49",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #49)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=248",
                "venue_name": "ワークショップB",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 49
            },
            {
                "event_public_id": "archive-event-66",
                "name": "Web3時代の分散型IDとプライバシー (セッション #66)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=265",
                "venue_name": "フューチャープラザ",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 66
            },
            {
                "event_public_id": "archive-event-83",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #83)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=282",
                "venue_name": "EXPOドーム",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 83
            },
            {
                "event_public_id": "archive-event-100",
                "name": "AR/VRコンテンツデザインの最新トレンド (セッション #100)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=299",
                "venue_name": "オープンステージ",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 100
            },
            {
                "event_public_id": "archive-event-117",
                "name": "アジャイル開発とチームビルディング (セッション #117)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=316",
                "venue_name": "テックスタジオ",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 117
            },
            {
                "event_public_id": "archive-event-134",
                "name": "地方創生とデジタルツインの融合 (セッション #134)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=333",
                "venue_name": "イノベーションステージ",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 134
            },
            {
                "event_public_id": "archive-event-151",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #151)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=350",
                "venue_name": "メインアリーナ",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 151
            },
            {
                "event_public_id": "archive-event-168",
                "name": "ヘルスケアテックの最新イノベーション (セッション #168)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=367",
                "venue_name": "ワークショップA",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 168
            },
            {
                "event_public_id": "archive-event-185",
                "name": "量子コンピューティングの実用化と展望 (セッション #185)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=384",
                "venue_name": "コネクトスクエア",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 185
            },
            {
                "event_public_id": "archive-event-202",
                "name": "デザインシステム構築の実践ガイド (セッション #202)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=401",
                "venue_name": "サブホール",
                "starts": "16:00",
                "ends": "16:30",
                "display_order": 202
            }
        ]
    },
    {
        "starts": "16:30",
        "events": [
            {
                "event_public_id": "archive-event-16",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #16)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=215",
                "venue_name": "フューチャープラザ",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 16
            },
            {
                "event_public_id": "archive-event-33",
                "name": "フードテックが解決するグローバルな課題 (セッション #33)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=232",
                "venue_name": "EXPOドーム",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 33
            },
            {
                "event_public_id": "archive-event-50",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #50)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=249",
                "venue_name": "オープンステージ",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 50
            },
            {
                "event_public_id": "archive-event-67",
                "name": "スマートモビリティと自動運転の最前線 (セッション #67)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=266",
                "venue_name": "テックスタジオ",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 67
            },
            {
                "event_public_id": "archive-event-84",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #84)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=283",
                "venue_name": "イノベーションステージ",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 84
            },
            {
                "event_public_id": "archive-event-101",
                "name": "AIと未来のテクノロジー基調講演 (セッション #101)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=300",
                "venue_name": "メインアリーナ",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 101
            },
            {
                "event_public_id": "archive-event-118",
                "name": "データサイエンスによるビジネス変革 (セッション #118)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=317",
                "venue_name": "ワークショップA",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 118
            },
            {
                "event_public_id": "archive-event-135",
                "name": "スタートアップピッチコンテスト決勝 (セッション #135)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=334",
                "venue_name": "コネクトスクエア",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 135
            },
            {
                "event_public_id": "archive-event-152",
                "name": "UXライティングが変えるユーザー体験 (セッション #152)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=351",
                "venue_name": "サブホール",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 152
            },
            {
                "event_public_id": "archive-event-169",
                "name": "宇宙ビジネスの現状と今後の可能性 (セッション #169)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=368",
                "venue_name": "ワークショップB",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 169
            },
            {
                "event_public_id": "archive-event-186",
                "name": "Web3時代の分散型IDとプライバシー (セッション #186)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=385",
                "venue_name": "フューチャープラザ",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 186
            },
            {
                "event_public_id": "archive-event-203",
                "name": "次世代メタバース空間のアーキテクチャ (セッション #203)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=402",
                "venue_name": "EXPOドーム",
                "starts": "16:30",
                "ends": "17:00",
                "display_order": 203
            }
        ]
    },
    {
        "starts": "17:00",
        "events": [
            {
                "event_public_id": "archive-event-17",
                "name": "アジャイル開発とチームビルディング (セッション #17)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=216",
                "venue_name": "テックスタジオ",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 17
            },
            {
                "event_public_id": "archive-event-34",
                "name": "地方創生とデジタルツインの融合 (セッション #34)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=233",
                "venue_name": "イノベーションステージ",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 34
            },
            {
                "event_public_id": "archive-event-51",
                "name": "生成AIを活用したプロダクト開発の現場 (セッション #51)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=250",
                "venue_name": "メインアリーナ",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 51
            },
            {
                "event_public_id": "archive-event-68",
                "name": "ヘルスケアテックの最新イノベーション (セッション #68)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=267",
                "venue_name": "ワークショップA",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 68
            },
            {
                "event_public_id": "archive-event-85",
                "name": "量子コンピューティングの実用化と展望 (セッション #85)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=284",
                "venue_name": "コネクトスクエア",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 85
            },
            {
                "event_public_id": "archive-event-102",
                "name": "デザインシステム構築の実践ガイド (セッション #102)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=301",
                "venue_name": "サブホール",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 102
            },
            {
                "event_public_id": "archive-event-119",
                "name": "オープンソースコミュニティの未来 (セッション #119)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=318",
                "venue_name": "ワークショップB",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 119
            },
            {
                "event_public_id": "archive-event-136",
                "name": "ロボティクスと自動化の現場導入事例 (セッション #136)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=335",
                "venue_name": "フューチャープラザ",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 136
            },
            {
                "event_public_id": "archive-event-153",
                "name": "フードテックが解決するグローバルな課題 (セッション #153)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=352",
                "venue_name": "EXPOドーム",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 153
            },
            {
                "event_public_id": "archive-event-170",
                "name": "サイバーセキュリティ防御戦略2026 (セッション #170)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=369",
                "venue_name": "オープンステージ",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 170
            },
            {
                "event_public_id": "archive-event-187",
                "name": "スマートモビリティと自動運転の最前線 (セッション #187)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=386",
                "venue_name": "テックスタジオ",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 187
            },
            {
                "event_public_id": "archive-event-204",
                "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #204)",
                "caption": "業界最先端のナレッジを共有する特別セッション",
                "icon": "https://picsum.photos/200/200?random=403",
                "venue_name": "イノベーションステージ",
                "starts": "17:00",
                "ends": "17:30",
                "display_order": 204
            }
        ]
    },
    {
        "starts": "17:30",
        "events": []
    }
];

export const archiveVenueStaticInfo: Verified<VenueStaticInfo> = {
    "venue_public_id": "archive-venue-1",
    "name": "メインアリーナ",
    "icon": "https://picsum.photos/100/100?random=100",
    "map_latitude": 35.6812,
    "map_longitude": 139.7671,
    "is_primary": true,
    "organizations": [
        {
            "organization_public_id": "archive-org-1",
            "name": "パートナー企業 #1",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=500",
            "display_order": 1
        }
    ]
};

export const archiveVenueDynamicStatus: Verified<VenueDynamicStatus> = {
    "venue_public_id": "archive-venue-1",
    "operational_status": "CLOSED",
    "congestion_status": "NORMAL",
    "entry_type": "FREE"
};

export const archiveVenueDetails: Verified<VenueDetails> = {
    "venue_public_id": "archive-venue-1",
    "name": "メインアリーナ",
    "icon": "https://picsum.photos/100/100?random=100",
    "map_latitude": 35.6812,
    "map_longitude": 139.7671,
    "is_primary": true,
    "organizations": [
        {
            "organization_public_id": "archive-org-1",
            "name": "パートナー企業 #1",
            "caption": "先進技術ソリューションの提供",
            "icon": "https://picsum.photos/150/150?random=500",
            "display_order": 1
        }
    ],
    "operational_status": "CLOSED",
    "congestion_status": "NORMAL",
    "entry_type": "FREE"
};

export const archiveOrganizationDetails: Verified<OrganizationDetails> = {
    "organization_public_id": "archive-org-1",
    "display_order": 1,
    "name": "パートナー企業 #1",
    "caption": "先進技術ソリューションの提供",
    "header_image": "https://picsum.photos/800/400?random=3000",
    "icon": "https://picsum.photos/150/150?random=500",
    "sponsor": "PLATINUM",
    "description": "持続可能な未来社会の実現に向け、最先端テクノロジーとソリューションを提供しています。",
    "images": [
        "https://picsum.photos/600/400?random=3001",
        "https://picsum.photos/600/400?random=3002"
    ],
    "website": "https://example.com/org1",
    "instagram": "rexpo_official",
    "linkedin": "rexpo",
    "twitter": "rexpo_official",
    "youtube": "rexpo_ch"
};

export const archiveFoods: Verified<Food>[] = [
    {
        "food_public_id": "archive-food-1",
        "name": "アーカイブ特別フード #1",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 800,
        "max_price": 1200,
        "minutes": 5,
        "distance": 50,
        "address": "フードエリア 1号店",
        "website": "https://example.com/food/1",
        "display_order": 1
    },
    {
        "food_public_id": "archive-food-2",
        "name": "アーカイブ特別フード #2",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1000,
        "max_price": 1400,
        "minutes": 10,
        "distance": 60,
        "address": "フードエリア 2号店",
        "website": "https://example.com/food/2",
        "display_order": 2
    },
    {
        "food_public_id": "archive-food-3",
        "name": "アーカイブ特別フード #3",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1200,
        "max_price": 1600,
        "minutes": 15,
        "distance": 70,
        "address": "フードエリア 3号店",
        "website": "https://example.com/food/3",
        "display_order": 3
    },
    {
        "food_public_id": "archive-food-4",
        "name": "アーカイブ特別フード #4",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1400,
        "max_price": 1800,
        "minutes": 5,
        "distance": 80,
        "address": "フードエリア 4号店",
        "website": "https://example.com/food/4",
        "display_order": 4
    },
    {
        "food_public_id": "archive-food-5",
        "name": "アーカイブ特別フード #5",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1600,
        "max_price": 2000,
        "minutes": 10,
        "distance": 90,
        "address": "フードエリア 5号店",
        "website": "https://example.com/food/5",
        "display_order": 5
    },
    {
        "food_public_id": "archive-food-6",
        "name": "アーカイブ特別フード #6",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 800,
        "max_price": 1200,
        "minutes": 15,
        "distance": 100,
        "address": "フードエリア 6号店",
        "website": "https://example.com/food/6",
        "display_order": 6
    },
    {
        "food_public_id": "archive-food-7",
        "name": "アーカイブ特別フード #7",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1000,
        "max_price": 1400,
        "minutes": 5,
        "distance": 110,
        "address": "フードエリア 7号店",
        "website": "https://example.com/food/7",
        "display_order": 7
    },
    {
        "food_public_id": "archive-food-8",
        "name": "アーカイブ特別フード #8",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1200,
        "max_price": 1600,
        "minutes": 10,
        "distance": 120,
        "address": "フードエリア 8号店",
        "website": "https://example.com/food/8",
        "display_order": 8
    },
    {
        "food_public_id": "archive-food-9",
        "name": "アーカイブ特別フード #9",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1400,
        "max_price": 1800,
        "minutes": 15,
        "distance": 130,
        "address": "フードエリア 9号店",
        "website": "https://example.com/food/9",
        "display_order": 9
    },
    {
        "food_public_id": "archive-food-10",
        "name": "アーカイブ特別フード #10",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1600,
        "max_price": 2000,
        "minutes": 5,
        "distance": 140,
        "address": "フードエリア 10号店",
        "website": "https://example.com/food/10",
        "display_order": 10
    },
    {
        "food_public_id": "archive-food-11",
        "name": "アーカイブ特別フード #11",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 800,
        "max_price": 1200,
        "minutes": 10,
        "distance": 150,
        "address": "フードエリア 11号店",
        "website": "https://example.com/food/11",
        "display_order": 11
    },
    {
        "food_public_id": "archive-food-12",
        "name": "アーカイブ特別フード #12",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1000,
        "max_price": 1400,
        "minutes": 15,
        "distance": 160,
        "address": "フードエリア 12号店",
        "website": "https://example.com/food/12",
        "display_order": 12
    },
    {
        "food_public_id": "archive-food-13",
        "name": "アーカイブ特別フード #13",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1200,
        "max_price": 1600,
        "minutes": 5,
        "distance": 170,
        "address": "フードエリア 13号店",
        "website": "https://example.com/food/13",
        "display_order": 13
    },
    {
        "food_public_id": "archive-food-14",
        "name": "アーカイブ特別フード #14",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1400,
        "max_price": 1800,
        "minutes": 10,
        "distance": 180,
        "address": "フードエリア 14号店",
        "website": "https://example.com/food/14",
        "display_order": 14
    },
    {
        "food_public_id": "archive-food-15",
        "name": "アーカイブ特別フード #15",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1600,
        "max_price": 2000,
        "minutes": 15,
        "distance": 190,
        "address": "フードエリア 15号店",
        "website": "https://example.com/food/15",
        "display_order": 15
    },
    {
        "food_public_id": "archive-food-16",
        "name": "アーカイブ特別フード #16",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 800,
        "max_price": 1200,
        "minutes": 5,
        "distance": 200,
        "address": "フードエリア 16号店",
        "website": "https://example.com/food/16",
        "display_order": 16
    },
    {
        "food_public_id": "archive-food-17",
        "name": "アーカイブ特別フード #17",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1000,
        "max_price": 1400,
        "minutes": 10,
        "distance": 210,
        "address": "フードエリア 17号店",
        "website": "https://example.com/food/17",
        "display_order": 17
    },
    {
        "food_public_id": "archive-food-18",
        "name": "アーカイブ特別フード #18",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1200,
        "max_price": 1600,
        "minutes": 15,
        "distance": 220,
        "address": "フードエリア 18号店",
        "website": "https://example.com/food/18",
        "display_order": 18
    },
    {
        "food_public_id": "archive-food-19",
        "name": "アーカイブ特別フード #19",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1400,
        "max_price": 1800,
        "minutes": 5,
        "distance": 230,
        "address": "フードエリア 19号店",
        "website": "https://example.com/food/19",
        "display_order": 19
    },
    {
        "food_public_id": "archive-food-20",
        "name": "アーカイブ特別フード #20",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1600,
        "max_price": 2000,
        "minutes": 10,
        "distance": 240,
        "address": "フードエリア 20号店",
        "website": "https://example.com/food/20",
        "display_order": 20
    },
    {
        "food_public_id": "archive-food-21",
        "name": "アーカイブ特別フード #21",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 800,
        "max_price": 1200,
        "minutes": 15,
        "distance": 250,
        "address": "フードエリア 21号店",
        "website": "https://example.com/food/21",
        "display_order": 21
    },
    {
        "food_public_id": "archive-food-22",
        "name": "アーカイブ特別フード #22",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1000,
        "max_price": 1400,
        "minutes": 5,
        "distance": 260,
        "address": "フードエリア 22号店",
        "website": "https://example.com/food/22",
        "display_order": 22
    },
    {
        "food_public_id": "archive-food-23",
        "name": "アーカイブ特別フード #23",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1200,
        "max_price": 1600,
        "minutes": 10,
        "distance": 270,
        "address": "フードエリア 23号店",
        "website": "https://example.com/food/23",
        "display_order": 23
    },
    {
        "food_public_id": "archive-food-24",
        "name": "アーカイブ特別フード #24",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1400,
        "max_price": 1800,
        "minutes": 15,
        "distance": 280,
        "address": "フードエリア 24号店",
        "website": "https://example.com/food/24",
        "display_order": 24
    },
    {
        "food_public_id": "archive-food-25",
        "name": "アーカイブ特別フード #25",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1600,
        "max_price": 2000,
        "minutes": 5,
        "distance": 290,
        "address": "フードエリア 25号店",
        "website": "https://example.com/food/25",
        "display_order": 25
    },
    {
        "food_public_id": "archive-food-26",
        "name": "アーカイブ特別フード #26",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 800,
        "max_price": 1200,
        "minutes": 10,
        "distance": 300,
        "address": "フードエリア 26号店",
        "website": "https://example.com/food/26",
        "display_order": 26
    },
    {
        "food_public_id": "archive-food-27",
        "name": "アーカイブ特別フード #27",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1000,
        "max_price": 1400,
        "minutes": 15,
        "distance": 310,
        "address": "フードエリア 27号店",
        "website": "https://example.com/food/27",
        "display_order": 27
    },
    {
        "food_public_id": "archive-food-28",
        "name": "アーカイブ特別フード #28",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1200,
        "max_price": 1600,
        "minutes": 5,
        "distance": 320,
        "address": "フードエリア 28号店",
        "website": "https://example.com/food/28",
        "display_order": 28
    },
    {
        "food_public_id": "archive-food-29",
        "name": "アーカイブ特別フード #29",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1400,
        "max_price": 1800,
        "minutes": 10,
        "distance": 330,
        "address": "フードエリア 29号店",
        "website": "https://example.com/food/29",
        "display_order": 29
    },
    {
        "food_public_id": "archive-food-30",
        "name": "アーカイブ特別フード #30",
        "description": "特製オリジナルメニューです。できたての美味しさをお届けします。",
        "min_price": 1600,
        "max_price": 2000,
        "minutes": 15,
        "distance": 340,
        "address": "フードエリア 30号店",
        "website": "https://example.com/food/30",
        "display_order": 30
    }
];

export const archiveEventRankings: Verified<EventRankings> = {
    "top": [
        {
            "rank": 1,
            "score": 100,
            "event_public_id": "archive-event-1",
            "name": "AIと未来のテクノロジー基調講演 (セッション #1)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=200"
        },
        {
            "rank": 2,
            "score": 98,
            "event_public_id": "archive-event-2",
            "name": "デザインシステム構築の実践ガイド (セッション #2)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=201"
        },
        {
            "rank": 3,
            "score": 96,
            "event_public_id": "archive-event-3",
            "name": "次世代メタバース空間のアーキテクチャ (セッション #3)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=202"
        },
        {
            "rank": 4,
            "score": 94,
            "event_public_id": "archive-event-4",
            "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #4)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=203"
        },
        {
            "rank": 5,
            "score": 92,
            "event_public_id": "archive-event-5",
            "name": "量子コンピューティングの実用化と展望 (セッション #5)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=204"
        },
        {
            "rank": 6,
            "score": 90,
            "event_public_id": "archive-event-6",
            "name": "Web3時代の分散型IDとプライバシー (セッション #6)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=205"
        },
        {
            "rank": 7,
            "score": 88,
            "event_public_id": "archive-event-7",
            "name": "スマートモビリティと自動運転の最前線 (セッション #7)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=206"
        },
        {
            "rank": 8,
            "score": 86,
            "event_public_id": "archive-event-8",
            "name": "ヘルスケアテックの最新イノベーション (セッション #8)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=207"
        },
        {
            "rank": 9,
            "score": 84,
            "event_public_id": "archive-event-9",
            "name": "宇宙ビジネスの現状と今後の可能性 (セッション #9)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=208"
        },
        {
            "rank": 10,
            "score": 82,
            "event_public_id": "archive-event-10",
            "name": "サイバーセキュリティ防御戦略2026 (セッション #10)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=209"
        },
        {
            "rank": 11,
            "score": 80,
            "event_public_id": "archive-event-11",
            "name": "生成AIを活用したプロダクト開発の現場 (セッション #11)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=210"
        },
        {
            "rank": 12,
            "score": 78,
            "event_public_id": "archive-event-12",
            "name": "UXライティングが変えるユーザー体験 (セッション #12)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=211"
        },
        {
            "rank": 13,
            "score": 76,
            "event_public_id": "archive-event-13",
            "name": "フードテックが解決するグローバルな課題 (セッション #13)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=212"
        },
        {
            "rank": 14,
            "score": 74,
            "event_public_id": "archive-event-14",
            "name": "地方創生とデジタルツインの融合 (セッション #14)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=213"
        },
        {
            "rank": 15,
            "score": 72,
            "event_public_id": "archive-event-15",
            "name": "スタートアップピッチコンテスト決勝 (セッション #15)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=214"
        },
        {
            "rank": 16,
            "score": 70,
            "event_public_id": "archive-event-16",
            "name": "ロボティクスと自動化の現場導入事例 (セッション #16)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=215"
        },
        {
            "rank": 17,
            "score": 68,
            "event_public_id": "archive-event-17",
            "name": "アジャイル開発とチームビルディング (セッション #17)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=216"
        },
        {
            "rank": 18,
            "score": 66,
            "event_public_id": "archive-event-18",
            "name": "データサイエンスによるビジネス変革 (セッション #18)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=217"
        },
        {
            "rank": 19,
            "score": 64,
            "event_public_id": "archive-event-19",
            "name": "オープンソースコミュニティの未来 (セッション #19)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=218"
        },
        {
            "rank": 20,
            "score": 62,
            "event_public_id": "archive-event-20",
            "name": "AR/VRコンテンツデザインの最新トレンド (セッション #20)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=219"
        }
    ],
    "trending": [
        {
            "rank": 1,
            "score": 95,
            "event_public_id": "archive-event-21",
            "name": "AIと未来のテクノロジー基調講演 (セッション #21)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=220"
        },
        {
            "rank": 2,
            "score": 93,
            "event_public_id": "archive-event-22",
            "name": "デザインシステム構築の実践ガイド (セッション #22)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=221"
        },
        {
            "rank": 3,
            "score": 91,
            "event_public_id": "archive-event-23",
            "name": "次世代メタバース空間のアーキテクチャ (セッション #23)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=222"
        },
        {
            "rank": 4,
            "score": 89,
            "event_public_id": "archive-event-24",
            "name": "グリーンエネルギーが切り開く持続可能な社会 (セッション #24)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=223"
        },
        {
            "rank": 5,
            "score": 87,
            "event_public_id": "archive-event-25",
            "name": "量子コンピューティングの実用化と展望 (セッション #25)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=224"
        },
        {
            "rank": 6,
            "score": 85,
            "event_public_id": "archive-event-26",
            "name": "Web3時代の分散型IDとプライバシー (セッション #26)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=225"
        },
        {
            "rank": 7,
            "score": 83,
            "event_public_id": "archive-event-27",
            "name": "スマートモビリティと自動運転の最前線 (セッション #27)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=226"
        },
        {
            "rank": 8,
            "score": 81,
            "event_public_id": "archive-event-28",
            "name": "ヘルスケアテックの最新イノベーション (セッション #28)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=227"
        },
        {
            "rank": 9,
            "score": 79,
            "event_public_id": "archive-event-29",
            "name": "宇宙ビジネスの現状と今後の可能性 (セッション #29)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=228"
        },
        {
            "rank": 10,
            "score": 77,
            "event_public_id": "archive-event-30",
            "name": "サイバーセキュリティ防御戦略2026 (セッション #30)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=229"
        },
        {
            "rank": 11,
            "score": 75,
            "event_public_id": "archive-event-31",
            "name": "生成AIを活用したプロダクト開発の現場 (セッション #31)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=230"
        },
        {
            "rank": 12,
            "score": 73,
            "event_public_id": "archive-event-32",
            "name": "UXライティングが変えるユーザー体験 (セッション #32)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=231"
        },
        {
            "rank": 13,
            "score": 71,
            "event_public_id": "archive-event-33",
            "name": "フードテックが解決するグローバルな課題 (セッション #33)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=232"
        },
        {
            "rank": 14,
            "score": 69,
            "event_public_id": "archive-event-34",
            "name": "地方創生とデジタルツインの融合 (セッション #34)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=233"
        },
        {
            "rank": 15,
            "score": 67,
            "event_public_id": "archive-event-35",
            "name": "スタートアップピッチコンテスト決勝 (セッション #35)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=234"
        },
        {
            "rank": 16,
            "score": 65,
            "event_public_id": "archive-event-36",
            "name": "ロボティクスと自動化の現場導入事例 (セッション #36)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=235"
        },
        {
            "rank": 17,
            "score": 63,
            "event_public_id": "archive-event-37",
            "name": "アジャイル開発とチームビルディング (セッション #37)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=236"
        },
        {
            "rank": 18,
            "score": 61,
            "event_public_id": "archive-event-38",
            "name": "データサイエンスによるビジネス変革 (セッション #38)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=237"
        },
        {
            "rank": 19,
            "score": 59,
            "event_public_id": "archive-event-39",
            "name": "オープンソースコミュニティの未来 (セッション #39)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=238"
        },
        {
            "rank": 20,
            "score": 57,
            "event_public_id": "archive-event-40",
            "name": "AR/VRコンテンツデザインの最新トレンド (セッション #40)",
            "caption": "業界最先端のナレッジを共有する特別セッション",
            "icon": "https://picsum.photos/200/200?random=239"
        }
    ]
};
