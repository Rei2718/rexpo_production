import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { TimelineSlot } from "@/supabase/api/types";
import { StyleSheet, View } from "react-native";
import { EventList } from "../shared/event-list";
import { Container, ContainerAbsolute } from "../ui/container";
import { SlotHeader } from "./slot-header";

interface SlotGroupProps {
    item: TimelineSlot;
    isFirst?: boolean;
    isLast?: boolean;
}

export function SlotGroup({ item, isFirst, isLast }: SlotGroupProps) {
    const color = useThemeColor();

    return (
        <Container flexDirection="row" style={styles.container}>
            {/* Step UI Column */}
            <Container alignItems="center" style={styles.stepColumn}>
                {/* Vertical Line - first item starts at dot center, middle items from top, last item no line */}
                {!isLast && (
                    <ContainerAbsolute
                        top={isFirst ? Spacing.s12 : 0}
                        bottom={0}
                        style={[styles.verticalLine, { backgroundColor: color.natural_400 }]}
                    />
                )}
                {/* Dot */}
                <View
                    style={[
                        styles.dot,
                        {
                            backgroundColor: color.natural_100,
                        },
                    ]}
                />
            </Container>

            {/* Content Column */}
            <Container flex={1} style={styles.contentColumn}>
                {/* Slot Header */}
                <SlotHeader item={item} />

                {/* Events List */}
                <EventList events={item.events} />
            </Container>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Spacing.s20,
        overflow: 'hidden',
    },
    stepColumn: {
        width: Spacing.s20,
        marginRight: Spacing.s12,
    },
    contentColumn: {
        gap: Spacing.s4,
    },
    verticalLine: {
        width: 1,
    },
    dot: {
        marginTop: Spacing.s8,
        width: Spacing.s8,
        height: Spacing.s8,
        borderRadius: Spacing.pill,
    },
});

