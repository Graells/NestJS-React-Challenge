import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createDataSourceOptions } from 'src/config/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(createDataSourceOptions())],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
