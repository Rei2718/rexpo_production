import { ThemedView } from '@/components/ui/themed-view';
import ExploreScreen from '@/features/explore/screens/ExploreScreen';

export default function HomeScreen() {
    return (
        <ThemedView style={{ flex: 1 }}>
            <ExploreScreen />
        </ThemedView>
    );
}