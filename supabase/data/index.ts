import { useRefetchOnFocus } from "@/hooks/useRefetchOnFocus";
import { useQuery } from "@tanstack/react-query";
import { getEventDetailsById, getEventsByVenueId, getEventsListByTag, getVenues } from "./function";
import { keys } from "./keys";

export function useGetEventsListByTag(id: string) {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.getEventsListByTag(id),
        queryFn: () => getEventsListByTag(id),
        enabled: !!id,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}

export function useGetEventDetailsById(id: string) {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.getEventDetailsById(id),
        queryFn: () => getEventDetailsById(id),
        enabled: !!id,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}

export function useGetEventsByVenue(id: string) {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.getEventsByVenueId(id),
        queryFn: () => getEventsByVenueId(id),
        enabled: !!id,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}

export function useGetVenues() {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.getVenues(),
        queryFn: () => getVenues(),
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}