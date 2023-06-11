import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
import { CreateEmployeeInput, Employee } from './dtos';
import { BarberShop } from 'src/barbers_shops/dtos';

@Resolver(() => Employee)
export class EmployeesResolver {
  @Query(() => [Employee])
  async employees() {
    return [];
  }

  @Mutation(() => Employee)
  async createEmployee(@Args('data') data: CreateEmployeeInput) {
    const { name, role } = data;

    const employee = { name, role };

    return employee;
  }

  @ResolveField(() => BarberShop)
  async barberShop(@Root() employee: Employee) {
    console.log(employee);

    return {
      id: 'da18c122-3f19-4099-aedc-03a2097c7e82',
      name: 'Rockstar',
      logo: 'logo.png',
    };
  }
}
