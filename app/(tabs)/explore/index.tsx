import { ThemedView } from '@/components/ui/themed-view';
import Index from '@/features/explore/components';

export default function HomeScreen() {
    return (
        <ThemedView style={{ flex: 1 }}>
            <Index />
        </ThemedView>
    );
}