import Link from 'next/link';
import { cn } from '@/lib/utils';

type AuthTabsProps = {
  activeTab: 'login' | 'register';
};

export function AuthTabs({ activeTab }: AuthTabsProps) {
  return (
    <div className='flex rounded-2xl bg-muted p-2 space-y-2'>
      <Link
        href='/login'
        className={cn(
          'flex-1 rounded-xl px-4 py-2 text-center text-md font-bold font-sans leading-md tracking-tight transition-colors space-y-2',
          activeTab === 'login'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground'
        )}
      >
        Sign In
      </Link>

      <Link
        href='/register'
        className={cn(
          'flex-1 rounded-xl px-4 py-2 text-center text-md font-bold font-sans leading-md tracking-tight transition-colors space-y-2',
          activeTab === 'register'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground'
        )}
      >
        Sign Up
      </Link>
    </div>
  );
}
