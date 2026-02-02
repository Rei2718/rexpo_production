import { ThemedText } from "@/components/ui/themed-text";
import { EventRankingItem, Verified } from "@/supabase/api/types";
import { Container } from "../ui/container";
import { RankingVariant } from "./ranking-card";
import { RankingList } from "./ranking-list";

type RankingSectionProps = {
    title: string;
    data: Verified<EventRankingItem>[];
    variant: RankingVariant;
};

export function RankingSection({ title, data, variant }: RankingSectionProps) {
    return (
        <Container gap="s8" paddingHorizontal="s20">
            <ThemedText type="title2">{title}</ThemedText>
            <RankingList data={data} variant={variant} />
        </Container>
    );
}