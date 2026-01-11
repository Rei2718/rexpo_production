import { ThemedView } from "@/components/ui/themed-view";
import BookmarkMain from "./main";

export default function BookmarkScreen() {
    return (
        <ThemedView style={{ flex: 1 }}>
            <BookmarkMain />
        </ThemedView>
    );
}