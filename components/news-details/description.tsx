import { Column } from "@/components/ui/flex";
import { ThemedText } from "@/components/ui/themed-text";
import { NO_DATA } from "@/constants/no-data";
import { News, Verified } from "@/supabase/api/types";

export function NewsDescription(data: Verified<News>) {
    return (
        <Column gap="s16">
            <ThemedText type="body">
                {data.description ?? NO_DATA}
            </ThemedText>
        </Column>
    );
}
