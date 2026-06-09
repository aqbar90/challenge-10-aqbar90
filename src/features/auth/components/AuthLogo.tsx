import Image from 'next/image';

import logo from '@/assets/icons/logo.svg';

export function AuthLogo() {
  return (
    <div className='flex items-center gap-3.75'>
      <Image src={logo} alt='Foody Logo' width={42} height={42} priority />

      <span className='text-display-md leading-display-md font-extrabold font-sans text-foreground'>
        Foody
      </span>
    </div>
  );
}
