import { Error } from '@/components/ui/error';
import { Loading } from '@/components/ui/loading';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { spacing } from '@/constants/theme';
import {
    EventCoverImage,
    EventDescription,
    EventGalleryCarousel,
    EventHeader,
    EventPerformerList,
    EventTagSection,
    EventTimeList,
    EventVenueSection,
} from '@/features/event-detail/components';
import { useEventDetail } from '@/features/event-detail/hooks/useEventDetail';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function EventDetailModal() {
    const { id, data, isPending, isError } = useEventDetail();

    if (!id) {
        return (
            <View style={styles.errorContainer}>
                <ThemedText>イベントIDが指定されていません。</ThemedText>
            </View>
        );
    }

    if (isPending) {
        return <Loading />;
    }

    if (isError || !data) {
        return <Error />;
    }

    const eventData = data as any;

    return (
        <ThemedView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                <View style={styles.scrollViewContent}>
                    <View>
                        <EventCoverImage coverImageUrl={eventData.cover_image_url} logoUrl={eventData.logo_url} />
                        <EventHeader
                            title={eventData.title}
                            overview_description={eventData.overview_description}
                        />
                    </View>
                    <EventDescription
                        description={eventData.description}
                        overview={eventData.overview_description}
                    />

                    <View style={styles.tagCarouselContainer}>
                        <EventTagSection tags={eventData.tags} />
                        <EventGalleryCarousel
                            imageUrls={[
                                eventData.cover_image_url,
                                eventData.gallery_image_url_1,
                                eventData.gallery_image_url_2,
                                eventData.gallery_image_url_3,
                            ]}
                        />
                    </View>

                    <EventPerformerList performers={eventData.performers} />
                    <EventTimeList times={eventData.times} />
                    <EventVenueSection venueName={eventData.venue_name} />
                </View>
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        paddingVertical: spacing.xl,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollViewContent: {
        gap: spacing.xxl,
        paddingBottom: spacing.xxl,
    },
    tagCarouselContainer: {
        gap: spacing.l,
    },
});