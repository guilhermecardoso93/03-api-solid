import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

export const app = fastify()

app.post('/users', (request, replay) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email,
    password: z.string().min(6),
  })
})
