import { StatusMessage } from "@/components/ui/status-message";
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
            />
        </>
    );
}