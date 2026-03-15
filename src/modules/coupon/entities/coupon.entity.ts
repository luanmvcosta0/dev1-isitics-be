import { Length } from 'class-validator';
import { Column } from 'typeorm';

export class CouponEntity {
  @Column({ name: 'code', nullable: false, unique: true })
  @Length(4, 20, {
    message: 'O campo code deve ter no mínimo 4 caracteres e máximo 20',
  })
  code: string;
  type: string;
  value: number;
  oneShot: boolean;
  valid_from: Date;
}
