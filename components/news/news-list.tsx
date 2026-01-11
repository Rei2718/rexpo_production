import { Spacing } from "@/constants/theme";
import { News, Verified } from "@/supabase/api/types";
import { FlatList, StyleProp, ViewStyle } from "react-native";
import { NewsCard } from "./news-card";

export function NewsList({
    data,
    contentContainerStyle,
}: {
    data: Verified<News>[];
    contentContainerStyle?: StyleProp<ViewStyle>;
}) {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <NewsCard {...item} />}
            keyExtractor={(item) => item.news_public_id}
            contentContainerStyle={[
                {
                    paddingHorizontal: Spacing.s20,
                    paddingBottom: Spacing.s20,
                    gap: Spacing.s16,
                },
                contentContainerStyle,
            ]}
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
        />
    );
}
