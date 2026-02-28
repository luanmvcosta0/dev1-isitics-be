import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Produto } from './entites/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import {
  paginate,
  PaginateConfig,
  Paginated,
  PaginateQuery,
} from 'nestjs-paginate';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Produto)
    private readonly productRepository: Repository<Produto>,
  ) {}

  public static readonly paginateConfig: PaginateConfig<Produto> = {
    sortableColumns: ['id', 'nome', 'preco_original', 'preco_com_desconto'],
    searchableColumns: ['nome', 'descricao'],
    defaultSortBy: [['data_criacao', 'DESC']],
    defaultLimit: 10,
    maxLimit: 40,
    nullSort: 'last',
  };

  async createProduct(dto: CreateProdutoDto): Promise<Produto> {
    const produto = this.productRepository.create(dto);
    return this.productRepository.save(produto);
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Produto>> {
    return paginate(
      query,
      this.productRepository,
      ProductService.paginateConfig,
    );
  }

  async findOne(id: string): Promise<Produto> {
    const product = await this.productRepository.findOne({
      where: { id: id },
    });

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    return product;
  }

  async update(id: string, dto: UpdateProdutoDto): Promise<Produto> {
    const product = await this.productRepository.findOne({
      where: { id: id },
    });

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    Object.assign(product, dto);

    return await this.productRepository.save(product);
  }

  async remove(id: string) {
    await this.findOne(id);

    await this.productRepository.softDelete(id);
  }
}
