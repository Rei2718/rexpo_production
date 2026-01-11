import { Container } from "@/components/ui/container";
import { StatusMessage } from "@/components/ui/status-message";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useNews } from "@/supabase/api";
import { Stack } from "expo-router";
import { NewsList } from "./news-list";

export default function NewsScreen() {
    const { data, isPending, isError } = useNews();
    const { modal: bottom } = useBottomPadding();

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data || data.length === 0) return <StatusMessage status="empty" />;

    return (
        <Container flex={1}>
            <Stack.Screen
                options={{
                    headerTitle: "ニュース"
                }}
            />
            <NewsList
                data={data}
                contentContainerStyle={{ paddingBottom: bottom }}
            />
        </Container>
    );
}