import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from 'src/database/entities/coffee.entity';
import { CoffeeService } from '../coffee/coffee.service';
import { SeederService } from './seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  providers: [CoffeeService, SeederService],
})
export class SeederModule {}
