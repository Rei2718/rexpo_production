import { PostHogProvider } from 'posthog-react-native';

type Props = {
    children: React.ReactNode;
};

export const AnalyticsProvider = ({ children }: Props) => {
    return (
        <PostHogProvider
            apiKey="phc_TepSLLI5M2ci841Ie4rCT4tSXJHCgolno6fHEuLMkHV"
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