import { InMemoryGymsRepository } from '@/repositories/in-memories/in-memories-gyms-repositories'
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
      latitude: -22.6097182,
      longitude: -42.0002169,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
