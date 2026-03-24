import axios from 'axios';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

// Read baseURL from environment
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 1. Request Interceptor: Attach token to outgoing requests
apiClient.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('userToken');

  if (token) {
    // Automatically inject Bearer header to all secure requests
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 2. Response Interceptor: Catch globally thrown errors
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    // If 401 Unauthorized occurs
    if (error.response?.status === 401) {
      // 1. Delete token from device storage
      await SecureStore.deleteItemAsync('userToken');
      // 2. Redirect user to Login
      router.replace('/login');
    }
    // Forward the error to the caller
    return Promise.reject(error);
  },
);
