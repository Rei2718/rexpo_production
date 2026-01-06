import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Container } from "../ui/container";

import { useFormattedText } from "@/hooks/use-formatted-text";
import { privacyText } from "./text";

export default function PrivacyScreen() {
    const { modal } = useBottomPadding();
    const formattedText = useFormattedText(privacyText);

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "プライバシーポリシー",
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