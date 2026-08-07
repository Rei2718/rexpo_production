import { Dimensions, Image, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { Spacing } from '@/constants/theme';
import { useTermination } from '@/hooks/use-termination';

const MESSAGES = [
    "未来を創るのは\nいつも外れ値だ",
    "一人の熱狂が人を動かし\nやがて、うねりになる",
    "挑戦者が集い\n熱がめぐる場所を",
    "R-EXPOは、\n次のステージへ向かいます",
];

const { width } = Dimensions.get('window');

export default function TerminationMain() {
    const { textOpacity, contentOpacity, showContent, messageIndex } = useTermination();

    const textStyle = useAnimatedStyle(() => ({ opacity: textOpacity.value }));
    const contentStyle = useAnimatedStyle(() => ({ opacity: contentOpacity.value }));

    return (
        <ThemedView style={styles.container}>
            {!showContent ? (
                <Animated.View style={[styles.messageContainer, textStyle]}>
                    <ThemedText type="title2" style={styles.messageText}>
                        {MESSAGES[messageIndex] || ""}
                    </ThemedText>
                </Animated.View>
            ) : (
                <Animated.View style={[styles.content, contentStyle]}>
                    <Image
                        source={require('@/assets/fin/text.png')}
                        style={styles.signature}
                        resizeMode="contain"
                    />
                    <ThemedText type="caption1" style={styles.finalMessage}>
                        アプリをご利用いただきありがとうございました
                    </ThemedText>
                </Animated.View>
            )}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    messageContainer: {
        paddingHorizontal: Spacing.s32,
        alignItems: 'center',
    },
    messageText: {
        textAlign: 'center',
        lineHeight: 32,
        color: '#FFF',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingBottom: Spacing.s48,
        paddingHorizontal: Spacing.s20,
    },
    finalMessage: {
        textAlign: 'center',
        color: '#888',
        marginBottom: Spacing.s20,
    },
    signature: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    signatureText: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: Spacing.s48,
    },
});
