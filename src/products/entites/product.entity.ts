import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @ApiProperty({ description: 'Id do produto', example: 1 })
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_produto' })
  id: string;

  @ApiProperty({ description: 'Nome do Produto', example: 'Mouse' })
  @Column({ name: 'nome', length: 60, nullable: false })
  name: string;

  @ApiProperty({
    description: 'Descrição do produto',
    example: 'O Mouse Ergonômico é a escolha ideal para quem busca conforto',
  })
  @Column({ name: 'descricao', length: 150, nullable: false })
  description: string;

  @ApiProperty({ description: 'Estoque atual do produto', example: 7 })
  @Column({ type: 'integer', name: 'estoque_atual', nullable: false })
  stock: number;

  @ApiProperty({ description: 'Preço original do produto', example: 350 })
  @Column({ type: 'float', name: 'preco_original', nullable: false })
  price: number;

  @ApiProperty({ description: 'Data da criação', example: '25/02/2026' })
  @CreateDateColumn({ name: 'data_criacao' })
  created_at: Date;

  @ApiProperty({ description: 'Data da edição', example: '25/02/2026' })
  @UpdateDateColumn({ name: 'data_edicao', nullable: true })
  update_at: Date;

  @ApiProperty({ description: 'Data da remoção', example: '25/02/2026' })
  @DeleteDateColumn({ name: 'data_remocao', nullable: true })
  remove_at: Date;
}
