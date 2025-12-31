import BookmarkButton from "@/components/bookmark/bookmark-button";
import { EventDescription } from "@/components/event-details/description";
import { EventGallery } from "@/components/event-details/gallery";
import { EventHeader } from "@/components/event-details/header";
import { EventInfoCard } from "@/components/event-details/info-card";
import { EventOrganization } from "@/components/event-details/organization";
import { EventPerformers } from "@/components/event-details/performers";
import { EventTags } from "@/components/event-details/tags";
import { Column } from "@/components/ui/flex";
import { StatusMessage } from "@/components/ui/status-message";
import { Spacing } from "@/constants/theme";
import { useEventDetails } from "@/supabase/api";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EventDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { data, isPending, isError } = useEventDetails(id);

    if (isPending) {
        return <StatusMessage status="loading" />;
    }

    if (isError) {
        return <StatusMessage status="error" />;
    }

    if (!data) {
        return <StatusMessage status="empty" />;
    }

    return (
        <>
            {/* アイコンを中央に配置できなくてmarginで相殺してる */}
            <Stack.Screen
                options={{
                    headerTitle: "",
                    headerRight: () => (
                        <View style={{ marginLeft: 5.5 }}>
                            <BookmarkButton eventId={id} />
                        </View>
                    ),
                }}
            />
            <ScrollView>
                <SafeAreaView edges={["bottom"]} style={styles.container}>
                    <Column gap="s48">

                        {/* Header */}
                        <EventHeader data={data} />

                        {/* Info */}
                        <Column paddingHorizontal="s20">
                            <EventInfoCard data={data} />
                        </Column>

                        {/* Overview */}
                        <EventDescription data={data} />

                        {/* Tags and Gallery */}
                        <Column gap="s12">
                            <EventTags data={data} />
                            <EventGallery data={data} />
                        </Column>

                        {/* Organization */}
                        {data.organization && (
                            <EventOrganization data={data.organization as any} />
                        )}

                        {/* Performers */}
                        {data.performers && (
                            <EventPerformers data={data.performers as any} />
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
