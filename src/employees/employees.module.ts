import { Module } from '@nestjs/common';
import { EmployeesResolver } from './employees.resolver';

@Module({
  providers: [EmployeesResolver],
})
export class EmployeesModule {}
