import { ApiProperty } from '@nestjs/swagger';

export class ProdutoDto {
  @ApiProperty({ description: 'Nome do produto', example: 'Mouse' })
  nome: string;

  @ApiProperty({
    description: 'Descrição do produto',
    example: 'O Mouse Ergonômico é a escolha ideal para quem busca conforto',
  })
  descricao: string;

  @ApiProperty({ description: 'Estoque atual do produto', example: 7 })
  estoque_atual: number;

  @ApiProperty({ description: 'Preço original do produto', example: 350 })
  preco_original: number;

  @ApiProperty({ description: 'Preço com desconto do produto', example: 300 })
  preco_com_desconto: number;
}
