import { ImageSourcePropType } from "react-native";

export type CarouselItem = {
    id: number;
    image: ImageSourcePropType;
};

export const CAROUSEL_DATA: CarouselItem[] = [
    {
        id: 1,
        image: require("@/assets/banner/banner_1.png"),
    },
    {
        id: 2,
        image: require("@/assets/banner/banner_2.png"),
    },
    {
        id: 3,
        image: require("@/assets/banner/banner_3.png"),
    },
    {
        id: 4,
        image: require("@/assets/banner/banner_4.png"),
    },
    {
        id: 5,
        image: require("@/assets/banner/banner_5.png"),
    },
];