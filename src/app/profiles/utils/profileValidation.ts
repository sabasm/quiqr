import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  bio: z.string().max(500, 'Bio must not exceed 500 characters'),
  avatarUrl: z.string().url('Invalid avatar URL')
});

export const validateProfile = (data: unknown) => profileSchema.parse(data);


