import { useRefetchOnFocus } from "@/hooks/use-refetch-on-focus";
import { useQuery } from "@tanstack/react-query";
import {
    get_banners,
    get_categories,
    get_display_venue,
    get_event_details,
    get_events_by_tag,
    get_events_by_venue,
    get_features,
    get_news,
    get_several_events_by_tag,
    get_tag_and_events_by_category,
    get_venue_details
} from "./function";
import { keys } from "./keys";

export function useBanners() {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.get_banners(),
        queryFn: get_banners,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}

export function useFeatures() {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.get_features(),
        queryFn: get_features,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}

export function useNews() {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.get_news(),
        queryFn: get_news,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}

export function useDisplayVenue() {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.get_display_venue(),
        queryFn: get_display_venue,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}

export function useEventDetails(event_public_id: string) {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.get_event_details(event_public_id),
        queryFn: () => get_event_details(event_public_id),
        enabled: !!event_public_id,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}

export function useEventsByTag(tag_public_id?: string) {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.get_events_by_tag(tag_public_id),
        queryFn: () => get_events_by_tag(tag_public_id),
        enabled: !!tag_public_id,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}

export function useEventsByVenue(venue_public_id?: string) {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.get_events_by_venue(venue_public_id),
        queryFn: () => get_events_by_venue(venue_public_id),
        enabled: !!venue_public_id,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}

export function useSeveralEventsByTag() {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.get_several_events_by_tag(),
        queryFn: get_several_events_by_tag,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}

export function useTagAndEventsByCategory(category_public_id?: string) {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.get_tag_and_events_by_category(category_public_id),
        queryFn: () => get_tag_and_events_by_category(category_public_id),
        enabled: !!category_public_id,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}

export function useVenueDetails(venue_public_id: string) {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.get_venue_details(venue_public_id),
        queryFn: () => get_venue_details(venue_public_id),
        enabled: !!venue_public_id,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}

export function useCategories() {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.get_categories(),
        queryFn: get_categories,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}