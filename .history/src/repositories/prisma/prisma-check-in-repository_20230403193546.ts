import { CheckIn, Prisma } from "@prisma/client";
import { CheckInsRepository } from "../check-ins-repository";

export class PrismaCheckInsRepository implements CheckInsRepository
  findById(id: string): Promise<CheckIn | null> {
    throw new Error("Method not implemented.");
  }
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn> {
    throw new Error("Method not implemented.");
  }
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]> {
    throw new Error("Method not implemented.");
  }
  countByUserId(userId: string): Promise<number> {
    throw new Error("Method not implemented.");
  }
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null> {
    throw new Error("Method not implemented.");
  }
  save(checkIn: CheckIn): Promise<CheckIn> {
    throw new Error("Method not implemented.");
  }