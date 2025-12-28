import TimelineContent from "@/components/time-line/timeline-content";
import { ThemedView } from "@/components/ui/themed-view";

export default function TimeLine() {
    return (
        <ThemedView style={{ flex: 1 }}>
            <TimelineContent />
        </ThemedView>
    );
}