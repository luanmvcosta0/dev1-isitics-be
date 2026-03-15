export class CouponEntity {
  code: string;
  type: string;
  value: number;
  oneShot: boolean;
  valid_from: Date;
}
