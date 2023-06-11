import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
  @Field()
  name: string;

  @Field()
  role: string;

  @Field()
  barber_shop_id: string;
}
