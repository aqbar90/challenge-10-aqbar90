import { AUTH_STORAGE_KEYS } from './auth-constants';

import type { User } from '@/features/auth/types/auth.types';

export const authStorage = {
  getToken(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }

    return localStorage.getItem(AUTH_STORAGE_KEYS.TOKEN);
  },

  setToken(token: string) {
    localStorage.setItem(AUTH_STORAGE_KEYS.TOKEN, token);
  },

  removeToken() {
    localStorage.removeItem(AUTH_STORAGE_KEYS.TOKEN);
  },

  getUser(): User | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const user = localStorage.getItem(AUTH_STORAGE_KEYS.USER);

    return user ? JSON.parse(user) : null;
  },

  setUser(user: User) {
    localStorage.setItem(AUTH_STORAGE_KEYS.USER, JSON.stringify(user));
  },

  removeUser() {
    localStorage.removeItem(AUTH_STORAGE_KEYS.USER);
  },

  clear() {
    this.removeToken();
    this.removeUser();
  },
};
