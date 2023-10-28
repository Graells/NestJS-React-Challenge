import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Docker: mvst-coffee-challenge-database
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'mvst-coffee-challenge-db',
      synchronize: true,
      logging: false,
      entities: ['dist/database/entities/*.entity.js'], //important
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
