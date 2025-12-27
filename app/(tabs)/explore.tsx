import CategoryTab from "@/components/explore/category-tab";
import Header from "@/components/explore/header";
import { Container } from "@/components/ui/container";
import { ThemedView } from "@/components/ui/themed-view";

export default function Explore() {
    return (
        <ThemedView style={{ flex: 1 }}>
            <Header />
            <Container paddingTop="xl">
                <CategoryTab />
            </Container>
        </ThemedView>
    );
}