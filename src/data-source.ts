import { DataSource } from 'typeorm';
import { DATABASE_NAME } from '@env';
import * as entities from './entities';

export const database = new DataSource({
  type: 'react-native',
  location: 'default',
  database: DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: Object.values(entities),
  subscribers: [],
  migrations: [],
});

database.initialize();
