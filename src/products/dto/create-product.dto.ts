import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Matches,
  Max,
  Min,
} from 'class-validator';

export function parsePrice(value: any): number {
  if (typeof value === 'number') return value;

  if (typeof value === 'string') {
    const normalized = value.replace(/\./g, '').replace(',', '.');

    return parseFloat(normalized);
  }

  return value;
}

export class CreateProductDto {
  @ApiProperty({ description: 'Nome do produto', example: 'Mouse' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 100, {
    message:
      'O nome do produto deve ter no mínimo 3 caracteres e no maximo 100',
  })
  @Matches(/^[a-zA-Z0-9\s\-_,.]+$/, {
    message: 'O nome do produto contém caracteres invalidos',
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
  @Min(0, { message: 'O stock deve ser no mínimo 0 0 ' })
  @Max(999999, { message: 'O stock deve ser no máximo 0 999999 ' })
  stock: number;

  @ApiProperty({ description: 'Preço do produto', example: 350 })
  @IsNotEmpty()
  @Transform(({ value }) => parsePrice(value))
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.1, { message: 'O produto deve valer no mínimo 0,01 reais ' })
  @Max(10000000, {
    message: 'O produto deve valer no maximo 1.000.000,00 reais',
  })
  price: number;
}
