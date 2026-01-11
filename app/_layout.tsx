import { DarkNavigationTheme, LightNavigationTheme } from '@/constants/theme';
import { useIsFirstLaunch } from '@/hooks/use-is-first-launch';
import { useThemeColor } from '@/hooks/use-theme-color';
import { NotoSansJP_300Light, NotoSansJP_400Regular, NotoSansJP_500Medium, NotoSansJP_600SemiBold, NotoSansJP_700Bold, useFonts } from '@expo-google-fonts/noto-sans-jp';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@react-navigation/native';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import * as Haptics from 'expo-haptics';
import { Stack, router, useSegments } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import 'expo-sqlite/localStorage/install';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from "expo-system-ui";
import { PressablesConfig } from 'pressto';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
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

import { useThemeStore } from '@/stores/theme-store';

export default function RootLayout() {
  const systemTheme = useColorScheme() ?? 'light';
  const { themeMode } = useThemeStore();
  const theme = themeMode === 'system' ? systemTheme : themeMode;

  const color = useThemeColor();
  const [loaded] = useFonts({
    NotoSansJP_300Light,
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_600SemiBold,
    NotoSansJP_700Bold,
  });
  const { isFirstLaunch, isLoading: isLaunchLoading } = useIsFirstLaunch();

  const segments = useSegments();

  useEffect(() => {
    if (!isLaunchLoading && isFirstLaunch) {
      if (segments[0] !== 'onboarding') {
        router.replace('/onboarding');
      }
    }
  }, [isLaunchLoading, isFirstLaunch, segments]);

  useEffect(() => {
    if (loaded && !isLaunchLoading) {
      SplashScreen.hideAsync();
    }
  }, [loaded, isLaunchLoading]);

  if (!loaded || isLaunchLoading) {
    return null;
  }

  return (
    <ThemeProvider value={theme === 'dark' ? DarkNavigationTheme : LightNavigationTheme}>
      <ActionSheetProvider>
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
                    name="(detail)"
                    options={{
                      presentation: "modal",
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name="onboarding"
                    options={{
                      headerShown: false,
                      presentation: 'fullScreenModal',
                      gestureEnabled: false,
                    }}
                  />
                </Stack>
                <StatusBar style="auto" />
              </PressablesConfig>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </PersistQueryClientProvider>
      </ActionSheetProvider>
    </ThemeProvider>
  );
}