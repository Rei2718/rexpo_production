import { useRefetchOnFocus } from "@/hooks/use-refetch-on-focus";
import { useQuery } from "@tanstack/react-query";
import { getEventDetailsById } from "./function";
import { keys } from "./keys";

export function useGetEventDetailsById(id: string) {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: keys.getEventDetailsById(id),
        queryFn: () => getEventDetailsById(id),
        enabled: !!id,
    });
    useRefetchOnFocus(refetch);
    return { data, isPending, isError };
}
