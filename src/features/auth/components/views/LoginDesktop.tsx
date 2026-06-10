import { AuthHero } from '@/features/auth/components/AuthHero';
import { AuthHeader } from '@/features/auth/components/AuthHeader';
import { AuthLogo } from '@/features/auth/components/AuthLogo';

import { LoginForm } from '@/features/auth/components/LoginForm';

export function LoginDesktop() {
  return (
    <main className='relative flex min-h-screen'>
      <AuthHero />

      <section
        className='
          flex
          flex-1
          items-center
          justify-center
          bg-background
        '
      >
        <div
          className='
            flex
            w-full
            max-w-120
            flex-col
            gap-10
          '
        >
          <AuthLogo />

          <AuthHeader
            title='Welcome Back'
            description="Good to see you again! Let's eat"
          />

          <LoginForm />
        </div>
      </section>
    </main>
  );
}
