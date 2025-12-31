import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { TimelineSlot, Verified } from "@/supabase/api/types";
import { StyleSheet, View } from "react-native";
import { EventList } from "../shared/event-list";
import { Container, ContainerAbsolute } from "../ui/container";
import { SlotHeader } from "./slot-header";

interface SlotGroupProps {
    item: Verified<TimelineSlot>; // Verified型を使用
    isFirst?: boolean;
    isLast?: boolean;
}

export function SlotGroup(props: SlotGroupProps) {
    const color = useThemeColor();
    const { item, isFirst, isLast } = props; // 内部で分割代入

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
                <SlotHeader item={item} />
                {/* 修正: ?? [] を削除し、Verifiedされた配列を直接渡す */}
                <EventList events={item.events} />
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