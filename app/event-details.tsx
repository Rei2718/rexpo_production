import { EventDescription } from "@/components/event-details/description";
import { EventGallery } from "@/components/event-details/gallery";
import { EventHeader } from "@/components/event-details/header";
import { EventInfoCard } from "@/components/event-details/info-card";
import { EventOrganization } from "@/components/event-details/organization";
import { EventPerformers } from "@/components/event-details/performers";
import { EventTags } from "@/components/event-details/tags";
import BookmarkButton from "@/components/ui/bookmark-button";
import { Column } from "@/components/ui/flex";
import { StatusMessage } from "@/components/ui/status-message";
import { Spacing } from "@/constants/theme";
import { useEventDetails } from "@/supabase/api";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EventDetails() {
    const { event_public_id } = useLocalSearchParams<{ event_public_id: string }>();
    const { data, isPending, isError } = useEventDetails(event_public_id);

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data) return <StatusMessage status="empty" />;

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "",
                    headerRight: () => (
                        <View style={{ marginLeft: Spacing.s4 }}>
                            <BookmarkButton {...data} />
                        </View>
                    ),
                }}
            />
            <ScrollView>
                <SafeAreaView edges={["bottom"]} style={styles.container}>
                    <Column gap="s48">

                        {/* Header */}
                        <EventHeader {...data} />

                        {/* Info */}
                        <Column paddingHorizontal="s20">
                            <EventInfoCard {...data} />
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
                </SafeAreaView >
            </ScrollView >
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: Spacing.s20,
    },
});