import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { SchedulesModule } from './schedules/schedules.module';
import { BarberShopsModule } from './barbers_shops/barbers_shops.module';
import { EmployeesModule } from './employees/employees.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    BarberShopsModule,
    ClientsModule,
    EmployeesModule,
    SchedulesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
