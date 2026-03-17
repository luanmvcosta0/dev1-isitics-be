import { Column } from 'typeorm';

export class CouponEntity {
  @Column({ name: 'code', length: 20, nullable: false, unique: true })
  code: string;

  type: string;
  value: number;
  oneShot: boolean;
  valid_from: Date;
}
