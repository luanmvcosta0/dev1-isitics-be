import { Length, Matches } from 'class-validator';
import { Column } from 'typeorm';

export class CouponEntity {
  @Column({ name: 'code', length: 20, nullable: false, unique: true })
  @Length(4, 20, {
    message: 'O código deve ter entre 4 e 20 caracteres',
  })
  @Matches(/^[a-zA-Z0-9]+$/)
  code: string;

  type: string;
  value: number;
  oneShot: boolean;
  valid_from: Date;
}
