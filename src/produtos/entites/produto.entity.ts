import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produtos {
  @ApiProperty({ description: 'Id do produto', example: 1 })
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_produto' })
  id_produto: number;

  @ApiProperty({ description: 'Nome do Produto', example: 'Mouse' })
  @Column({ name: 'nome', length: 60, nullable: false })
  nome: string;

  @ApiProperty({
    description: 'Descrição do produto',
    example: 'O Mouse Ergonômico é a escolha ideal para quem busca conforto',
  })
  @Column({ name: 'descricao', length: 150, nullable: false })
  descricao: string;

  @ApiProperty({ description: 'Estoque atual do produto', example: 7 })
  @Column({ type: 'integer', name: 'estoque_atual', nullable: false })
  estoque_atual: number;

  @ApiProperty({ description: 'Preço original do produto', example: 350 })
  @Column({ type: 'float', name: 'preco_original', nullable: false })
  preco_original: number;

  @ApiProperty({ description: 'Preço com desconto do produto', example: 300 })
  @Column({ type: 'float', name: 'preco_com_desconto', nullable: false })
  preco_com_desconto: number;
}
