import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Product } from './entites/produto.entity';
import {
  paginate,
  PaginateConfig,
  Paginated,
  PaginateQuery,
} from 'nestjs-paginate';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  public static readonly paginateConfig: PaginateConfig<Product> = {
    sortableColumns: ['id', 'nome', 'preco_original', 'preco_com_desconto'],
    searchableColumns: ['nome', 'descricao'],
    defaultSortBy: [['data_criacao', 'DESC']],
    defaultLimit: 10,
    maxLimit: 40,
    nullSort: 'last',
  };

  async createProduct(dto: CreateProdutoDto): Promise<Product> {
    const produto = this.productRepository.create(dto);
    return this.productRepository.save(produto);
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Product>> {
    return paginate(
      query,
      this.productRepository,
      ProductService.paginateConfig,
    );
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id: id },
    });

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    return product;
  }

  async update(id: string, dto: UpdateProdutoDto): Promise<Product> {
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
