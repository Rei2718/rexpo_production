import { Container } from "@/components/ui/container";
import { StatusMessage } from "@/components/ui/status-message";
import { ThemedText } from "@/components/ui/themed-text";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useFoods } from "@/supabase/api";
import { Stack } from "expo-router";
import { FoodList } from "./food-list";


export default function FoodScreen() {
    const { data, isPending, isError } = useFoods();
    const { modal: bottom } = useBottomPadding();

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data || data.length === 0) return <StatusMessage status="empty" />;

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "フード"
                }}
            />
            <FoodList
                data={data}
                contentContainerStyle={{ paddingBottom: bottom }}
                ListHeaderComponent={
                    <Container paddingBottom="s16" alignItems="center">
                        <ThemedText type="caption1" color="tint">
                            会場周辺の飲食店の情報を掲載しています
                        </ThemedText>
                    </Container>
                }
            />
        </>
    );
}