import { Container } from "@/components/ui/container";
import { ThemedText } from "@/components/ui/themed-text";
import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { useNews } from "@/supabase/api";
import { News, Verified } from "@/supabase/api/types";
import { Image } from "react-native";

export default function NewsList() {
    const { data } = useNews();
    if (!data || data.length === 0) return null;

    return (
        <Container
            gap="s24"
            paddingHorizontal="s20"
        >
            {data.map((item) => (
                <NewsItem key={item.news_public_id} {...item} />
            ))}
        </Container>
    );
}

function NewsItem(data: Verified<News>) {
    return (
        <Container gap="s8">
            <Image
                source={data.thumbnail ? { uri: data.thumbnail } : FALLBACK_IMAGE_URL}
                style={{ width: '100%', aspectRatio: 1.8, borderRadius: 20 }}
            />
            <Container flexDirection="row" alignItems="center">
                <ThemedText type="caption1">
                    {data.caption ?? 'NEWS'}
                </ThemedText>
            </Container>
            <ThemedText type="title2">
                {data.name}
            </ThemedText>
        </Container>
    );
}