import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { compare } from 'bcryptjs'
import { describe, expect, it } from 'vitest'
import { RegisterUseCase } from './register'

describe('Register Use Case', () => {
  it('should hash user password upon registration', async () => {
    const prismaUserRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase({
      findByEmail(email){
        return null
      }
      async create(data) {
        return {
          id: 'user-1',
          name: data.email,
          email: data.email,
          password_hash: data.password_hash,
          created_at: new Date(),
        }
      }
    })

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'john@example.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })
})
