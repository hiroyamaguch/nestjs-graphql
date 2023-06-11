import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {
  @Field()
  name: string;

  @Field()
  phone: string;
}
