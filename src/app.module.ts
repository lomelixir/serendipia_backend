import { Module } from '@nestjs/common';
import { ProductModule } from './models/product/product.module';

@Module({
  imports: [ProductModule],
})
export class AppModule {}
