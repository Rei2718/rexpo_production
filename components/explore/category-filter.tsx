import { Spacing } from "@/constants/theme";
import { useCategories } from "@/supabase/api";
import { ScrollView } from "react-native";
import { Container } from "../ui/container";
import { StatusMessage } from "../ui/status-message";
import CategoryCard from "./category-card";

export default function CategoryFilter() {
    const { data, isPending, isError } = useCategories();

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data) return <StatusMessage status="empty" />;

    return (
        <Container>
            {/* Category Tab */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: Spacing.s20,
                    gap: Spacing.s8,
                }}
                contentInsetAdjustmentBehavior="automatic"
            >
                {data.map((item) => (
                    <CategoryCard
                        key={item.category_public_id}
                        {...item}
                    />
                ))}
            </ScrollView>
        </Container>
    );
}