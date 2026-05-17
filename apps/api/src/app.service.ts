import { Injectable } from '@nestjs/common';
import { formatCurrency } from '@repo/utils';

@Injectable()
export class AppService {
  getHello(): string {
    const mockBalance = 24500.75;
    return `Hello from NestJS Personal Finance API! Active workspace balance: ${formatCurrency(mockBalance)}`;
  }
}
