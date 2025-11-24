import { ThemedText } from '@/components/core/themed-text';
import { ThemedView } from '@/components/core/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>Home</ThemedText>
    </ThemedView>
  );
}