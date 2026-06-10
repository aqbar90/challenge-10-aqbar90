import Image from 'next/image';

import authHero from '@/assets/images/auth/auth-hero.jpg';

export function AuthHero() {
  return (
    <div
      className='
        relative
        hidden
        lg:block
        w-1/2
        min-h-screen
        overflow-hidden
      '
    >
      <Image
        src={authHero}
        alt='Delicious burger and fries'
        fill
        priority
        className='object-cover object-center'
      />
    </div>
  );
}
