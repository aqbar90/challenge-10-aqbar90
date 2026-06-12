import { useAuthStore } from '@/stores/auth-store';
import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/*
 * Request interceptor
 * Auth token akan ditambahkan pada tahap Login.
 */
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/*
 * Response interceptor
 * Global error handling akan ditambahkan
 * setelah auth flow selesai dibuat.
 */
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
