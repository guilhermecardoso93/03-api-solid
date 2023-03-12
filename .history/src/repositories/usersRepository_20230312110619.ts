import { Prisma, User } from '@prisma/client'

export interface usersRepository {
  findByRmail(email: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}
