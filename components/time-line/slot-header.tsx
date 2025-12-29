import { TimelineSlot } from "@/supabase/api/types";
import { Container } from "../ui/container";
import { ThemedText } from "../ui/themed-text";

export function SlotHeader({ item }: { item: TimelineSlot }) {
    return (
        <Container flexDirection="column" justifyContent="center">
            <ThemedText type="footnote" style={{ fontStyle: 'italic' }}>{item.starts}</ThemedText>
        </Container>
    );
}

