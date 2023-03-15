import { InMemoryUsersRepository } from '@/repositories/in-memories/in-memories-users-repository'
import { expect, describe, it } from 'vitest'
import { AuthenticateUseCase } from './authenticate'

describe('Authenticate Use Case', () => {
  it('should be able to authenticate', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateUseCase(usersRepository)

    const { user } = await sut.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })
})
