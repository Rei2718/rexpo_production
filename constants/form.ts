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
        title: 'モバイルアプリ満足度調査',
        url: 'https://google.com',
        duration: '目安：1分',
        image: require('@/assets/logo/ios-light.png'),
        provider: 'R-EXPO 開発チーム'
    },
    {
        id: '2',
        title: 'モバイルアプリ利用動向調査',
        url: 'https://google.com',
        duration: '目安：3分',
        image: require('@/assets/logo/ios-light.png'),
        provider: 'R-EXPO 開発チーム'
    },
    {
        id: '3',
        title: 'UI/UXトレンドに関するアンケート',
        url: 'https://google.com',
        duration: '目安：2分',
        image: require('@/assets/logo/ios-light.png'),
        provider: 'R-EXPO 開発チーム'
    }
];