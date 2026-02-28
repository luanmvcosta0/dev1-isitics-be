import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import type { PaginateQuery } from 'nestjs-paginate';
import { Paginate } from 'nestjs-paginate';

@Controller('produto')
export class ProductController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async createProduct(@Body() dto: CreateProdutoDto) {
    return this.produtoService.createProduct(dto);
  }

  @Get()
  async findAllProducts(@Paginate() query: PaginateQuery) {
    return this.produtoService.findAll(query);
  }

  @Get(':id')
  async findOneProduct(@Param('id') id: string) {
    return this.produtoService.findOne(id);
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() dto: UpdateProdutoDto) {
    return this.produtoService.update(id, dto);
  }

  @Delete(':id')
  async removeProduct(@Param('id') id: string) {
    return this.produtoService.remove(id);
  }
}
