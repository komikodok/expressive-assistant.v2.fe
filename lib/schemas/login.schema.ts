import { z, object } from "zod"


export const loginSchema = object({
    email: z.email(),
    password: z.string()
        .min(8, "Password must be more than 8 character")
        .max(32, "Password must be less than 32 character")
})