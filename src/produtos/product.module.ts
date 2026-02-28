import { Module } from '@nestjs/common';
import { Produto } from './entites/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
