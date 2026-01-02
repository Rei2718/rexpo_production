import { TagEvents, Verified } from "@/supabase/api/types";
import { memo } from "react";
import { EventList } from "../shared/event-list";
import { Container } from "../ui/container";
import { TagHeader } from "./tag-header";

export const TagGroup = memo((data: Verified<TagEvents>) => {
    return (
        <Container gap="s8" paddingHorizontal="s20">
            {/* Tag Header */}
            <TagHeader {...data} />

            {/* Events List */}
            <EventList {...data} />
        </Container>
    );
});