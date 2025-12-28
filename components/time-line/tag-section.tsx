import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { TimelineSlot } from "@/supabase/api/types";
import { FlatList } from "react-native";
import { Container } from "../ui/container";
import { EventRow } from "./event-row";
import { SectionHeader } from "./section-header";

export function TagSection({ item }: { item: TimelineSlot }) {
    const color = useThemeColor();

    return (
        <Container flexDirection="column" gap="s8" paddingHorizontal="s20">
            {/* Section Header */}
            <SectionHeader item={item} />

            {/* Events List */}
            <Container
                flexDirection="column"
                backgroundColor={color.natural_500}
                padding="s12"
                style={{ borderRadius: Spacing.s24 }}
            >
                <FlatList
                    data={item.events}
                    keyExtractor={(event) => event.event_public_id}
                    renderItem={({ item: event }) => <EventRow event={event} />}
                    ItemSeparatorComponent={() => (
                        <Container
                            style={{
                                height: 1,
                                backgroundColor: color.natural_400,
                                marginVertical: Spacing.s8,
                                marginLeft: Spacing.s64,
                            }}
                        />
                    )}
                    scrollEnabled={false}
                />
            </Container>
        </Container>
    );
}

