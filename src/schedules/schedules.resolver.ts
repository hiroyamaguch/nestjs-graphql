import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
import { Client } from 'src/clients/dtos';
import { CreateScheduleInput, Schedule } from './dtos';
import { Employee } from 'src/employees/dtos';

@Resolver(() => Schedule)
export class SchedulesResolver {
  @Query(() => [Schedule])
  async schedules() {
    return [];
  }

  @Mutation(() => Schedule)
  async createSchedule(@Args('data') data: CreateScheduleInput) {
    const { date } = data;

    const schedule = { date };

    return schedule;
  }

  @ResolveField(() => Client)
  async client(@Root() schedule: Schedule) {
    console.log(schedule);

    return { name: 'pedro', phone: '389313' };
  }

  @ResolveField(() => Employee)
  async employee(@Root() schedule: Schedule) {
    console.log(schedule);

    return { name: 'pedro', role: 'Barbeiro' };
  }
}
