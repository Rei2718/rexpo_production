import { Icon } from '@/components/ui/icon';
import { PressableScale } from '@/components/ui/pressable-scale';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Stack, router } from 'expo-router';
import { Platform } from 'react-native';

export default function OnboardingLayout() {
    const color = useThemeColor();

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                headerTitle: "",
                headerTitleAlign: "center",
                headerTransparent: Platform.OS === 'ios' ? true : false,
                headerShadowVisible: false,
                headerLeft: Platform.OS === 'ios' ? () => (
                    <PressableScale onPress={() => router.back()}>
                        <Icon icon="left" color={color.tint} />
                    </PressableScale>
                ) : undefined,
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="terms"
                options={{
                    headerShown: true,
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="privacy"
                options={{
                    headerShown: true,
                    presentation: 'modal',
                }}
            />
        </Stack>
    );
}