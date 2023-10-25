import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from '../database/entities/coffee.entity';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private coffeeRepository: Repository<Coffee>,
  ) {}

  getAll(): Promise<Coffee[]> {
    return this.coffeeRepository.find();
  }

  getOne(id: number): Promise<Coffee> {
    return this.coffeeRepository.findOne({ where: { id: id } });
  }

  async deleteOne(id: number): Promise<void> {
    await this.coffeeRepository.delete(id);
  }

  create(coffee: Coffee): Promise<Coffee> {
    return this.coffeeRepository.save(coffee);
  }
  createMany(coffees: Coffee[]): Promise<Coffee[]> {
    return this.coffeeRepository.save(coffees);
  }
}
