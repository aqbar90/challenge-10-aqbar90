import Image from 'next/image';

import logoWhite from '@/assets/images/logo/logo-white.svg';
import logoRed from '@/assets/icons/logo.svg';

type HomeLogoProps = {
  isScrolled: boolean;
};

export function HomeLogo({ isScrolled }: HomeLogoProps) {
  return (
    <div className='flex items-center gap-5'>
      <Image
        src={isScrolled ? logoRed : logoWhite}
        alt='Foody Logo'
        width={36}
        height={36}
        priority
      />

      <span
        className={`
          text-display-md
          font-extrabold
          leading-display-md
          transition-colors
          duration-300
          ${isScrolled ? ' text-black' : 'text-white '}
        `}
      >
        Foody
      </span>
    </div>
  );
}
