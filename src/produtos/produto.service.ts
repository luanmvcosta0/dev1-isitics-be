import { Get, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Produto } from "./entites/produto.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProdutoDto } from "./dto/create-produto.dto";

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  async create(dto: CreateProdutoDto): Promise<Produto> {
    const protudo = this.produtoRepository.create(dto);
    return this.produtoRepository.save(protudo);
  }

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find()
  }

  async findOne(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: {id_produto: id},
    })

    if (!produto) {
      throw new NotFoundException("Produto não encontrado")
    }

    return produto;
  }

}
