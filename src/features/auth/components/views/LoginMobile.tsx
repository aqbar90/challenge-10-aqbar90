import { AuthHeader } from '@/features/auth/components/AuthHeader';
import { AuthLogo } from '@/features/auth/components/AuthLogo';

import { LoginForm } from '@/features/auth/components/LoginForm';

export function LoginMobile() {
  return (
    <main className='min-h-screen bg-background'>
      <section
        className='
          flex
          min-h-screen
          flex-col
          justify-center
          px-6
          py-8
        '
      >
        <div
          className='
            flex
            flex-col
            gap-8
          '
        >
          <AuthLogo size='mobile' />

          <AuthHeader
            variant='mobile'
            title='Welcome Back'
            description="Good to see you again! Let's eat"
          />

          <LoginForm />
        </div>
      </section>
    </main>
  );
}
