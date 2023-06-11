import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BarberShop, CreateBarberShopInput } from './dtos';

@Resolver()
export class BarbersShopsResolver {
  @Query(() => [BarberShop])
  async barbersShops() {
    return [];
  }

  @Mutation(() => BarberShop)
  async createBarberShop(@Args('data') data: CreateBarberShopInput) {
    const { logo, name } = data;

    const barberShop = { logo, name };

    return barberShop;
  }
}
