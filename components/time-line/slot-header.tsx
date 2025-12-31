import { NO_DATA } from "@/constants/no-data";
import { TimelineSlot, Verified } from "@/supabase/api/types";
import { Container } from "../ui/container";
import { ThemedText } from "../ui/themed-text";


export function SlotHeader(data: Verified<TimelineSlot>) {
    return (
        <Container flexDirection="column" justifyContent="center">
            <ThemedText type="footnote" style={{ fontStyle: 'italic' }}>
                {data.starts ?? NO_DATA}
            </ThemedText>
        </Container>
    );
}