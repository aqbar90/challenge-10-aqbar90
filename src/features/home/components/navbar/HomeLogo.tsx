import Image from 'next/image';

import logo from '@/assets/images/logo/logo-white.svg';

export function HomeLogo() {
  return (
    <div className='flex items-center gap-5'>
      <Image src={logo} alt='Foody Logo' width={36} height={36} priority />

      <span
        className='
          text-display-md
          font-extrabold
          leading-display-md
          text-white
        '
      >
        Foody
      </span>
    </div>
  );
}
