import { Controller, Get, Post, Delete, Put, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtoProduct/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get()
  findOne(): string {
    return this.productService.findOne();
  }

  @Post()
  create(@Body() data): Promise<any> {
    return this.productService.create(data);
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
