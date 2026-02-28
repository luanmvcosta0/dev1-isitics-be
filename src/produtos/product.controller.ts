import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import type { PaginateQuery } from 'nestjs-paginate';
import { Paginate } from 'nestjs-paginate';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('produto')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }

  @Get()
  async findAllProducts(@Paginate() query: PaginateQuery) {
    return this.productService.findAll(query);
  }

  @Get(':id')
  async findOneProduct(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.update(id, dto);
  }

  @Delete(':id')
  async removeProduct(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
