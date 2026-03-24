import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry once on failure
      refetchOnWindowFocus: false, // Prevent refetching when window regains focus
      staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes (300,000 ms)
    },
  },
});
