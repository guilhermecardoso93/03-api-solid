import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { usersRepository } from '../usersRepository'

export class PrismaUsersRepository implements usersRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
