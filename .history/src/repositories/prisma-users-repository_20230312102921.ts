import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export class PrismaUserRepository {
  async create(data: Prisma.UserCreateInput) {
    await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
      },
    })
  }
}
