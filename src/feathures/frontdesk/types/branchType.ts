
import z from "zod";

export const branchSchema  = z.object({
    // branchName: z.string().min(1, "Branch name is required"),
    branchName: z.string().nonempty({error:'cannot be empty'}),
    branchHead: z.string().nonempty({error:'cannot be empty'}),
    contactNumber: z.string().nonempty({error:'cannot be empty'}),
    email: z.string().nonempty({error:'cannot be empty'}),
    address: z.string().nonempty({error:'cannot be empty'}),
    province: z.string().nonempty({error:'cannot be empty'}),
    city: z.string().nonempty({error:'cannot be empty'}),
    zipCode: z.string().nonempty({error:'cannot be empty'}),
    status: z.string().nonempty({error:'cannot be empty'}),
    // organizationId: z.string().nonempty({error:'cannot be empty'}),
})

export type BranchProp = z.infer<typeof branchSchema>