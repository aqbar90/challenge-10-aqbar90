import { api } from '@/lib/api/axios';

import type { LoginRequest, LoginResponse } from '../types/auth.types';

import type { RegisterRequest, RegisterResponse } from '../types/auth.types';

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/api/auth/login', payload);

  return response.data;
}

export async function register(
  payload: RegisterRequest
): Promise<RegisterResponse> {
  const response = await api.post<RegisterResponse>(
    '/api/auth/register',
    payload
  );

  return response.data;
}
