import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { AuthTabs } from './AuthTabs';

export function LoginForm() {
  return (
    <div className='gap-5'>
      <AuthTabs activeTab='login' />

      <div className='gap-5'>
        <Input type='email' placeholder='Email' />

        <div className='relative'>
          <Input type='password' placeholder='Password' />

          <button
            type='button'
            className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground'
          >
            <Eye className='size-4' />
          </button>
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <Checkbox id='remember-me' />

        <label
          htmlFor='remember-me'
          className='text-md leading-md font-medium font-sans tracking-tight text-foreground'
        >
          Remember Me
        </label>
      </div>

      <Button type='button' className='w-full'>
        Login
      </Button>
    </div>
  );
}
