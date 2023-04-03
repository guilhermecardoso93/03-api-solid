import { Gym, Prisma } from '@prisma/client'
import { FindManyNearbyParams, GymsRepository } from '../gyms-repository'

export class PrismaGymsRepository implements GymsRepository {
  findById(id: string): Promise<Gym | null> {
    throw new Error('Method not implemented.')
  }

  searchMany(query: string, page: number): Promise<Gym[]> {
    throw new Error('Method not implemented.')
  }

  findManyNearby(params: FindManyNearbyParams): Promise<Gym[]> {
    throw new Error('Method not implemented.')
  }

  create(data: Prisma.GymCreateInput): Promise<Gym> {
    throw new Error('Method not implemented.')
  }
}
