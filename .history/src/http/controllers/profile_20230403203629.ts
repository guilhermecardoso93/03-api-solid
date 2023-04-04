import { FastifyReply, FastifyRequest } from 'fastify'
import { register } from './register'
import { authenticate } from './authenticate'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  app.get('/me', profile)
}
