import Image from 'next/image';

import authHero from '@/assets/images/auth/auth-hero.jpg';

export function AuthHero() {
  return (
    <div className='relative h-full w-full overflow-hidden'>
      <Image
        src={authHero}
        alt='Delicious burger and fries'
        fill
        priority
        className='object-cover'
      />
    </div>
  );
}
