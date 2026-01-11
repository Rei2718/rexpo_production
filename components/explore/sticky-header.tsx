import { SharedValue } from "react-native-reanimated";
import { Container } from "../ui/container";
import CategoryFilter from "./category-filter";
import FeatureCarousel from "./feature-carousel";

type StickyHeaderProps = {
    scrollOffset: SharedValue<number>;
};

export function StickyHeader({ scrollOffset }: StickyHeaderProps) {
    return (
        <Container gap="s32" paddingBottom="s20">
            <FeatureCarousel scrollOffset={scrollOffset} />
            <CategoryFilter />
        </Container>
    );
}