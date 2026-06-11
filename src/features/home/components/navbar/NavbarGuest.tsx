import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function NavbarGuest() {
  return (
    <div className='flex items-center gap-3'>
      <Button asChild variant='outline' className='rounded-full px-8'>
        <Link href='/login'>Sign In</Link>
      </Button>

      <Button asChild className='rounded-full px-8'>
        <Link href='/register'>Sign Up</Link>
      </Button>
    </div>
  );
}
