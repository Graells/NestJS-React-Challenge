import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { Coffee } from '../database/entities/coffee.entity';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  getAll(): Promise<Coffee[]> {
    return this.coffeeService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Coffee> {
    return this.coffeeService.getOne(id);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<void> {
    await this.coffeeService.deleteOne(id);
  }

  @Post()
  create(@Body() coffee: Coffee): Promise<Coffee> {
    return this.coffeeService.create(coffee);
  }
}
