import { AppProviders } from '@/components/providers/app-providers';
import { useIsFirstLaunch } from '@/hooks/use-is-first-launch';
import { NotoSansJP_300Light, NotoSansJP_400Regular, NotoSansJP_500Medium, NotoSansJP_600SemiBold, NotoSansJP_700Bold, useFonts } from '@expo-google-fonts/noto-sans-jp';
import { Stack, router, useSegments } from "expo-router";
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

  const onLayoutRootView = useCallback(async () => {
    if (loaded && !isLaunchLoading) {
      await SplashScreen.hideAsync();
    }
  }, [loaded, isLaunchLoading]);

  if (!loaded || isLaunchLoading) {
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