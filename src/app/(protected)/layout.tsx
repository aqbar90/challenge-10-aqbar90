import { ProtectedRoute } from '@/features/auth/components/ProtectedRoute';

import { AppShell } from '@/components/layout/AppShell';

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <ProtectedRoute>
      <AppShell>{children}</AppShell>
    </ProtectedRoute>
  );
}
