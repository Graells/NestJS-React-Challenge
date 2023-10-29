import { Module } from '@nestjs/common';
import { CoffeeModule } from './coffee/coffee.module';
import { DatabaseModule } from './database/database.module';
import { SeederModule } from './seeder/seeder.module';
// import { ConfigModule } from '@nestjs/config';
// import configuration from './config/configuration';

@Module({
  imports: [
    CoffeeModule,
    DatabaseModule,
    SeederModule,
    //   ConfigModule.forRoot({
    //     load: [configuration],
    //   }),
  ],
  controllers: [],
})
export class AppModule {}
