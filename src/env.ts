import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  CI: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
