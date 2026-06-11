import { Menu } from 'lucide-react';

import { AuthLogo } from '@/features/auth/components/AuthLogo';

export function NavbarMobile() {
  return (
    <header
      className='
        border-b
        border-border
        bg-background
      '
    >
      <div
        className='
          flex
          h-16
          items-center
          justify-between
          px-6
        '
      >
        <AuthLogo size='mobile' />

        <button type='button'>
          <Menu />
        </button>
      </div>
    </header>
  );
}
