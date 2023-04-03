import { GetUserProfileUseCase } from '../get-user-profile'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-in-repository'

export function makeGetUserMetricsUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new GetUserProfileUseCase(checkInsRepository)

  return useCase
}
