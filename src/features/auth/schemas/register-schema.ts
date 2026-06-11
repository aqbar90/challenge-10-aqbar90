import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters'),

    email: z.string().email('Invalid email address'),

    phone: z.string().min(10, 'Phone number is too short'),

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain uppercase letter')
      .regex(/[a-z]/, 'Password must contain lowercase letter')
      .regex(/[0-9]/, 'Password must contain number')
      .regex(/[^A-Za-z0-9]/, 'Password must contain special character'),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
