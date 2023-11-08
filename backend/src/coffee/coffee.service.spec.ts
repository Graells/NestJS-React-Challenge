import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeService } from './coffee.service';
import { Coffee } from '../database/entities/coffee.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { mockCoffees } from '../../test/mocks/coffee.mocks';
import { ConflictException } from '@nestjs/common';

type MockRepository<T = any> = {
  [P in keyof Repository<T>]: jest.Mock;
};

describe('CoffeeService', () => {
  let service: CoffeeService;
  let repository: MockRepository<Repository<Coffee>>;

  beforeEach(async () => {
    const mockRepository = {
      find: jest.fn(),
      findOne: jest.fn(),
      delete: jest.fn(),
      save: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoffeeService,
        {
          provide: getRepositoryToken(Coffee),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get(CoffeeService);
    repository = module.get(getRepositoryToken(Coffee));
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array of coffees', async () => {
      repository.find.mockResolvedValue(mockCoffees);
      const coffees = await service.getAll();
      expect(coffees).toEqual(mockCoffees);
      expect(repository.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('getOne', () => {
    it('should get a single coffee', async () => {
      const coffeeId = mockCoffees[2].id;
      const expectedCoffee = mockCoffees.find((c) => c.id === coffeeId);
      repository.findOne.mockResolvedValue(expectedCoffee);
      const coffee = await service.getOne(coffeeId);
      expect(coffee).toEqual(expectedCoffee);
      expect(repository.findOne).toHaveBeenCalledWith({
        where: { id: coffeeId },
      });
    });
  });

  describe('deleteOne', () => {
    it('should call the delete method on the repository', async () => {
      const coffeeId = mockCoffees[3].id;
      repository.delete.mockResolvedValue({ affected: 1 });
      await service.deleteOne(coffeeId);
      expect(repository.delete).toHaveBeenCalledWith(coffeeId);
    });
  });

  describe('create', () => {
    it('should successfully create a coffee', async () => {
      const newCoffee = {
        title: 'New Coffee',
        description: 'Free in the MSVT office',
        imageUrl: 'https://mvstcups.s3.eu-north-1.amazonaws.com/blackCup.png',
        price: 20.0,
        type: 'robusta',
      };
      repository.findOne.mockResolvedValue(null);
      repository.save.mockResolvedValue(newCoffee);
      const coffee = await service.create(newCoffee as Coffee);
      expect(coffee).toEqual(newCoffee);
      expect(repository.save).toHaveBeenCalledWith(newCoffee);
    });

    it('should throw a conflict exception if coffee exists', async () => {
      const existingCoffee = mockCoffees[0];
      repository.findOne.mockResolvedValue(existingCoffee);
      await expect(service.create(existingCoffee as Coffee)).rejects.toThrow(
        new ConflictException('A coffee with the same name already exists!'),
      );
    });
  });

  describe('createMany', () => {
    it('should successfully create multiple coffees', async () => {
      const newCoffees = [
        {
          title: 'New Coffee 1',
          description: 'Free in the MSVT office',
          imageUrl: 'https://mvstcups.s3.eu-north-1.amazonaws.com/blackCup.png',
          price: 20.0,
          type: 'robusta',
        },
        {
          title: 'New Coffee 2',
          description: 'Free in the MSVT office',
          imageUrl: 'https://mvstcups.s3.eu-north-1.amazonaws.com/blackCup.png',
          price: 20.0,
          type: 'robusta',
        },
      ];
      repository.save.mockResolvedValue(newCoffees);
      const coffees = await service.createMany(newCoffees as Coffee[]);
      expect(coffees).toEqual(newCoffees);
      expect(repository.save).toHaveBeenCalledWith(newCoffees);
    });
  });
});
