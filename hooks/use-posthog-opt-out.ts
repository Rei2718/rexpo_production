import { usePostHog } from 'posthog-react-native';
import { useCallback, useState } from "react";

export const usePostHogOptOut = () => {
    const posthog = usePostHog();
    const [isOptedIn, setIsOptedIn] = useState(!posthog.optedOut);

    const setOptIn = useCallback((value: boolean) => {
        setIsOptedIn(value);
        if (value) {
            posthog.optIn();
        } else {
            posthog.optOut();
        }
    }, [posthog]);

    return {
        isOptedIn,
        setOptIn,
    };
};