import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useScreenView } from "@/hooks/use-screen-view";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Container } from "../ui/container";

import { useFormattedText } from "@/hooks/use-formatted-text";
import { termsText } from "./text";

export default function TermsScreen() {
    const { modal } = useBottomPadding();
    const formattedText = useFormattedText(termsText);

    useScreenView({
        screen: 'terms',
        label: 'Terms of Service',
    });

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "利用規約",
                }}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Container padding="s20" gap="s16" style={{ paddingBottom: modal }}>
                    {formattedText}
                </Container>
            </ScrollView>
        </>
    );
}