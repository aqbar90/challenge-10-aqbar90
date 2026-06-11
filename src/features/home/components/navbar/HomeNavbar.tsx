'use client';

import { useAuthStore } from '@/stores/auth-store';

import { HomeLogo } from './HomeLogo';
import { NavbarGuest } from './NavbarGuest';
import { NavbarUser } from './NavbarUser';

export function HomeNavbar() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <header
      className='
        absolute
        left-0
        top-0
        z-50
        w-full
      '
    >
      <div
        className='
          mx-auto
          flex
          h-20
          items-center
          justify-between
          px-30
        '
      >
        <HomeLogo />

        {isAuthenticated ? <NavbarUser /> : <NavbarGuest />}
      </div>
    </header>
  );
}
