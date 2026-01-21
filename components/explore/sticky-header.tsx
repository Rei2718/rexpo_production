import { Container } from "../ui/container";
import CategoryFilter from "./category-filter";
import FeatureCarousel from "./feature-carousel";

export function StickyHeader() {
    return (
        // 領域を広げたのでその分調整(-s8)
        <Container gap="s24" paddingBottom="s12">
            <FeatureCarousel />
            <CategoryFilter />
        </Container>
    );
}