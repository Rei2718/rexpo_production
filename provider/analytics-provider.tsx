import { PostHogProvider } from 'posthog-react-native';

type Props = {
    children: React.ReactNode;
};

export const AnalyticsProvider = ({ children }: Props) => {
    return (
        <PostHogProvider
            apiKey="phc_uYFeuNEb9SSVRJ8Fgd5whPO62QU1SaADYXpN7TfMg8B"
            options={{
                host: 'https://us.i.posthog.com',
                enableSessionReplay: false,
                persistence: 'memory',
                disableGeoip: true,
                captureAppLifecycleEvents: false,
            }}
        >
            {children}
        </PostHogProvider>
    );
};