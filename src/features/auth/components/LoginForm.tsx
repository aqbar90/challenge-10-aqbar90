'use client';

import { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

import { useLogin } from '../hooks/useLogin';

import { loginSchema, type LoginSchema } from '../schemas/login-schema';

import { AuthTabs } from './AuthTabs';

export function LoginForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const loginMutation = useLogin();

  const onSubmit = async (values: LoginSchema) => {
    try {
      const response = await loginMutation.mutateAsync({
        email: values.email,
        password: values.password,
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
      <AuthTabs activeTab='login' />

      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <Input type='email' placeholder='Email' {...register('email')} />

          {errors.email && (
            <p className='text-sm font-semibold font-sans leading-sm tracking-tight text-destructive'>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <div className='relative'>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              {...register('password')}
            />

            <button
              type='button'
              onClick={() => setShowPassword((prev) => !prev)}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground'
            >
              {showPassword ? (
                <EyeOff className='size-4' />
              ) : (
                <Eye className='size-4' />
              )}
            </button>
          </div>

          {errors.password && (
            <p className='text-sm font-semibold font-sans leading-sm tracking-tight text-destructive'>
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <div className='flex items-center gap-md'>
        <Controller
          control={control}
          name='rememberMe'
          render={({ field }) => (
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          )}
        />

        <label
          htmlFor='remember-me'
          className='text-md leading-md font-medium tracking-tight text-foreground'
        >
          Remember Me
        </label>
      </div>

      {loginMutation.isError && (
        <p className='text-sm font-semibold font-sans leading-sm tracking-tight text-destructive'>
          Login failed. Please check your credentials.
        </p>
      )}
      <Button
        type='submit'
        className='w-full'
        disabled={loginMutation.isPending}
      >
        Login
        {loginMutation.isPending ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
}
