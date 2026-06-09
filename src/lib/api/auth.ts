import { api } from './axios';

import type {
  LoginPayload,
  RegisterPayload,
  AuthResponse,
  UserProfile,
} from '@/types/auth';

export async function register(payload: RegisterPayload) {
  const response = await api.post<AuthResponse>('/auth/register', payload);

  return response.data;
}

export async function login(payload: LoginPayload) {
  const response = await api.post<AuthResponse>('/auth/login', payload);

  return response.data;
}

export async function getProfile() {
  const response = await api.get<UserProfile>('/auth/profile');

  return response.data;
}
