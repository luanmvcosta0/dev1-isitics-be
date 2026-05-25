export class CouponService {
  normalizedCode(code: string): string {
    return code
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase();
  }

  RESERVED_ENUM = ['admin', 'auth', 'null', 'undefinedx '];
}
