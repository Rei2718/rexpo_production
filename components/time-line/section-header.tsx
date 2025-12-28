import { useThemeColor } from "@/hooks/use-theme-color";
import { TimelineSlot } from "@/supabase/api/types";
import { Container } from "../ui/container";
import { ThemedText } from "../ui/themed-text";

export function SectionHeader({ item }: { item: TimelineSlot }) {
    const color = useThemeColor();

    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" });
    };

    return (
        <Container flexDirection="column" justifyContent="center" gap="s4">
            <ThemedText type="title3">{item.starts + " ~"}</ThemedText>
            <ThemedText type="caption1" color="natural_200">
                {item.events.length}件のイベント
            </ThemedText>
        </Container>
    );
}

