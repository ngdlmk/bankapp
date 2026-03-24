import { useQuery } from '@tanstack/react-query';

import { apiClient } from '../apiClient';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

// 1. Data Fetcher: Accepts dynamic userId
const fetchUser = async (userId: number): Promise<User> => {
  const { data } = await apiClient.get<User>(`/users/${userId}`);
  return data;
};

// 2. Custom Hook: Advanced example capturing query parameters and conditional execution
export const useUser = (userId: number | null) => {
  return useQuery<User, Error>({
    queryKey: ['user', userId], // Automatically refetches if parameter changes
    queryFn: () => {
      if (!userId) throw new Error('User ID not found');
      return fetchUser(userId);
    },
    enabled: !!userId, // Extremely important! Prevents request firing if userId is missing.
  });
};
