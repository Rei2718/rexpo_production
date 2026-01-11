import { Container } from "@/components/ui/container";
import { ThemedView } from "@/components/ui/themed-view";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import MainFeature from "./main-feature";
import NewsList from "./news-list";


export default function HomeScreen() {
    const scrollOffset = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollOffset.value = event.contentOffset.y;
        },
    });

    return (
        <ThemedView style={{ flex: 1 }}>
            <Animated.ScrollView
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                contentContainerStyle={{ paddingBottom: 20 }} // Add safer padding
            >
                <Container gap="s32" paddingBottom="s20">
                    <MainFeature scrollOffset={scrollOffset} />
                    <NewsList />
                </Container>
            </Animated.ScrollView>
        </ThemedView>
    );
}