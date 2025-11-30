import { Error } from '@/components/ui/error';
import { Loading } from '@/components/ui/loading';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { spacing } from '@/constants/theme';
import { useContentInsets } from '@/hooks/use-content-insets';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import EventCoverImage from '../components/cover-image';
import EventDescription from '../components/description';
import EventGalleryCarousel from '../components/gallery-carousel';
import EventHeader from '../components/header';
import EventPerformerList from '../components/performer-list';
import EventTagSection from '../components/tag-section';
import EventTimeList from '../components/time-list';
import EventVenueSection from '../components/venue-section';
import { useEventDetail } from '../hooks/use-event-detail';

export default function EventDetailScreen() {
    const { id, data, isPending, isError } = useEventDetail();
    const { paddingTop } = useContentInsets();

    if (!id) {
        return (
            <View style={[styles.errorContainer, { paddingTop }]}>
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

    return (
        <ThemedView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={{ paddingTop }}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                <View style={styles.scrollViewContent}>
                    <View>
                        <EventCoverImage coverImageUrl={data.cover_image_url} logoUrl={data.logo_url} />
                        <EventHeader
                            title={data.title}
                            overview_description={data.overview_description}
                        />
                    </View>
                    <EventDescription
                        description={data.description}
                        overview={data.overview_description}
                    />

                    <View style={styles.tagCarouselContainer}>
                        <EventTagSection tags={data.tags} />
                        <EventGalleryCarousel
                            imageUrls={[
                                data.cover_image_url,
                                data.gallery_image_url_1,
                                data.gallery_image_url_2,
                                data.gallery_image_url_3,
                            ]}
                        />
                    </View>

                    <EventPerformerList performers={data.performers} />
                    <EventTimeList times={data.times} />
                    <EventVenueSection venueName={data.venue_name} />
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
