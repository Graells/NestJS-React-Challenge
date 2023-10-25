import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { SeederService } from './seeder.service';
import { coffee } from './data/sampleData';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seeder = app.get(SeederService);

  try {
    console.log('Populating database...');
    await seeder.createMany(coffee);
    console.log('Database successfully populated.');
  } catch (error) {
    console.error('Error populating data: ', error);
  } finally {
    await app.close();
  }
}

bootstrap();
