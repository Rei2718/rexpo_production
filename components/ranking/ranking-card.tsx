import { EventListItem } from "@/components/shared/event-list-item";
import { Container } from "@/components/ui/container";
import { ThemedText } from "@/components/ui/themed-text";
import { Spacing } from "@/constants/theme";
import { EventRankingItem, Verified } from "@/supabase/api/types";
import { View } from "react-native";

export function RankingCard(data: Verified<EventRankingItem>) {
    return (
        <Container flexDirection="row" alignItems="center" gap="s8">
            {/* Rank Indicator */}
            <Container alignItems="center" justifyContent="center" style={{ width: Spacing.s32 }}>
                <ThemedText type="title2" color="tint">
                    {data.rank}
                </ThemedText>
                <ThemedText type="caption2" color="natural_200">
                    {data.score}
                </ThemedText>
            </Container>

            {/* Event List Item (Reused) */}
            <View style={{ flex: 1 }}>
                <EventListItem {...data} display_order={data.score} />
            </View>
        </Container>
    );
}