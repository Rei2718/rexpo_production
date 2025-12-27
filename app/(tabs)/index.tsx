import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";

export default function IndexScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedText>Home</ThemedText>
    </ThemedView>
  );
}