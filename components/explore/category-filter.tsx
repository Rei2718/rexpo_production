import { Spacing } from "@/constants/theme";
import { useCategories } from "@/supabase/api";
import { useCallback } from "react";
import { FlatList } from "react-native";
import { Container } from "../ui/container";
import { StatusMessage } from "../ui/status-message";
import CategoryCard from "./category-card";

export default function CategoryFilter() {
    const { data, isPending, isError } = useCategories();

    const renderItem = useCallback(({ item }: { item: any }) => (
        <CategoryCard {...item} />
    ), []);

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data) return <StatusMessage status="empty" />;

    return (
        <Container>
            {/* Category Tab */}
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.category_public_id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: Spacing.s20,
                    gap: Spacing.s8,
                }}
                contentInsetAdjustmentBehavior="automatic"
                initialNumToRender={5}
                windowSize={3}
                maxToRenderPerBatch={3}
                removeClippedSubviews={true}
            />
        </Container>
    );
}