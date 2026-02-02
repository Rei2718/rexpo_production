import { EventDescription } from "@/components/event-details/description";
import { EventGallery } from "@/components/event-details/gallery";
import { EventHeader } from "@/components/event-details/header";
import { EventInfoCard } from "@/components/event-details/info-card";
import { EventOrganization } from "@/components/event-details/organization";
import { EventPerformers } from "@/components/event-details/performers";
import { EventShareButton } from "@/components/event-details/share-button";
import { EventTags } from "@/components/event-details/tags";
import BookmarkButton from "@/components/ui/bookmark-button";
import { Column } from "@/components/ui/flex";
import { StatusMessage } from "@/components/ui/status-message";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useScreenView } from "@/hooks/use-screen-view";
import { useEventDetails } from "@/supabase/api";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";

export default function EventDetailsScreen() {
    const { event_public_id } = useLocalSearchParams<{ event_public_id: string }>();
    const { data, isPending, isError } = useEventDetails(event_public_id);
    const { modal } = useBottomPadding();

    useScreenView({
        screen: 'event-details',
        label: data?.name,
        isReady: !!data,
    });

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data) return <StatusMessage status="empty" />;

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "",
                    headerRight: () => (
                        <BookmarkButton {...data} />
                    ),
                }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={{ paddingBottom: modal }}
            >
                <Column gap="s32">

                    {/* Header */}
                    <EventHeader {...data} />

                    {/* Info */}
                    <Column paddingHorizontal="s20" gap="s12">
                        <EventInfoCard {...data} />
                        <EventShareButton {...data} />
                    </Column>

                    {/* Overview */}
                    <Column paddingHorizontal="s20">
                        <EventDescription {...data} />
                    </Column>

                    {/* Tags and Gallery */}
                    <Column gap="s12">
                        <EventTags {...data} />
                        <EventGallery {...data} />
                    </Column>

                    {/* Organization */}
                    {data.organization && (
                        <Column paddingHorizontal="s20">
                            <EventOrganization {...data} />
                        </Column>
                    )}

                    {/* Performers */}
                    {data.performers && (
                        <Column paddingHorizontal="s20">
                            <EventPerformers {...data} />
                        </Column>
                    )}

                </Column >
            </ScrollView >
        </>
    );
}