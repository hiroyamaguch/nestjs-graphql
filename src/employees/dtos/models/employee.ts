import { Field, ObjectType } from '@nestjs/graphql';
import { BarberShop } from 'src/barbers_shops/dtos';

@ObjectType()
export class Employee {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  role: string;

  @Field()
  barberShop: BarberShop;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
