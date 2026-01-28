import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produtos {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_produto' })
  id_produto: number;

  @Column({ name: 'nome', length: 60, nullable: false })
  nome: string;

  @Column({ name: 'descricao', length: 150, nullable: false })
  descricao: string;

  @Column({ type: 'integer', name: 'estoque_atual', nullable: false })
  estoque_atual: number;

  @Column({ type: 'float', name: 'preco_original', nullable: false })
  preco_original: number;

  @Column({ type: 'float', name: 'preco_com_desconto', nullable: false })
  preco_com_desconto: number;
}
