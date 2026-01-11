import { SurveyList } from "@/components/survey/survey-list";
import { Container } from "@/components/ui/container";
import { ThemedText } from "@/components/ui/themed-text";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { ScrollView, TouchableOpacity } from "react-native";

export default function SurveyScreen() {
    const color = useThemeColor();
    const { modal } = useBottomPadding();
    const router = useRouter();

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "アンケート",
                    headerShown: true,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 8 }}>
                            <Ionicons name="chevron-back" size={24} color={color.natural_100} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
                <Container paddingHorizontal="s20" paddingVertical="s24" gap="s24" style={{ paddingBottom: modal }}>
                    <ThemedText type="caption1" color="natural_200" style={{ textAlign: 'center' }}>
                        アンケートへの回答は任意です。
                    </ThemedText>
                    <SurveyList />
                </Container>
            </ScrollView>
        </>
    );
}
