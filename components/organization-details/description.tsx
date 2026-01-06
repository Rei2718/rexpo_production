import { Row } from "@/components/ui/flex";
import { Icon } from "@/components/ui/icon";
import { PressableScale } from "@/components/ui/pressable-scale";
import { Section } from "@/components/ui/section";
import { ThemedText } from "@/components/ui/themed-text";
import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { OrganizationDetails, Verified } from "@/supabase/api/types";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export function OrganizationDescription(data: Verified<OrganizationDetails>) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const color = useThemeColor();

    return (
        <Section title="概要">
            <ThemedText
                type="subhead"
                color="natural_200"
                style={styles.hiddenText}
                onTextLayout={(e) => {
                    setIsTruncated(e.nativeEvent.lines.length > 4);
                }}
            >
                {data.description ?? NO_DATA}
            </ThemedText>

            {/* Visible text */}
            <ThemedText
                type="subhead"
                color="natural_200"
                numberOfLines={isExpanded ? undefined : 4}
            >
                {data.description ?? NO_DATA}
            </ThemedText>

            {/* Toggle button */}
            {isTruncated && (
                <PressableScale
                    onPress={() => setIsExpanded(!isExpanded)}
                >
                    <Row alignItems="center" gap="s4">
                        <View style={{ transform: [{ rotate: isExpanded ? "180deg" : "0deg" }] }}>
                            <Icon
                                icon="down"
                                size={Spacing.icon}
                                color={color.tint}
                            />
                        </View>
                        <ThemedText type="footnote" color="tint">
                            {isExpanded ? "閉じる" : "もっと見る"}
                        </ThemedText>
                    </Row>
                </PressableScale>
            )}
        </Section>
    );
}

const styles = StyleSheet.create({
    hiddenText: {
        position: 'absolute',
        opacity: 0,
        zIndex: -1,
        width: '100%',
    },
});