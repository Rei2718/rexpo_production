import { PressableScale } from "@/components/ui/pressable-scale";
import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { useBlinkingAnimation } from "@/hooks/use-blinking-animation";
import { useEventActiveStatus } from "@/hooks/use-event-active-status";
import { useThemeColor } from "@/hooks/use-theme-color";
import { TimelineEvent, Verified } from "@/supabase/api/types";
import { supabaseStorageUrl } from "@/supabase/supabase";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { memo } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { Container } from "../ui/container";
import { Icon } from "../ui/icon";
import { ThemedText } from "../ui/themed-text";

export const TimelineEventListItem = memo((data: Verified<TimelineEvent>) => {
    const color = useThemeColor();
    const isActive = useEventActiveStatus(data.starts, data.ends);

    const animatedStyle = useBlinkingAnimation(isActive);
    const tintColorWithOpacity = `${color.tint}26`; // 15% opacity

    return (
        <Link
            href={{
                pathname: "/(detail)/event-details",
                params: { event_public_id: data.event_public_id },
            }}
            asChild
        >
            <PressableScale>
                <Container style={[styles.container, styles.row]}>
                    {/* Highlight Background */}
                    <Animated.View style={[StyleSheet.absoluteFill, styles.gradientContainer, animatedStyle]}>
                        <LinearGradient
                            colors={['transparent', tintColorWithOpacity]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ flex: 1 }}
                        />
                    </Animated.View>

                    <Image
                        source={data.icon ? { uri: supabaseStorageUrl + data.icon } : FALLBACK_IMAGE_URL}
                        style={[
                            styles.image,
                            {
                                borderWidth: Spacing.s1,
                                borderColor: color.border,
                                backgroundColor: color.border,
                            }
                        ]}
                    />

                    <Container flexDirection="column" flex={1} gap="s4">
                        {data.venue_name && (
                            <ThemedText type="caption2" color="tint" numberOfLines={1}>
                                {data.venue_name}
                            </ThemedText>
                        )}
                        <ThemedText type="footnote" numberOfLines={1}>
                            {data.name ?? NO_DATA}
                        </ThemedText>
                        {!data.venue_name && (
                            <ThemedText type="caption2" color="natural_200" numberOfLines={1}>
                                {data.caption ?? NO_DATA}
                            </ThemedText>
                        )}
                    </Container>
                    <Icon icon="right" color={color.natural_300} />
                </Container>
            </PressableScale>
        </Link>
    );
});

const styles = StyleSheet.create({
    container: {
        gap: Spacing.s8,
        borderRadius: Spacing.s12,
        padding: Spacing.s8, // Added padding to make the highlight look like a card
        overflow: 'hidden', // Ensure gradient doesn't bleed out
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    gradientContainer: {
        borderRadius: Spacing.s12,
    },
    image: {
        width: Spacing.s56,
        height: Spacing.s56,
        borderRadius: Spacing.s12,
    },
});
