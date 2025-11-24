import { ThemedText } from '@/components/core/themed-text';
import { ThemedView } from '@/components/core/themed-view';
import { Link } from 'expo-router';

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
      <Link href="/a">
        <ThemedText>
          Go back to Home screen!
        </ThemedText>
      </Link>
    </ThemedView>
  );
}
