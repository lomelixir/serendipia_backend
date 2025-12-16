import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Products, Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  findAll() {
    try {
    } catch (error) {
      console.error(`Error retrieving products $${error}`);
    }
  }

  findOne(): string {
    return 'find one method';
  }

  async create(data: Prisma.ProductsCreateInput): Promise<Products> {
    try {
      return this.prisma.products.create({ data });
    } catch (error) {
      console.error(`Error cretating product ${error}`);
      throw error;
    }
  }

  update(): string {
    return 'update method';
  }

  remove(): string {
    return 'delete method';
  }
}
