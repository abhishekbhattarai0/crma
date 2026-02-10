import { z } from 'zod';

export const accessControlSchema = z.object({
  permission: z.array(z.string(), {
    error: 'At least one permission is required',
  }),
  role: z.string().min(1, 'Role Name is required'),
  description: z.string().optional(),
});

export type accessControlFormValues = z.infer<typeof accessControlSchema>;
