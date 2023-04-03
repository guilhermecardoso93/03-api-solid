import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-in-repository'
import { CheckInUseCase } from '../check-in'

export function makeCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new CheckInUseCase(checkInsRepository)

  return useCase
}
