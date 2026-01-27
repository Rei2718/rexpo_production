import ExploreMain from "@/components/explore/main";
import { ThemedView } from "@/components/ui/themed-view";
import { useScreenView } from "@/hooks/use-screen-view";

export default function ExploreScreen() {
    useScreenView({
        screen: 'explore',
        label: 'Explore',
    });

    return (
        <ThemedView style={{ flex: 1 }}>
            <ExploreMain />
        </ThemedView>
    );
}