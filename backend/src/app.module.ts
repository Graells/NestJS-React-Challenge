import { Module } from '@nestjs/common';
import { CoffeeModule } from './coffee/coffee.module';
import { DatabaseModule } from './database/database.module';
import { SeederModule } from './seeder/seeder.module';

@Module({
  imports: [CoffeeModule, DatabaseModule, SeederModule],
  controllers: [],
})
export class AppModule {}
