'use client';

import { useEffect } from 'react';

import { useAuthStore } from '@/stores/auth-store';

export function AuthHydrator() {
  const hydrateAuth = useAuthStore((state) => state.hydrateAuth);

  useEffect(() => {
    hydrateAuth();
  }, [hydrateAuth]);

  return null;
}
