import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Nome do produto', example: 'Mouse' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 100, {
    message:
      'O nome do produto deve ter no mínimo 3 caracteres e no maximo 100',
  })
  name: string;

  @ApiProperty({
    description: 'Descrição do produto',
    example: 'O Mouse Ergonômico é a escolha ideal para quem busca conforto',
  })
  @IsNotEmpty()
  @IsString()
  @Length(0, 170, { message: 'A descrição deve ter no máximo 170 caracteres' })
  description: string;

  @ApiProperty({ description: 'Estoque do produto', example: 7 })
  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @ApiProperty({ description: 'Preço do produto', example: 350 })
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
