import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Client {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
