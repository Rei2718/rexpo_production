import { Container } from "../ui/container";
import CategoryTab from "./category-tab";
import Header from "./header";

export function ContentHeader() {
    return (
        <Container gap="s24" paddingBottom="s24">
            <Header />
            <CategoryTab />
        </Container>
    );
}