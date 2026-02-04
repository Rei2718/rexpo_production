import { ImageSourcePropType } from "react-native";

export interface SurveyItem {
    id: string;
    title: string;
    url: string;
    duration: string;
    image: ImageSourcePropType;
    provider: string;
}

export const SURVEY_DATA: SurveyItem[] = [
    {
        id: '1',
        title: '【一般】参加申込フォーム',
        url: 'https://program-service.ritsumei.ac.jp/public/seminar/view/40459',
        duration: '目安：2分',
        image: require('@/assets/logo/tint.png'),
        provider: '立命館慶祥中学校・高等学校'
    },
    {
        id: '2',
        title: 'モバイルアプリ満足度調査',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSfiq_s7WZGbPimm3ZPyKqLxT9-1qEL4SrzpzLucwiyykPOjxA/viewform',
        duration: '目安：3分',
        image: require('@/assets/logo/tint.png'),
        provider: 'R-EXPO 開発チーム'
    },
    {
        id: '3',
        title: 'Rising Teenager Award 2026 観覧予約',
        url: 'https://reg31.smp.ne.jp/regist/is?SMPFORM=lioi-mbnfpj-417cdc5c8b5f37390dab3360cfddb4a7',
        duration: '目安：3分',
        image: require('@/assets/logo/tint.png'),
        provider: '北海道大学 社会・地域創発本部'
    },
];