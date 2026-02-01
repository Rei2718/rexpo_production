import { Icon } from '@/components/ui/icon';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { router, Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function DetailLayout() {
    const color = useThemeColor();

    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace("/");
        }
    };

    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerTitle: "",
                headerTitleAlign: "center",
                headerTransparent: Platform.OS === 'ios' ? true : false,
                headerShadowVisible: false,
                headerLeft: () => (
                    <PressableScale onPress={handleBack} style={{ padding: Spacing.s4 }}>
                        <Icon icon="left" color={color.natural_100} size={Spacing.s24} />
                    </PressableScale>
                ),
            }}
        >
            <Stack.Screen name="event-details" />
            <Stack.Screen name="organization-details" />
            <Stack.Screen name="tag" />
            <Stack.Screen name="category" />
            <Stack.Screen name="bookmark" />
            <Stack.Screen name="settings" />
            <Stack.Screen name="menu" />
            <Stack.Screen name="terms" />
            <Stack.Screen name="privacy" />
            <Stack.Screen name="news/index" />
            <Stack.Screen name="news/[id]" />
            <Stack.Screen
                name="event/[event_public_id]"
                options={{
                    headerShown: true,
                    headerTitle: "",
                    headerTransparent: Platform.OS === 'ios',
                    headerLeft: () => (
                        <PressableScale onPress={handleBack} style={{ padding: Spacing.s4 }}>
                            <Icon icon="left" color={color.natural_100} size={Spacing.s24} />
                        </PressableScale>
                    ),
                }}
            />
        </Stack>
    );
}