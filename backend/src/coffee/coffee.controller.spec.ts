import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import { mockCoffees } from '../../test/mocks/coffee.mocks';
import { Coffee } from '../database/entities/coffee.entity';

type MockCoffeeService = {
  [P in keyof CoffeeService]: jest.Mock;
};

describe('CoffeeController', () => {
  let controller: CoffeeController;
  let service: MockCoffeeService;

  beforeEach(async () => {
    const mockCoffeeService = {
      getAll: jest.fn(),
      getOne: jest.fn(),
      deleteOne: jest.fn(),
      create: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeController],
      providers: [
        {
          provide: CoffeeService,
          useValue: mockCoffeeService,
        },
      ],
    }).compile();

    controller = module.get(CoffeeController);
    service = module.get(CoffeeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array of coffees', async () => {
      service.getAll.mockResolvedValue(mockCoffees);
      const result = await controller.getAll();
      expect(result).toEqual(mockCoffees);
      expect(service.getAll).toHaveBeenCalled();
    });
  });

  describe('getOne', () => {
    it('should get a single coffee', async () => {
      const coffeeId = mockCoffees[0].id;
      service.getOne.mockResolvedValue(mockCoffees[0]);
      const result = await controller.getOne(coffeeId);
      expect(result).toEqual(mockCoffees[0]);
      expect(service.getOne).toHaveBeenCalledWith(coffeeId);
    });
  });

  describe('deleteOne', () => {
    it('should delete a coffee', async () => {
      const coffeeId = mockCoffees[0].id;
      service.deleteOne.mockResolvedValue(undefined);
      await controller.deleteOne(coffeeId);
      expect(service.deleteOne).toHaveBeenCalledWith(coffeeId);
    });
  });

  describe('create', () => {
    it('should create a coffee', async () => {
      const newCoffee = { ...mockCoffees[0], id: undefined };
      service.create.mockResolvedValue(mockCoffees[0]);
      const result = await controller.create(newCoffee as Coffee);
      expect(result).toEqual(mockCoffees[0]);
      expect(service.create).toHaveBeenCalledWith(newCoffee);
    });
  });
});
