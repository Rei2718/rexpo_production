import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { TimelineSlot, Verified } from "@/supabase/api/types";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Container } from "../ui/container";
import { SlotHeader } from "./slot-header";
import { TimelineEventList } from "./timeline-event-list";


export const SlotGroup = memo((props: {
    item: Verified<TimelineSlot>;
    isLast?: boolean;
}) => {
    const color = useThemeColor();
    const { item, isLast } = props;

    return (
        <Container flexDirection="row" style={styles.container}>

            {/* Step UI Column */}
            <Container alignItems="center" paddingTop="s8" paddingRight="s8">
                {/* Dot at the top */}
                <View
                    style={[
                        styles.dot,
                        { backgroundColor: color.natural_100 },
                    ]}
                />

                {/* Line fills the remaining space (Content + Spacing) */}
                {!isLast && (
                    <View
                        style={[
                            styles.verticalLine,
                            { backgroundColor: color.natural_400 }
                        ]}
                    />
                )}
            </Container>

            {/* Content Column */}
            <Container flex={1} style={styles.contentColumn}>
                <SlotHeader {...item} />
                <TimelineEventList {...item} />
            </Container>

        </Container>
    );
});

const styles = StyleSheet.create({
    container: {
        paddingLeft: Spacing.s16,
        paddingRight: Spacing.s20,
        overflow: 'hidden',
    },
    stepColumn: {
        width: Spacing.s8,
        marginRight: Spacing.s12,
    },
    contentColumn: {
        gap: Spacing.s4,
    },
    dot: {
        width: Spacing.s4,
        height: Spacing.s4,
        borderRadius: Spacing.pill,
    },
    verticalLine: {
        width: 1,
        flex: 1,
        marginBottom: -(Spacing.s8 + Spacing.s20),
    },
});