import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BarberShop {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  logo: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
