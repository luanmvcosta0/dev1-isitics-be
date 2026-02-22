import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async createProduct(@Body() dto: CreateProdutoDto) {
    return this.produtoService.createProduct(dto);
  }

  @Get()
  async findAllProducts() {
    return this.produtoService.findAll();
  }

  @Get()
  async findOneProduct(id: number) {
    return this.produtoService.findOne(id);
  }

  @Patch()
  async updateProduct(id: number, dto: UpdateProdutoDto) {
    return this.produtoService.update(id, dto);
  }
}
