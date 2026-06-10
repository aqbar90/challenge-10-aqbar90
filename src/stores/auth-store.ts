import { create } from 'zustand';

import { authStorage } from '@/lib/auth/auth-storage';

import type { User } from '@/features/auth/types/auth.types';

type AuthState = {
  token: string | null;
  user: User | null;

  isAuthenticated: boolean;

  setAuth: (token: string, user: User) => void;

  logout: () => void;

  hydrateAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,

  user: null,

  isAuthenticated: false,

  setAuth: (token, user) => {
    authStorage.setToken(token);
    authStorage.setUser(user);

    set({
      token,
      user,
      isAuthenticated: true,
    });
  },

  logout: () => {
    authStorage.clear();

    set({
      token: null,
      user: null,
      isAuthenticated: false,
    });
  },

  hydrateAuth: () => {
    const token = authStorage.getToken();

    const user = authStorage.getUser();

    if (!token || !user) {
      return;
    }

    set({
      token,
      user,
      isAuthenticated: true,
    });
  },
}));
