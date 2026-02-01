import { ThemedText } from "@/components/ui/themed-text";
import { EventRankingItem, Verified } from "@/supabase/api/types";
import { Container } from "../ui/container";
import { RankingList } from "./ranking-list";

type RankingSectionProps = {
    title: string;
    data: Verified<EventRankingItem>[];
};

export function RankingSection({ title, data }: RankingSectionProps) {
    return (
        <Container gap="s8" paddingHorizontal="s20">
            <ThemedText type="title2">{title}</ThemedText>
            <RankingList data={data} />
        </Container>
    );
}