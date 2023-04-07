import { FastifyRequest, FastifyReply } from 'fastify'

export async function verifyJWT(request: FastifyRequest, repaly: FastifyReply) {
  try {
    await request.jwtVerify()
  } catch (err) {
    return reply.status(401).send({ message: 'Unauthozied' })
  }
}