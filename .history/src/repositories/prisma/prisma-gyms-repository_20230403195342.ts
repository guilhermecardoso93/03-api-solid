import { Gym, Prisma } from '@prisma/client'
import { FindManyNearbyParams, GymsRepository } from '../gyms-repository'

export class PrismaGymsRepository implements GymsRepository {
  findById(id: string) {
    throw new Error('Method not implemented.')
  }

  searchMany(query: string, page: number) {
    throw new Error('Method not implemented.')
  }

  findManyNearby(params: FindManyNearbyParams) {
    throw new Error('Method not implemented.')
  }

  create(data: Prisma.GymCreateInput) {
    throw new Error('Method not implemented.')
  }
}
