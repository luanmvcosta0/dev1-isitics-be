import { Module } from '@nestjs/common';
import { Produto } from './entites/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
