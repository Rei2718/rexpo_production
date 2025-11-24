export type CarouselItem = {
    id: number;
    category: string;
    title: string;
    subtitle: string;
    imageUrl: string;
};

export const CAROUSEL_DATA: CarouselItem[] = [
    {
        id: 1,
        category: "NEW",
        title: "iPhone 17 Pro",
        subtitle: "Pro. Beyond.",
        imageUrl: "https://picsum.photos/seed/dhtydyjgh/1080/1920",
    },
    {
        id: 2,
        category: "APPLE VISION PRO",
        title: "Welcome to the era of spatial computing.",
        subtitle: "Learn more.",
        imageUrl: "https://picsum.photos/seed/dhtsdddfgh/1080/1920",
    },
    {
        id: 3,
        category: "MACBOOK AIR",
        title: "Supercharged by M4.",
        subtitle: "Impressively big. Impossibly thin.",
        imageUrl: "https://picsum.photos/seed/dht18gh/1080/1920",
    },
    {
        id: 4,
        category: "WATCH",
        title: "Series 11",
        subtitle: "Smarter. Brighter. Mightier.",
        imageUrl: "https://picsum.photos/seed/dhtvukv6h/1080/1920",
    },
];
