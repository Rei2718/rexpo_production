import * as WebBrowser from 'expo-web-browser';
import { useCallback } from 'react';
import { useThemeColor } from './use-theme-color';

export const useInAppBrowser = () => {
    const color = useThemeColor();

    const openInAppBrowser = useCallback(async (url: string) => {
        if (!url.startsWith('http')) {
            console.warn('openInAppBrowser: URL must start with http or https', url);
            return;
        }

        try {
            await WebBrowser.openBrowserAsync(url, {
                presentationStyle: WebBrowser.WebBrowserPresentationStyle.PAGE_SHEET,
                controlsColor: color.tint,
                toolbarColor: color.natural_600,
            });
        } catch (error) {
            console.error("Failed to open in-app browser:", error);
        }
    }, [color]);

    return openInAppBrowser;
};