import { AppProviders } from '@/components/providers/app-providers';
import { useIsFirstLaunch } from '@/hooks/use-is-first-launch';
import { NotoSansJP_300Light, NotoSansJP_400Regular, NotoSansJP_500Medium, NotoSansJP_600SemiBold, NotoSansJP_700Bold, useFonts } from '@expo-google-fonts/noto-sans-jp';
import { Stack, router, useRootNavigationState, useSegments } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import * as SystemUI from "expo-system-ui";
import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';

SystemUI.setBackgroundColorAsync("transparent");

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  fade: true,
  duration: 1500,
});

export const unstable_settings = {
  anchor: 'Home',
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    NotoSansJP_300Light,
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_600SemiBold,
    NotoSansJP_700Bold,
  });
  const { isFirstLaunch, isLoading: isLaunchLoading } = useIsFirstLaunch();
  const segments = useSegments();
  const rootNavigationState = useRootNavigationState();

  const isNavigationReady = rootNavigationState?.key != null;
  const isReady = loaded && !isLaunchLoading && isNavigationReady;

  // Handle errors
  useEffect(() => {
    if (error) {
      console.error(error);
      SplashScreen.hideAsync();
    }
  }, [error]);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  useEffect(() => {
    if (isReady && isFirstLaunch && segments[0] !== 'onboarding') {
      router.push('/onboarding');
    }
  }, [isReady, isFirstLaunch, segments]);

  if (!isReady) {
    return null;
  }

  return (
    <AppProviders>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="map"
            options={{
              headerShown: false,
              presentation: 'fullScreenModal',
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
      </View>
    </AppProviders>
  );
}