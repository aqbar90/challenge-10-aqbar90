import Image from 'next/image';

import logo from '@/assets/icons/logo.svg';

export function AuthLogo() {
  return (
    <div className='flex items-center gap-md'>
      <Image src={logo} alt='Foody Logo' width={24} height={24} priority />

      <span className='text-md-custom font-bold-custom text-foreground'>
        Foody
      </span>
    </div>
  );
}
