import { Container } from "@/components/ui/container";
import TitleBar from "./title-bar";


export default function HomeScreen() {
    return (
        <Container gap="s32" paddingBottom="s20">
            <TitleBar />
        </Container>
    );
}