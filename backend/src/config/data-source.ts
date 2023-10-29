import * as dotenv from 'dotenv';
dotenv.config(); //{ path: 'backend/.env' } ?
console.log('Database Password:', process.env.DATABASE_PASSWORD);
import { DataSource, DataSourceOptions } from 'typeorm';

export const createDataSourceOptions = (): DataSourceOptions => {
  const configurations: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true, // true for dev mode
    logging: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/database/migrations/**/*{.js,.ts}'],
    migrationsTableName: 'coffee_migrations',
  };
  if (process.env.IS_PRODUCTION) {
    return {
      ...configurations,
      synchronize: false,
    };
  }

  return configurations;
};
export default new DataSource(createDataSourceOptions());
