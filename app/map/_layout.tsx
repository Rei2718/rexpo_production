import { Icon } from '@/components/ui/icon';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { router, Stack } from 'expo-router';

export default function MapLayout() {
    const color = useThemeColor();

    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace("/");
        }
    };

    return (
        <BottomSheetModalProvider>
            <Stack
                screenOptions={{
                    headerShown: true,
                    headerTitle: "",
                    headerTransparent: true,
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <PressableScale onPress={handleBack} style={{ padding: Spacing.s4 }}>
                            <Icon icon="close" color={color.natural_100} size={Spacing.s24} />
                        </PressableScale>
                    ),
                }}
            >
                <Stack.Screen name="index" />
            </Stack>
        </BottomSheetModalProvider>
    );
}
