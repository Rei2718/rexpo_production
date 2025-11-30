import { useRefetchOnFocus } from "@/hooks/use-refetch-on-focus";
import { useQuery } from "@tanstack/react-query";
import { getEventsListByTag } from "./function";
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
