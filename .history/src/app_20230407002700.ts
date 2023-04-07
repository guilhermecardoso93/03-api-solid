import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { ZodError } from 'zod'
import { env } from './env'
import fastifyJwt from '@fastify/jwt'

import { usersRoutes } from './http/controllers/users/route'
import { gymsRoutes } from './http/controllers/gyms/routes'
import { checkInsRoutes } from './http/controllers/check-ins/routes'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '10m',
  },
})

app.register(usersRoutes)
app.register(gymsRoutes)
app.register(checkInsRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.log(error)
  } else {
    // TODO WET
  }

  return reply.status(500).send({ message: 'Internal server error' })
})
