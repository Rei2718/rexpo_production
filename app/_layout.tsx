import { Icon } from '@/components/ui/icon';
import { DarkNavigationTheme, LightNavigationTheme, Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { NotoSansJP_300Light, NotoSansJP_400Regular, NotoSansJP_500Medium, NotoSansJP_600SemiBold, NotoSansJP_700Bold, useFonts } from '@expo-google-fonts/noto-sans-jp';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@react-navigation/native';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { router, Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import 'expo-sqlite/localStorage/install';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from "expo-system-ui";
import React, { useEffect } from 'react';
import { Platform, TouchableOpacity, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

SystemUI.setBackgroundColorAsync("transparent");

SplashScreen.preventAutoHideAsync();

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
            <Stack>
              <Stack.Screen
                name="(tabs)"
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="category-modal"
                options={{
                  presentation: "modal",
                  headerTransparent: false,
                  headerTitleAlign: "center",
                  animation: "ios_from_right",
                  headerLeft: Platform.OS === 'ios' ? () => (
                    <TouchableOpacity onPress={() => router.back()}>
                      <Icon icon="left" size={Spacing.icon} color={color.natural_100} />
                    </TouchableOpacity>
                  ) : undefined,
                }}
              />
              <Stack.Screen
                name="tag-modal"
                options={{
                  presentation: "modal",
                  headerTransparent: false,
                  headerTitleAlign: "center",
                  animation: "ios_from_right",
                  headerLeft: Platform.OS === 'ios' ? () => (
                    <TouchableOpacity onPress={() => router.back()}>
                      <Icon icon="left" size={Spacing.icon} color={color.natural_100} />
                    </TouchableOpacity>
                  ) : undefined,
                }}
              />
              <Stack.Screen
                name="bookmark-modal"
                options={{
                  presentation: "modal",
                  headerTransparent: false,
                  headerTitle: "ブックマーク",
                  headerTitleAlign: "center",
                  animation: "ios_from_right",
                  headerLeft: Platform.OS === 'ios' ? () => (
                    <TouchableOpacity onPress={() => router.back()}>
                      <Icon icon="left" size={Spacing.icon} color={color.natural_100} />
                    </TouchableOpacity>
                  ) : undefined,
                }}
              />
              <Stack.Screen
                name="event-details-modal"
                options={{
                  presentation: "modal",
                  headerTitle: "",
                  headerTransparent: true,
                  animation: "ios_from_right",
                  headerLeft: Platform.OS === 'ios' ? () => (
                    <TouchableOpacity onPress={() => router.back()}>
                      <Icon icon="left" size={Spacing.icon} color={color.natural_100} />
                    </TouchableOpacity>
                  ) : undefined,
                }}
              />
            </Stack>
            <StatusBar style="auto" />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </PersistQueryClientProvider>
    </ThemeProvider>
  );
}