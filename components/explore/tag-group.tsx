import { Spacing } from "@/constants/theme";
import { TagEvents } from "@/supabase/api/types";
import React from "react";
import { StyleSheet } from "react-native";
import { EventList } from "../shared/event-list";
import { Container } from "../ui/container";
import { TagHeader } from "./tag-header";

export function TagGroup({ item }: { item: TagEvents }) {
    return (
        <Container style={styles.container}>
            {/* Tag Header */}
            <TagHeader item={item} />

            {/* Events List */}
            <EventList events={item.events} />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: Spacing.s8,
        paddingHorizontal: Spacing.s20,
    },
});

