'use client';

import { useRouter } from 'next/navigation';
import { LogOut, User, Heart, Receipt } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useAuthStore } from '@/stores/auth-store';

import Image from 'next/image';

import defaultAvatar from '@/assets/images/navbar/profile.png';

type UserDropdownProps = {
  children: React.ReactNode;
};

export function UserDropdown({ children }: UserDropdownProps) {
  const router = useRouter();

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  const user = useAuthStore((state) => state.user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-60'>
        <DropdownMenuSeparator />

        <div className='flex items-center gap-3 p-3'>
          <Image
            src={user?.avatar || defaultAvatar}
            alt={user?.name ?? 'User'}
            width={40}
            height={40}
            className='rounded-full object-cover'
          />

          <div className='min-w-0'>
            <p className='truncate text-sm font-semibold'>{user?.name}</p>

            <p className='truncate text-xs text-muted-foreground'>
              {user?.email}
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className='h-4 w-4 cursor-pointer' />
          My Profile
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Receipt className='h-4 w-4 cursor-pointer' />
          My Orders
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Heart className='h-4 w-4 cursor-pointer' />
          Favorites
        </DropdownMenuItem>

        <DropdownMenuItem variant='destructive' onClick={handleLogout}>
          <LogOut className='h-4 w-4 cursor-pointer' />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
