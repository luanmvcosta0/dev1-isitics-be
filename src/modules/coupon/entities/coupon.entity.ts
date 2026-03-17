import { Column } from 'typeorm';

export class CouponEntity {
  @Column({ name: 'code', length: 20, nullable: false, unique: true })
  code: string;

  @Column({ name: 'type', nullable: false })
  type: string;

  @Column({ name: 'value', nullable: false })
  value: number;

  @Column({ name: 'oneShot', nullable: false })
  oneShot: boolean;
  valid_from: Date;
}
