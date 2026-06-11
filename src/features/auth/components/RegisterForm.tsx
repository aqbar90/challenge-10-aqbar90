'use client';

import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { AuthTabs } from '@/features/auth/components/shared/AuthTabs';
import { PasswordRequirements } from './shared/PasswordRequirements';
import {
  registerSchema,
  type RegisterSchema,
} from '../schemas/register-schema';

import { useRegister } from '@/features/auth/hooks/useRegister';

import { useRouter } from 'next/navigation';

import { useAuthStore } from '@/stores/auth-store';

export function RegisterForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const passwordValue = useWatch({
    control,
    name: 'password',
  });

  const onSubmit = async (values: RegisterSchema) => {
    const response = await registerMutation.mutateAsync({
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
    });

    const { token, user } = response.data;

    setAuth(token, user);

    router.push('/');
  };

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const registerMutation = useRegister();

  const setAuth = useAuthStore((state) => state.setAuth);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
      <AuthTabs activeTab='register' />

      <div className='flex flex-col gap-5'>
        <Input type='text' placeholder='Name' {...register('name')} />

        {errors.name && (
          <p className='text-sm font-semibold text-destructive'>
            {errors.name.message}
          </p>
        )}

        <Input type='email' placeholder='Email' {...register('email')} />

        {errors.email && (
          <p className='text-sm font-semibold text-destructive'>
            {errors.email.message}
          </p>
        )}

        <Input type='tel' placeholder='Number Phone' {...register('phone')} />

        {errors.phone && (
          <p className='text-sm font-semibold text-destructive'>
            {errors.phone.message}
          </p>
        )}

        <div className='relative'>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-sm font-semibold text-destructive'>
              {errors.password.message}
            </p>
          )}
          {passwordValue && <PasswordRequirements password={passwordValue} />}

          <button
            type='button'
            onClick={() => setShowPassword((prev) => !prev)}
            className='absolute right-3 top-1/2 -translate-y-1/2'
          >
            {showPassword ? (
              <EyeOff className='size-4' />
            ) : (
              <Eye className='size-4' />
            )}
          </button>
        </div>

        <div className='relative'>
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder='Confirm Password'
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className='text-sm font-semibold text-destructive'>
              {errors.confirmPassword.message}
            </p>
          )}

          <button
            type='button'
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className='absolute right-3 top-1/2 -translate-y-1/2'
          >
            {showConfirmPassword ? (
              <EyeOff className='size-4' />
            ) : (
              <Eye className='size-4' />
            )}
          </button>
        </div>
      </div>

      {registerMutation.isError && (
        <p
          className='
      text-sm
      font-semibold
      text-destructive
    '
        >
          Registration failed.
        </p>
      )}

      <Button
        type='submit'
        className='w-full'
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending ? 'Registering...' : 'Register'}
      </Button>
    </form>
  );
}
