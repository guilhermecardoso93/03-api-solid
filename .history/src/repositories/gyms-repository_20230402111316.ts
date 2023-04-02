import { Gym } from '@prisma/client'

export interface UsersRepository {
  findById(id: string): Promise<User | null>
}
