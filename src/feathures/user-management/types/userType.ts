import { z } from 'zod';

export const userSchema = z.object({
  firstName: z.string().nonempty({ error: 'cannot be empty' }),
  lastName: z.string().nonempty({ error: 'cannot be empty' }),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
  dob: z.string(),
  maritalStatus: z.enum(['MARRIED', 'SINGLE']),

  officialEmail: z.string().email(),
  personalEmail: z.string().email().optional(),
  phone: z.string().regex(/^9[78]\d{8}$/, 'Invalid Nepal phone number'),
  emergencyContactPhone: z
    .string()
    .regex(/^9[78]\d{8}$/, 'Invalid Nepal phone number')
    .optional(),
  currentAddress: z.string().nonempty({ error: 'cannot be empty' }),
  permanentAddress: z.string().nonempty({ error: 'cannot be empty' }),

  department: z.string().nonempty({ error: 'cannot be empty' }),
  team: z.string().nonempty({ error: 'cannot be empty' }),
  designation: z.string().nonempty({ error: 'cannot be empty' }),
  jobTitle: z.string().nonempty({ error: 'cannot be empty' }),
  shift: z.string().nonempty({ error: 'cannot be empty' }),

  username: z.string().nonempty({ error: 'cannot be empty' }),
  role: z.string().optional(),
  permissionGroup: z.string().optional(),
  status: z.enum(['ACTIVE', 'INACTIVE']),
});
