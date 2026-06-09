import { AuthHeader } from '../components/AuthHeader';
import { AuthHero } from '../components/AuthHero';
import { AuthLogo } from '../components/AuthLogo';

export function LoginDesktop() {
  return (
    <main className='h-screen overflow-hidden'>
      <div className='grid h-full grid-cols-2'>
        {/* Left Section */}

        <AuthHero />

        {/* Right Section */}

        <section className='flex items-center justify-center bg-background'>
          <div className='w-full max-w-sm space-y-8'>
            <AuthLogo />

            <AuthHeader
              title='Welcome Back'
              description="Good to see you again! Let's eat"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
