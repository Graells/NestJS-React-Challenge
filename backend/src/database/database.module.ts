import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSource, { createDataSourceOptions } from 'src/config/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(createDataSourceOptions())],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
dataSource.initialize();
// await dataSource.connect()

// TypeOrmModule.forRoot({
//   type: 'postgres',
//   host: 'localhost', // Docker: mvst-coffee-challenge-database
//   port: 5432,
//   username: 'postgres',
//   password: '1234',
//   database: 'mvst-coffee-challenge-db',
//   synchronize: true,
//   logging: false,
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'], //important: __dirname + '/../**/*.entity{.ts,.js}', 'dist/database/entities/*.entity.js'
// }),
