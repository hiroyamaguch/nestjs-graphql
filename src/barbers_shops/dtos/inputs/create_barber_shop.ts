import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBarberShopInput {
  @Field()
  name: string;

  @Field()
  logo: string;
}
