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
        title: 'セコマコラボ デザイン募集',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSdVnUeVihwpVgAyGx5S-_4HJXQ3jF6sRtjj9VS9JHsY-LL51Q/viewform',
        duration: '目安：3分',
        image: require('@/assets/logo/tint.png'),
        provider: '行事部'
    },
];