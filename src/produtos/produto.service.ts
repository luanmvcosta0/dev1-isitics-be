import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Produto } from './entites/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  async createProduct(dto: CreateProdutoDto): Promise<Produto> {
    const produto = this.produtoRepository.create(dto);
    return this.produtoRepository.save(produto);
  }

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async findOne(id: string): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id: id },
    });

    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }

    return produto;
  }

  async update(id: string, dto: UpdateProdutoDto): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id: id },
    });

    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }

    Object.assign(produto, dto);

    return await this.produtoRepository.save(produto);
  }
}
