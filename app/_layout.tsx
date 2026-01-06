import { Icon } from '@/components/ui/icon';
import { DarkNavigationTheme, LightNavigationTheme } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { NotoSansJP_300Light, NotoSansJP_400Regular, NotoSansJP_500Medium, NotoSansJP_600SemiBold, NotoSansJP_700Bold, useFonts } from '@expo-google-fonts/noto-sans-jp';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@react-navigation/native';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import * as Haptics from 'expo-haptics';
import { router, Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import 'expo-sqlite/localStorage/install';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from "expo-system-ui";
import { PressableScale, PressablesConfig } from 'pressto';
import React, { useEffect } from 'react';
import { Platform, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';


SystemUI.setBackgroundColorAsync("transparent");

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  fade: true,
  duration: 500,
});

export const unstable_settings = {
  anchor: 'Home',
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const persister = createAsyncStoragePersister({
  storage: localStorage,
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const color = useThemeColor();
  const [loaded] = useFonts({
    NotoSansJP_300Light,
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_600SemiBold,
    NotoSansJP_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkNavigationTheme : LightNavigationTheme}>
      <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
        <GestureHandlerRootView>
          <BottomSheetModalProvider>
            <PressablesConfig
              animationType="spring"
              animationConfig={{ damping: 30, stiffness: 200 }}
              config={{ minScale: 0.9, activeOpacity: 0.6 }}
              globalHandlers={{
                onPress: () => {
                  Haptics.selectionAsync();
                },
              }}
            >
              <Stack>
                <Stack.Screen
                  name="(tabs)"
                  options={{
                    headerShown: false
                  }}
                />
                <Stack.Screen
                  name="category"
                  options={{
                    presentation: "modal",
                    headerTitle: "",
                    headerTitleAlign: "center",
                    headerTransparent: Platform.OS === 'ios' ? true : false,
                    headerShadowVisible: false,
                    animation: "ios_from_right",
                    headerLeft: Platform.OS === 'ios' ? () => (
                      <PressableScale onPress={() => router.back()}>
                        <Icon icon="left" color={color.tint} />
                      </PressableScale>
                    ) : undefined,
                  }}
                />
                <Stack.Screen
                  name="tag"
                  options={{
                    presentation: "modal",
                    headerTitle: "",
                    headerTitleAlign: "center",
                    headerTransparent: Platform.OS === 'ios' ? true : false,
                    headerShadowVisible: false,
                    animation: "ios_from_right",
                    headerLeft: Platform.OS === 'ios' ? () => (
                      <PressableScale onPress={() => router.back()}>
                        <Icon icon="left" color={color.tint} />
                      </PressableScale>
                    ) : undefined,
                  }}
                />
                <Stack.Screen
                  name="bookmark"
                  options={{
                    presentation: "modal",
                    headerTitle: "ブックマーク",
                    headerTitleAlign: "center",
                    headerTransparent: Platform.OS === 'ios' ? true : false,
                    headerShadowVisible: false,
                    animation: "ios_from_right",
                    headerLeft: Platform.OS === 'ios' ? () => (
                      <PressableScale onPress={() => router.back()}>
                        <Icon icon="left" color={color.tint} />
                      </PressableScale>
                    ) : undefined,
                  }}
                />
                <Stack.Screen
                  name="event-details"
                  options={{
                    presentation: "modal",
                    headerTitle: "",
                    headerTitleAlign: "center",
                    headerTransparent: true,
                    headerShadowVisible: false,
                    animation: "ios_from_right",
                    headerLeft: Platform.OS === 'ios' ? () => (
                      <PressableScale onPress={() => router.back()}>
                        <Icon icon="left" color={color.tint} />
                      </PressableScale>
                    ) : undefined,
                  }}
                />
                <Stack.Screen
                  name="organization-details"
                  options={{
                    presentation: "modal",
                    headerTitle: "",
                    headerTitleAlign: "center",
                    headerTransparent: true,
                    headerShadowVisible: false,
                    animation: "ios_from_right",
                    headerLeft: Platform.OS === 'ios' ? () => (
                      <PressableScale onPress={() => router.back()}>
                        <Icon icon="left" color={color.tint} />
                      </PressableScale>
                    ) : undefined,
                  }}
                />
              </Stack>
              <StatusBar style="auto" />
            </PressablesConfig>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </PersistQueryClientProvider>
    </ThemeProvider>
  );
}