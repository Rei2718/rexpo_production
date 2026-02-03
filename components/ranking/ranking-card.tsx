import { EventListItem } from "@/components/shared/event-list-item";
import { Container } from "@/components/ui/container";
import { ThemedText } from "@/components/ui/themed-text";
import { Spacing } from "@/constants/theme";
import { EventRankingItem, Verified } from "@/supabase/api/types";
import { View } from "react-native";

export type RankingVariant = 'top' | 'trending';

type RankingCardProps = {
    data: Verified<EventRankingItem>;
    variant: RankingVariant;
};

export function RankingCard({ data, variant }: RankingCardProps) {
    const isTrending = variant === 'trending';

    return (
        <Container flexDirection="row" alignItems="center" gap="s8">
            {/* Rank Indicator */}
            <Container alignItems="center" justifyContent="center" style={{ width: Spacing.s40 }}>
                <ThemedText type="title2" color="tint">
                    {data.rank}
                </ThemedText>
                <Container alignItems="baseline" flexDirection="row" justifyContent="center">
                    <ThemedText type="caption2" color="natural_200">
                        {isTrending ? "+" : ""}{data.score}
                    </ThemedText>
                    <ThemedText type="caption2" color="natural_300" style={{ marginLeft: 2 }}>
                        pt
                    </ThemedText>
                </Container>
            </Container>

            {/* Event List Item (Reused) */}
            <View style={{ flex: 1 }}>
                <EventListItem {...data} display_order={data.score} />
            </View>
        </Container>
    );
}