import { AuthHero } from '@/features/auth/components/AuthHero';
import { AuthHeader } from '@/features/auth/components/AuthHeader';
import { AuthLogo } from '@/features/auth/components/AuthLogo';

import { RegisterForm } from '@/features/auth/components/RegisterForm';

export function RegisterDesktop() {
  return (
    <main className='flex min-h-screen'>
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

          <RegisterForm />
        </div>
      </section>
    </main>
  );
}
