import { DarkNavigationTheme, LightNavigationTheme } from '@/constants/theme';
import { AnalyticsProvider } from '@/provider/analytics-provider';
import { useThemeStore } from '@/stores/theme-store';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@react-navigation/native';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import * as Haptics from 'expo-haptics';
import 'expo-sqlite/localStorage/install';
import { StatusBar } from 'expo-status-bar';
import { PressablesConfig } from 'pressto';
import React from 'react';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 60 * 72, // 72 hours
            refetchOnWindowFocus: false,
        },
    },
});

const persister = createAsyncStoragePersister({
    storage: localStorage,
});

export function AppProviders({ children }: { children: React.ReactNode }) {
    const systemTheme = useColorScheme() ?? 'light';
    const { themeMode } = useThemeStore();
    const theme = themeMode === 'system' ? systemTheme : themeMode;

    return (
        <ThemeProvider value={theme === 'dark' ? DarkNavigationTheme : LightNavigationTheme}>
            <AnalyticsProvider>
                <ActionSheetProvider>
                    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
                        <GestureHandlerRootView style={{ flex: 1 }}>
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
                                    {children}
                                    <StatusBar style="auto" />
                                </PressablesConfig>
                            </BottomSheetModalProvider>
                        </GestureHandlerRootView>
                    </PersistQueryClientProvider>
                </ActionSheetProvider>
            </AnalyticsProvider>
        </ThemeProvider>
    );
}
