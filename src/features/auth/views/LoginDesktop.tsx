import { AuthHeader } from '../components/AuthHeader';
import { AuthHero } from '../components/AuthHero';
import { AuthLogo } from '../components/AuthLogo';
import { LoginForm } from '../components/LoginForm';

export function LoginDesktop() {
  return (
    <main className='h-screen overflow-hidden'>
      <div className='grid grid-cols-2 h-full '>
        <AuthHero />

        <section className='flex items-center justify-center bg-background px-43.25 py-68 '>
          <div className='w-full space-y-5 '>
            <AuthLogo />

            <AuthHeader
              title='Welcome Back'
              description="Good to see you again! Let's eat"
            />

            <LoginForm />
          </div>
        </section>
      </div>
    </main>
  );
}
