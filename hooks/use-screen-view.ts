import { useFocusEffect } from 'expo-router';
import { usePostHog } from 'posthog-react-native';
import { useCallback } from 'react';

type UseScreenViewProps = {
    screen: string;
    label?: string | null;
    isReady?: boolean;
};

export const useScreenView = ({ screen, label, isReady = true }: UseScreenViewProps) => {
    const posthog = usePostHog();
    useFocusEffect(
        useCallback(() => {
            if (!isReady || !posthog) return;

            const properties = {
                screen,
                label: label ?? null,
            };

            // Log for debugging
            console.log('[PostHog] screen-view:', properties);

            posthog.capture('screen-view', properties);

        }, [isReady, screen, label, posthog])
    );
};