import { Column } from 'typeorm';

export class CouponEntity {
  @Column({ name: 'code', length: 20, nullable: false, unique: true })
  code: string;

  @Column({ name: 'type', unique: true })
  type: string;
  value: number;
  oneShot: boolean;
  valid_from: Date;
}
