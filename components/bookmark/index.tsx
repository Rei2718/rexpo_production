import { ThemedView } from "@/components/ui/themed-view";
import { useScreenView } from "@/hooks/use-screen-view";
import BookmarkMain from "./main";

export default function BookmarkScreen() {
    useScreenView({
        screen: 'bookmarks',
        label: 'Bookmarks',
    });

    return (
        <ThemedView style={{ flex: 1 }}>
            <BookmarkMain />
        </ThemedView>
    );
}