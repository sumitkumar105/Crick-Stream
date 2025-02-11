import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../fetchData.ts";

export default function useFetch(key: string, url: string) {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: [key, url],
    queryFn: () => fetchData(url),
    staleTime: 30 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  return { data, error, isLoading, isError, refetch, isFetching };
}
