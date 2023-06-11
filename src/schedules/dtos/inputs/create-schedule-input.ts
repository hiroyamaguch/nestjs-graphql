import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateScheduleInput {
  @Field()
  date: Date;
}
