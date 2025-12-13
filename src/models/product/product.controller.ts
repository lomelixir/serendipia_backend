import { Controller, Get, Post, Delete, Put, Patch } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): string {
    return this.productService.findAll();
  }

  @Get()
  findOne(): string {
    return this.productService.findOne();
  }

  @Post()
  create(): string {
    return this.productService.create();
  }

  @Put()
  update(): string {
    return this.productService.update();
  }

  @Delete()
  remove(): string {
    return this.productService.remove();
  }
}
