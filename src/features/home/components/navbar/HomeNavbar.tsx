'use client';

import { useEffect, useState } from 'react';

import { useAuthStore } from '@/stores/auth-store';

import { HomeLogo } from './HomeLogo';
import { NavbarGuest } from './NavbarGuest';
import { NavbarUser } from './NavbarUser';

export function HomeNavbar() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        transition-all
        duration-300
        ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}
      `}
    >
      <div
        className='
          mx-auto
          flex
          h-16
          md:h-20
          items-center
          justify-between
          px-4
          md:px-30
        '
      >
        <HomeLogo isScrolled={isScrolled} />

        {isAuthenticated ? (
          <NavbarUser isScrolled={isScrolled} />
        ) : (
          <NavbarGuest />
        )}
      </div>
    </header>
  );
}
