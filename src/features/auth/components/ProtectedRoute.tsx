'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { useAuthStore } from '@/stores/auth-store';

type Props = {
  children: React.ReactNode;
};

export function ProtectedRoute({ children }: Props) {
  const router = useRouter();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
