import { InMemoryGymsRepository } from '@/repositories/in-memories/in-memories-gyms-repositories'
import { Decimal } from '@prisma/client/runtime/library'
import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Register Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'Duth Gym',
      description: null,
      phone: null,
      latitude: new Decimal(-22.6097182),
      longitude: new Decimal(-42.0002169),
    })

    expect(user.id).toEqual(expect.any(String))
  })
})
