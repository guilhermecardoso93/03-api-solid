import { GymsRepository } from '@/repositories/gyms-repository'
import { Gym } from '@prisma/client'

interface FetchNearByUseCaseRequest {
  userLatitude: number
  userLongitude: number
}

interface FetchNearByUseCaseResponse {
  gyms: Gym[]
}

export class FetchNearByUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: FetchNearByUseCaseRequest): Promise<FetchNearByUseCaseResponse> {
    const gyms = await this.gymsRepository.searchMany(query, page)

    return {
      gyms,
    }
  }
}
