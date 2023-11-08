import { Injectable } from '@nestjs/common';
import { Coffee } from '../database/entities/coffee.entity';
import { CoffeeService } from 'src/coffee/coffee.service';

@Injectable()
export class SeederService {
  constructor(private readonly coffeeService: CoffeeService) {}

  async createMany(coffees: Coffee[]): Promise<Coffee[]> {
    console.log(`Inserting ${coffees.length} coffee items...`);
    const saved = await this.coffeeService.createMany(coffees);
    console.log('Coffee items successfully inserted.');
    return saved;
  }
}
