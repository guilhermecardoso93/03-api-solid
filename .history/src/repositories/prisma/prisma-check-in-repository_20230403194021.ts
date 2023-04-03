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
  }
  create(data: Prisma.CheckInUncheckedCreateInput) {
    throw new Error("Method not implemented.");
  }
  findManyByUserId(userId: string, page: number)]> {
    throw new Error("Method not implemented.");
  }
  countByUserId(userId: string){
    throw new Error("Method not implemented.");
  }
  findByUserIdOnDate(userId: string, date: Date) {
    throw new Error("Method not implemented.");
  }
  save(checkIn: CheckIn) {
    throw new Error("Method not implemented.");
  }