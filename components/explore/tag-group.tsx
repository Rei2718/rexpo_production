import { Spacing } from "@/constants/theme";
import { TagEvents, Verified } from "@/supabase/api/types";
import React from "react";
import { StyleSheet } from "react-native";
import { EventList } from "../shared/event-list";
import { Container } from "../ui/container";
import { TagHeader } from "./tag-header";

export function TagGroup(data: Verified<TagEvents>) {
    return (
        <Container style={styles.container}>
            {/* Tag Header */}
            <TagHeader {...data} />

            {/* Events List */}
            <EventList data={data.events} />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: Spacing.s8,
        paddingHorizontal: Spacing.s20,
    },
});

