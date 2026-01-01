import { TagEvents, Verified } from "@/supabase/api/types";
import { EventList } from "../shared/event-list";
import { Container } from "../ui/container";
import { TagHeader } from "./tag-header";

export function TagGroup(data: Verified<TagEvents>) {
    return (
        <Container gap="s8" paddingHorizontal="s20">
            {/* Tag Header */}
            <TagHeader {...data} />

            {/* Events List */}
            <EventList {...data} />
        </Container>
    );
}