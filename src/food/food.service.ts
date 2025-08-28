import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}

  async createFood(data: any, file: Express.Multer.File, userId: string) {
    return this.prisma.food.create({
      data: {
        ...data,
        imagePath: file?.path,
        createdBy: userId,
      },
    });
  }
}
