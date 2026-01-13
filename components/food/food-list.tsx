import { Spacing } from "@/constants/theme";
import { Food, Verified } from "@/supabase/api/types";
import { FlatList, StyleProp, ViewStyle } from "react-native";
import { FoodCard } from "./food-card";


export function FoodList({
    data,
    contentContainerStyle,
}: {
    data: Verified<Food>[];
    contentContainerStyle?: StyleProp<ViewStyle>;
}) {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <FoodCard {...item} />}
            keyExtractor={(item) => item.food_public_id}
            contentContainerStyle={[
                {
                    padding: Spacing.s20,
                    gap: Spacing.s16,
                },
                contentContainerStyle,
            ]}
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
        />
    );
}