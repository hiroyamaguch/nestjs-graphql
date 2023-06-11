import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Client, CreateClientInput } from './dtos';

@Resolver()
export class ClientsResolver {
  @Query(() => [Client])
  async clients() {
    return [];
  }

  @Mutation(() => Client)
  async createClient(@Args('data') data: CreateClientInput) {
    const { name, phone } = data;

    const client = { name, phone };

    return client;
  }
}
