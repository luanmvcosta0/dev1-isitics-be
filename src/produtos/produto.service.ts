import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Produto } from "./entites/produto.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}
  
}
