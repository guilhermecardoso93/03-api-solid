import { CheckIn, Prisma } from "@prisma/client";
import { CheckInsRepository } from "../check-ins-repository";
import { prisma } from "@/lib/prisma";

export class PrismaCheckInsRepository implements CheckInsRepository
  async findById(id: string) {
    const checkIn = await prisma.checkIn.findUnique({ 
      where: {
        id,
      }
    })

    return checkIn
  }

  create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = await prisma.checkIn.create({
      data
    })

    return checkIn
  }
  findManyByUserId(userId: string, page: number)]> {
    throw new Error("Method not implemented.");
  }
  countByUserId(userId: string){
    const count = await prisma.checkIn.count({
      where: { userId: userId}
    })

    return count
  }

  findByUserIdOnDate(userId: string, date: Date) {
    throw new Error("Method not implemented.");
  }

  async save(data: CheckIn) {
    const checkIn = await prisma.checkIn.update({
      where: {
        id: data.id
      }
      data
    })
  }