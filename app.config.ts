import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
    const isDev = process.env.APP_VARIANT === 'development';
    return {
        ...config,
        name: isDev ? `${config.name ?? 'rexpo'} (Dev)` : (config.name ?? 'rexpo'),
        slug: config.slug ?? 'rexpo',
        android: {
            ...config.android,
            package: isDev ? 'com.ichi.dev.rexpo' : config.android?.package,
        },
        ios: {
            ...config.ios,
            bundleIdentifier: isDev ? 'com.ichi.dev.rexpo' : config.ios?.bundleIdentifier,
        },
        plugins: [
            "expo-video"
        ]
    };
};