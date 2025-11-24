import { ThemedView } from '@/components/core/themed-view';
import Index from '@/components/feature/explore';

export default function HomeScreen() {
    return (
        <ThemedView style={{ flex: 1 }}>
            <Index />
        </ThemedView>
    );
}