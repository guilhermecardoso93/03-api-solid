import { Prisma } from '@prisma/client'
import { FindManyNearbyParams, GymsRepository } from '../gyms-repository'
import { prisma } from '@/lib/prisma'

export class PrismaGymsRepository implements GymsRepository {
  async findById(id: string) {
    const gym = await prisma.gym.findUnique({
      where: {
        id,
      },
    })
  }

  async searchMany(query: string, page: number) {
    throw new Error('Method not implemented.')
  }

  async findManyNearby(params: FindManyNearbyParams) {
    throw new Error('Method not implemented.')
  }

  async create(data: Prisma.GymCreateInput) {
    throw new Error('Method not implemented.')
  }
}
