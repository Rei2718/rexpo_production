import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { TimelineSlot, Verified } from "@/supabase/api/types";
import { StyleSheet, View } from "react-native";
import { EventList } from "../shared/event-list";
import { Container, ContainerAbsolute } from "../ui/container";
import { SlotHeader } from "./slot-header";


export function SlotGroup(props: {
    item: Verified<TimelineSlot>;
    isFirst?: boolean;
    isLast?: boolean;
}) {
    const color = useThemeColor();
    const { item, isFirst, isLast } = props;

    return (
        <Container flexDirection="row" style={styles.container}>

            {/* Step UI Column */}
            <Container alignItems="center" style={styles.stepColumn}>
                {!isLast && (
                    <ContainerAbsolute
                        top={isFirst ? Spacing.s12 : 0}
                        bottom={0}
                        style={[styles.verticalLine, { backgroundColor: color.natural_400 }]}
                    />
                )}
                <View
                    style={[
                        styles.dot,
                        { backgroundColor: color.natural_100 },
                    ]}
                />
            </Container>

            {/* Content Column */}
            <Container flex={1} style={styles.contentColumn}>
                <SlotHeader {...item} />
                <EventList {...item} />
            </Container>

        </Container>
    );
}

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