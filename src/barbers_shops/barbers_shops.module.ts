import { Module } from '@nestjs/common';
import { BarbersShopsResolver } from './barbers_shops.resolver';

@Module({
  providers: [BarbersShopsResolver],
})
export class BarberShopsModule {}
