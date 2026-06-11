import { AuthLogo } from '@/features/auth/components/AuthLogo';

export function NavbarDesktop() {
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
          app-container
          flex
          h-20
          items-center
          justify-between
        '
      >
        <AuthLogo />

        <nav className='flex items-center gap-8'>
          <span>Home</span>

          <span>Restaurants</span>

          <span>Favorites</span>

          <span>Profile</span>
        </nav>
      </div>
    </header>
  );
}
