import { Controller, Get, Post } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async createProduct(dto: CreateProdutoDto) {
    return this.produtoService.createProduct(dto);
  }

  @Get()
  getAllProduct() {
    return 'teste';
  }
}
