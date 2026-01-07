import { PressableScale } from '@/components/ui/pressable-scale';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useLaunchStore } from '@/store/use-launch-store';
import { useRouter } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function OnboardingScreen() {
    const router = useRouter();
    const color = useThemeColor();
    const insets = useSafeAreaInsets();
    const { completeOnboarding } = useLaunchStore();

    const player = useVideoPlayer(require('@/assets/movie/onbord.mp4'), player => {
        player.loop = true;
        player.play();
        player.muted = true;
    });

    const handleGetStarted = async () => {
        await completeOnboarding();
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace('/(tabs)');
        }
    };

    const openLink = (path: any) => {
        router.push(path);
    };

    return (
        <View style={styles.container}>
            {/* Top Section: Video (flex: 2.5) */}
            <View style={styles.videoSection}>
                <VideoView
                    style={styles.video}
                    player={player}
                    contentFit="cover"
                    nativeControls={false}
                />
            </View>

            {/* Bottom Section: Content (flex: 1) */}
            <ThemedView style={[styles.contentSection, { paddingBottom: insets.bottom + Spacing.s20 }]}>
                <View style={styles.titleContainer}>
                    <ThemedText type="title1" style={styles.title}>
                        Discover Your{'\n'}R-EXPO
                    </ThemedText>
                </View>

                <View style={styles.actionContainer}>
                    <PressableScale
                        onPress={handleGetStarted}
                        style={[styles.button, { backgroundColor: color.natural_100 }]}
                    >
                        <ThemedText type="headline" style={{ color: color.natural_600 }}>
                            スタート
                        </ThemedText>
                    </PressableScale>

                    <View style={styles.linksContainer}>
                        <PressableScale onPress={() => openLink('/onboarding/terms')}>
                            <ThemedText type="caption1" style={[styles.linkText, { color: color.tint }]}>
                                利用規約
                            </ThemedText>
                        </PressableScale>
                        <ThemedText type="caption1" style={{ color: color.natural_200 }}>と</ThemedText>
                        <PressableScale onPress={() => openLink('/onboarding/privacy')}>
                            <ThemedText type="caption1" style={[styles.linkText, { color: color.tint }]}>
                                プライバシーポリシー
                            </ThemedText>
                        </PressableScale>
                        <ThemedText type="caption1" style={{ color: color.natural_200 }}>に同意して続行</ThemedText>
                    </View>
                </View>
            </ThemedView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    videoSection: {
        flex: 2.5,
        width: '100%',
        backgroundColor: 'black', // fallback
    },
    video: {
        width: '100%',
        height: '100%',
    },
    contentSection: {
        flex: 1,
        width: '100%',
        paddingHorizontal: Spacing.s24,
        paddingTop: Spacing.s32,
        borderTopLeftRadius: Spacing.s24,
        borderTopRightRadius: Spacing.s24,
        marginTop: -Spacing.s24, // Optional: overlap slightly for rounded corner effect
        overflow: 'hidden',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
    },
    actionContainer: {
        width: '100%',
        gap: Spacing.s16,
    },
    button: {
        width: '100%',
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkText: {
        textDecorationLine: 'underline',
    },
    separator: {
        marginHorizontal: Spacing.s8,
    },
});