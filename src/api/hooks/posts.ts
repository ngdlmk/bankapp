import { useQuery } from '@tanstack/react-query';

import { apiClient } from '../apiClient';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

// 1. Data Fetcher: Retreives data from the server and ensures strong typing
const fetchPosts = async (): Promise<Post[]> => {
  // apiClient uses axios and appends "/posts" to the .env base URL.
  const { data } = await apiClient.get<Post[]>('/posts');
  return data;
};

// 2. Custom Hook: Consumed directly within UI components
export const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ['posts'], // Unique key for caching
    queryFn: fetchPosts,
  });
};
