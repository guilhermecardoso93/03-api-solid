import { FastifyReply, FastifyRequest } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  console.log(request.headers)

  return reply.status(200).send()
}
