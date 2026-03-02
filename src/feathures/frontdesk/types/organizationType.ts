import z from "zod";

export const OrganizationProp = z.object({
  institutionName: z.string().nonempty({error:'cannot be empty'}),
  founderName: z.string().nonempty({error:'cannot be empty'}),
  affiliation: z.string().nonempty({error:'cannot be empty'}),
  institutionShortCode: z.string().nonempty({error:'cannot be empty'}),
  panNumber: z.string().nonempty({error:'cannot be empty'}),
  primaryEmail: z.string().nonempty({error:'cannot be empty'}),
  alternateEmail: z.string().nonempty({error:'cannot be empty'}),
  contactNumber: z.string().nonempty({error:'cannot be empty'}),
  officeNo: z.string().nonempty({error:'cannot be empty'}),
  address: z.string().nonempty({error:'cannot be empty'}),
  province: z.string().nonempty({error:'cannot be empty'}),
  city: z.string().nonempty({error:'cannot be empty'}),
  zipCode: z.string().nonempty({error:'cannot be empty'}),
  institutionType: z.string().nonempty({error:'cannot be empty'}),
  packageType: z.string().nonempty({error:'cannot be empty'}),
  logo: z.string().optional(),
  tagline: z.string().optional(),
});

export type OrganizationProp = z.infer<typeof OrganizationProp>;