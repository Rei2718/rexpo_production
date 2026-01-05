import TimelineMain from "@/components/time-line/main";
import { ThemedView } from "@/components/ui/themed-view";

export default function TimeLineScreen() {
    return (
        <ThemedView style={{ flex: 1 }}>
            <TimelineMain />
        </ThemedView>
    );
}