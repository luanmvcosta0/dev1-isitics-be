import { Module } from '@nestjs/common';
import { Produto } from './entites/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoService } from './produto.service';
import { ProductController } from './product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  controllers: [ProductController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
