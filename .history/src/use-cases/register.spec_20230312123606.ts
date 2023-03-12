import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { test, expect, describe, it } from 'vitest'
import { RegisterUseCase } from './register'

describe('Register Use Case', () => {
  it('should hash user password upon registration', async () => {
    const prismaUserRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(prismaUserRepository)

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'john@example.com',
      password: '123456',
    })
  })

  console.log(user.password_hash)
})
