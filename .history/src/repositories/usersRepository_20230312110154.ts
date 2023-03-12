import { Prisma, User } from '@prisma/client'

export interface usersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
}
