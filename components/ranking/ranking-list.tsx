import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { EventRankingItem, Verified } from "@/supabase/api/types";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Container } from "../ui/container";
import { RankingCard, RankingVariant } from "./ranking-card";

type RankingListProps = {
    data: Verified<EventRankingItem>[];
    variant: RankingVariant;
};

export const RankingList = memo(({ data, variant }: RankingListProps) => {
    const color = useThemeColor();

    if (!data || data.length === 0) return null;

    return (
        <Container style={[styles.container, { backgroundColor: color.natural_500 }]}>
            <Container flexDirection="column">
                {data.map((item, index) => (
                    <MemoizedRankingRow
                        key={item.event_public_id}
                        item={item}
                        variant={variant}
                        isLast={index === data.length - 1}
                    />
                ))}
            </Container>
        </Container>
    );
});

const MemoizedRankingRow = memo(({ item, variant, isLast }: { item: Verified<EventRankingItem>; variant: RankingVariant; isLast: boolean }) => {
    const color = useThemeColor();
    return (
        <View>
            <RankingCard data={item} variant={variant} />
            {!isLast && (
                <View style={[styles.separator, { backgroundColor: color.natural_400 }]} />
            )}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        borderRadius: Spacing.s20,
        padding: Spacing.s8,
        overflow: 'hidden',
    },
    separator: {
        height: 1,
        marginVertical: Spacing.s8,
        marginLeft: 112, // rank(40) + gap(8) + icon(56) + gap(8) = 112
    },
});