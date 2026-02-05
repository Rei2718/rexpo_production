import { ContainerAbsolute } from '@/components/ui/container';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { Colors, Spacing } from '@/constants/theme';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, StatusBar, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

// Texts for the sequence
const SEQUENCE_TEXTS = [
    '立ち上がろうとする\n君に捧ぐ',
    '負けそうな時は\n思い出してよ',
    '過ごした日々を\nこれまでの足跡',
    'Fin. R-EXPO 2026',
];



// --- Timing Configuration (ms) ---
/** 最初のテキストが表示されるまでの待機時間 */
const INITIAL_DELAY = 3000;

/** テキストがフェードインする時間 */
const FADE_IN_DURATION = 3000;

/** テキストが完全に表示されている（静止）時間 */
const TEXT_DISPLAY_DURATION = 3000;

/** テキストがフェードアウトする時間 */
const FADE_OUT_DURATION = 2000;

/** テキストが消えてから次のテキストが表示されるまでの間隔 */
const TEXT_INTERVAL = 1000;

/** 最後のテキスト表示後、ボタンが表示されるまでの待機時間 */
const BUTTON_FADE_IN_DELAY = 1500;

/** ボタンがフェードインする時間 */
const BUTTON_FADE_IN_DURATION = 1500;

/** 「もう一度見る」押下時、画面全体がフェードアウトする時間 */
const REPLAY_FADE_OUT_DURATION = 3000;

/** フェードアウト完了後、最初に戻るまでの待機時間 */
const REPLAY_START_DELAY = 3000;



const AnimatedThemedView = Animated.createAnimatedComponent(ThemedView);

export const SurpriseJack = () => {
    const [step, setStep] = useState(0);
    const opacity = useRef(new Animated.Value(0)).current;
    const buttonOpacity = useRef(new Animated.Value(0)).current;
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        // Hide status bar when component is mounted
        StatusBar.setHidden(true);
        return () => {
            // Show status bar when component is unmounted
            StatusBar.setHidden(false);
        };
    }, []);

    const runAnimation = () => {
        // Reset text opacity for new step
        opacity.setValue(0);

        const isLastStep = step === SEQUENCE_TEXTS.length - 1;

        // Sequence: (Optional Initial Delay) -> Fade In -> Wait -> Fade Out (unless last step) -> (Optional Interval)
        const sequence: Animated.CompositeAnimation[] = [];

        if (step === 0) {
            sequence.push(Animated.delay(INITIAL_DELAY));
        }

        sequence.push(
            Animated.timing(opacity, {
                toValue: 1,
                duration: FADE_IN_DURATION,
                useNativeDriver: true,
                easing: Easing.out(Easing.quad),
            })
        );

        if (!isLastStep) {
            sequence.push(
                Animated.delay(TEXT_DISPLAY_DURATION),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: FADE_OUT_DURATION,
                    useNativeDriver: true,
                    easing: Easing.in(Easing.quad),
                }),
                // Wait before showing next text
                Animated.delay(TEXT_INTERVAL)
            );
        }

        Animated.sequence(sequence).start(({ finished }) => {
            if (finished) {
                if (!isLastStep) {
                    setStep((prev) => prev + 1);
                } else {
                    // Final step reached, show button after delay
                    setIsFinished(true);
                    Animated.sequence([
                        Animated.delay(BUTTON_FADE_IN_DELAY),
                        Animated.timing(buttonOpacity, {
                            toValue: 1,
                            duration: BUTTON_FADE_IN_DURATION,
                            useNativeDriver: true,
                            easing: Easing.out(Easing.quad),
                        }),
                    ]).start();
                }
            }
        });
    };

    useEffect(() => {
        runAnimation();
    }, [step]);

    const handleReplay = () => {
        // Fade out both text and button
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 0,
                duration: REPLAY_FADE_OUT_DURATION,
                useNativeDriver: true,
                easing: Easing.in(Easing.quad),
            }),
            Animated.timing(buttonOpacity, {
                toValue: 0,
                duration: REPLAY_FADE_OUT_DURATION,
                useNativeDriver: true,
                easing: Easing.in(Easing.quad),
            }),
        ]).start(({ finished }) => {
            if (finished) {
                // Wait for interval then restart
                setTimeout(() => {
                    setIsFinished(false);
                    setStep(0);
                }, REPLAY_START_DELAY);
            }
        });
    };

    const currentText = SEQUENCE_TEXTS[step];
    const isFinalScreen = step === SEQUENCE_TEXTS.length - 1 && isFinished;

    return (
        <ContainerAbsolute
            justifyContent="center"
            alignItems="center"
            zIndex={99999}
            style={{ width, height, backgroundColor: Colors.dark.natural_600 }}
        >
            <AnimatedThemedView
                style={[
                    styles.contentContainer,
                    { opacity, backgroundColor: 'transparent' }
                ]}
            >
                <ThemedText
                    type="title1"
                    style={[styles.text, { color: Colors.dark.natural_100 }]}
                >
                    {currentText}
                </ThemedText>
            </AnimatedThemedView>

            {isFinalScreen && (
                <AnimatedThemedView
                    style={[
                        styles.buttonContainer,
                        { opacity: buttonOpacity, backgroundColor: 'transparent' }
                    ]}
                >
                    {/* ThemedText inherits Text props, so standard onPress works */}
                    <ThemedText
                        type="body"
                        onPress={handleReplay}
                        style={[styles.buttonText, { color: Colors.dark.natural_100 }]}
                    >
                        もう一度見る
                    </ThemedText>
                </AnimatedThemedView>
            )}
        </ContainerAbsolute>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Spacing.s20,
    },
    text: {
        textAlign: 'center',
        letterSpacing: Spacing.s2, // Add some spacing for cinematic feel
    },
    buttonContainer: {
        position: 'absolute',
        bottom: Spacing.s48,
        padding: Spacing.s20,
    },
    buttonText: {
        opacity: 0.7,
        textDecorationLine: 'underline',
    },
});
