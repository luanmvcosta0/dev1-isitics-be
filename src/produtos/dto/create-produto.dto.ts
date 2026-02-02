import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateProdutoDto {
  @ApiProperty({ description: 'Nome do produto', example: 'Mouse' })
  @IsNotEmpty()
  @IsString()
  @Length(0, 60, {
    message: 'O nome do produto deve ter no máximo 60 caracteres',
  })
  nome: string;

  @ApiProperty({
    description: 'Descrição do produto',
    example: 'O Mouse Ergonômico é a escolha ideal para quem busca conforto',
  })
  @IsNotEmpty()
  @IsString()
  @Length(0, 170, { message: 'A descriçãp deve ter no máximo 170 caracteres' })
  descricao: string;

  @ApiProperty({ description: 'Estoque atual do produto', example: 7 })
  @IsNotEmpty()
  @IsNumber()
  estoque_atual: number;

  @ApiProperty({ description: 'Preço original do produto', example: 350 })
  @IsNotEmpty()
  @IsNumber()
  preco_original: number;

  @ApiProperty({ description: 'Preço com desconto do produto', example: 300 })
  @IsNotEmpty()
  @IsNumber()
  preco_com_desconto: number;
}
