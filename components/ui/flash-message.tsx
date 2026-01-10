import { ContainerAbsolute } from "@/components/ui/container";
import { ThemedText } from "@/components/ui/themed-text";
import { Spacing } from "@/constants/theme";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withDelay, withSequence, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type FlashMessageProps = {
    message: string | null;
    duration?: number;
    onDismiss?: () => void;
};

export function FlashMessage({ message, duration = 3000, onDismiss }: FlashMessageProps) {
    const opacity = useSharedValue(0);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        if (message) {
            opacity.value = withSequence(
                withTiming(1, { duration: 300 }),
                withDelay(duration, withTiming(0, { duration: 300 }, (finished) => {
                    if (finished && onDismiss) {
                        runOnJS(onDismiss)();
                    }
                }))
            );
        }
    }, [message, duration, onDismiss]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    if (!message) return null;

    return (
        <ContainerAbsolute
            top={insets.top + Spacing.s16}
            left={Spacing.s16}
            right={Spacing.s16}
            zIndex={100}
            alignItems="center"
            pointerEvents="none"
        >
            <Animated.View style={animatedStyle}>
                <ThemedText type="footnote" style={styles.text}>
                    {message}
                </ThemedText>
            </Animated.View>
        </ContainerAbsolute>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
});
