import { NO_DATA } from "@/constants/no-data";
import { TimelineSlot, Verified } from "@/supabase/api/types";
import { memo } from "react";
import { Container } from "../ui/container";
import { ThemedText } from "../ui/themed-text";


export const SlotHeader = memo((data: Verified<TimelineSlot>) => {
    return (
        <Container flexDirection="column" paddingHorizontal="s8">
            <ThemedText type="footnote" style={{ fontStyle: 'italic' }}>
                {data.starts ?? NO_DATA}
            </ThemedText>
        </Container>
    );
});