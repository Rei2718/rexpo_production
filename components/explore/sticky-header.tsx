import { Container } from "../ui/container";
import CategoryFilter from "./category-filter";
import FeatureCarousel from "./feature-carousel";

export function StickyHeader() {
    return (
        <Container gap="s40" paddingBottom="s20">
            <FeatureCarousel />
            <CategoryFilter />
        </Container>
    );
}