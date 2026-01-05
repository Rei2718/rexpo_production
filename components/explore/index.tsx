import ExploreMain from "@/components/explore/main";
import { ThemedView } from "@/components/ui/themed-view";

export default function ExploreScreen() {
    return (
        <ThemedView style={{ flex: 1 }}>
            <ExploreMain />
        </ThemedView>
    );
}