import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Get(':id')
  async findOneProduct(@Param('id') id: string) {
    return this.produtoService.findOne(id);
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() dto: UpdateProdutoDto) {
    return this.produtoService.update(id, dto);
  }
}
