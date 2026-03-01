import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @ApiProperty({ description: 'Id do produto', example: 1 })
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @ApiProperty({ description: 'Nome do Produto', example: 'Mouse' })
  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @ApiProperty({
    description: 'Descrição do produto',
    example: 'O Mouse Ergonômico é a escolha ideal para quem busca conforto',
  })
  @Column({ name: 'description', length: 150, nullable: false })
  description: string;

  @ApiProperty({ description: 'Estoque do produto', example: 7 })
  @Column({ type: 'integer', name: 'stock', nullable: false })
  stock: number;

  @ApiProperty({ description: 'Preço do produto', example: 350 })
  @Column({
    type: 'decimal',
    name: 'price',
    nullable: false,
    precision: 6,
    scale: 2,
  })
  price: number;

  @ApiProperty({ description: 'Data da criação', example: '25/02/2026' })
  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @ApiProperty({ description: 'Data da edição', example: '25/02/2026' })
  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updated_at: Date;

  @ApiProperty({ description: 'Data da remoção', example: '25/02/2026' })
  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deleted_at: Date;
}
