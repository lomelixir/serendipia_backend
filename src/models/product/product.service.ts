import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Products } from '@prisma/client';
import { CreateProductDto } from './dtoProduct/create-product.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateProductDto } from './dtoProduct/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    try {
      return await this.prisma.products.findMany();
    } catch (error) {
      console.error(`Error retrieving products $${error}`);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.products.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(`Error retrieving entity ${error}`);
      throw error;
    }
  }

  async create(createProductDto: CreateProductDto): Promise<Products> {
    try {
      return await this.prisma.products.create({
        data: {
          id: uuidv4(),
          ...createProductDto,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      console.error(`Error creating product ${error}`);
      throw error;
    }
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Products | undefined> {
    try {
      return await this.prisma.products.update({
        where: { id },
        data: {
          ...updateProductDto,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      console.error(`Error updating entity ${error}`);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.products.delete({ where: { id } });
    } catch (error) {
      console.error(`Error deleting entity ${error}`);
      throw error;
    }
  }
}
