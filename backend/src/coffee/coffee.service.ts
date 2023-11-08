import { ConflictException, Injectable } from '@nestjs/common';
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

  async create(coffee: Coffee): Promise<Coffee> {
    const existingCoffee = await this.coffeeRepository.findOne({
      where: { title: coffee.title },
    });

    if (existingCoffee) {
      throw new ConflictException(
        'A coffee with the same name already exists!',
      );
    }
    return this.coffeeRepository.save(coffee);
  }
  createMany(coffees: Coffee[]): Promise<Coffee[]> {
    return this.coffeeRepository.save(coffees);
  }
}
