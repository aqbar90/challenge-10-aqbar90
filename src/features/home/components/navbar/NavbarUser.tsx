import Image from 'next/image';

import cartIcon from '@/assets/images/navbar/cart-white.svg';
import defaultAvatar from '@/assets/images/navbar/profile.png';

import { useAuthStore } from '@/stores/auth-store';

export function NavbarUser() {
  const user = useAuthStore((state) => state.user);
  console.log('USER STORE', user);

  return (
    <div className='flex items-center gap-6'>
      <Image src={cartIcon} alt='Cart' width={24} height={24} />

      <div className='flex items-center gap-4'>
        <Image
          src={user?.avatar || defaultAvatar}
          alt={user?.name ?? 'User'}
          width={40}
          height={40}
          className='rounded-full object-cover'
        />

        <span
          className='
            text-sm
            font-semibold
            text-white
          '
        >
          {user?.name}
        </span>
      </div>
    </div>
  );
}
