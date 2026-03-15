import { Length, Matches } from 'class-validator';

export class CreateCouponDto {
  @Length(4, 20, {
    message: 'O código deve ter entre 4 e 20 caracteres',
  })
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Apenas caracteres alfanumericos são permitidos',
  })
  code: string;
}
