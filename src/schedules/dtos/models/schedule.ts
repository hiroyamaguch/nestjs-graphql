import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Client } from 'src/clients/dtos';
import { Employee } from 'src/employees/dtos';

@ObjectType()
export class Schedule {
  @Field((type) => Int)
  id: number;

  @Field()
  date: Date;

  @Field()
  client: Client;

  @Field()
  employee: Employee;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
