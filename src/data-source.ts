import {DataSource} from 'typeorm';
import {DATABASE_NAME} from '@env';
import {User} from './entity/User';

export const AppDataSource = new DataSource({
  type: 'react-native',
  location: 'default',
  database: DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize();
