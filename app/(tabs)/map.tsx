import MapMain from '@/components/map/main';
import { ThemedView } from '@/components/ui/themed-view';

export default function MapScreen() {
    return (
        <ThemedView style={{ flex: 1 }}>
            <MapMain />
        </ThemedView>
    );
}