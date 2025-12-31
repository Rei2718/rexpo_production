import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { ThemedText } from "@/components/ui/themed-text";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { EventDetails, Verified } from "@/supabase/api/types";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Row } from "../ui/flex";

export function EventDescription({ data }: { data: Verified<EventDetails> }) {
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
                {data.description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae animi neque debitis, veritatis vel praesentium fugiat repellendus hic officiis. Libero, omnis? At voluptate excepturi quam ad iste. Praesentium, explicabo!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, velit animi in et sit quia nulla aspernatur molestiae alias odio voluptates iure dolore error veritatis maxime, provident, vero illum ducimus.
            </ThemedText>

            {/* Visible text */}
            <ThemedText
                type="subhead"
                color="natural_200"
                numberOfLines={isExpanded ? undefined : 4}
            >
                {data.description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae animi neque debitis, veritatis vel praesentium fugiat repellendus hic officiis. Libero, omnis? At voluptate excepturi quam ad iste. Praesentium, explicabo!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur id exercitationem ad maiores inventore vitae sint consectetur quasi consequuntur quae cum asperiores assumenda minus quam molestias at officia maxime.
            </ThemedText>

            {/* Toggle button */}
            {isTruncated && (
                <TouchableOpacity
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
                </TouchableOpacity>
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
