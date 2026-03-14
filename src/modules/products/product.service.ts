import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entites/product.entity';
import {
  paginate,
  PaginateConfig,
  Paginated,
  PaginateQuery,
} from 'nestjs-paginate';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  private normalizeName(name: string): string {
    return name.trim().replace(/\s+/g, ' ');
  }

  public static readonly paginateConfig: PaginateConfig<Product> = {
    sortableColumns: ['id', 'name', 'price'],
    searchableColumns: ['name', 'description'],
    defaultSortBy: [['created_at', 'DESC']],
    defaultLimit: 10,
    maxLimit: 20,
    nullSort: 'last',
  };

  async createProduct(dto: CreateProductDto): Promise<Product> {
    const normalizedName = this.normalizeName(dto.name);

    const existingProduct = await this.productRepository.findOne({
      where: { name: normalizedName },
      withDeleted: false,
    });

    if (existingProduct) {
      throw new ConflictException('Já existe um produto com este nome');
    }

    const product = this.productRepository.create({
      ...dto,
      name: normalizedName,
    });

    return this.productRepository.save(product);
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Product>> {
    return paginate(
      query,
      this.productRepository,
      ProductService.paginateConfig,
    );
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id: id },
    });

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    return product;
  }

  async update(id: number, dto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);

    if (dto.name) {
      const normalizedName = this.normalizeName(dto.name);

      const existingProduct = await this.productRepository.findOne({
        where: { name: normalizedName },
      });

      if (existingProduct && existingProduct.id !== id) {
        throw new ConflictException('Já existe um produto com esse nome');
      }

      product.name = normalizedName;
    }

    Object.assign(product, dto);

    return this.productRepository.save(product);
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.productRepository.softDelete(id);
  }
}
